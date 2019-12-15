import Head from "next/head";

const Layout = props => {
  return (
    <div className="Layout">
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Layout;