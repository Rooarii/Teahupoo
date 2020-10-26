import './App.css';
import Card from './components/Card';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Card />
      <Card />
    </Container>
  );
}

export default App;
