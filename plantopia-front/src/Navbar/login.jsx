import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { green } from "@mui/material/colors";


function Login(){
return <div id="login">
      <PersonIcon 
      style={{ height: '50px', width: '50px' }} 
       sx={{
      color: "green",   
      }}/>
      <FavoriteIcon 
      style={{ height: '50px', width: '50px' }} 
      sx={{
      color: "green",  
      }}/>
     <ShoppingCartIcon 
     style={{ height: '50px', width: '50px' }} 
         sx={{
      color: "green",  
      }}
     />
</div>
}

export default Login;