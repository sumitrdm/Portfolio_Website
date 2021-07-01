import React from "react";
import {slide as Menu} from 'react-burger-menu'
import "./Navbar.css";
import {Link,withRouter} from 'react-router-dom'

class Navbar extends React.Component
{
    render()
    {
        const {location} = this.props;  /*Destructured location from props(history se aayaa(yeh by withRouter)) */
        // console.log(location)
        const  homeClass = location.pathname === '/' ? 'active-item' : '';
        const  aboutClass = location.pathname === '/about' ? 'active-item' : '';
        const  projectsClass = location.pathname === '/projects' ? 'active-item' : '';
        const  skillsClass = location.pathname === '/skills' ? 'active-item' : '';
        const  contactClass = location.pathname === '/contact' ? 'active-item' : '';

        return (
            <Menu>
            {/*We never wanted to use <a> inside our react router application we have Link(inside react-router-dom*/ }
                <Link to="/" className={`menu-item ${homeClass}`}>Home</Link>
                <Link to="/about" className={`menu-item ${aboutClass}`}>About</Link>
                <Link to="/projects" className={`menu-item ${projectsClass}`}>Projects</Link>
                <Link to="/skills" className={`menu-item ${skillsClass}`}>Skills</Link>
                <Link to="/contact" className={`menu-item ${contactClass}`}>Contact</Link>

            </Menu>
          );
    }
}
export default withRouter(Navbar);