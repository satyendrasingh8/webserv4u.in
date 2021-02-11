import Layout from "../components/Layout";
import Head from 'next/head'
import Link from 'next/link'
const Index=()=> {
    return(<div>

<Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
        <Layout>
        
<h2>index page </h2>
<Link href="/signup">Signup</Link>
        </Layout>
        </div>
    )
}

export default Index;