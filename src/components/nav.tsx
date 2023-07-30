import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
  username: string;
}

interface NavProps {
  accessToken: string; 
}

const Nav = ({ accessToken }: NavProps) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
          withCredentials: true,
        });

        const data = response.data;
        setUser(data);
        console.log("Profile response:", response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, [accessToken]);

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear tokens, etc.)
    console.log("Logged out!");
  };

  console.log("User data:", user);

      
  return (
    <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">REG</a>

      <div className="ms-auto">
        {user && (
          <a className="nav-link d-flex align-items-center gap-2 text-white" href="#">
            <svg className="bi me-2"><use xlinkHref="#person-circle"/></svg>
            {user.username}
          </a>
        )}
        <a className="nav-link d-flex align-items-center gap-2 text-white" href="#" onClick={handleLogout}>
          <svg className="bi me-2"><use xlinkHref="#door-closed"/></svg>
        </a>
      </div>
    </header>
  );
}

export default Nav;