import styled from 'styled-components';
import IconButton from '../IconButton';
import DeleteIcon from '../../assets/deleteIcon';
import React from 'react';

const Container = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background-color: #fff;
`;

const Div = styled.div`
    font-size: 1rem;
    flex-grow: 1;
`;

const Item = React.memo(props => {
    const { index, toDoItem:{name, completed}, handleDeleteItem } = props;

    return <Container>
        <Div>{name}</Div>
        <IconButton onClick={() =>handleDeleteItem(index)}>
            <DeleteIcon/>
        </IconButton>
    </Container>;
});

export default Item;