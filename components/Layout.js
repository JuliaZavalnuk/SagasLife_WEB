import Head from "next/head";

const Layout = props => {
  return (
    <div className="Layout">
      <Head>
        <title>SagasLife</title>
        <link ref="shortcut icon" href="../public/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Layout;