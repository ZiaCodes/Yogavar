import client from "./client";

export const getAllMentors = async() =>{

    try {
        const {data} = await client.get('/mentor/all');
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;
        return {error: error.message || error};
    }
}


export const getSingleMentor = async(id) =>{
    
    try {
        const {data} = await client.get(`/mentor/single/${id}`,id);
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;
        return {error: error.message || error};
    }
}