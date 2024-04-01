import React from 'react'
import Layout from '../Components/Layout'
import classes from './Welcome.module.css'


const Welcome = () => {
  return (
       <Layout>
      <div className={classes.main}>
      
    <div className={classes.image}>
      <img src="/assets/welcome.png" alt="" />
      </div>
      <div className={classes.footer}>
      <img src="/assets/hi.png" alt="" className={classes.footer_img} />
      <p className={classes.welcome_title}>Welcome to BigCash Games !</p>
      <p className={classes.footer_text}>Play and Win Cash Prizes for Reaching Higher Levels.</p>
      </div>
      </div>
    </Layout>
  
  )
}

export default Welcome
