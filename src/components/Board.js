import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// wave 1: render grid
const generateSquareComponents = (squares, onClickCallback) => {

  const squaresList = squares.flat();
  return squaresList.map(square =>
    <Square
      id={square.id}
      value={square.value}
      onClickCallback={onClickCallback}
      key={square.id}
    />
  );
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  // console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
