import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 1.5rem;
`;
const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem 0.5rem 0 0;
  padding: 0.5rem;
`;
const Agreement = styled.span`
  font-size: 0.75rem;
  margin: 1rem 0;
`;
const Button = styled.button`
  width: 40%;
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="NAME" />
          <Input placeholder="LAST NAME" />
          <Input placeholder="USERNAME" />
          <Input placeholder="EMAIL" />
          <Input placeholder="PASSWORD " />
          <Input placeholder="CONFIRM PASSWORD" />
          <Agreement>
            BY CREATING AN ACCOUNT, I CONSENT TO THE PROCESSING OF MY PERSONAL
            DATA IN ACCORDANCE WITH THE <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
