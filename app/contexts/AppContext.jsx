"use client"
import { createContext, useContext, useState } from "react";

const DiaryContext = createContext();

const DiaryProvider = ({ children }) => {
  const [diary, setDiary] = useState([]);

  return (
    <DiaryContext.Provider value={{ diary, setDiary }}>
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