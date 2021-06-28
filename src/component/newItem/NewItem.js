import { useState } from "react";
import styled from "styled-components";
import { AddBoxSharp } from "@material-ui/icons";

const Container = styled.div`
  margin: 0rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
const Div = styled.div`
  padding: 1rem;
  border: 2px solid #757070;
  border-radius: 0.5rem;
  align-items: center;
`;
const Input = styled.input.attrs((props) => ({
  id: "input-text",
  type: "text",
  placeholder: "Add New Task",
}))`
  color: #757070;
  font-size: 1.5rem;
  padding: 0.5rem;
`;
const Icon = styled(AddBoxSharp)`
  padding: 0.5rem;
  transform: translateY(0.5rem) scale(1.5);
}
`;
const NewItem = (props) => {
  const [taskName, setTaskName] = useState("");
  const { handleLoading } = props;
  const handleClick = () => {
    document.getElementById("input-text").value = " ";
    fetch("http://localhost:5000/todolist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: taskName }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          handleLoading(true);
        }
      })
      .catch((error) => console.log("error: ", error));
  };

  return (
    <Container>
      <Div>
        <Input onChange={(event) => setTaskName(event.target.value)}></Input>
        <Icon onClick={() => handleClick()} />
      </Div>
    </Container>
  );
};

export default NewItem;
