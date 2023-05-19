import { NavLink } from "react-router-dom";

let Header = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                    <li class="nav-item"><NavLink className="nav-link" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to={"/"}>Home</NavLink></li>
                   <li class="nav-item"><NavLink className="nav-link" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to={"/details/1111"}>Details</NavLink></li>
                  <li class="nav-item"><NavLink end className="nav-link" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to={"/profile"}>Profile</NavLink></li>
                <li class="nav-item"><NavLink className="nav-link" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to={"/error"}>Error</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
    )
}
export default Header;