import { useContext } from "react";
import { ThemeContext } from "../contex/ThemeProvider";
import { NotificationContext } from "../contex/NotificationProvider";
import { AuthContext } from "../contex/AuthProvider";


export const useTheme = () => useContext(ThemeContext);
export const useNotification = () => useContext(NotificationContext);
export const useAuth = () => useContext(AuthContext)