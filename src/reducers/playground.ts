import { Direction } from '../model/direction';
import { forward, Position, rotateLeft, rotateRight } from '../model/mouvement';

export interface PlaygroundState {
  roverPosition: Position;
  roverDirection: Direction;
  commands: string;
}

export const initialState: PlaygroundState = {
  roverPosition: {
    x: 0,
    y: 0
  },
  roverDirection: Direction.North,
  commands: 'rfflfflfrff'
}

export type PlaygroundAction =
  | { type: 'forward' }
  | { type: 'right' }
  | { type: 'left' }
  | { type: 'clear' }
  | { type: 'add', payload: 'f' | 'r' | 'l' };

export default function playground(state: PlaygroundState, action: PlaygroundAction): PlaygroundState {
  switch (action.type) {
    case 'forward':
      return {
        ...state,
        roverPosition: forward(state.roverPosition, state.roverDirection)
      };
    case 'right':
      return {
        ...state,
        roverDirection: rotateRight(state.roverDirection)
      };
    case 'left':
      return {
        ...state,
        roverDirection: rotateLeft(state.roverDirection)
      };
    case 'clear':
      return {
        ...state,
        commands: ''
      };
    case 'add':
      return {
        ...state,
        commands: state.commands + action.payload
      };
  }

  return state;
}
