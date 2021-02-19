import fetch from 'isomorphic-fetch'
import cookie from 'js-cookie'
import {API} from '../config'
import Router from 'next/router'

export const handleResponse = response => {
if(response.status == 401) {
  removeCookie('token')
  removeLocalStorage('user')
  Router.push({
    pathname:'/signin',
    query:{
      message:"your session is expired! please signin"
    }
  })
}
}

export async function signup(user) {
    // Default options are marked with *
    const response = await fetch(`${API}/signup`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(user) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  export async function signin(user) {
    // Default options are marked with *
    const response = await fetch(`${API}/signin`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(user) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

 export const signout = (next) => {
   removeCookie('token')
   removeLocalStorage('user')
   next()
   return fetch(`${API}/signout`,{
     method:'GET',
   }).then(response => {
     console.log('Signout success!')
   }).catch(err => {
     console.log(err)
   })
 }

  //set cookie
  export const setCookie = (key,value) => {
      if(process.browser) {
          cookie.set(key,value,{
              expires:1
          })
      }
  }
  export const removeCookie = (key) => {
    if(process.browser) {
        cookie.remove(key,{
            expires:1
        })
    }
}


  //get cookie

  export const getCookie = (key) => {
    if(process.browser) {
       return cookie.get(key);
    }
}

  //local storage
  export const setLocalStorage = (key,value) => {
      if(process.browser) {
          localStorage.setItem(key,JSON.stringify(value))
      }
  }

  export const removeLocalStorage = (key) => {
    if(process.browser) {
        localStorage.removeItem(key)
    }
}

  //authenticate user by pass data to cookie and local storage

export const authenticate = (data,next) => {
    setCookie('token',data.token)
    setLocalStorage('user',data.user)
    next();
}

export const isAuth = () => {
    if(process.browser){
        const cookieChecked = getCookie('token')
        if(cookieChecked){
            if(localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user'))
            } else{
                return false
            }
        }
    }
};


export const updateUser = (user,next) => {
  if(process.browser) {
    if(localStorage.getItem('user')) {
      let auth = JSON.parse(localStorage.getItem('user'))
      auth = user
      localStorage.setItem('user',JSON.stringify(auth))
      next()
    }
  }
}













