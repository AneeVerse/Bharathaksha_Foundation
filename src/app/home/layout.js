"use client"
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import store from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'

const layout = ({ children }) => {
  return (
    <div>
        
      <Provider store={store}>
        <Navbar/>
      {children}
      <Footer/>
      </Provider>
    </div>
  )
}

export default layout
