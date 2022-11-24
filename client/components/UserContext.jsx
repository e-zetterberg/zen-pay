"use client";
import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
const UserContext = createContext("");

export const UserContextProvider =  ({children , userInfo}) => {

  const [userData ,setUserData] = useState(userInfo);

  const clearUserData = () =>{
    setUserData(null);
  }
  return(
  <UserContext.Provider value={{ userData, clearUserData }}>{ children}</UserContext.Provider>)
};

export function useUserContext() {
  return useContext(UserContext);
}
