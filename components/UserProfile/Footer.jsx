import '../../styles/User_styles/styledFooter.css';
import '../../styles/User_styles/styledLogo.css';
import Link from 'next/link'



// Component

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
          <div className="block__logo">
              <img width="40px" height="40px" src="../../static/logo.png" />
              <p className="firstword">Sagas</p>
              <p className="secondword">  life</p>
            </div>  
             
         
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
            <div className="appstore"><img width="120px" height="40px" src='/static/appstore.png'/></div>
            <div className="googleplay"><img width="140px" height="60px" src='/static/googleplay.png'/></div>
            
        </div>
        <div className="social">
          <img className="img1" src='/static/facebook.png'/>
          <img className="img2" src='/static/instagram.png'/>
          <img className="img3" width="16px" height="16px" src='/static/twitter.png'/>
        </div>
      </div>
      
    )
  }
}
export default Footer