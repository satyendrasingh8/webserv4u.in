import fetch from 'isomorphic-fetch'
import {API} from '../config'
import { handleResponse } from './auth';


export async function userPublicProfile(username) {
    // Default options are marked with *
    const response = await fetch(`${API}/user/${username}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: 'application/json',
       
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


  export async function getProfile(token) {
    // Default options are marked with *
    const response = await fetch(`${API}/user/profile`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: 'application/json',
        Authorization : `Bearer ${token}`
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


  export async function update(token,user) {
    // Default options are marked with *
    const response = await fetch(`${API}/user/update`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: 'application/json',
        Authorization : `Bearer ${token}`
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:user,
      redirect: 'follow', // manual, *follow, error
     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      
    });
    handleResponse(response);
    return response.json(); // parses JSON response into native JavaScript objects
  }




































































