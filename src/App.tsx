import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import People from './component/peoples/people';
import PeopleContext from './peopleContext';

function App() {
  return (
    <ChakraProvider>
      <PeopleContext>
        <People />
      </PeopleContext>
    </ChakraProvider>
  );
}

export default App;
