import styled from "styled-components";
import Header from "./component/header/Header";
import NewItem from "./component/newItem/NewItem";
import Content from "./component/content/Content";
import { useState } from "react";

const AppContainer = styled.div`
  background: #ffffc7;
  height:inherit;
  width:inherit;
`;

const App = () => {
  const [newItemCreated, setNewItemCreated] = useState(false);
  const handleContentLoading = (value) => {
    setNewItemCreated(value);
  };
  return (
    <AppContainer>
      <Header />
      <NewItem handleLoading={handleContentLoading} />
      <Content
        newItemCreated={newItemCreated}
        handleLoading={handleContentLoading}
      />
    </AppContainer>
  );
};

export default App;
