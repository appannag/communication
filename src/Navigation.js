import { Link, Outlet } from 'react-router-dom';
const Navigation = () => {
    return (<div>
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='container mt-3'>
            <Outlet />
        </div>
    </div>
    );
}

export default Navigation;