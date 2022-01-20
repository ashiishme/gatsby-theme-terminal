import React, { createContext, useState } from 'react'
import { HistoryContextProps, HistoryProps } from '../hooks/useHistory'

export const HistoryContext = createContext<HistoryContextProps>(undefined)

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState<HistoryProps[]>([])

  const addHistory = (value: HistoryProps) => {
    setHistory([...history, value])
  }

  return (
    <HistoryContext.Provider value={{ history, addHistory }}>
      {children}
    </HistoryContext.Provider>
  )
}
