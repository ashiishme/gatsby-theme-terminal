import React from 'react'
import Layout from './src/components/layout'
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => (
  <Layout className={'main h-full text-sm'}> {element} </Layout>
)
