import { useState, useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";
const Container = styled.div`
  margin: 0rem auto;
  padding: 2rem;
  width: 60vw;
`;

const Div = styled.div`
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 1rem;
  @media (min-width: 700px) {
    overflow: hidden auto;
    max-height: 350px;
  }
`;

const Content = (props) => {
  const [toDoList, setToDoList] = useState([]);
  const { newItemCreated, handleLoading } = props;
  useEffect(() => {
    fetch("http://localhost:5000/todolist", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setToDoList(result.data);
          console.log(result.data);
          handleLoading(false);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, [newItemCreated, handleLoading]);
  return (
    <Container>
      {/* <Scrollbar> */}
      <Div>
        {toDoList.map((element) => {
          return (
            <Item
              key={element.id}
              id={element.id}
              name={element.name}
              handleLoading={handleLoading}
            />
          );
        })}
      </Div>
      {/* </Scrollbar> */}
    </Container>
  );
};

export default Content;
