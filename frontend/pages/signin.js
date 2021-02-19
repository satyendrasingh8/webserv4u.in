import SigninComponent from "../components/auth/SigninComponent";
import {withRouter} from 'next/router'
import Layout from "../components/Layout";
const Signin=({router})=> {
   const showRedirectMessage = () => {
       if(router.query.message) {
           return <div className="alert alert-danger"> {router.query.message}</div>
       } else {
           return;
       }
   }
   
   return(<div>
        <Layout>
        
        <h2 className="text-center pt-4 pb-4"> Signin </h2>
        <div className="row">
    <div className="col-md-6 offset-md-3">
      {showRedirectMessage()}
    </div>
     </div>
     <div className="row">
    <div className="col-md-6 offset-md-3">
    <SigninComponent />
    </div>
     </div>
        </Layout>
        </div>
    )
}

export default withRouter(Signin);