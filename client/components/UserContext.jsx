"use client";
import React from "react";
import { createContext} from "react";
export const UserContext = createContext("");

export const UserContextProvider =  ({children , userInfo}) => {

  const [userData ,setUserData] = useState(userInfo);

  const clearUserData = () =>{
    setUserData(null);
  }
  return(
  <UserContext.Provider value={{ userData, clearUserData }}>{ children}</UserContext.Provider>)
};

