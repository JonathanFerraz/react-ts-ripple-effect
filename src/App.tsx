import React from 'react';
import styled from 'styled-components';

import { Ripple } from './Components/Ripple';

export const List = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 150px;
  background: #00e66e;

`;

function App() {
  return (
    <div className="App">
    <List>
      <Ripple color="#00e66e" />
    </List>
    </div>
  );
}

export default App;
