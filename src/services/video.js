const axios = require('axios');

export const getVideos = () =>
  axios
    .get('http://hybridtv.ss7.tv/techtest/movies.json')
    .then(res => res.data);
