import continents from '../redux/continents/continents';

describe('testing getting continents from store', () => {
  it('should return initial state', () => {
    const continentsInitialData = {
      continents: [],
      status: 'LOADING',
      errMsg: null,
    };
    
    expect(continents(continentsInitialData, { type: '' })).toEqual({ continents: [], status: 'LOADING', errMsg: null });
  });

  it('should return all continents', () => {

    const continentsData = [
      {
        "name": "North America",
        "deaths": 1469671,
        "countries": [
          "Anguilla",
          "Antigua and Barbuda",
          "Aruba",
          "Bahamas",
          "Barbados",
          "Belize",
          "Bermuda",
          "British Virgin Islands",
          "Canada",
          "Caribbean Netherlands",
          "Cayman Islands",
          "Costa Rica",
          "Cuba",
          "Curaçao",
          "Dominica",
          "Dominican Republic",
          "El Salvador",
          "Greenland",
          "Grenada",
          "Guadeloupe",
          "Guatemala",
          "Haiti",
          "Honduras",
          "Jamaica",
          "Martinique",
          "Mexico",
          "Montserrat",
          "Nicaragua",
          "Panama",
          "Saint Kitts and Nevis",
          "Saint Lucia",
          "Saint Martin",
          "Saint Pierre Miquelon",
          "Saint Vincent and the Grenadines",
          "Sint Maarten",
          "St. Barth",
          "Trinidad and Tobago",
          "Turks and Caicos Islands",
          "USA"
        ]
      },
      {
        "name": "Africa",
        "deaths": 254548,
        "countries": [
          "Algeria",
          "Angola",
          "Benin",
          "Botswana",
          "Burkina Faso",
          "Burundi",
          "Cabo Verde",
          "Cameroon",
          "Central African Republic",
          "Chad",
          "Comoros",
          "Congo",
          "Côte d'Ivoire",
          "DRC",
          "Djibouti",
          "Egypt",
          "Equatorial Guinea",
          "Eritrea",
          "Ethiopia",
          "Gabon",
          "Gambia",
          "Ghana",
          "Guinea",
          "Guinea-Bissau",
          "Kenya",
          "Lesotho",
          "Liberia",
          "Libyan Arab Jamahiriya",
          "Madagascar",
          "Malawi",
          "Mali",
          "Mauritania",
          "Mauritius",
          "Mayotte",
          "Morocco",
          "Mozambique",
          "Namibia",
          "Niger",
          "Nigeria",
          "Rwanda",
          "Réunion",
          "Saint Helena",
          "Sao Tome and Principe",
          "Senegal",
          "Seychelles",
          "Sierra Leone",
          "Somalia",
          "South Africa",
          "South Sudan",
          "Sudan",
          "Swaziland",
          "Tanzania",
          "Togo",
          "Tunisia",
          "Uganda",
          "Western Sahara",
          "Zambia",
          "Zimbabwe"
        ]
      }
    ];

    const action = {
      type: 'covid-tracker/GET_CONTINENTS_SUCCESS',
      payload: continentsData,
    };

    expect(continents(undefined, action)).toEqual({
      continents: continentsData,
      status: "SUCCESS",
      errMsg: null,
    });
  });
});
