import continentsInitialData from './initial-data';

const URL = 'https://corona.lmao.ninja/v3/covid-19/continents';

// Actions
const GET_CONTINENTS_SUCCESS = 'covid-tracker/GET_CONTINENTS_SUCCESS';
const GET_CONTINENTS_LOADING = 'covid-tracker/GET_CONTINENTS_LOADING';
const GET_CONTINENTS_FAILED = 'covid-tracker/GET_CONTINENTS_FAILED';

// Action creators
export const continentsSuccess = (continents) => (
  {
    type: GET_CONTINENTS_SUCCESS,
    payload: continents,
  });
export const continentsLoading = () => ({ type: GET_CONTINENTS_LOADING });
export const continentsFailed = (msg) => ({
  type: GET_CONTINENTS_FAILED,
  payload: msg,
});

export const getContinents = () => (dispatch) => {
  dispatch(continentsLoading());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const newContinents = data.map((cont) => ({
        name: cont.continent,
        deaths: cont.deaths,
      }));
      dispatch(continentsSuccess(newContinents));
    })
    .catch((err) => {
      dispatch(continentsFailed(JSON.stringify(err.message)));
    });
};

// continents reducer

export default function continents(state = continentsInitialData, action) {
  switch (action.type) {
    case GET_CONTINENTS_LOADING:
      return {
        ...state,
        status: 'LOADING',
      };
    case GET_CONTINENTS_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        continents: action.payload,
      };
    case GET_CONTINENTS_FAILED:
      return {
        ...state,
        status: 'FAILED',
        errMsg: action.payload,
      };
    default:
      return state;
  }
}
