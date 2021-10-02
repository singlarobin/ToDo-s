import styled from 'styled-components';
import IconButton from '../IconButton';
import DeleteIcon from '../../assets/icons/deleteIcon';
import EditIcon from '../../assets/icons/editIcon';
import DoneIcon from '../../assets/icons/doneIcon';
import React, { Fragment, useCallback, useState } from 'react';
import Input from '../input';
import { themed } from '../../resource/contants';
import { lightTheme, darkTheme } from '../../resource/theme';

const Container = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background: ${({ theme }) => theme.glassColor2};
    border-radius: 0.3rem;
    opacity: 1;
    transition: opacity ${({ theme }) => theme.transitionDuration} background ${({ theme }) => theme.transitionDuration};
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Label = styled.div`
    font-size: 0.7rem;
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
    color: ${({ theme }) => theme.textNormal2};
    transition: color ${({ theme }) => theme.transitionDuration};
`;

const ItemNameDiv = styled.div`
    font-size: 1rem;
    flex: 1;
    color: ${({ theme }) => theme.textNormal};
    transition: color ${({ theme }) => theme.transitionDuration};
`;

const Checkbox = styled.input`
    margin-right: 1rem;
    cursor: pointer;
`;

const Item = props => {
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
                    handleChange={handleInputTextChange} style={{ flexGrow: '1', padding: '0.25 0.5rem', margin: '0.5rem' }} />
            </InputContainer>

            <IconButton onClick={handleDoneButtonClick}>
                <DoneIcon strokeColor={themed(lightTheme.textNormal2, darkTheme.textNormal2)}
                    style={{
                        cursor: 'pointer',
                        transition: 'stroke 0.25s'
                    }} />
            </IconButton>
        </Fragment> : <Fragment>
            <Checkbox type='checkbox' checked={completed} onChange={e => handleCheckboxClick(e.target.checked)} />
            <ItemNameDiv style={{ textDecoration: completed ? 'line-through' : 'none' }}>{name}</ItemNameDiv>
            <IconButton onClick={handleEditButtonClick}>
                <EditIcon strokeColor={themed(lightTheme.textNormal2, darkTheme.textNormal2)}
                    style={{
                        cursor: 'pointer',
                        transition: 'stroke 0.25s'
                    }} />
            </IconButton>
            <IconButton onClick={() => handleDeleteItem(index)}>
                <DeleteIcon strokeColor={themed(lightTheme.textNormal2, darkTheme.textNormal2)}
                    style={{
                        cursor: 'pointer',
                        transition: 'stroke 0.25s'
                    }} />
            </IconButton>
        </Fragment>}
    </Container>;
};


export default Item;