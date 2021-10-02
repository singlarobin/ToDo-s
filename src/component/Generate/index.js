import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import Header from '../Header';
import AddNewTask from '../addNewTask';
import List from '../List';
import { isEmptyString } from '../../utils';

const Div = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MobileView = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    z-index: 3;
    
    @media (min-width: 1024px){
        display: none;
    }
`;

const WebView = styled.div`
    display: none;

    @media (min-width: 1024px){
        display: flex;
        flex-direction: row;
        width: 70vw;
        max-width: 900px;
        height: 70vh;
        background: ${({ theme }) => theme.glassGradient};
        border-radius: 2rem;
        z-index: 3;
        backdrop-filter: blur(1rem);
        opacity: 1;
        transition: opacity ${({ theme }) => theme.transitionDuration}, background ${({ theme }) => theme.transitionDuration};
    }
`;

const LeftContainer = styled.div`
    display: flex;  
    flex-direction: column;

    @media (min-width: 1024px){
        flex: 0.5;
        background: ${({ theme }) => theme.glassColor1};
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        opacity: 1;
        transition: opacity ${({ theme }) => theme.transitionDuration}, background ${({ theme }) => theme.transitionDuration};
    }
`;

const RightContainer = styled.div`
    @media (min-width: 1024px){
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
    }
`

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
        const currList = toDoList.map((item, currIndex) => {
            if (currIndex === index) {
                item.completed = value;
            }
            return item;
        })
        setToDoList(currList);
    }, [toDoList]);

    return <Div>
        <MobileView>
            <LeftContainer>
                <Header />
                <AddNewTask handleAddNewTask={handleAddNewTask} />
            </LeftContainer>
            <List toDoList={toDoList} handleEditTask={handleEditTask}
                handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} />
        </MobileView>

        <WebView>
            <LeftContainer>
                <Header />
                <AddNewTask handleAddNewTask={handleAddNewTask} />
            </LeftContainer>
            <RightContainer>
                <List toDoList={toDoList} handleEditTask={handleEditTask}
                    handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} />
            </RightContainer>
        </WebView>
    </Div>;

};

export default Generate;