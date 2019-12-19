import '../../styles/User_styles/StyledHeader.css';
import '../../styles/User_styles/StyledLogo.css';

// Component

class Header extends React.Component {

  render() {
    return (
      <div className="bar">
        <div className="bar__logo">
          <img className="img_logo" src="/static/logo.png" alt="logo"/>
          <p className="firstword">Sagas</p>
          <p className="secondword">life</p>
        </div>
        <div className="bar__links">
          <p className="sagas">Sagas</p>
          <p className="word1">Trends </p>
          <p className="word2">About Sagas.Life</p>
          <img className="bar__avatar" src="/" alt="/" />
          <img className="bar__more" src="/" alt="/" />
        </div>
      </div>
    )
    }
}
export default Header