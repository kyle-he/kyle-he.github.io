document.addEventListener('DOMContentLoaded', () => {
    // Define Game States
    const GAME_STATES = {
        AWAITING_INPUT: 'awaiting_input',
        TURN_SUBMITTED: 'turn_submitted',
    };

    // Initialize game state
    let gameState = {
        player_pos: 1,
        bot_pos: 1,
        player_score: 0,
        bot_score: 0,
        player_move_history: [],
        ngram_counts: {},
        bot_shot_target: null,
        player_shot_target: null,
        turn_result: '',
        player_move: null,
        bot_move: null,
        total_turns: 0,
        player_hits: 0,
        bot_hits: 0,
        maxN: 5, // Maximum N for n-grams
    };

    let playerMove = null;
    let playerShotTarget = null;
    let currentState = GAME_STATES.AWAITING_INPUT; // Initialize current state

    // Function to update the current state
    const setState = (newState) => {
        currentState = newState;
        updateButtonVisibility();
    };

    // Function to update button visibility based on state
    const updateButtonVisibility = () => {
        const submitButton = document.getElementById('submit-move');
        const nextTurnButton = document.getElementById('next-turn');

        if (currentState === GAME_STATES.AWAITING_INPUT) {
            submitButton.classList.remove('hidden');
            nextTurnButton.classList.add('hidden');
        } else if (currentState === GAME_STATES.TURN_SUBMITTED) {
            submitButton.classList.add('hidden');
            nextTurnButton.classList.remove('hidden');
        }
    };

    // Initialize button visibility
    updateButtonVisibility();

    // Function to check if both selections are made
    const checkSubmitEnabled = () => {
        const submitButton = document.getElementById('submit-move');
        if (playerMove && playerShotTarget && currentState === GAME_STATES.AWAITING_INPUT) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    };

    // Handle player stand selection
    const playerStands = document.querySelectorAll('.player-stand');
    playerStands.forEach(stand => {
        stand.addEventListener('click', function() {
            if (currentState !== GAME_STATES.AWAITING_INPUT) return; // Only allow in AWAITING_INPUT state
            playerMove = parseInt(this.dataset.stand);
            selectPlayerStand(playerMove);
            checkSubmitEnabled();
        });
    });

    // Handle bot stand selection for shooting
    const botStands = document.querySelectorAll('.bot-stand');
    botStands.forEach(stand => {
        stand.addEventListener('click', function() {
            if (currentState !== GAME_STATES.AWAITING_INPUT) return; // Only allow in AWAITING_INPUT state
            playerShotTarget = parseInt(this.dataset.stand);
            selectBotStand(playerShotTarget);
            checkSubmitEnabled();
        });
    });

    // Submit Move button click event
    const submitMoveButton = document.getElementById('submit-move');
    submitMoveButton.addEventListener('click', () => {
        if (currentState !== GAME_STATES.AWAITING_INPUT) return; // Only allow in AWAITING_INPUT state
        if (!playerMove || !playerShotTarget) return; // Ensure selections are made

        // Disable interactions
        submitMoveButton.disabled = true;
        playerStands.forEach(stand => stand.style.pointerEvents = 'none');
        botStands.forEach(stand => stand.style.pointerEvents = 'none'); // <-- Fixed syntax error

        // Proceed with the game logic
        processTurn();
        updateUI();
        setState(GAME_STATES.TURN_SUBMITTED);
    });

    // Next Turn button click event
    const nextTurnButton = document.getElementById('next-turn');
    nextTurnButton.addEventListener('click', () => {
        if (currentState !== GAME_STATES.TURN_SUBMITTED) return; // Only allow in TURN_SUBMITTED state

        // Reset for next turn
        playerMove = null;
        playerShotTarget = null;
        setState(GAME_STATES.AWAITING_INPUT);
        checkSubmitEnabled();
        playerStands.forEach(stand => {
            stand.classList.remove('border-blue-500', 'bg-blue-100');
            stand.style.pointerEvents = 'auto';
        });
        botStands.forEach(stand => {
            stand.classList.remove('border-red-500', 'bg-red-100');
            stand.style.pointerEvents = 'auto';
        });
        const shotIndicators = document.querySelectorAll('.shot-indicator');
        shotIndicators.forEach(indicator => indicator.remove());
    });

    // Function to process the turn
    const processTurn = () => {
        // Store the player's previous position
        const previous_player_pos = gameState.player_pos;

        // Bot logic: Predict player's next move BEFORE updating player's position
        const predicted_player_move = predictPlayerMoveNGram();

        // Bot decides its move randomly
        const bot_move = Math.floor(Math.random() * 3) + 1;
        gameState.bot_move = bot_move;
        gameState.bot_pos = bot_move;

        // Bot decides where to shoot based on prediction
        gameState.bot_shot_target = predicted_player_move;

        // Update player's position and shot target
        gameState.player_pos = playerMove;
        gameState.player_move = playerMove;
        gameState.player_shot_target = playerShotTarget;

        // Add player's move to history
        gameState.player_move_history.push(playerMove);

        // Update n-gram counts
        updateNGramCounts();

        // Increment total turns
        gameState.total_turns += 1;

        // Determine turn result
        let turn_result = '';
        // Check if player hits bot
        if (gameState.player_shot_target === gameState.bot_pos) {
            gameState.player_score += 1;
            gameState.player_hits += 1;  // Increment player hits
            turn_result += 'You hit the bot! ';
        } else {
            turn_result += 'You missed. ';
        }

        // Check if bot hits player
        if (gameState.bot_shot_target === gameState.player_pos) {
            gameState.bot_score += 1;
            gameState.bot_hits += 1;  // Increment bot hits
            turn_result += 'Bot hit you!';
        } else {
            turn_result += 'Bot missed.';
        }

        gameState.turn_result = turn_result;
    };

    // Function to update n-gram counts
    const updateNGramCounts = () => {
        const history = gameState.player_move_history;
        for (let n = 1; n <= gameState.maxN; n++) {
            if (history.length > n) {
                const ngram = history.slice(history.length - n - 1, history.length - 1).join('-');
                const nextMove = history[history.length - 1];
                if (!gameState.ngram_counts[ngram]) {
                    gameState.ngram_counts[ngram] = {};
                }
                if (gameState.ngram_counts[ngram][nextMove]) {
                    gameState.ngram_counts[ngram][nextMove] += 1;
                } else {
                    gameState.ngram_counts[ngram][nextMove] = 1;
                }
            }
        }
    };

    // Function to predict player's next move using n-grams
    const predictPlayerMoveNGram = () => {
        const history = gameState.player_move_history;
        for (let n = gameState.maxN; n >= 1; n--) {
            if (history.length >= n) {
                const ngram = history.slice(history.length - n, history.length).join('-');
                const possibleNextMoves = gameState.ngram_counts[ngram];
                if (possibleNextMoves) {
                    // Find the move with the highest count
                    let maxCount = 0;
                    let predictedMove = null;
                    for (const move in possibleNextMoves) {
                        if (possibleNextMoves[move] > maxCount) {
                            maxCount = possibleNextMoves[move];
                            predictedMove = parseInt(move);
                        }
                    }
                    return predictedMove;
                }
            }
        }
        // If no data available, return random move
        return Math.floor(Math.random() * 3) + 1;
    };

    // Update UI based on game state
    const updateUI = () => {
        // Update positions
        document.querySelectorAll('.player-stand .player-icon').forEach(icon => icon.remove());
        const playerStand = document.querySelector(`.player-stand.stand-${gameState.player_pos}`);
        playerStand.insertAdjacentHTML('beforeend', '<span class="player-icon text-3xl">👤</span>');

        document.querySelectorAll('.bot-stand .bot-icon').forEach(icon => icon.remove());
        const botStand = document.querySelector(`.bot-stand.stand-${gameState.bot_pos}`);
        botStand.insertAdjacentHTML('beforeend', '<span class="bot-icon text-3xl">🤖</span>');

        // Display shot indicators
        document.querySelectorAll('.bot-stand .shot-indicator').forEach(indicator => indicator.remove());
        const playerShotStand = document.querySelector(`.bot-stand.stand-${gameState.player_shot_target}`);
        playerShotStand.insertAdjacentHTML('beforeend', '<span class="shot-indicator text-2xl">🔴</span>');

        document.querySelectorAll('.player-stand .shot-indicator').forEach(indicator => indicator.remove());
        const botShotStand = document.querySelector(`.player-stand.stand-${gameState.bot_shot_target}`);
        botShotStand.insertAdjacentHTML('beforeend', '<span class="shot-indicator text-2xl">🔴</span>');

        // Update total turns
        document.getElementById('total-turns').textContent = gameState.total_turns;

        // Update total hits
        document.getElementById('player-hits').textContent = gameState.player_hits;
        document.getElementById('bot-hits').textContent = gameState.bot_hits;

        // Calculate accuracy percentages
        let playerAccuracy = 0;
        let botAccuracy = 0;

        if (gameState.total_turns > 0) {
            playerAccuracy = ((gameState.player_hits / gameState.total_turns) * 100).toFixed(1);
            botAccuracy = ((gameState.bot_hits / gameState.total_turns) * 100).toFixed(1);
        }

        document.getElementById('player-accuracy').textContent = `${playerAccuracy}%`;
        document.getElementById('bot-accuracy').textContent = `${botAccuracy}%`;

        // Display turn result in the running log
        const turnNumber = gameState.total_turns;

        // Player's action
        const playerLog = document.getElementById('player-log');
        const playerEntry = document.createElement('p');

        if (gameState.player_shot_target === gameState.bot_pos) {
            playerEntry.classList.add('hit');
            playerEntry.textContent = `Turn ${turnNumber}: Hit`;
        } else {
            playerEntry.classList.add('miss');
            playerEntry.textContent = `Turn ${turnNumber}: Miss`;
        }

        playerLog.prepend(playerEntry);

        // Bot's action
        const botLog = document.getElementById('bot-log');
        const botEntry = document.createElement('p');

        if (gameState.bot_shot_target === gameState.player_pos) {
            botEntry.classList.add('hit');
            botEntry.textContent = `Turn ${turnNumber}: Hit`;
        } else {
            botEntry.classList.add('miss');
            botEntry.textContent = `Turn ${turnNumber}: Miss`;
        }

        botLog.prepend(botEntry);
    };

    // Keybinds Implementation
    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();

        if (currentState === GAME_STATES.AWAITING_INPUT) {
            // Player Move Targeting (Keys: Q, W, E)
            if (['q', 'w', 'e'].includes(key)) {
                const keyMap = { 'q': 1, 'w': 2, 'e': 3 };
                playerMove = keyMap[key];
                selectPlayerStand(playerMove);
                checkSubmitEnabled();
            }

            // Bot Stand Targeting (Keys: 1, 2, 3)
            if (['1', '2', '3'].includes(key)) {
                playerShotTarget = parseInt(key);
                selectBotStand(playerShotTarget);
                checkSubmitEnabled();
            }

            // Submit Move (Key: Enter or Space)
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default actions like form submissions or page scrolling
                if (!submitMoveButton.disabled) {
                    submitMoveButton.click();
                }
            }
        } else if (currentState === GAME_STATES.TURN_SUBMITTED) {
            // Next Turn (Key: Enter or Space)
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default actions like form submissions or page scrolling
                if (!nextTurnButton.classList.contains('hidden')) {
                    nextTurnButton.click();
                }
            }
        }
    });

    // Function to visually select player stand
    const selectPlayerStand = (standNumber) => {
        playerStands.forEach(s => s.classList.remove('border-blue-500', 'bg-blue-100'));
        const selectedStand = document.querySelector(`.player-stand.stand-${standNumber}`);
        selectedStand.classList.add('border-blue-500', 'bg-blue-100');
    };

    // Function to visually select bot stand
    const selectBotStand = (standNumber) => {
        botStands.forEach(s => s.classList.remove('border-red-500', 'bg-red-100'));
        const selectedStand = document.querySelector(`.bot-stand.stand-${standNumber}`);
        selectedStand.classList.add('border-red-500', 'bg-red-100');
    };
});
