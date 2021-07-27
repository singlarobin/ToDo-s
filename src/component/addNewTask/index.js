import { useCallback, useState} from 'react';
import React from 'react';
import styled from 'styled-components';
import Input from '../input';
import IconButton from '../IconButton';
import AddIcon from '../../assets/addIcon';

const Container = styled.div`
  margin: 1.5rem auto;
  padding: 1rem;
  width: 70vw;
  display: flex;
  border: 2px solid #757070;
  border-radius: 0.5rem;
  align-items: center;
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
    <Input placeholderValue={'Add New Task'} rows={'1'} inputText={taskName}
      handleChange={handleInputTextChange} style={{ flexGrow: '1' }} />
    <IconButton onClick={handleAddButton}
      style={{
        padding: '0.5rem',
      }} >
      <AddIcon />
    </IconButton>
  </Container>;
});

export default AddNewTask;
