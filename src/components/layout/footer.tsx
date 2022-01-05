import React from 'react'
const Footer = ({ children, className }) => {
  return (
    <>
      <footer className={className}> {children} </footer>
    </>
  )
}
export default Footer
