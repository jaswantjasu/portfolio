import React, { useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './HeaderStyles'
import Navbar from './Navbar'
import { Decorator } from "../common/commonComponent";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import DrawerComponent from "./DrawerComponent";
import Typed from "react-typed";


export default function HeadersComponents() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "Blog", Id: "Blog" },
    { label: "Timeline", Id: "Timeline" },
    { label: "Contact", Id: "Contact" },
  ];

  return (
    <Box className={classes.HeardeWraper} id='Headder'>
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

      <Box className={classes.Headercontaier} style={{ padding: "75px" }}>

        <Typography varinat='h3' component='h4' className={classes.headerTitle}>

          I'm a <span style={{ padding: "5px" }}></span>
          <Typed
            strings={[" Web Developer,", " Android Developer,", " Blockchain Developer,"]}
            typeSpeed={70}
            backSpeed={30}
            loop
          />
        </Typography>
        <Typography varinat='h3' component='h4' className={classes.headerDesc} >
          “When something is important enough,
          <br />you do it even if the odds are not in your favor. ”  <strong>
            <br/>
            - Elon Musk
            
         
          </strong>
         
         
        </Typography>

        {Decorator({
          label: "About Us",
          withIcon: true,
          Icon: <ArrowDownwardRoundedIcon />,
        
          
        })}
      </Box>
    </Box>
  );
}
