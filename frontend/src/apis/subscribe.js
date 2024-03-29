import client from "./client";

//subscribe to Newsletter

export const subscriToNewsLetter = async(userEmail) =>{
    try {
        const {data} = await client.post('/newsletter/create',userEmail);
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;

        return ({error: error.message || error})
    }
}

// unsubscribe to newsLetter
export const unSubscriToNewsLetter = async(userEmail) =>{
    try {
        const {data} = await client.post('/newsletter/unsubscribe',userEmail);
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;

        return ({error: error.message || error})
    }
}