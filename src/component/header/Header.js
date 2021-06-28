import styled from "styled-components";
const Container = styled.div`
  text-align: center;
`;
const HeaderContainer = styled.h1`
  font-size: 5rem;
  margin: 0rem;
  padding: 2rem;
  color: #757070;
`;

const Header = () => {
  return (
    <Container>
      <HeaderContainer>ToDo</HeaderContainer>
    </Container>
  );
};

export default Header;
