import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: Theme.colors.base1,
    padding: theme.spacing(10, 0, 8, 0),
    
    
  },
  sectionDark: {
    backgroundColor: Theme.colors.primary1,
    padding: theme.spacing(10, 0, 8, 0),
    
  },
  


  //common
  divider: {
    width: "64px",
    height: "4px",
    backgroundColor: Theme.colors.primary,
    
  },

  
  responsiveImg: {
    width: "100%",
    height: "auto",
    
    
  
    
  },
  responsiveImgcontact:{
    width: "100%",
    height: "auto",
    marginTop:"165px"
  },

  aboutus :{
marginTop:"-165px"
  },
  sectionHeadingCont: {
    padding: theme.spacing(1),
    color: Theme.colors.base2,
  },
  sectionHeading: {
    color: Theme.colors.base2,
    margin: theme.spacing(1, 0),
  },

  AvatarCont: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
  },
  MediaText: {
    color: Theme.colors.base2,
  },

  skills:{
    display: "flex",
    
    justifyContent: "center",
    margin: theme.spacing(1, 0),
    
    color: Theme.colors.base2,
  },



  // # portfolio section
  imageContainer: {
    position: "relative",
    "&:hover $imageOverlay": {
      opacity: 1,
    },
  },
  imageOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "0.7s",
  },
  overlayTitle: {
    fontSize: "2rem",
    marginBottom: "16px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },

  //form com=ntainer
  formContainer: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
  },

  submitBtn: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    "&:hover": {
      backgroundColor: Theme.colors.base2,
      color: "black",
      transform: "translateY(-2px)",
    },
  },

  // footer stylr
  footerContainer: {
    backgroundColor: Theme.colors.primary1,
    color: Theme.colors.base2,
    padding: theme.spacing(2),
    position: "relative",
  },
  iconButton: {
    position: "absolute",
    right: 5,
    top: -25,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
  },
  insta: {
    background: "#d6249f",
    background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    borderRadius: "6px",
  },

  linkedin: {
    color: "#1285f1ee",
    background: "white",
  },

 connect: {
   color: "dark",
   margin:"20px",
  background: "#d6249f",
  background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
  borderRadius: "6px",
 },
 
 allicon:{
   paddingTop:"30px"
 },
 updating:{
  display: "flex",
    
  justifyContent: "center",
  margin: theme.spacing(1, 0),
  
  color: Theme.colors.base2,
 }
}));