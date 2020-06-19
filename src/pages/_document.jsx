import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="garbage" />
          <script
            dangerouslySetInnerHTML={{
              __html: "-".repeat(1024),
            }}
          />
          <noscript>
            <div></div>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
