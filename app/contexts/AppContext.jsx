"use client"
import { createContext, useContext, useState } from "react";

const DiaryContext = createContext();

const DiaryProvider = ({ children , user }) => {
  const [diary, setDiary] = useState([]);

  return (
    <DiaryContext.Provider value={{ diary, setDiary ,user }}>
      {children}
    </DiaryContext.Provider>
  );
};

const useDiary = () => {
  const context = useContext(DiaryContext);
  
  if (context === undefined) {
    throw new Error('useDiary must be used within a DiaryProvider');
  }
  
  return context;
};

export { DiaryProvider, useDiary };