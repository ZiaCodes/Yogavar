import client from "./client";

//creating a new user

export const createUser = async(userInfo) =>{
    try {
        const {data} = await client.post('/user/create',userInfo);
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;

        return ({error: error.message || error})
    }
}


//Verification of new user
export const verifyUserEmail = async(userInfo) =>{

    try {
        const {data} = await client.post('/user/verify-email',userInfo);
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;
        return {error: error.message || error};
    }
}


// for signin 
export const signInUser = async(userInfo) =>{

    try {
        const {data} = await client.post('/user/sign-in',userInfo);
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;
        return {error: error.message || error};
    }
}