import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 1.5rem;
`;
const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

const Button = styled.button`
  width: 40%;
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 1.5rem;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const Link = styled.a`
  margin: 0.25rem;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN </Title>
        <Form>
          <Input
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="PASSWORD"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>HAVE YOU FORGOTTEN YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
