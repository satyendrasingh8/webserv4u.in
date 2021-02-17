import Link from 'next/link'
import React,{useEffect,useState} from 'react'
import Router from 'next/router'
import {getCookie,isAuth} from '../../actions/auth'
import {list,removeBlog} from  '../../actions/blog'

const BlogRead = () => {
return (
    <React.Fragment>
        <h3>Update Delete blogs</h3>
    </React.Fragment>
)
}

export default BlogRead;