import styled from "styled-components";
import { Delete } from "@material-ui/icons";

const Container = styled.div`
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 15fr 1fr;
  border: 2px solid #757070;
  border-radius: 0.5rem;
  background: #ffffff;
  font-size: 1.5rem;
`;

// const IconContainer = styled.div`
//   display: flex;
//   padding: 0.5rem 5rem;
// `;
const Item = (props) => {
  const { id, name, handleLoading } = props;
  // const handleEditRequest = () => {};
  const handleDeleteRequest = () => {
    fetch("http://localhost:5000/todolist/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())

      .then((result) => {
        if (result.success) {
          console.log(result.data);
          handleLoading(true);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  return (
    <Container>
      {name}
      <Delete onClick={() => handleDeleteRequest()} />
      {/* <IconContainer>
        <Edit onClick={() => handleEditRequest()} />

        <Delete onClick={() => handleDeleteRequest()} />
      </IconContainer> */}
    </Container>
  );
};

export default Item;
