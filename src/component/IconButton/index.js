import styled from "styled-components";

const Div = styled.div``;

const IconButton = props => {

    const { children, style, onClick } = props;

    return <Div style={style} onClick={onClick}>
        {children}
    </Div>
};

export default IconButton;