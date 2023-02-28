import React from 'react'
import HomePage from '../pages/HomePage'
import BookingPage from '../pages/BookingPage'

import {Routes, Route} from 'react-router-dom'

const Main = () => {
  return (
    <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    </main>
  )
}


export default Main;
