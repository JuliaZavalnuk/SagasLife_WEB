import '../../styles/User_styles/StyledFooter.css';
import '../../styles/User_styles/StyledLogo.css';
import Link from 'next/link'



// Component

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
          
              <img width="40px" height="40px" src="../../static/logo.png" />
              <p className="firstword">Sagas</p>
              <p className="secondword">  life</p>
             
         
        <div className="block1">
          <Link  href="/lenta" passHref>
            <a className="bw1">Home</a>
          </Link>
          <Link href="/trends" passHref>
            <a className="bw2">Trends</a>
          </Link>
        
        </div>

         <div className="block2">
           <Link href="/aboutsagaslife" passHref>
              <a className="w1">About Sagas.Life</a>
            </Link>
            <Link href="/termsofuse" passHref>
              <a className="w2">Terms of use</a>
            </Link>
          </div>
          <div className="block3">
            <div className="appstore"><img className="img1" src='/static/appstore.png'/></div>
            <div className="google"><img className="img2" src='/static/googleplay.png'/></div>
            <div className="social"><img className="img3" src='/static/social.png'/></div>
          </div>
      </div>
      
    )
  }
}
export default Footer