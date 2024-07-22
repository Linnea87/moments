import axios from "axios";

axios.defaults.baseURL = "https://lesson-drf-api-d1c8561611f2.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;