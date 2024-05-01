import { Dispatch, PropsWithChildren, createContext, useContext, useReducer } from 'react';
import appReducer from './reducer';
import { AppAction, AppState } from '../models/main';

const AppStateContext = createContext<AppState | null>(null);
const DispatchContext = createContext<Dispatch<AppAction> | null>(null);

export const useAppStateContext = () => {
  const state = useContext(AppStateContext);

  if (!state) {
    throw new Error('AppStateContext must be used within <AppStateContext.Provider>');
  }

  return state;
};

export const useDispatchContext = () => {
  const dispatch = useContext(DispatchContext);

  if (!dispatch) {
    throw new Error('DispatchContext must be used within <DispatchContext.Provider>');
  }

  return dispatch;
};

const appInitialState: AppState = {};

export const AppContextProvider = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  return <AppStateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
      {children}
    </DispatchContext.Provider>
  </AppStateContext.Provider>
};