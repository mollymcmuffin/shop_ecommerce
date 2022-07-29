import styled from "styled-components";
import { Facebook, Instagram, Twitter, Phone, Email } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;
const Center = styled.div`
  flex: 1;
  padding: 1.5rem;
`;

const Title = styled.h3`
  margin-bottom: 1.75rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.5rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 2rem 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Z&X</Logo>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi libero
          perspiciatis aperiam sed ex laboriosam explicabo nobis vitae
          reiciendis quisquam? Sed blanditiis et reiciendis neque velit qui
          tempore dolorem ullam.
        </Description>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Phone style={{ marginRight: "0.5rem" }} />
          +65 90121332
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "0.5rem" }} />
          leezhengxuan98@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
