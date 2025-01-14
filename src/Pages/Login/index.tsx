import React, { useEffect } from "react";
import { setFormFields } from "./store/slice";
import { userLogIn } from "../../store/auth/action";
import { useAppDispatch } from "../../store";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectError, selectIsAuthenticated } from "../../store/auth/selector";
import { setErrorNull } from "../../store/auth/slice";

const Login = () => {
  const dispatch = useAppDispatch();
  const error = useSelector(selectError);
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(userLogIn());
  };

  return (
    <PageWrapper>
      <Container>
        <HeaderContainer>
          <BoldText>Welcome</BoldText>
          <LightText>Please Sign In to continue!</LightText>
        </HeaderContainer>
        <FormContainer onSubmit={handleSubmit}>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            autoComplete="current-username"
            placeholder="Enter your username"
            onChange={(e) => {
              dispatch(setErrorNull());
              dispatch(
                setFormFields({ field: "username", value: e.target.value })
              );
            }}
          />
          <Label>Password</Label>
          <Input
            type={"password"}
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            onChange={(e) => {
              dispatch(setErrorNull());
              dispatch(
                setFormFields({ field: "password", value: e.target.value })
              );
            }}
          />
          <div>
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
          {error && <ErrorText>{error}</ErrorText>}
          <SubmitButton type="submit">Sign In</SubmitButton>
        </FormContainer>
      </Container>
    </PageWrapper>
  );
};

export default Login;

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 1rem;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  width: 100%;
  background: linear-gradient(
    58deg,
    rgba(243, 172, 18, 1) 20%,
    rgba(241, 196, 15, 1) 100%
  );
  padding-top: 1rem;
`;

const BoldText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const LightText = styled.p`
  font-size: 0.9rem;
  color: #ffffff;
`;

const Label = styled.label``;

const FormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

const Input = styled.input`
  height: 42px;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  outline: none;
  padding: 0 1rem;
  font-size: 1rem;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(241, 196, 15, 1);
  }
`;

const ErrorText = styled.p`
  color: red;
  margin: 0 auto;
`;

const SubmitButton = styled.button`
  margin: 0 auto;
  width: 100%;
  max-width: 150px;
  padding: 10px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: linear-gradient(
    58deg,
    rgba(243, 172, 18, 1) 20%,
    rgba(241, 196, 15, 1) 100%
  );

  &:hover {
    filter: brightness(1.05);
  }
`;
