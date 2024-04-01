import React, { useEffect } from 'react'
import Layout from '../Components/Layout'
import classes from './Intro.module.css'
import Lottie from 'lottie-react'
import loader from '../Animation/loader.json'
import { useNavigate } from 'react-router-dom'

const Intro = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate('/subscribe')
    },3000)
  },[])

  return (
    <Layout>
      <div className={classes.main}>
     
    <div className={classes.image}>
      <img src="/assets/logo.png" alt="" />
      </div>
      
      <Lottie 
        animationData={loader}
        className={classes.animation}
      />
      </div>
    </Layout>
  )
}

export default Intro
