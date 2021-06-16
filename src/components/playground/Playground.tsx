import React from 'react';
import Grid from '../grid/Grid';
import Rover from '../rover/Rover';
import { DirectionNames } from '../../model/direction';
import { GRID_SIZE_HEIGHT, GRID_SIZE_WIDTH } from '../../model/grid';
import { useAppDispatch, useAppState } from '../../AppStateProvider';

export default function Playground() {
  const state = useAppState();
  const dispatcher = useAppDispatch();

  const gridWidth = 300;
  const gridHeight = 300;
  const cellWidth = gridWidth / GRID_SIZE_WIDTH;
  const cellHeight = gridHeight / GRID_SIZE_HEIGHT;

  const handleExecute = () => {
    for (const command of state.commands.split('')) {
      switch (command) {
        case 'f':
          dispatcher({ type: 'forward' });
          break;
        case 'r':
          dispatcher({ type: 'right' });
          break;
        case 'l':
          dispatcher({ type: 'left' });
          break;
      }

      dispatcher({ type: 'clear' });
    }
  };

  const handleForwardMovement = () => {
    dispatcher({ type: 'add', payload: 'f' });
  };

  const handleRightMovement = () => {
    dispatcher({ type: 'add', payload: 'r' });
  };

  const handleLeftMovement = () => {
    dispatcher({ type: 'add', payload: 'l' });
  };

  return (
    <div className="card bg-white">
      <div className="card-body">

        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Playground</h4>
              <button className="btn btn-success mx-2" onClick={handleExecute} disabled={!state.commands}>
                <i className="bi bi-play-fill"></i> Execute
              </button>
            </div>

            <div className="my-4">
              <div>Rover Coord: <code>x={state.roverPosition.x} y={state.roverPosition.y}</code></div>
              <div>Rover Direction: <code>{DirectionNames[state.roverDirection]}</code></div>
              <div>Commands: <code>{state.commands || '<empty>'}</code></div>
            </div>

            <div className="my-4 d-flex justify-content-center">
              <button className="btn btn-secondary mx-2" type="button" onClick={handleForwardMovement}><i className="bi bi-arrow-up"></i> Forward</button>
              <button className="btn btn-secondary mx-2" type="button" onClick={handleLeftMovement}><i className="bi bi-arrow-counterclockwise"></i> Turn Left</button>
              <button className="btn btn-secondary mx-2" type="button" onClick={handleRightMovement}><i className="bi bi-arrow-clockwise"></i> Turn Right</button>
            </div>

          </div>

          <div className="col-6 border-start">
            <Grid width={gridWidth} height={gridHeight}>
              <Rover
                x={state.roverPosition.x}
                y={state.roverPosition.y}
                direction={state.roverDirection}
                cellWidth={cellWidth}
                cellHeight={cellHeight}
              />
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
