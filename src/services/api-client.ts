import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d2006ad8c5e44bbe9544b9265a836b95",
  },
});
