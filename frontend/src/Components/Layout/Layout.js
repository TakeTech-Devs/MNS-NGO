import React, { Children } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = (Children) => {
  return (
    <>
    <Header />
    <section>
        {Children}
    </section>
    <Footer />
    </>
  )
}

export default Layout