import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";

const UserIndex=()=> {
    return(<div>
        <Layout>
<Private>
<h2> User Dashboard </h2>
    </Private>        
        </Layout>
        </div>
    )
}

export default UserIndex;