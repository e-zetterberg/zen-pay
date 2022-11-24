"use client";
import React from "react";
import { createContext, useContext } from "react";
export const UserContext = createContext("");

export const UserContextProvider =  ({children , userData}) => {
 
  return(
  <UserContext.Provider value={{ userData }}>{ children}</UserContext.Provider>)
};

