import React,{ useRef, useState } from 'react'
import { signup, login, logout, useAuth } from "../lib/init-firebase";
import Components from './Components';


export default function Auth() {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();
  
    const emailRef = useRef();
    const passwordRef = useRef();
  
    async function handleSignup() {
      setLoading(true);
      try {
        await signup(emailRef.current.value, passwordRef.current.value);
      } catch {
        alert("Error: This User Account Already Exists!");
      }
      setLoading(false);
    }
    async function handleLogin() {
      setLoading(true);
      try {
        await login(emailRef.current.value, passwordRef.current.value);
      } catch {
        alert("Either the Username or Password is Invalid!");
      }
      setLoading(false);
    }
    async function handleLogout() {
      setLoading(true);
      try {
        await logout();
      } catch {
        alert("Error!");
      }
      setLoading(false);
    }
  return (
    <div>
      <div className='auth'>
        <div>Currently logged in as: { currentUser?.email }</div>
        <div>
          <input hidden={loading || currentUser} ref={emailRef} placeholder="Email" />
          <input hidden={loading || currentUser} ref={passwordRef} type="password" placeholder="Password" />
        </div>
        <div>
          <button disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
          <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
          <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <section>
        {currentUser ? <Components />: <></>}
      </section>
    </div>
  )
}
