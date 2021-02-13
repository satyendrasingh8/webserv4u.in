import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
const AdminIndex=()=> {
    return(<div>
        <Layout>
        
<Admin>

<div className="container-fluid">
<div className="row">

<div className="col-md-12 pt-5 pb-5">
<h2> Admin Dashboard </h2>
     </div>
<div className="col-md-4">
<ul className="list-group">
  <li className="list-group-item">
      <Link href="/admin/crud/category-tag">Create Category  </Link>
  </li>

</ul>
     </div>
     <div className="col-md-8">
     <li className="list-group-item">
      <Link href="/admin/crud/category-tag">Create Tag  </Link>
  </li>
     </div>
</div>
</div>

</Admin>
        </Layout>
        </div>
    )
}

export default AdminIndex;