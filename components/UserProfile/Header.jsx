import '../../styles/User_styles/StyledHeader.css';
import '../../styles/User_styles/StyledLogo.css';

// Component

class Header extends React.Component {

  render() {
    return (
      <>
        <div className="bar">
              <img width="40px" height="40px" src="/static/logo.png" alt="n"/>
              <p className="firstword">Sagas</p>
              <p className="secondword">  life</p>
              <p className="sagas">Sagas</p>
              <p className="word1">Trends </p>
              <p className="word2">About Sagas.Life</p>
        </div>
      </>
    )
  }
}
export default Header