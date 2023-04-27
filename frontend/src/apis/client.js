import axios from "axios";

const client = axios.create({baseURL:"https://yogavar-services.onrender.com/api"});

export default client