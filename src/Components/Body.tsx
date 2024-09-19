import React from 'react'
import { Sidebar } from './Sidebar'
import { Content } from './Content'

export const Body = () => {
  return (
    <div className='body'> 
        <Sidebar />
        <Content />
    </div>
  )
}
