import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import './Navbar.css'
import Popup from './Popup'
// import {auth} from './../../firebase'
const Navbar = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const signIn = e =>{
    //     e.preventDefault()
    // }
    // const register = e =>{
    //     e.preventDefault();

    //     auth
    //         .createUserWithEmailAndPassword(email,password)
    //         .then((auth)=>{
    //             console.log(auth);
    //         })
    //         .catch(error=>alert(error.message))
    // }
    return (
        <>
           <div className="navContainer">
               <div className="navWrapper">
                <ul className="leftNav">
                <li>
                    <Link to="">
                    Finnaclecoin
                    </Link>
                </li>
                <li>
                    <Link to="">
                    Wallet
                    </Link>
                </li>
                <li>
                    <Link to="/transactionhome">
                    Exchange
                    </Link>
                </li>
                <li>
                    <Link to="">
                    Explore
                    </Link>
                </li>
                <li>
                    <Link to="">
                    ...
                    </Link>
                </li>
            </ul>
            <div>
                  <div className="searchContainer">
                        <input type="text" placeholder="Search blocks, transactions , hash ...." class="search__box"/>
                        <FaSearch color="white" className="searchIcon"/>
                    </div>
            </div>
            <ul className="rightNav">
                
                <li>
                <button onClick={()=>setButtonPopup(true)} className="glow-on-hover" type="submit">
                    {/* <Link to="/siginup">SignUp</Link> */}
                    SignUp/SignIn
                </button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>Sign In</h3>
                    <form className="form">
                        <input type="text" name="" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your Email"/>
                        <input type="password" value={password}
                        placeholder="Enter Password"
                        onChange={e=>setPassword(e.target.password)}
                        />
                        <button type="submit" className="signup">Sign In</button>
                        <button type="submit" >Create Your Account</button>
                    </form>
                </Popup>
                </li>
                {/* <li>
                <button className="glow-on-hover" type="submit">SignIn</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>Sign In</h3>
                    <form className="form">
                        <input type="text" name="" value="" placeholder="Your Email"/>
                        <input type="password" value=""
                        placeholder="Enter Password"
                        />
                        <button className="signup">Sign Up</button>
                    </form>
                </Popup>
                </li> */}
            </ul>
               </div>
           </div>
        </>
    )
}

export default Navbar
