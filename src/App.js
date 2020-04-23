import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import sum from './Sum';
import { Container, Box, Button, Grid, Input } from '@material-ui/core';

function App() {
  console.log(sum());

  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='App'>
      <Grid container alignContent='center'>
        <Button
          className='clickButton'
          variant='contained'
          color='primary'
          m={5}
          onClick={() => setModalVisible(!modalVisible)}>
          Click!
        </Button>
        <Button variant='contained' color='primary' m={5}>
          Do not click!
        </Button>
        {modalVisible ? (
          <>
            <h1>{inputValue}</h1>
            <Button variant='contained' color='primary' m={5}>
              Clicked
            </Button>
            <Input
              className='putin'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}></Input>
          </>
        ) : (
          <h2>{inputValue}</h2>
        )}
      </Grid>
    </div>
  );
}

export default App;
