// contexts/PreloaderContext.tsx

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Tipe untuk nilai context
type PreloaderContextType = {
  isPreloading: boolean;
  setIsPreloading: (isLoading: boolean) => void;
};

// Buat context dengan nilai default
const PreloaderContext = createContext<PreloaderContextType | undefined>(
  undefined
);

// Buat Provider
export const PreloaderProvider = ({ children }: { children: ReactNode }) => {
  const [isPreloading, setIsPreloading] = useState(true);

  return (
    <PreloaderContext.Provider value={{ isPreloading, setIsPreloading }}>
      {children}
    </PreloaderContext.Provider>
  );
};

// Buat custom hook untuk menggunakan context
export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (context === undefined) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};
