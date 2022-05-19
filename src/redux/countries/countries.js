import countriesInitialData from './initial-data';

const URL = 'https://corona.lmao.ninja/v3/covid-19/countries/';

// Actions
const GET_COUNTRIES_SUCCESS = 'covid-tracker/GET_COUNTRIES_SUCCESS';
const GET_COUNTRIES_LOADING = 'covid-tracker/GET_COUNTRIES_LOADING';
const GET_COUNTRIES_FAILED = 'covid-tracker/GET_COUNTRIES_FAILED';

// Action creators
export const countriesSuccess = (countries) => (
  {
    type: GET_COUNTRIES_SUCCESS,
    payload: countries,
  });
export const countriesLoading = () => ({ type: GET_COUNTRIES_LOADING });
export const countriesFailed = (msg) => ({
  type: GET_COUNTRIES_FAILED,
  payload: msg,
});

export const getCountries = () => (dispatch) => {
  dispatch(countriesLoading());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const newCountries = data.map((cont) => ({
        name: cont.continent,
        deaths: cont.deaths,
      }));
      dispatch(countriesSuccess(newCountries));
    })
    .catch((err) => {
      dispatch(countriesFailed(JSON.stringify(err.message)));
    });
};

// countries reducer

export default function countries(state = countriesInitialData, action) {
  switch (action.type) {
    case GET_COUNTRIES_LOADING:
      return {
        ...state,
        status: 'LOADING',
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        countries: action.payload,
      };
    case GET_COUNTRIES_FAILED:
      return {
        ...state,
        status: 'FAILED',
        errMsg: action.payload,
      };
    default:
      return state;
  }
}
