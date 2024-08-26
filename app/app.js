'use client'
import Navbar from '../component/Navbar'; // Adjusted import path

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;