import { db } from '$lib/firebase.js';
import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    limit,
    startAfter,
    serverTimestamp
} from 'firebase/firestore';

const NOTES_COLLECTION = 'notes';

function docToNote(doc) {
    const data = doc.data();
    return {
        id: doc.id,
        createdAt: data.createdAtDisplay || '',
        text: data.text || '',
        textSizeLines: data.textSizeLines || 1,
        stickers: data.stickers || [],
        deckRotation: data.deckRotation || 0,
        deckOffsetX: data.deckOffsetX || 0,
        deckOffsetY: data.deckOffsetY || 0,
        backgroundUrl: data.backgroundUrl || ''
    };
}

/**
 * Fetch a page of published notes from Firestore, newest first.
 * @param {number} pageSize
 * @param {import('firebase/firestore').DocumentSnapshot | null} lastDoc
 * @returns {Promise<{ notes: Array, lastDoc: import('firebase/firestore').DocumentSnapshot | null, hasMore: boolean }>}
 */
export async function fetchNotes(pageSize = 8, lastDoc = null) {
    const constraints = [
        collection(db, NOTES_COLLECTION),
        orderBy('createdAt', 'desc'),
        limit(pageSize)
    ];
    if (lastDoc) constraints.push(startAfter(lastDoc));

    const snapshot = await getDocs(query(...constraints));
    const last = snapshot.docs[snapshot.docs.length - 1] || null;
    return {
        notes: snapshot.docs.map(docToNote),
        lastDoc: last,
        hasMore: snapshot.docs.length === pageSize
    };
}

/**
 * Save a published note to Firestore.
 * @param {Object} note
 * @returns {Promise<string>} The Firestore document ID
 */
export async function saveNote(note) {
    const docRef = await addDoc(collection(db, NOTES_COLLECTION), {
        createdAt: serverTimestamp(),
        createdAtDisplay: note.createdAt,
        text: note.text,
        textSizeLines: note.textSizeLines,
        stickers: note.stickers.map((s) => ({
            src: s.src,
            x: s.x,
            y: s.y,
            width: s.width,
            height: s.height,
            rotation: s.rotation
        })),
        deckRotation: note.deckRotation,
        deckOffsetX: note.deckOffsetX,
        deckOffsetY: note.deckOffsetY,
        backgroundUrl: note.backgroundUrl
    });
    return docRef.id;
}
