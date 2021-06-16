import { createContext, Dispatch, useContext, useReducer } from 'react';
import playground, { initialState, PlaygroundAction, PlaygroundState } from './reducers/playground';

export const AppStateContext = createContext<PlaygroundState | null>(null);
export const AppDispatchContext = createContext<Dispatch<PlaygroundAction> | null>(null);

export function useAppState(): PlaygroundState {
  return useContext(AppStateContext) as PlaygroundState;
}

export function useAppDispatch(): Dispatch<PlaygroundAction> {
  return useContext(AppDispatchContext) as Dispatch<PlaygroundAction>;
}

export default function AppStateProvider({children}: any) {
  const [state, dispatch] = useReducer(playground, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}
