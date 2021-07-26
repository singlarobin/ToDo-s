import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { isEmptyString } from "../../utils";
import Item from "../Item";

const Div = styled.div`
    width: 80vw;
    margin: 1rem auto;
    padding: 1rem;
    text-align:center;
`;
const EmptyDiv = styled.div`
    font-size: 2rem;
`;

const List = props => {
    const { toDoList, handleDeleteTask } = props;

    const handleDeleteItem = useCallback(index => handleDeleteTask(index), [handleDeleteTask]);

    return <Div>
        {!isEmptyString(toDoList) ? (toDoList.map((item, index) => {
            return <Item key={index} index={index} toDoItem={item} handleDeleteItem={handleDeleteItem} />
        })) : <EmptyDiv>No Task!</EmptyDiv>}
    </Div>
};

export default List;