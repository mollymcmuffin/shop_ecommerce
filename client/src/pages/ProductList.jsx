import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import styled from "styled-components";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 1.5rem;
`;
const Filter = styled.div`
  margin: 1.5rem;
`;

const FilterText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
`;

const Select = styled.select`
  padding: 0.2rem;
  margin-right: 1rem;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>Black</Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>

          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
