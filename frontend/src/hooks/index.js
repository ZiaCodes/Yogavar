import { useContext } from "react";
import { ThemeContext } from "../contex/ThemeProvider";
import { NotificationContext } from "../contex/NotificationProvider";


export const useTheme = () => useContext(ThemeContext);
export const useNotification = () => useContext(NotificationContext);