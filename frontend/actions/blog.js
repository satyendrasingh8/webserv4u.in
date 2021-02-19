import fetch from 'isomorphic-fetch'
import {API} from '../config'
import queryString from 'query-string'
import {isAuth,handleResponse} from './auth'

export async function createBlog(blog,token) {
  let createBlogEndpoint;
  if(isAuth() && isAuth().role == 1) {
    createBlogEndpoint = `${API}/blog`
  }  else if(isAuth() && isAuth().role == 0) {
    createBlogEndpoint = `${API}/user/blog`
  }
    // Default options are marked with *
    const response = await fetch(`${createBlogEndpoint}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
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
      body: blog // body data type must match "Content-Type" header
    });
    handleResponse(response);
    return response.json(); // parses JSON response into native JavaScript objects
  }


  export async function listBlogsWithCategoriesAndTags(skip,limit) {
    const data ={
      limit,skip
    }
    // Default options are marked with *
    const response = await fetch(`${API}/blogs-categories-tags`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: 'application/json',
         'Content-Type': 'application/json',
      },
      body:JSON.stringify(data) ,
      redirect: 'follow', // manual, *follow, error
     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  export async function singleBlog(slug) {
    // Default options are marked with *
    const response = await fetch(`${API}/blog/${slug}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


  export async function listRelated(blog) {
 
    const response = await fetch(`${API}/blogs/related`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: 'application/json',
         'Content-Type': 'application/json',
      },
      body:JSON.stringify(blog) ,
      redirect: 'follow', // manual, *follow, error
     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


  export async function list(username) {
    let listBlogsEndpoint;
  if(username) {
    listBlogsEndpoint = `${API}/${username}/blogs`
  }  else {
    listBlogsEndpoint = `${API}/blogs`
  }

    // Default options are marked with *
    const response = await fetch(`${listBlogsEndpoint}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


  export async function removeBlog(slug,token) {
    let deleteBlogEndpoint;
    if(isAuth() && isAuth().role == 1) {
      deleteBlogEndpoint = `${API}/blog/${slug}`
    }  else if(isAuth() && isAuth().role == 0) {
      deleteBlogEndpoint = `${API}/user/blog/${slug}`
    }

    const response = await fetch(`${deleteBlogEndpoint}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization : `Bearer ${token}`
      },
   
      redirect: 'follow', // manual, *follow, error
     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     // body data type must match "Content-Type" header
    });
    handleResponse(response);
    return response.json(); // parses JSON response into native JavaScript objects
  }

  

  export async function updateBlog(blog,token,slug) {
    let updateBlogEndpoint;
    if(isAuth() && isAuth().role == 1) {
      updateBlogEndpoint = `${API}/blog/${slug}`
    }  else if(isAuth() && isAuth().role == 0) {
      updateBlogEndpoint = `${API}/user/blog/${slug}`
    }

    const response = await fetch(`${updateBlogEndpoint}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: 'application/json',
         Authorization : `Bearer ${token}`
      },
      body:blog,
      redirect: 'follow', // manual, *follow, error
     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     // body data type must match "Content-Type" header
    });
    handleResponse(response);
    return response.json(); // parses JSON response into native JavaScript objects
  }


  export async function listSearch(params) {
    console.log('search params',params)
    let query = queryString.stringify(params)
    console.log('query params',query)
    const response = await fetch(`${API}/blogs/search?${query}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


























