import { Fragment } from "react";
import { ServerStyleSheets } from "@material-ui/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";

const referrer = "strict-origin";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <Fragment>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </Fragment>
      ),
    };
  }
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta content={referrer} name="referrer" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
