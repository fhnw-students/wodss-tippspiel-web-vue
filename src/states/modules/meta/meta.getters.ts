import { MetaDataState } from './meta.state';

// -------------------------------------------------------------------------
// Define Getter Types
// -------------------------------------------------------------------------

export const API_VERSION = 'API_VERSION';
export const GUI_VERSION = 'GUI_VERSION';
export const IS_FETCHING = 'IS_FETCHING';

// -------------------------------------------------------------------------
// Define Getter Object
// -------------------------------------------------------------------------

export const getters = {
  [API_VERSION](state: MetaDataState): string {
    return state.api.version;
  },
  [GUI_VERSION](state: MetaDataState): string {
    return state.gui.version;
  },
  [IS_FETCHING](state: MetaDataState): boolean {
    return state.isFetching;
  },
};
