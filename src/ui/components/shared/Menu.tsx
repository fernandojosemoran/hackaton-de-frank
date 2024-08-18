import { mainMenu, PathType } from "@domain/routes/navbar_paths";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <div className="menu-container">
            <nav id="navbar">
                <ul id="nav-ul">
                    {
                        mainMenu.map(
                            (element: PathType, index: number) => (
                                <li className="navbar-ul-li" key={index}>
                                    <NavLink className="navbar-ul-li-links" key={index} to={element.path}>{element.name}</NavLink>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Menu