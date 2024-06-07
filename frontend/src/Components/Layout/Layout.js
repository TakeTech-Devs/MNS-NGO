import React, { Children } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = (Children) => {
  return (
    <>
    <Navbar />
    <section>
        {Children}
    </section>
    <Footer />
    </>
  )
}

export default Layout