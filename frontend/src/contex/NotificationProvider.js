import React, {createContext, useState} from 'react'

export const NotificationContext = createContext()

let timeoutId;

const NotificationProvider = ({children}) => {
    const [notifiction,setNotification] = useState("")
    const [classes, setClasses] = useState("")

    const updateNotification = (type, value) =>{
        if(timeoutId) clearTimeout(timeoutId);
        switch(type){
            case "error":
                setClasses("RedClass");
                break;
            case "success":
                setClasses("GreenClass");
                break;
            case "warning":
                setClasses("OrangeClass");
                break;
            default:
                setClasses("RedClass");
            }
        
        setNotification(value);
        timeoutId = setTimeout(()=>{
            setNotification("");
        },3000);
    }

  return (
    <NotificationContext.Provider value={{updateNotification}}>
        {children}

    {notifiction && 
        (<div className='Notification-container'>
            <div className="Notification-box">
                <p className={classes +" notificationText"}>
                    {notifiction}
                </p>
            </div>
        </div>)
    }

    </NotificationContext.Provider>
  )
}

export default NotificationProvider