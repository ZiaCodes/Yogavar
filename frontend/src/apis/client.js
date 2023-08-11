import axios from "axios";

// for https
const client = axios.create({baseURL:"https://yogavar-services.onrender.com/api"});

//for local 
// const client = axios.create({baseURL:"http://localhost:8000/api"});
export default client