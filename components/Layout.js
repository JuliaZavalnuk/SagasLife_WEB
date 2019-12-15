import Meta from "./Meta";
import ReactNotifications from 'react-notifications-component';

// Notifications styles
import '../styles/notificationsPopUp.css';
import 'animate.css';

//Progress styles 
import '../styles/progress.css';

//main style
import '../styles/main.css';

const Layout = props => {
  return (
    <>
      <Meta />
      <div className="Layout">
        <ReactNotifications />
        <div className="Content">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;