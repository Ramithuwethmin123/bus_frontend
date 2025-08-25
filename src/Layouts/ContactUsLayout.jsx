import React from 'react'
import ContactUsPage from '../Component/UI/ContactUsPage'
import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header'

function ContactUsLayout() {
  return (
    <div className='min-h-screen flex  flex-col overflow-x-hidden'>
        <Header/>
        <ContactUsPage/>
        <Footer/>
        <Outlet/>
    </div>
  )
}

export default ContactUsLayout