// Hooks
import { Link } from "react-router-dom";

// Icons
import { FaRegUser } from 'react-icons/fa'

export default function Header() {
    return (
      <header>
        <Link to={"/"}>
          <div className="logo-outer">
            <div className="logo">
              <div className="n-c">N</div>
            </div>
            <div className="logo">
              <div className="n-c">C</div>
            </div>
            <h1>NEWS</h1>
          </div>
        </Link>
        <FaRegUser />
      </header>
    );
}