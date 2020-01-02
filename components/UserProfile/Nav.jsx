import '../../styles/User_styles/styledNav.css';
import Link from 'next/link'


// Component

const Nav = () => (
  <div className="ul">
    <div className="boxtimelaps">
      <Link href="/mytimelaps" passHref>
        <a className="timelaps">My Timelapses</a>
      </Link>
    </div>

    <div className="boxshots">
      <Link href="/myshots" passHref>
        <a className="shots">My Shots</a>
      </Link>
    </div>

    <div className="boxnotific">
      <Link href="/mynotifications" passHref>
        <a className="notific">Notifications</a>
      </Link>
    </div>
 </div>
)

// Export

export default Nav