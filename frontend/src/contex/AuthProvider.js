import React, { createContext, useEffect, useState } from 'react'
import { getIsAuth, signInUser } from '../apis/auth';
import { useNotification } from '../hooks';

export const AuthContext = createContext();

const defaultAuthInfo = {
    profile: null,
    isLoggedIn: false,
    isPending: false,
    error: ''
}

const AuthProvider = ({children}) => {

    const { updateNotification } = useNotification();

    const [authInfo, setAuthInfo] = useState({...defaultAuthInfo});

    const handleLogin =  async(email,password) => {

        setAuthInfo({...authInfo, isPending: true})
        const {error, user}= await signInUser({email,password})
        if(error){
            updateNotification("error",error);
            return setAuthInfo({...authInfo, isPending: false, error})
        }
        setAuthInfo({
            profile: {...user}, 
            isPending: false,
            isLoggedIn: true, 
            error: ''});

        localStorage.setItem('auth-token', user.jwtToken);
    }

    const isAuth = async() =>{
        const token =localStorage.getItem("auth-token");
        if(!token) return;

        setAuthInfo({...authInfo, isPending: true})
        const {error, user} = await getIsAuth(token)

        if(error){
            updateNotification("error",error);
            return setAuthInfo({...authInfo, isPending: false, error})
        }

        setAuthInfo({
            profile: {...user}, 
            isPending: false,
            isLoggedIn: true,
            error: ''});
        };

        useEffect(()=>{
            isAuth()
        },[]);

        const handleLogout = () =>{
            localStorage.removeItem('auth-token');
            setAuthInfo({...defaultAuthInfo});
            
        }

        // 
    
  return (
    <AuthContext.Provider value={{authInfo, handleLogin,isAuth, handleLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider