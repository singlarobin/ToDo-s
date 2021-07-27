import styled from 'styled-components';
import Header from './component/Header';
import Generate from './component/Generate';

const AppContainer = styled.div`
  background: #ffffc7;
  height:inherit;
  width:inherit;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Generate />
    </AppContainer>
  );
};

export default App;
