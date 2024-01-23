import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

 function SearchBar() {
   
  return (
    <div id="search">
    <Box 
     
      sx={{
        '& .MuiTextField-root': { m: 3, ml: -3},
        width: 400,
       
        maxWidth: '100%',
        
       
      }}
    >
      
      <TextField  fullWidth label="fullWidth" id="fullWidth" />
     
    </Box>
    <div id='btn-search'>
    <SearchIcon style={{ height: '50px', width: '35px' }}/>
    </div>
    </div>
  );
}

export default SearchBar;