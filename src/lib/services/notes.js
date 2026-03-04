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

function makeDeckLayout() {
    return {
        deckRotation: Math.random() * 8 - 4,
        deckOffsetX: Math.random() * 16 - 8,
        deckOffsetY: 0
    };
}

function docToNote(doc) {
    const data = doc.data();
    return {
        id: doc.id,
        createdAt: data.createdAtDisplay || '',
        text: data.text || '',
        textSizeLines: data.textSizeLines || 1,
        stickers: data.stickers || [],
        backgroundUrl: data.backgroundUrl || '',
        ...makeDeckLayout()
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
        backgroundUrl: note.backgroundUrl
    });
    return docRef.id;
}
