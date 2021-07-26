import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import AddNewTask from "../addNewTask";
import List from "../List";

const Div = styled.div`

`;

//  [  {name: 'React', completed: true}, 
//     {name: 'html', completed: false},
//  ]

const Generate = () => {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        setToDoList(JSON.parse(localStorage.getItem('ToDoList')));
    }, []);

    useEffect(() => {
        localStorage.setItem('ToDoList', JSON.stringify(toDoList));
    }, [toDoList]);

    const handleAddNewTask = useCallback(item => setToDoList([...toDoList, item]), [toDoList]);
    const handleDeleteTask = useCallback(index=> {}, []);

    return <Div>
        <AddNewTask toDoList={toDoList} handleAddNewTask={handleAddNewTask} />
        <List toDoList={toDoList} handleDeleteTask={handleDeleteTask} />
    </Div>

};

export default Generate;