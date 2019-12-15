import '../../styles/User_styles/StyledFooter.css';
import '../../styles/User_styles/StyledLogo.css';
import Link from 'next/link'



// Component

class Footer extends React.Component {

  render() {
    return (
      <>
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
        </div>
      </>
    )
  }
}
export default Footer