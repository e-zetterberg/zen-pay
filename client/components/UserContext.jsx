"use client";
import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
const UserContext = createContext("");

export const UserContextProvider =  ({children , userData}) => {
 
  return(
  <UserContext.Provider value={{ userData }}>{ children}</UserContext.Provider>)
};

export function useUserContext() {
  return useContext(UserContext);
}
