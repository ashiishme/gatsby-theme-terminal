import React from 'react'
import Terminal from '../components/terminal'
import useCommand from '../hooks/useCommand'

const Home = () => {
  const { executeCommand } = useCommand()

  executeCommand('whoami')
  executeCommand('testcommand')

  return (
    <>
      <Terminal />
    </>
  )
}

export default Home
