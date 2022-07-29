import styled from "styled-components";

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
`;

const Link = styled.a`
  margin: 0.25rem;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN </Title>
        <Form>
          <Input placeholder="USERNAME" />
          <Input placeholder="PASSWORD" />

          <Button>LOGIN</Button>
          <Link>HAVE YOU FORGOTTEN YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
