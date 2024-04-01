import React,{useState} from 'react'
import Layout from '../Components/Layout'
import SubLayout from '../Components/SubLayout'
import classes from './Subscription.module.css'
import { useNavigate } from 'react-router-dom'
import Select from "react-select";

const Subscription = () => {
    const navigate = useNavigate()
    const [msisdn,setMsisdn] = useState();
    const [options, setOptions] = useState([{value:"Daily K350",label:"Daily K350"},{value:"Weekly K1400",label:"Weekly K1400"},{value:"Monthly K4200",label:"Monthly K4200"}]);
    const [selectedOption, setSelectedOption] = useState(null);

    // const options={"Daily K350"}
    const handleInputChange = (selectedOption) => {
        setSelectedOption(selectedOption);
      };
    
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

           
              <Select
                className={classes.selector}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "1.5rem",
                    fontFamily: "Inter,sans-serif",
                  }),
                  singleValue: (baseStyles) => ({
                    ...baseStyles,
                    color: "white",
                    fontSize: "1.3rem",
                  }),
                  placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: "white",
                    fontSize: "1.3rem",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isSelected ? "#019FE340" : "#fff",
                    color: state.isSelected ? "#172A6E" : "#172A6E",
                    cursor: "pointer",
                  }),
                }}
                value={selectedOption}
                onChange={handleInputChange}
                options={options}
                placeholder="Select Package"
                menuIsOpen={true}
              />
         

            <button type="submit" className={classes.subscribe_btn}>
              Subscribe
            </button>
          </form>
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

          </div>
        
        </SubLayout>
    </Layout>
  )
}

export default Subscription
