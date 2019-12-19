import Meta from "./Meta";
import ReactNotifications from 'react-notifications-component';

import '../styles/notifications/notificationsPopUp.css';
import 'animate.css';

import '../styles/progressBar/progress.css';

import '../styles/generic/main.css';

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