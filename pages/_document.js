import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class DocumentComponent extends Document {

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default DocumentComponent