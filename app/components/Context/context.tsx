'use client'
import React, { createContext, useState, ReactNode } from "react";

interface MessageContextProps {
  message: any;
  setMessage: React.Dispatch<React.SetStateAction<any>>;
}

export const MessageData = createContext<MessageContextProps | null>(null);

interface ContextProps {
  children: ReactNode;
}

function Context({ children }: ContextProps) {
  const [message, setMessage] = useState<any>(null);

  return (
    <MessageData.Provider value={{ message, setMessage }}>
      {children}
    </MessageData.Provider>
  );
}

export default Context;
