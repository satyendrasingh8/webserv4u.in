import fetch from 'isomorphic-fetch'
import {API} from '../config'
import { handleResponse } from './auth';

export async function create(tag,token) {
    // Default options are marked with *
    const response = await fetch(`${API}/tag`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        Authorization : `Bearer ${token}`
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
     redirect: 'follow', // manual, *follow, error
     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(tag) // body data type must match "Content-Type" header
    });
    handleResponse(response);
    return response.json(); // parses JSON response into native JavaScript objects
  }

  export async function getTags() {
    // Default options are marked with *
    const response = await fetch(`${API}/tags`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  
  export async function singleTag(slug) {
    // Default options are marked with *
    const response = await fetch(`${API}/tag/${slug}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


  export async function removeTag(slug,token) {
    // Default options are marked with *
    const response = await fetch(`${API}/tag/${slug}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        Authorization : `Bearer ${token}`
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
        redirect: 'follow', // manual, *follow, error
    
    });
    handleResponse(response);
    return response.json(); // parses JSON response into native JavaScript objects
  }


























