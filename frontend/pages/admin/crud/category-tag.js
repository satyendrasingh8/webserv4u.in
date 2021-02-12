import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Link from "next/link";
const CategoryTag=()=> {
    return(<div>
        <Layout>
        
<Admin>

<div className="container-fluid">
<div className="row">

<div className="col-md-12 pt-5 pb-5">
<h2> Manage Categories and Tags </h2>
     </div>
<div className="col-md-6">
    <p> categories</p>
     </div>
     <div className="col-md-6">
    <p> Tag </p>
     </div>
</div>
</div>

</Admin>
        </Layout>
        </div>
    )
}

export default CategoryTag;