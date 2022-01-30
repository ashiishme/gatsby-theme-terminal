import React, { createContext, useState } from 'react'
import { HistoryContextProps, HistoryProps } from '../types'

export const HistoryContext = createContext<HistoryContextProps>(undefined)

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState<HistoryProps[]>([])

  const addHistory = (value: HistoryProps) => {
    setHistory((prev) => [...prev, value])
  }

  return (
    <HistoryContext.Provider value={{ history, addHistory }}>
      {children}
    </HistoryContext.Provider>
  )
}
