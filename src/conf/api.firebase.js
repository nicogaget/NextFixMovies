import * as axios from "axios";

const apiFirebase = axios.create({
  baseURL: "https://dymamovies-ebf7a-default-rtdb.firebaseio.com/",
});

export default apiFirebase;
