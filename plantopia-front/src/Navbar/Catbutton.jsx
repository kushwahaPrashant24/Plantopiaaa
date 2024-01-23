import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Categories from './Categories';


 function Catbutton() {
  return (
 
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          
          select
          label="All categories"
          defaultValue="All categories"
         
        >
          {Categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div> 
    </Box>
  );
}

export default Catbutton;