import { useCallback } from 'react';
import React from 'react';
import styled from 'styled-components';
import { isEmptyString } from '../../utils';
import Item from '../Item';

const Div = styled.div`
    width: 80vw;
    margin: 1rem auto;
    padding: 1rem;
`;
const EmptyDiv = styled.div`
    font-size: 2rem;
    text-align: center;
`;

const List = React.memo(props => {
    const { toDoList, handleDeleteTask } = props;

    const handleDeleteItem = useCallback(index => {
        handleDeleteTask(index);
    }, [handleDeleteTask]);
    console.log(isEmptyString(toDoList));
    return <Div>
        {!isEmptyString(toDoList) && toDoList.length !== 0 ? (toDoList.map((item, index) => {
            return <Item key={index} index={index} toDoItem={item} handleDeleteItem={handleDeleteItem} />
        })) : <EmptyDiv>No Task!</EmptyDiv>}
    </Div>
});

export default List;