import React from 'react';
import { Direction } from '../../model/direction';
import './Rover.css';

export interface RoverProps {
  x: number;
  y: number;
  direction: Direction;
  cellWidth: number;
  cellHeight: number;
}

export default function Rover({ x, y, direction, cellWidth, cellHeight }: RoverProps) {

  let rotationClass = '';

  switch (direction) {
    case Direction.East:
      rotationClass = 'rotate-90';
      break;
    case Direction.South:
      rotationClass = 'rotate-180';
      break;
    case Direction.West:
      rotationClass = 'rotate-270';
      break;
  }

  return (
    <div className="Rover text-success text-center" style={{
      left: `${x * cellWidth + 1}px`,
      bottom: `${y * cellHeight + 1}px`,
      width: `${cellWidth - 2}px`,
      height: `${cellHeight - 2}px`
    }}>
      <div className={rotationClass}><i className="bi bi-arrow-up"></i></div>
    </div>
  );
}
