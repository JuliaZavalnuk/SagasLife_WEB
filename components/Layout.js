import Meta from "./Meta";

const Layout = props => {
  return (
    <>
      <Meta />
      <div className="Layout">
        <div className="Content">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;