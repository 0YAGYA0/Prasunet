import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

type Player = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
    const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);
    const [winner, setWinner] = useState<Player>(null);
    
    const handlePress = (index: number): void => {
        if (board[index] || winner) {
            return;
        }
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
        checkWinner(newBoard);
    };

    const checkWinner = (board: Player[]): void => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                return;
            }
        }
    };

    const renderSquare = (index: number): JSX.Element => {
        return (
            <TouchableOpacity
                key={index}
                style={[styles.square, board[index] === 'X' ? styles.xSquare : styles.oSquare]}
                onPress={() => handlePress(index)}
            >
                <Text style={[styles.squareText, board[index] === 'X' ? styles.xText : styles.oText]}>
                    {board[index]}
                </Text>
            </TouchableOpacity>
        );
    };

    const handleReset = (): void => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
            <View style={styles.board}>
                {board.map((_, index) => renderSquare(index))}
            </View>
            {winner && (
                <Text style={styles.winnerText}>
                    Winner: {winner}
                </Text>
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    board: {
        width: 300,
        height: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 3,
        borderColor: '#1e90ff',
        borderRadius: 10,
    },
    square: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    xSquare: {
        backgroundColor: '#ffcccc',
    },
    oSquare: {
        backgroundColor: '#cce7ff',
    },
    squareText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    xText: {
        color: '#ff6666',
    },
    oText: {
        color: '#1e90ff',
    },
    winnerText: {
        fontSize: 24,
        color: '#28a745',
        marginVertical: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20,
    },
    resetButton: {
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

const App: React.FC = () => {
    return (
        <TicTacToe />
    );
};

export default App;
