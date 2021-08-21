import styled from 'styled-components';
import React from 'react';

const Div = styled.div``;

const IconButton = React.memo(props => {

    const { children, style, onClick } = props;

    return <Div style={style} onClick={onClick}>
        {children}
    </Div>
});

export default IconButton;