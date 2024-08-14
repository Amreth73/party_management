import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #1a202c;
  padding: 20px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const SidebarTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #e2e8f0;
`;

const SidebarLink = styled(NavLink)`
  margin: 10px 0;
  padding: 10px;
  text-decoration: none;
  color: #a0aec0;
  &.active {
    background-color: #4a5568;
  }
  &:hover {
    background-color: #4a5568;
    color: #ffffff;
  }
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #e53e3e;
  border: none;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #c53030;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing user data, tokens, etc.)
    navigate("/");
  };
  return (
    <SidebarContainer>
      <SidebarTitle>Party Management</SidebarTitle>
      <SidebarLink to="/dashboard" exact>
        Dashboard
      </SidebarLink>
      <SidebarLink to="/orders">Orders</SidebarLink>
      <SidebarLink to="/venuelist">Venues</SidebarLink>
      <SidebarLink to="/revenue">Revenue</SidebarLink>
      {/* <SidebarLink to="/events">Events</SidebarLink> */}

      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
