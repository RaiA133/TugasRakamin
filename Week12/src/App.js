import { useState } from 'react';

function Kotak({ value, onSquareClick }) {
  return (
    <button className="square w-40 h-40 text-8xl relative" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function RenderSquare({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status border border-gray-500 px-5 py-5 rounded-t-xl">{status}</div>
      <div className="board-row">
        <Kotak value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Kotak value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Kotak value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Kotak value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Kotak value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Kotak value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Kotak value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Kotak value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Kotak value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </>
  );
}

function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } 
    else {
      description = 'RESTART';
    }
    return (
      <li key={move}>
        <button className='border p-1 px-5 w-40' onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game container w-fit">
      <div className='border w-auto mt-10 p-6 rounded-xl shadow-lg'>
        <div className="game-board text-xl font-bold w-auto flex place-content-center">
          <div>
            <RenderSquare xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
        </div>
        <div className="game-info w-auto flex place-content-center my-5">
          <ol className='text-white bg-indigo-500 rounded-lg shadow-md'>{moves}</ol>
        </div>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return (
    <div className='flex justify-center'>
      <Game />
    </div>
  )
}

export default App;