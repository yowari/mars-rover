import { Direction } from './direction';
import { GRID_SIZE_HEIGHT, GRID_SIZE_WIDTH } from './grid';
import { forward, rotateLeft, rotateRight, Position } from './mouvement';

test('rotateRight', () => {
  expect(rotateRight(Direction.North)).toBe(Direction.East);
  expect(rotateRight(Direction.East)).toBe(Direction.South);
  expect(rotateRight(Direction.South)).toBe(Direction.West);
  expect(rotateRight(Direction.West)).toBe(Direction.North);
});

test('rotateLeft', () => {
  expect(rotateLeft(Direction.North)).toBe(Direction.West);
  expect(rotateLeft(Direction.West)).toBe(Direction.South);
  expect(rotateLeft(Direction.South)).toBe(Direction.East);
  expect(rotateLeft(Direction.East)).toBe(Direction.North);
});

test('forward', () => {
  const initialPosition: Position = {
    x: 5,
    y: 5
  }

  expect(forward(initialPosition, Direction.North)).toEqual({ x: 5, y: 6 });
  expect(forward(initialPosition, Direction.South)).toEqual({ x: 5, y: 4 });
  expect(forward(initialPosition, Direction.East)).toEqual({ x: 6, y: 5 });
  expect(forward(initialPosition, Direction.West)).toEqual({ x: 4, y: 5 });
});

test('forward constraint', () => {
  expect(forward({ x: 0, y: 0 }, Direction.South)).toEqual({ x: 0, y: 0 });
  expect(forward({ x: 0, y: GRID_SIZE_HEIGHT - 1 }, Direction.North)).toEqual({ x: 0, y: GRID_SIZE_HEIGHT - 1 });
  expect(forward({ x: GRID_SIZE_WIDTH - 1, y: 0 }, Direction.East)).toEqual({ x: GRID_SIZE_WIDTH - 1, y: 0 });
  expect(forward({ x: 0, y: 0 }, Direction.West)).toEqual({ x: 0, y: 0 });
});
