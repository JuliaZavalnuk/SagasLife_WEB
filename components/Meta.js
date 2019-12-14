import Head from 'next/head'

// Component

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta httpEquiv="Content-Security-Policy" content="default-src *; font-src 'self' data:; img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src  'self' 'unsafe-inline' *" />

    <link ref="shortcut icon" href="/static/favicon.png" />
    <link ref="stylesheet" type="text/css" href="/static/nprogress.css" />

    <title>React Starter Pack</title>
  </Head>
)

// Export

export default Meta