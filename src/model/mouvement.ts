import { Direction } from './direction';
import { GRID_SIZE_HEIGHT, GRID_SIZE_WIDTH } from './grid';

export interface Position {
  x: number;
  y: number;
}

export function rotateRight(direction: Direction): Direction {
  switch (direction) {
    case Direction.North:
      return Direction.East;
    case Direction.East:
      return Direction.South;
    case Direction.South:
      return Direction.West;
    case Direction.West:
      return Direction.North;
  }
}

export function rotateLeft(direction: Direction): Direction {
  switch (direction) {
    case Direction.North:
      return Direction.West;
    case Direction.West:
      return Direction.South;
    case Direction.South:
      return Direction.East;
    case Direction.East:
      return Direction.North;
  }
}

export function forward(position: Position, direction: Direction): Position {
  switch (direction) {
    case Direction.North:
      return { x: position.x, y: Math.min(position.y + 1, GRID_SIZE_HEIGHT - 1) };
    case Direction.West:
      return { x: Math.max(position.x - 1, 0), y: position.y };
    case Direction.South:
      return { x: position.x, y: Math.max(position.y - 1, 0) };
    case Direction.East:
      return { x: Math.min(position.x + 1, GRID_SIZE_WIDTH - 1), y: position.y };
  }
}
