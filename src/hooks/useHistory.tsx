import { useContext } from 'react'
import { HistoryContext } from '../context/HistoryContext'
import { HistoryContextProps } from '../types'

const useHistory = () => {
  const { history, addHistory } =
    useContext<HistoryContextProps>(HistoryContext)

  return {
    history,
    addHistory,
  }
}

export default useHistory
