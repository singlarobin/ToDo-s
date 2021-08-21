import styled from 'styled-components';
import IconButton from '../IconButton';
import DeleteIcon from '../../assets/deleteIcon';
import EditIcon from '../../assets/editIcon';
import DoneIcon from '../../assets/doneIcon';
import React, { Fragment, useCallback, useState } from 'react';
import Input from '../input';

const Container = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background-color: #fff;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const Label = styled.div`
    font-size: 0.7rem;
`;

const ItemNameDiv = styled.div`
    font-size: 1rem;
    flex-grow: 1;
`;

const Checkbox = styled.input`
    margin-right: 1rem;
    cursor: pointer;
`;

const Item = React.memo(props => {
    const { index, toDoItem: { name, completed }, handleEditItem, handleDeleteItem, handleCompleteItem } = props;
    const [isEdit, setIsEdit] = useState(false);
    const [taskName, setTaskName] = useState('');

    const handleEditButtonClick = useCallback(() => {
        setIsEdit(true);
        setTaskName(name);
    }, [name]);
    const handleDoneButtonClick = useCallback(() => {
        setIsEdit(false);
        handleEditItem(index, taskName);
    }, [index, taskName, handleEditItem]);
    const handleCheckboxClick = useCallback(value => handleCompleteItem(index, value), [index, handleCompleteItem]);

    const handleInputTextChange = useCallback(e => setTaskName(e.target.value), []);

    return <Container>
        {isEdit ? <Fragment>
            <InputContainer>
                <Label>{'Edit Name'}</Label>
                <Input placeholderValue={'Task Name'} rows={1} inputText={taskName}
                    handleChange={handleInputTextChange} style={{ flexGrow: '1', padding: '0rem' }} />
            </InputContainer>

            <IconButton onClick={handleDoneButtonClick}>
                <DoneIcon />
            </IconButton>
        </Fragment> : <Fragment>
            <Checkbox type='checkbox' checked={completed} onChange={e => handleCheckboxClick(e.target.checked)} />
            <ItemNameDiv style={{ textDecoration: completed ? 'line-through' : 'none' }}>{name}</ItemNameDiv>
            <IconButton onClick={handleEditButtonClick}>
                <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDeleteItem(index)}>
                <DeleteIcon />
            </IconButton>
        </Fragment>}


    </Container>;
});

export default Item;