import Layout from "../components/Layout";
import Head from 'next/head'
import Link from 'next/link'
const Index=()=> {
    return(<div>

<Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
        <Layout>
        <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold">
                                PROGRAMMING,WEB/APP DEVELOPMENT & Tech BLOGS
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                Best programming, web/app development and tech blogs on React Node NextJs firebase flutter computer science and
                                JavaScript
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.unsplash.com/photo-1545166867-476da315406e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">React</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/react">
                                        <a>
                                            <h3 className="h1">React Js</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">The world's most popular frontend web development library</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                   'https://images.unsplash.com/photo-1545166867-476da315406e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Node</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/node">
                                        <a>
                                            <h3 className="h1">Node Js</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        The worlds most popular backend development tool for JavaScript Ninjas
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.unsplash.com/photo-1545166867-476da315406e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Next</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/next">
                                        <a>
                                            <h3 className="h1">Next Js</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">A Production ready web framework for building SEO React apps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.unsplash.com/photo-1545166867-476da315406e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Computer Science</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/">
                                        <a>
                                            <h3 className="h1">Computer Science</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">Find Computer Sciences and related blogs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://images.unsplash.com/photo-1545166867-476da315406e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' +
                                            ')'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Flutter</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/">
                                        <a>
                                            <h3 className="h1">Flutter</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">The world's most popular framework for app development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </article>
   </Layout>
        </div>
    )
}

export default Index;