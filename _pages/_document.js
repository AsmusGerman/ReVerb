import Document, { Html, Head, Main, NextScript } from "next/document";
import documentLang from "next-translate/documentLang";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={documentLang(this.props)}>
        <Head>
          <title>ReVerb</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="terminal">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
