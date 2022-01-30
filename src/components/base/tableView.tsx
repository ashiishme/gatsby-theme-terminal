import React, { FC } from 'react'
import { CommandOutputProps } from '../../types'
const TableView: FC<{ tableContent: CommandOutputProps['data'] }> = ({
  tableContent,
}) => {
  return (
    <>
      <table className="table-auto border-separate">
        <tbody>
          {tableContent.map((item, index) => {
            if (typeof item === 'string') {
              return (
                <tr key={index} className="table-cell whitespace-nowrap pr-4">
                  <td className="break-words">{item}</td>
                </tr>
              )
            }
            return (
              <tr key={index}>
                <td className="whitespace-nowrap pr-4">{item.key}</td>
                <td>{item.value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default TableView
