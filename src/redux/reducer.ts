import { combineReducers } from 'redux';

import { DemoState, demo } from './demo';
export interface ReduxState {
  readonly demoState:DemoState;
}

export const root_reducer = combineReducers<ReduxState>({
  demoState: demo.reducer,
});