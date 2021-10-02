import styled from "styled-components";
import React from 'react';

const Container = styled.div`
    font-size: 4rem;
    margin: 3.5rem auto 2rem;
    color: ${({ theme }) => theme.textHeading};
    transition: color ${({ theme }) => theme.transitionDuration};

    @media (min-width: 1024px){
        margin: 2rem auto;
    }
`;

const Header = React.memo(() => {
    return (
        <Container>
            ToDo
        </Container>
    );
});

export default Header;


