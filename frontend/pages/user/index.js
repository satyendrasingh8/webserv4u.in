import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import  Link from 'next/link'

const UserIndex=()=> {
    return(<div>
        <Layout>
<Private>
<div className="container-fluid">
<div className="row">

<div className="col-md-12 pt-5 pb-5">
<h2> User Dashboard </h2>
     </div>
<div className="col-md-4">
<ul className="list-group">
  
  <li className="list-group-item">
      <Link href="/user/crud/blog">Create Blog  </Link>
  </li>
  <li className="list-group-item">
      <Link href="/user/crud/blogs">Update/Delete Blogs  </Link>
  </li>
  <li className="list-group-item">
      <Link href="/user/update">Update Profile  </Link>
  </li>
</ul>
     </div>
     <div className="col-md-8">
       <h2>Right </h2>
     </div>
</div>
</div>
    </Private>        
        </Layout>
        </div>
    )
}

export default UserIndex;