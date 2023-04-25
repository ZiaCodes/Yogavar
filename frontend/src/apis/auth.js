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


// for signin and logging the user after email verification routes 
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


// for token authentication
export const getIsAuth = async(token) =>{

    try {
        const {data} = await client.get('/user/is-auth',{
            headers: {
                Authorization: 'Bearer ' + token,
                accept: 'application/json', 
            },
        });
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


//reset token verification
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

//creating new password with reset route
export const resetPassword = async(passwordInfo) =>{

    try {
        const {data} = await client.post('/user/reset-password',passwordInfo);
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;
        return {error: error.message || error};
    }
}

//resending otp 
export const resetEmailVerificationToken = async(userId) =>{

    try {
        const {data} = await client.post('/user/resend-email-verification-token',{userId});
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;
        return {error: error.message || error};
    }
}