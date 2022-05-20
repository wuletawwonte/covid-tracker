import countries from '../redux/countries/countries';

describe('testing getting countries from store', () => {
  it('should return initial state', () => {
    const countriesInitialData = {
      countries: [],
      status: 'LOADING',
      errMsg: null,
    };

    expect(countries(countriesInitialData, { type: '' })).toEqual({ countries: [], status: 'LOADING', errMsg: null });
  });

  it('should return all countries from a continent', () => {
    const CountriesData = [
      {
        name: 'Tunisia',
        deaths: 28628,
      },
      {
        name: 'Uganda',
        deaths: 3596,
      },
      {
        name: 'Western Sahara',
        deaths: 1,
      },
      {
        name: 'Zambia',
        deaths: 3984,
      },
      {
        name: 'Zimbabwe',
        deaths: 5487,
      },
    ];

    const action = {
      type: 'covid-tracker/GET_COUNTRIES_SUCCESS',
      payload: CountriesData,
    };

    expect(countries(undefined, action)).toEqual({
      countries: CountriesData,
      status: 'SUCCESS',
      errMsg: null,
    });
  });
});
