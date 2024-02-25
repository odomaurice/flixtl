import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import styles from '../ui/dashboard/dashboard.module.css'
import Footer from '../ui/dashboard/footer/footer'

export const metadata = {
  title: 'Apex | Dashboard'
    
   
};


const Layout = ({children}) => {
  return (
    <div className={`${styles.container} font-poppins`}>
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        <div className={styles.content}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    </div>
  )
}

export default Layout