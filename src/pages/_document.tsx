import React, { Fragment, ReactElement } from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
const APP_NAME = 'Agência full service'
const APP_DESCRIPTION = 'up.expert | Agência especializada em Marketing Digital.'
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <Fragment key="1">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ]
      }
    } finally {
      sheet.seal()
    }
  }

  render(): ReactElement {
    return (
      <Html lang="Pt-BR">
        <Head>
        <meta charSet="utf-8" />
        <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <style>{
            `
            html, body, #__next {
              height: 100%;
            }
            #__next {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
            `
          }</style>

<meta
  name="description"
  content="A simple Next.js Boilerplate Ready to production"
/>
<noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-NF2J776`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=747670062951497 &ev=PageView&noscript=1`}
            />
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

export default MyDocument;
