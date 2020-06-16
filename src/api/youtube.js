// Install axios using: npm install --save axios
import axios from 'axios';

const KEY = 'AIzaSyCOHMTFvHSXOggxUJLH0UeShMnkTpXftNY';

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
  };

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});  