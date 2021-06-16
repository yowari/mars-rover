import React, { ReactNode } from 'react';
import './Grid.css';
import { GRID_SIZE_WIDTH, GRID_SIZE_HEIGHT } from '../../model/grid';

export interface GridProps {
  width: number;
  height: number;
  children: ReactNode;
}

export default function Grid(props: GridProps) {
  const cells = [];
  const cellWidth = props.width / GRID_SIZE_WIDTH;
  const cellHeight = props.height / GRID_SIZE_HEIGHT;

  for (let i = 0; i < GRID_SIZE_HEIGHT; i++) {
    for (let j = 0; j < GRID_SIZE_WIDTH; j++) {
      const cellIndex = i * GRID_SIZE_HEIGHT + j;

      cells.push(<div key={cellIndex} className="Grid-cell bg-warning" style={{
        left: `${j * cellWidth + 1}px`,
        bottom: `${i * cellHeight + 1}px`,
        width: `${cellWidth - 2}px`,
        height: `${cellHeight - 2}px`
      }}></div>);
    }
  }

  return (
    <div className="Grid mx-auto" style={{
      width: props.width,
      height: props.height
    }}>
      {cells}
      {props.children}
    </div>
  );
}
