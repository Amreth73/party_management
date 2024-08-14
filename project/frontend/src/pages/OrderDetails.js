import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Pagination,
  Form,
  InputGroup,
  Button,
  Container,
} from "react-bootstrap";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

// Light theme with clean aesthetics
const ModernBackground = styled.div`
  background: #f8f9fa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Header = styled.div`
  background: #007bff;
  padding: 20px;
  color: white;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const DashboardContainer = styled(Container)`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 100%;
`;

const StyledTable = styled(Table)`
  thead {
    background-color: #007bff;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 10px;
  }

  tbody tr {
    transition: all 0.2s ease-in-out;
  }

  tbody tr:hover {
    background-color: #e9ecef;
    transform: translateY(-2px);
  }

  th,
  td {
    vertical-align: middle;
    text-align: center;
    border-color: #dee2e6;
    padding: 12px;
  }

  th {
    border-top: none;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledPagination = styled(Pagination)`
  .page-item.active .page-link {
    background-color: #007bff;
    border-color: #007bff;
    color: #ffffff;
    border-radius: 50px;
  }

  .page-item .page-link {
    color: #007bff;
    border-radius: 50px;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .page-item .page-link:hover {
    background-color: #0056b3;
    color: #ffffff;
  }
`;

const SearchButton = styled(Button)`
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  border-radius: 0 50px 50px 0;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
    color: #ffffff;
  }
`;

const StyledInputGroup = styled(InputGroup)`
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  overflow: hidden;
`;

const StyledFormControl = styled(Form.Control)`
  border-radius: 50px 0 0 50px;
  border: none;
  padding: 15px 20px;
  font-size: 16px;
  background-color: #f1f3f5;
  color: #495057;

  &:focus {
    background-color: #ffffff;
    color: #495057;
    border: none;
    box-shadow: none;
  }
`;

const StyledInputGroupPrepend = styled(InputGroup.Text)`
  background-color: #f1f3f5;
  border: none;
  color: #007bff;
  border-right: none;
`;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users/all")
      .then((response) => {
        setUsers(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.refreshToken.tokenId.toString().includes(searchTerm) ||
      user.refreshToken.refreshToken.toLowerCase().includes(searchTerm) ||
      user.refreshToken.expirationTime.toLowerCase().includes(searchTerm)
  );

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ModernBackground>
      <DashboardContainer>
        <Header>
          <h2>User Dashboard</h2>
        </Header>
        <StyledInputGroup className="mb-4">
          <StyledInputGroupPrepend>
            <FaSearch />
          </StyledInputGroupPrepend>
          <StyledFormControl
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <SearchButton>Search</SearchButton>
        </StyledInputGroup>
        <StyledTable striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Token ID</th>
              <th>Refresh Token</th>
              <th>Expiration Time</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.refreshToken.tokenId}</td>
                  <td>{user.refreshToken.refreshToken}</td>
                  <td>{user.refreshToken.expirationTime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </StyledTable>
        <PaginationContainer>
          <StyledPagination>
            {[...Array(totalPages).keys()].map((number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => handleClick(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
          </StyledPagination>
        </PaginationContainer>
      </DashboardContainer>
    </ModernBackground>
  );
};

export default UserList;
