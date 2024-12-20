import { useState, useRef, useContext } from 'react';
import CartContext from '../Store/CartContext';
import classes from "./Auth.module.css"
import { useNavigate } from "react-router-dom"
import Footer from '../components/MainNavigation/Footer';

const Auth = () => {

  const cartCtx=useContext(CartContext)  
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  const navigate=useNavigate()

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading]=useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    let url;
    setIsLoading(true)
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAdItHMy3I3jd3mfh8R1CRH460FD_3S_3A'
    }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAdItHMy3I3jd3mfh8R1CRH460FD_3S_3A'
    }

      fetch(url,{
        method:'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecureToken:true
        }),
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data)
        cartCtx.login(data.idToken,data.email)
        navigate('/store')
      })
      .catch((err) => {
        alert(err); 
      });
  };
  

  return (
    <>
    <div style={{padding:'3rem'}}>
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading&&<button>{isLogin ? 'Login': 'Create Account'}</button>}
          {isLoading && <p>Sending request....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    </div>
    <Footer/>
    </>
  );
};

export default Auth;
