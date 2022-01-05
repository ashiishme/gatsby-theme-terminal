import React from 'react'
const Layout = ({ children, className }) => {
  return (
    <>
      <main className={className}>{children}</main>
    </>
  )
}
export default Layout
