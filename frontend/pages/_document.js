import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config';
const {env} = getConfig;

class MyDocument extends Document {
  setGoogleTags() {
 if(process.env.PRODUCTION){
return {
  __html:`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-190272510-1');
  `
}
 }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <meta charSet="UTF-8"/>
      
        <link rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" 
        />
       
         <link  rel="stylesheet" href="/static/css/styles.css" />
         <script async src="https://www.googletagmanager.com/gtag/js?id=UA-190272510-1" />
         <script dangerouslySetInnerHTML={this.setGoogleTags()}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument