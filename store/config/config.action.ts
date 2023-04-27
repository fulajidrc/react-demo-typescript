

import { Dispatch } from 'redux';
import { SET_MODE } from './config.type';

export const setThemeMode = (value: boolean) => ({
    type: SET_MODE,
    payload: value,
});