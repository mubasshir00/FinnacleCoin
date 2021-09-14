import React, { useState } from 'react'
import {BrowserRouter as Router , Switch,Route,Link, useHistory} from 'react-router-dom'
import { auth } from '../../firebase';
// import './Login.css'
const Login = () => {

  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0
})

function handleMouseMove(ev) { setMousePosition({left: ev.pageX, top: ev.pageY}); }


    const [dynamicClass, setdynamicClass] = useState("");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()

    const clickHandler = () =>{
        setdynamicClass("flip")
        // setdynamicClass("")
    }
    const clickHandlerLogin = () =>{
        setdynamicClass("backflip")
    }
    const signIn = e =>{
      e.preventDefault();
      auth
         .signInWithEmailAndPassword(email,password)
         .then(auth=>{
           history.push("/")
         })
         .catch(error=>alert(error.message))
    }
    const register = e =>{
      e.preventDefault();

     auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          // console.log(auth);
          if(auth){
            history.push("/")
          }
        })
        .catch(error=>alert(error.message))
    }
    
    return (
        <>
          <div class="content" onMouseMove={(ev)=> handleMouseMove(ev)}
      style={{left:MousePosition.left , top: MousePosition.top}}>
          <div className="flip-container">
  <div className={`flipper ${dynamicClass}`} id="flipper">
    <div className="front">
      <h1 className="title">Login</h1>
      <form>

        <input type="text" placeholder="Email Address"
        value={email} onChange={e=>setEmail(e.target.value)}/>

        <input type="password" placeholder="Password" 
        value={password} 
        onChange={e=>setPassword(e.target.value)}/>

        <input type="button" defaultValue="Login" 
        onClick={signIn} />

      </form>
      <Link className="flipbutton" id="loginButton" 
      onClick={clickHandler} >Create my account →</Link>
    </div>
    <div className="back">
      <h1 className="title">Register</h1>
      <form>

        <input type="text" placeholder="Username"
        value={email}
        onChange={e=>setEmail(e.target.value)}/>

        <input type="password" placeholder="Password" 
        value={password} 
        onChange={e=>setPassword(e.target.value)} />

        <input type="button" defaultValue="Sign up" 
        onClick={register} />

      </form>
      <Link className="flipbutton" id="registerButton" onClick={clickHandlerLogin} >Login to my account →</Link>
      
    </div>
  </div>
</div>
          </div>
  <div className="cursor" onMouseMove={(ev)=> handleMouseMove(ev)}
      style={{left:MousePosition.left , top: MousePosition.top}}/>
  <div className="cursor2" />



        </>
    )
}
export default Login