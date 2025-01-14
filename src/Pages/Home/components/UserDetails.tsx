import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/auth/selector";
import { logout } from "../../../store/auth/slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import styled from "styled-components";

const UserDetails = () => {
  const user = useSelector(selectUser);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Container>
      <Header>
        <UserInfo>
          <Avatar>{user?.username?.charAt(0).toUpperCase()}</Avatar>
          <AccountDetails>
            <UserName>Welcome! {user?.username}</UserName>
            <UserEmail>{user?.email}</UserEmail>
          </AccountDetails>
        </UserInfo>
        <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
      </Header>
      <Details>
        <Field>
          <TextTitle>Full Name:</TextTitle>
          <Text>{`${user?.firstName} ${user?.maidenName} ${user?.lastName}`}</Text>
        </Field>
        <Field>
          <TextTitle>Date Of Birth:</TextTitle>
          <Text>{user?.birthDate}</Text>
        </Field>
        <Field>
          <TextTitle>Gender:</TextTitle>    
          <Text>{user?.gender?.charAt(0).toUpperCase() + user?.gender?.slice(1)}</Text>
        </Field>
        <Field>
          <TextTitle>Address:</TextTitle>
          <Text>{user?.address?.address}</Text>
        </Field>
        <Field>
          <TextTitle>City:</TextTitle>
          <Text>{user?.address?.city}</Text>
        </Field>
        <Field>
          <TextTitle>State:</TextTitle>
          <Text>{user?.address?.state}</Text>
        </Field>
        <Field>
          <TextTitle>Postal Code:</TextTitle>
          <Text>{user?.address?.postalCode}</Text>
        </Field>
        <Field>
          <TextTitle>Country:</TextTitle>
          <Text>{user?.address?.country}</Text>
        </Field>
      </Details>
    </Container>
  );
};

export default UserDetails;

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 20px auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-right: 12px;
`;

const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Details = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Field = styled.div`
  display: flex;
  gap: 1rem;
`;
const TextTitle = styled.span`
  font-weight: 500;
  color: #333;
`;

const Text = styled.span`
  color: #333;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const UserEmail = styled.span`
  font-size: 14px;
  color: #666;
`;

const LogoutButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d9363e;
  }

  &:focus {
    outline: none;
  }
`;
