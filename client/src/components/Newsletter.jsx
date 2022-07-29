import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  background-color: beige;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;
const Description = styled.p`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
  text-align: center;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 2rem;
  background-color: white;
  display: flex;
  justify-content: space-between;

  border: 1px solid lightgray;
`;
const Input = styled.input`
  flex: 8;
  padding: 1rem;
  border: none;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite products.
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
