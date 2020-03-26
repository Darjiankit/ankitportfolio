import axios from "axios";

const KEY = "AIzaSyC1JUwyqloqNqZe_2Ptj7e--ch57VHiSaI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
