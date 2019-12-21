import '../../styles/User_styles/styledHeader.css';
import '../../styles/User_styles/styledLogo.css';
import Link from 'next/link'



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
          <div className="search">
          <img  src='/static/search.png'/>
          </div>
          <div className="sagas">
            <Link href="/lenta" passHref>
            <a >Sagas</a>
            </Link>
          </div>
          <div className="word1">
            <Link href="/trends" passHref>
            <a >Trends</a>
            </Link>
          </div>
          <div className="word2">
            <Link href="/aboutsagaslife" passHref>
            <a> About Sagas.Life</a>
            </Link>
          </div>
          
          <div className="avatar">
            <Link href="/user" passHref>
            <a> ava </a>
            </Link>
          </div>
          <div className="settings" >
            <Link href="/settings" passHref>
            <img height="20px" width="25px" src='/static/settings.png'/>
            </Link>
          </div>
        
          </div> 
        
      </div>
    )
    }
}
export default Header