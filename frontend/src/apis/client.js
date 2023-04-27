import axios from "axios";


//base url for backend Api
const client = axios.create({baseURL:"http://localhost:8000/api"});

export default client