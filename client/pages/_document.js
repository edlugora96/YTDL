// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import CssBaseline from "@material-ui/core/CssBaseline";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <CssBaseline />
          <section id="modal"></section>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
