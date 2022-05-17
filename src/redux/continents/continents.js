// Actions 
const GET_CONTINENTS_SUCCESS = '/covid-tracker/GET_CONTINENTS_SUCCESS';
const GET_CONTINENTS_LOADING = '/covid-tracker/GET_CONTINENTS_LOADING';
const GET_CONTINENTS_FAILED = '/covid-tracker/GET_CONTINENTS_FAILED';

// Action creators 
export const continentsSuccess = (continents) => (
    {
      type: GET_CONTINENTS_SUCCESS,
      payload: continents
    });
export const continentsLoading = () => ({type: GET_CONTINENTS_LOADING});
export const continentsFailed = (msg) => ({
  type: GET_CONTINENTS_FAILED,
  payload: msg
});