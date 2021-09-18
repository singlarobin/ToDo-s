import { useCallback } from 'react';
import React from 'react';
import styled from 'styled-components';
import { isEmptyString } from '../../utils';
import Item from '../Item';

const Div = styled.div`
    width: 70vw;
    height: 40vh;
    overflow-y: auto;
    margin: 1rem auto;
    padding: 1rem;
    background: ${({ theme }) => theme.glassColor1};
    border-radius: 0.5rem;

    @media (min-width: 1024px){
        width: 35vw;
        max-width: 500px;
        height: 35vh;
    }
`;
const EmptyDiv = styled.div`
    height: inherit;
    font-size: 2rem;
    // margin: 6.5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.textNormal};

    @media (min-width: 1024px){
        // margin: 0rem;
    }
`;

const List = props => {
    const { toDoList, handleEditTask, handleDeleteTask, handleCompleteTask } = props;

    const handleEditItem = useCallback((index, taskName) => handleEditTask(index, taskName), [handleEditTask]);
    const handleDeleteItem = useCallback(index => handleDeleteTask(index), [handleDeleteTask]);
    const handleCompleteItem = useCallback((index, value) => handleCompleteTask(index, value), [handleCompleteTask]);

    return <Div>
        {!isEmptyString(toDoList) && toDoList.length !== 0 ? (toDoList.map((item, index) => {
            return <Item key={index} index={index} toDoItem={item} handleEditItem={handleEditItem}
                handleDeleteItem={handleDeleteItem} handleCompleteItem={handleCompleteItem} />
        })) : <EmptyDiv>No Task!</EmptyDiv>}
    </Div>
};

export default List;