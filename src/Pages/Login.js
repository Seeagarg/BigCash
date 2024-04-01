import React, { useState } from 'react'
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';
import SubLayout from '../Components/SubLayout';

const Login = () => {
    const navigate = useNavigate()
    const [msisdn,setMsisdn] = useState();
   
    // console.log(msisdn)

    
  return (
    <Layout>
        <SubLayout>
          <div className={classes.main}>
        
          <div className={classes.logo}>
            <img src="/assets/logo.png" alt="" />
            </div>

            <div className={classes.tabs_container}>
          <div className={classes.tabs_sub_container}>
            <div
              className={classes.tab_1}
              onClick={() => navigate("/login")}
            >
              <p className={classes.tab}>Login</p>
            </div>
            <div
              className={classes.tab_2}
              onClick={() => navigate("/subscribe")}
            >
              <p className={classes.tab}>Subscribe</p>
            </div>
          </div>
        </div>


        
        <div className={classes.form_container}>
          <form className={classes.form}
        //    onSubmit={submitHandler}
           >
            <div className={classes.input_group}>
              <span className={classes.country_code}>+263</span>
              <input
                className={classes.input}
                type="number"
                placeholder="ENTER YOUR PHONE NUMBER"
                value={msisdn}
                onChange={(e) => setMsisdn(e.target.value)}
              ></input>
            </div>

            <button type="submit" className={classes.subscribe_btn}>
              Login
            </button>
          </form>
        </div>

          </div>

          <div className={classes.footer_container}>
          <div className={classes.footer_sub_container}>
            <img
              src="/assets/mtn.png"
              alt="mtn"
              className={classes.footer}
            />
            <p className={classes.footer_text}>
            By clicking <strong>subscribe</strong> , you have read, understood 
and agree to be bound by the <strong>Bigcash </strong> service’s <br />
 
<strong> Terms & Conditions and FAQ’s </strong>
            </p>
          </div>
        </div>
        </SubLayout>
    </Layout>
  )
}

export default Login
