import {types} from '../types/types';

export const saveIndex = text => ({
  type: types.SAVE_INDEX,
  payload: text,
});
export const saveSlotsArr = text => ({
  type: types.SAVE_USER_ARR,
  payload: text,
});

export const saveTextSear = text => ({
  type: types.SAVE_TEXT_SEAR,
  payload: text,
});
