import '../styles/globals.scss'
import React from 'react'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="data-wrapper">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
