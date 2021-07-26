import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../input";
import IconButton from "../IconButton";
import AddIcon from "../../assets/addIcon";
import { isEmptyString } from "../../utils";

const Container = styled.div`
  margin: 1.5rem auto;
  padding: 1rem;
  width: 70vw;
  display: flex;
  border: 2px solid #757070;
  border-radius: 0.5rem;
  align-items: center;
`;

// const Input = styled.input.attrs((props) => ({
//   id: 'input-text',
//   type: 'text',
//   placeholder: 'Add New Task',
// }))`
//   color: #757070;
//   font-size: 1rem;
//   padding: 0.5rem;
// `;

const AddNewTask = props => {
  const [taskName, setTaskName] = useState("");
  const { toDoList, handleAddNewTask } = props;

 
  const handleInputTextChange = useCallback((e) => {
    console.log(e.target.value);
    setTaskName(e.target.value);
  }, []);

  const handleAddButton = useCallback(() => {
    const currList = { name: taskName, completed: false };
    setTaskName('');
    handleAddNewTask(currList);

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
};

export default AddNewTask;
