import React, { useState } from 'react';
//import {APP_NAME} from '../config'
import  Router from 'next/router';
import NProgress from 'nprogress'
import {signout,isAuth} from '../actions/auth'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Link from 'next/link'
import Search from './blog/Search'
import '.././node_modules/nprogress/nprogress.css'


Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();


const Header = ()=> {
const [isOpen, setIsOpen] = useState(false)

 const toggle = () => {
     setIsOpen(!isOpen)
 }
    return(
        <React.Fragment>
        <Navbar color="light" light expand="md">
        <Link href="/"><NavLink className="font-weight-bold" style={{cursor:'pointer'}}>WebServ4u</NavLink></Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <React.Fragment>
            <NavItem>
                <Link href="/blogs"><NavLink style={{cursor:'pointer'}}> Blogs </NavLink></Link>
              </NavItem>
           </React.Fragment> 

           { !isAuth() && <React.Fragment>
            <NavItem>
                <Link href="/signin"><NavLink style={{cursor:'pointer'}}> Signin </NavLink></Link>
              </NavItem>
              <NavItem>
                <Link href="/signup"><NavLink style={{cursor:'pointer'}}>Signup</NavLink></Link>
              </NavItem>
           </React.Fragment> }
              

              {isAuth() && isAuth().role == 0 && (<NavItem>
                <Link href="/user">
                {`${isAuth().name}'s Dashboard`}
                </Link> 
              </NavItem>)}

              {isAuth() && isAuth().role == 1 && (<NavItem>
           <Link href="/admin">
                {`${isAuth().name}'s Dashboard`}
                </Link> 
              </NavItem>)}

              
              {isAuth() && (<NavItem>
                <NavLink style={{cursor:'pointer'}} 
                onClick={()=> signout(() => Router.replace(`/signin`))}
                >Signout</NavLink>
              </NavItem>)}

            </Nav>
           
          </Collapse>
        </Navbar>
        <Search />
      </React.Fragment>   
    )
} 

export default Header;