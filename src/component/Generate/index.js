import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import AddNewTask from '../addNewTask';
import List from '../List';
import { isEmptyString } from '../../utils';

const Div = styled.div`

`;

//  [  {name: 'React', completed: true}, 
//     {name: 'html', completed: false},
//  ]

const Generate = () => {
    const [toDoList, setToDoList] = useState(null);

    useEffect(() => {
        setToDoList(JSON.parse(localStorage.getItem('ToDoList')));
    }, []);

    useEffect(() => {
        localStorage.setItem('ToDoList', JSON.stringify(toDoList));
    }, [toDoList]);

    const handleAddNewTask = useCallback(item => setToDoList(!isEmptyString(toDoList) ? [...toDoList, item] : [item]), [toDoList]);
    const handleDeleteTask = useCallback(index => {
        const currList = toDoList.filter(item => item !== toDoList[index]);
        setToDoList(currList);
    }, [toDoList]);

    const handleEditTask = useCallback((index, taskName) => {
        const currList = toDoList.map((item, currIndex) => {
            if (currIndex === index) {
                item.name = taskName;
            }
            return item;
        });
        setToDoList(currList);
    }, [toDoList]);

    const handleCompleteTask = useCallback((index, value) => {
        const currList =toDoList.map((item, currIndex) => {
            if(currIndex === index){
                item.completed = value;
            }
            return item;
        })
        setToDoList(currList);
    }, [toDoList]);

    console.log('generate:', toDoList);
    return <Div>
        <AddNewTask handleAddNewTask={handleAddNewTask} />
        <List toDoList={toDoList} handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} />
    </Div>;

};

export default Generate;