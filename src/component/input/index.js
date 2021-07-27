import styled from 'styled-components';
import React from 'react';

const StyledTextArea = styled.textarea`
    font-size: 1rem;
    padding: 0.5rem;
    resize: none;
    border: none;
    outline:none;
    
    ::placeholder {
        opacity: 0.75;
    }
`;

const Input = React.memo(props => {

    const { style, placeholderValue, rows, inputText, handleChange } = props;

    return <StyledTextArea style={style} placeholder={placeholderValue} rows={rows} value={inputText} onChange={handleChange} />

});

export default Input;