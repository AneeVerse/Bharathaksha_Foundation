"use client"
import store from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'

const layout = ({children}) => {
  return (
    <div>
        <Provider store={store}>
      {children}
  </Provider>  </div>
  )
}

export default layout
