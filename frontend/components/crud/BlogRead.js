import Link from 'next/link'
import React,{useEffect,useState} from 'react'
import Router from 'next/router'
import moment from 'moment'
import {getCookie,isAuth} from '../../actions/auth'
import {list,removeBlog} from  '../../actions/blog'

const BlogRead = ({username}) => {
const [blogs,setBlogs] = useState([])
const [message,setMessage] = useState('')
const token = getCookie('token')

useEffect(()=>{
loadBlogs();
},[])

const loadBlogs = () => {
    list(username).then(data => {
        if(data.error){
            console.log(data.error)
        } else{
            setBlogs(data);
        }
    })
}
const deleteBlog = (slug) => {
    removeBlog(slug,token).then(data => {
        if(data.error){
            console.log(data.error)
        } else {
            setMessage(data.message)
          loadBlogs();
        }
    })
}

const deleteConfirm = (slug) => {
    let answer = window.confirm('Are you sure want to DELETE your blog?')
    if(answer) {
        deleteBlog(slug)
    }
}

const showUpdateButton = (blog) => {
    if(isAuth() && isAuth().role==0){
        return (
            <Link href={`/user/crud/${blog.slug}`}>
            <a className="ml-2 btn btn-small btn-warning"> Update</a>
            </Link>
        )
    } else if(isAuth() && isAuth().role==1){
        return (
            <Link href={`/admin/crud/${blog.slug}`}>
            <a className="ml-2 btn btn-small btn-warning"> Update</a>
            </Link>
        )
    }
}

const showAllBlogs = () => {
   return blogs.map((blog,i)=> {
return (
    <div key={i} className="pb-5" >
   <h3>{blog.title}</h3>
   <p className="mark"> Written By {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()} </p>
  <button className="btn btn-small btn-danger" onClick={()=> deleteConfirm(blog.slug)}> Delete </button>
  {showUpdateButton(blog)}

    </div>
)
    })
}

return (
    <React.Fragment>
    
  <div className="row">
  <div className="col">
      {message && <div className="alert alert-warning"> {message} </div>}
      {showAllBlogs()}
  </div>
  </div>
    
    </React.Fragment>
)
}

export default BlogRead;