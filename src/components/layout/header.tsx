import React from 'react'
const Header = ({ children, className }) => {
  return (
    <>
      <header className={className}> {children} </header>
    </>
  )
}
export default Header
