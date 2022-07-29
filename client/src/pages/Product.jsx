import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 2.5rem;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 2rem;
`;

const Title = styled.h1``;

const Description = styled.p`
  font-weight: 200;
  margin: 1.5rem 0;
`;

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 1.5rem 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;
const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 1rem;
  margin-right: 0.5rem;
`;
const FilterColor = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin: 0 0.2rem;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 0.5rem;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.2rem;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  font-weight: 500;
`;

const Product = () => {
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://static.zara.net/photos///2022/V/0/2/p/6861/433/251/2/w/1354/6861433251_1_1_1.jpg?ts=1641548098451" />
        </ImgContainer>
        <InfoContainer>
          <Title>SLIM COMFORT FIT CHINO TROUSERS</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            temporibus cum eaque sint laudantium natus error sapiente, magni
            nobis consequatur facilis molestiae consectetur sed atque voluptates
            non animi dignissimos omnis?
          </Description>
          <Price>$69.90</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="grey" />
              <FilterColor color="brown" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO BAG</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
