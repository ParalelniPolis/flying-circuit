// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import config from "../config";

const { seo } = config;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Primary Meta Tags */}
          <meta name="description" content={seo.description} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          {/* TODO: add image that will be displayed on FB when sharing */}
          {/* <meta property="og:image" content={...} /> */}
          <meta property="og:url" content={seo.url} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={seo.title} />
          <meta property="twitter:description" content={seo.description} />
          {/* TODO: add image that will be displayed on Twitter when sharing */}
          {/* <meta property="twitter:image" content={...} /> */}

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: black;
            font-family: sans-serif;
            margin-top: 80px;
            padding: 30px;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
