import axios from "axios";

const KEY = "AIzaSyC9BqWhjYpug_cOyCCaduahWenzabk-U2Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
