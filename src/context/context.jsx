import { createContext, useState,useContext } from "react";
const AddContext = createContext();

export function useLocalContext(){
    return useContext(AddContext);
}
export function ContextProvider({children}){
    const [createClassDialog,setCreateClassDialog]=useState(false);
    const [joinClassDialog, setJoinClassDialog] = useState(false);
    const value = { 
        createClassDialog, 
        setCreateClassDialog, 
        joinClassDialog, 
        setJoinClassDialog,
        // login,
        // loggedInMail,
        // loggedInUser,
     };

    return <AddContext.Provider value={value} >{children}</AddContext.Provider>;
}