import { Action, ActionReducerMap } from '@ngrx/store';

export enum AnnoSetsTypes {
  ADD_MANY = '[AnnoSets] Add Many',
  RESET = '[AnnoSets] Reset',
}

export class AddMany implements Action {
  readonly type = AnnoSetsTypes.ADD_MANY;

  constructor(public annoSets: any[]) { }
}

export class Reset implements Action {
  readonly type = AnnoSetsTypes.RESET;
}

export type AnnoSetsAction = AddMany | Reset;

export interface IAnnoSetsState {
  annoSets: any[];
}

export function annoSetsReducer(
  state: IAnnoSetsState = { annoSets: [] },
  action: AnnoSetsAction
): IAnnoSetsState {
  switch (action.type) {
    case AnnoSetsTypes.ADD_MANY:
      return { annoSets: [...action.annoSets] };
    case AnnoSetsTypes.RESET:
      return { annoSets: [] };
    default:
      return state;
  }
}

export interface State {
  annoSets: IAnnoSetsState;
}

export const reducers: ActionReducerMap<State> = {
  annoSets: annoSetsReducer,
};
