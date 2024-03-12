import { Link , Outlet} from "react-router-dom";
import React from "react";

 const  Layout : React.FC = () => {
    return (
      <div>
        <nav className="navbar" style={{ backgroundColor: 'darkblue' }}>
  
        <div className="navbar-title text-white font-weight-bold m-2 px-5"
        style={{ fontSize: '32px' }}>Dominion Royale</div>
  
        <div className="navbar-buttons"> 
        <Link to="/">
          <button className="navbar-button btn btn-primary btn-lg m-4 ">Home</button> 
        </Link>
        <Link to="/lobby">
          <button className="navbar-button btn btn-primary btn-lg m-4 ">Lobby</button> 
        </Link>
        <Link to="/rules">
          <button className="navbar-button btn btn-primary btn-lg m-4 ">Rules</button> 
        </Link>
        <Link to="/store">
          <button className="navbar-button btn btn-primary btn-lg m-4 ">Store</button> 
        </Link>
  
        </div>
        </nav>
  
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
        <div className="footer" style={{backgroundColor: 'darkblue', color: 'white', padding: '40px', textAlign: 'center' }}>
          <div className="container">
            <p>&copy; 2023 Dom. All rights reserved. | Address | Phone Number | Email</p>
          </div>
        </div>
      </div>
    );
  }

  export default Layout
  