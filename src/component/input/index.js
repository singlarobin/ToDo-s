import styled from 'styled-components';
import React from 'react';

const StyledTextArea = styled.textarea`
    font-size: 1rem;
    color: ${({ theme }) => theme.textNormal};
    padding: 0.5rem;
    resize: none;
    border: none;
    outline:none;
    background: ${({ theme }) => theme.glassColor2};
    opacity: 1;
    transition: opacity ${({ theme }) => theme.transitionDuration}, color ${({ theme }) => theme.transitionDuration}, background ${({ theme }) => theme.transitionDuration};
    border-radius: 0.3rem;
    ::placeholder {
        color: ${({ theme }) => theme.textNormal};
        opacity: 0.75;
        transition: color ${({ theme }) => theme.transitionDuration};
    }
`;

const Input = React.memo(props => {

    const { style, placeholderValue, rows, inputText, handleChange } = props;

    return <StyledTextArea style={style} placeholder={placeholderValue} rows={rows} value={inputText} onChange={handleChange} />

});

export default Input;