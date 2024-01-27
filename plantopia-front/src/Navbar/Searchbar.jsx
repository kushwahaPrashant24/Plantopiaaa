import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

 function SearchBar() {

  const [input, setInput] = React.useState("");

  function HandleInput(event){
    const TextInput = event.target.value;
    setInput(TextInput);
    
  }
  

  function HandleClick(){
    console.log("i got click");
  }
   
  return (
    <div id="search">
    <Box 
     
      sx={{
        '& .MuiTextField-root': { m: 3, ml: -3},
        width: 400,
       
        maxWidth: '100%',
        
       
      }}
    >
      
      <TextField onChange={HandleInput} fullWidth label="Search" id="fullWidth" />
     
    </Box>
    <div id='btn-search'>
    <button id='btn-searchclick' onClick={HandleClick}><SearchIcon  style={{ height: '50px', width: '35px' }}/></button>
    </div>
    </div>
  );
}

export default SearchBar;