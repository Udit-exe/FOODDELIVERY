import React,{ useContext, useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const LoginPopup = ({setShowLogin}) => {
    const {url} = useContext(StoreContext)
   
    const [currState, setCurrState] = useState("Sign Up")
    const [data, setData] = useState({name:"", email:"", password:""})

    const onChangeHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({...data , [name]:value}))
    }

    const onLogin = async (e) => {
        e.preventDefault()
    }

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState === "Login" ? <></> : 
                    <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />
                }
                <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
            </div>
            <button type='submit'>{currState==="Sign Up"?"Create Account": "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing, I agree to the Terms & Conditions</p>
            </div>
            {currState==="Login"
                ?<p>Create a new account ?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p> 
                :<p>Already have an account ?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup