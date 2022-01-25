import { useContext } from 'react'
import { HistoryContext } from '../context/HistoryContext'

export type HistoryProps = {
  type: 'command' | 'output' | 'error'
  data: string
}

export type HistoryContextProps = {
  history: HistoryProps[]
  addHistory: (item: HistoryProps) => void
}

const useHistory = () => {
  const { history, addHistory } =
    useContext<HistoryContextProps>(HistoryContext)

  return {
    history,
    addHistory,
  }
}

export default useHistory
