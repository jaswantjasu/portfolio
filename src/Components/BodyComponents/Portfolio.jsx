import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commonComponent";
import { useStyles } from "./BodyStyles";


import image1 from "../../images/2.jpeg";
import image2 from "../../images/3.jpeg";
import image3 from "../../images/4.jpeg";
import image4 from "../../images/6.jpeg";
import image5 from "../../images/8.jpeg";
import image6 from "../../images/9.jpeg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: image1, title: "# Portfolio ", link: "/https://jaswantjasu.github.io/chatMa/" },
    { url: image2, title: "# Portfolio ", link: "" },
    { url: image3, title: "# Portfolio ", link: "" },
    { url: image4, title: "# Portfolio ", link: "" },
    { url: image5, title: "# Portfolio ", link: "" },
    { url: image6, title: "# Portfolio ", link: "" },
  ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Portfolio",
              heading: "Let's See My Work",
            
              alignCenter: true,
            })}
          </Grid>
        </Grid>
          <h1 className={classes.updating}>Updating Soon(Working on it)</h1>
        {/* imge section  */}

        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>

                    <Button variant='contained'>Visit</Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
