import themesData from './initial-theme-data';

// Actions
const GET_THEME = 'covid-tracker/GET_THEME';
const CHANGE_THEME = 'covid-tracker/CHANGE_THEME';

// Action creators
export const getTheme = () => ({ type: GET_THEME });
export const changeTheme = (theme) => ({ type: CHANGE_THEME, payload: theme });

export default function themes(state = { theme: themesData[0] }, action) {
  switch (action.type) {
    case GET_THEME:
      return state;
    case CHANGE_THEME:
      return { theme: themesData.find((theme) => theme.title === action.payload) };
    default:
      return state;
  }
}
