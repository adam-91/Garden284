import { NavLink } from "react-router-dom";



const TopNavBar = () => {
    return (
        <div className="TopNavBar">
            <nav>
                <ul>
                    <li> 
                        <NavLink to="/"> Home </NavLink>
                    </li>
                    <li> 
                        <NavLink to="/calendar"> Calendar </NavLink>
                    </li>
                    <li> 
                        <NavLink to="/plants"> Plants </NavLink>
                    </li>
                    <li> 
                        <NavLink to="/articles"> Articles </NavLink>
                    </li>
                    <li> 
                        <NavLink to="/galery"> Galery </NavLink>
                    </li>
                    <li> 
                        <NavLink to="/about"> About </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='config-panel'>
                    <h4> dark  </h4>
                    <h4> English </h4>
                </div>
        </div>

    );
};

export default TopNavBar;