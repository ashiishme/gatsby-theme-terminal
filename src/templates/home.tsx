/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const Home = () => {
  return (
    <>
      <div
        sx={{
          maxWidth: '100%',
          minHeight: '100vh',
          mx: 'auto',
          px: 3,
          py: 5,
          bg: '#20222E',
          textAlign: 'center',
        }}
      >
        <p sx={{ color: '#FFFFFF' }}>
          Hi, I am a <strong sx={{ color: '#00ACC1' }}>Terminal Theme</strong>{' '}
          created with <strong sx={{ color: '#8a4baf' }}>Gatsby </strong>
        </p>
      </div>
    </>
  )
}

export default Home
