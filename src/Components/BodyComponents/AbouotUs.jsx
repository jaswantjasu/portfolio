import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/14.jpeg";
import { RenderSectionHeading, CardMedia } from "../common/commonComponent";
import ScrollAnimation from 'react-animate-on-scroll'
import { AiFillApple } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { GrBitcoin } from "react-icons/gr";
import { DiAndroid } from "react-icons/di";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  
} from "@fortawesome/free-brands-svg-icons";




export default function AboutUs() {
  const classes = useStyles();

  
  const cardMediaData = [
  
    {
      
      title: "Web Development",
      description: <Typed
        strings={[" HTML &nbsp; ", "CSS &nbsp;", "JAVASCRIPT &nbsp;", "REACT &nbsp;", "JAVA &nbsp;", "PHP &nbsp;"]}
        typeSpeed={100}
        backSpeed={80}
        loop
      />,
      icon: <CgWebsite />
    },
    {
      title: "iOS Development",
      description: <Typed
        strings={[" SWIFT &nbsp;",]}
        typeSpeed={100}
        backSpeed={80}
        loop
      />,
      icon: <AiFillApple />,

    },
    {
      title: "Android Development",
      description: <Typed
        strings={[" JAVA &nbsp; ", "KOTLIN &nbsp;", "PHP &nbsp;",]}
        typeSpeed={100}
        backSpeed={80}
        loop
      />,
      icon: <DiAndroid />,
    },
    {
      title: "Blockchain Development",
      description: <Typed
        strings={[" SOLIDITY &nbsp; ", "JAVA &nbsp;", "GO &nbsp;",]}
        typeSpeed={100}
        backSpeed={80}
        loop
      />,
      icon: <GrBitcoin />,
    },



  ]

    ;
  return (
    <Box className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown >
                <img
                  src={image}
                  alt=' about us'
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} className={classes.aboutus}>
              {RenderSectionHeading({
                smallText: "ABOUT ME",
                heading: "Hello I'm Jaswant singh",
                description:
                  "A self taught developer who loves to codes something that wiil impact majority of the people in good waay !",
                  
              })}
              



              
              <h1 className={classes.skills}> Skills</h1>
              <br />
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,

                    })}

                  </Grid>

                ))}
              </Grid>

            </Grid>




            {/* social */}
            <div className={classes.allicon}>
              <strong className={classes.connect}>Let's Work Together </strong><br/>
            <a href="https://www.facebook.com/profile.php?id=100014676571292"
              className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/jasu9110" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/jaswant_singh_9110/"
              className="instagram social">
              <FontAwesomeIcon className={classes.insta} icon={faInstagram} size="2x" />
            </a> 
            <a href="https://www.instagram.com/jaswant_singh_9110/"
              className="instagram social">
              <FontAwesomeIcon  icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/jaswantjasu"
              className="Github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://wa.me/+919110172902"
              className="Whatsapp social">
              <FontAwesomeIcon className={classes.whatsapp} icon={faWhatsapp} size="2x" />
            </a>
            </div>
          </Grid>
        </Container>  
      </ScrollAnimation>
    </Box>
  );
}