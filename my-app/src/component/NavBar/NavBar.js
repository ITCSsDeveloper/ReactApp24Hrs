import './NavBar.css';


function NavBar() {
    var appTitle = "My React App"
    return (
        <div>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{appTitle}</a>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">Login/Register</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
