import { useCallback, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import Input from '../input';
import Button from '../button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px){
        margin: 2.5rem auto;
    }
`;

const AddNewTask = React.memo(props => {
    const [taskName, setTaskName] = useState('');
    const { handleAddNewTask } = props;


    const handleInputTextChange = useCallback((e) => setTaskName(e.target.value), []);

    const handleAddButton = useCallback(() => {
        const currTask = { name: taskName, completed: false };
        setTaskName('');
        handleAddNewTask(currTask);
    }, [taskName, handleAddNewTask]);

    return <Container>
        <Input placeholderValue={'Add New Task'} rows={'2'} inputText={taskName}
            handleChange={handleInputTextChange} style={{ flexGrow: '1' }} />
        <Button name={`CREATE`} handleClick={handleAddButton} />
    </Container>;
});

export default AddNewTask;
