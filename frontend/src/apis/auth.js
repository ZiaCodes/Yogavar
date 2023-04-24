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


// for forget-password 
export const forgetPassword = async(email) =>{

    try {
        const {data} = await client.post('/user/forget-password',{email});
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;
        return {error: error.message || error};
    }
}


//reset password token verification
export const verifyPasswardResetToken = async(token,userId) =>{

    try {
        const {data} = await client.post('/user/verify-pass-reset-token',{
            token,
            userId
        });
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;
        return {error: error.message || error};
    }
}