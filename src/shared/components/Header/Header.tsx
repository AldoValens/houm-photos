import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-header">
            <div className="container-fluid">
                <img src="https://houm.com/static/brandImage/houmLogo.svg"/>
                <div className=" header-right-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className={( {isActive}) => 'nav-link' + (isActive ? ' active' : '')}
                                to="/"
                            >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={( {isActive}) => 'nav-link' + (isActive ? ' active' : '')}
                                to="/search"
                            >search</NavLink>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}