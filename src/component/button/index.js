import styled from "styled-components";

const ButtonContainer = styled.button`
    font-size:1rem;
    color: ${({ theme }) => theme.textHeading};
    padding: 0.75rem 1rem;
    margin: 1.5rem auto;
    border: 0.05rem solid ${({ theme }) => theme.textHeading};
    border-radius: 0.2rem;
    background: ${({ theme }) => theme.glassColor1};
    cursor: pointer;
    transition: color ${({ theme }) => theme.transitionDuration}, background ${({ theme }) => theme.transitionDuration};

    &:hover,
    &:focus {
        box-shadow: 1px 2px 2px ${({ theme }) => theme.butonShadowColor} inset, -1px -2px 1px ${({ theme }) => theme.butonShadowColor} inset;
        transition: box-shadow ${({ theme }) => theme.transitionDuration};
    }
`;

const Button = props => {
    const { name, handleClick, style } = props;

    return <ButtonContainer style={style} onClick={handleClick}>{name}</ButtonContainer>;
}

export default Button;