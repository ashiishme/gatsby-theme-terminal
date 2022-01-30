import React from 'react'
import TableView from '../components/base/tableView'
import TerminalNotFound from '../components/terminal/terminalNotFound'
import { CommandOutputProps } from '../types'

const componentsMapping = {
  TableView,
  TerminalNotFound,
}

const TerminalMapper = (output: CommandOutputProps | string): JSX.Element => {
  if (typeof output === 'string') {
    return React.createElement(componentsMapping['TerminalNotFound'], {
      message: output,
    })
  }
  const { data } = output
  return React.createElement(componentsMapping[output.component], {
    tableContent: data,
  })
}

export default TerminalMapper
