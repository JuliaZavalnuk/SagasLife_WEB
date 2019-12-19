import '../../styles/User_styles/StyledNav.css';
import Link from 'next/link'


// Component

const Nav = () => (
  <div className="ul">
    <Link href="/mytimelaps" passHref>
      <a className="timelaps">My timelapses</a>
    </Link>

    <Link href="/myshots" passHref>
      <a className="shots">My shots</a>
    </Link>

    <Link href="/mynotifications" passHref>
      <a className="notific">Notifications</a>
    </Link>
 </div>
)

// Export

export default Nav