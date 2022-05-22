import themes from './initial-theme-data';

// Actions
const GET_THEME = 'covid-tracker/GET_THEME';
const CHANGE_THEME = 'covid-tracker/CHANGE_THEME';

// Action creators
export const getTheme = () => ({type: GET_THEME});
export const changeTheme = (theme) => ({ type: CHANGE_THEME, payload: theme });
