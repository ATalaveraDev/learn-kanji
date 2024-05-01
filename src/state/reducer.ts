import { AppAction, AppState } from '../models/main';

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case '':
      break;
  }

  return {
    ...state
  };
};

export default appReducer;