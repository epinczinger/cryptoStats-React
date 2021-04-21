import axios from 'axios';

export const getCoinData = () => (dispatch) => {
  axios({
    method: 'get',
    url: 'https://api.coincap.io/v2/assets',
  })
    .then((response) => {
      console.log(response.data.data);
      dispatch({
        type: 'GET_COINS',
        payload: response.data.data,
      });
    })
    .catch((error) => dispatch({
      type: 'GET_COINS_ERROR',
      payload: error,
    }));
};

export const toggleTheme = () => (dispatch) => {
  dispatch({
    type: 'TOGGLE_THEME',
  });
};
