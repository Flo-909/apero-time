import React from 'react'
import './App.css';
import { Container} from '@material-ui/core';
import Hours from './components/Hours'

function App() {
  return (
    <Container maxWidth="sm">
      <Hours/>
    </Container>
  );
}

export default App;
