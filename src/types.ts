export type OutputDataProps = {
  key: string
  value: string
}

export type CommandOutputProps = {
  component: string
  data: Array<OutputDataProps | string>
}

export type HistoryProps = {
  type: 'command' | 'output' | 'error'
  output: CommandOutputProps | string
}

export type HistoryContextProps = {
  history: HistoryProps[]
  addHistory: (item: HistoryProps) => void
}
