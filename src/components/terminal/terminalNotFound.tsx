import React, { FC } from 'react'
const TerminalNotFound: FC<{ message: string }> = ({ message }) => {
  return (
    <>
      <p>
        <strong>Error: </strong>
        {message}
      </p>
    </>
  )
}

export default TerminalNotFound
