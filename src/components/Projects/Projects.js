import { Box, Button, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../Shared/Navbar";

const useStyles = makeStyles({
  rootContainer: {
    padding: "1rem 5rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  root: {
    maxWidth: 545,
    margin: "1rem",
    backgroundColor: "#444",
    border: "1px solid rgba(0,0,0,0.3)"
  },
  media: {
    height: 200,
  },
  brandBtn: {
    margin: ".5rem",
    padding: "0 .5rem",
    fontWeight:"bold",
    color: "#444"

  },
  header: {
    color: "tan",
    textAlign: "center",
    marginTop: "6.25rem",
    textTransform: "uppercase",
    width: "100%",
  },
  linkedBtn: {
    fontWeight: "bold",
    color: "tomato",
    width: "100%",
    marginBottom: ".5rem"
  }
});

const projectsData = [
  {
    name: "AIRCNC HOMESTAY",
    img: "https://i.ibb.co/3s4WGqm/air-cnc.png",
    website: "https://air-cnc-my.web.app/",
    github: "https://github.com/nadimmahmud25/air-cnc-client",
    description: "use a react-multi carousel to manage experiences and homes components.the user can see the location in google maps.admin & user wise access panel.sign in and sign up with email and google by firebase.payment process with stripe or PayPal.",
    technology: ["React", "Material-UI", "CSS3", "HTML5", "Node", "Express", 'MongoDB']
  },
  {
    name: "Internet Service System",
    img: "https://i.ibb.co/GthVdPd/internet-service.png",
    website: "https://internet-service-system.web.app/",
    github: "https://github.com/nadimmahmud25/internet-service-system-client",
    description: "Registered users can order desired services.Users can give their feedback & observe the latest condition of their order status.Admin Can Add services, delete services, Make Admin & Change Clients Order Status in Application.",
    technology: ["React", "Bootstrap", "CSS3", "HTML5", "Node", "Express", 'MongoDB']
  },
  {
    name: "Gadget Galaxy",
    img: "https://i.ibb.co/k5Cq36C/gadget.png",
    website: "https://gadget-galaxy.web.app/",
    github: "https://github.com/nadimmahmud25/gadget-galaxy-client",
    description: "Users can log in with Gmail.Users Can Buy Products, Checkout items & see all cart Items .Admin add a new Product, see all Products & Also Remove Products.",
    technology:  ['React.js', 'Node.js', 'express.js', 'MongoDB', 'Bootstrap', 'CSS', 'Firebase'],
  },
  {
    name: "Grab Ride Finder",
    img: "https://i.ibb.co/Srct3pF/grab-ride.png",
    website: "https://react-auth-ride.web.app/",
    github: "https://github.com/nadimmahmud25/grab-ride",
    description: "Show ride options on the website.Users can select the destination by login & create an account.Users can see the location in google map.",
    technology: ['React.js', 'Node.js', 'express.js', 'MongoDB', 'Bootstrap', 'CSS', 'Firebase'],
  },
]

const Projects = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box component="h1" className={classes.header} >
        <span style={{borderBottom: "1px solid tan", padding: ".5rem 3rem"}}>My Latest Projects</span>
      </Box>
      <Box component="div" className={classes.rootContainer}>
        {
          projectsData.map((item, key) => 
          <Card className={classes.root} key={key}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.img} 
              title="Contemplative Reptile"
            />
            <CardContent> 
              <Box>
                <Button 
                href={item.website} 
                target="_blank" 
                className={classes.linkedBtn} 
                variant="contained"
                >
                  Website
                </Button>
                <Button 
                href={item.github} 
                target="_blank" 
                className={classes.linkedBtn} 
                variant="contained"
                >
                  GitHub
                </Button>
              </Box>
              <Typography 
              style={{color: "tomato"}} 
              gutterBottom variant="h5" 
              component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" style={{color: "tan"}} component="p">
                {item.description}
              </Typography>
            </CardContent>
            <Box style={{margin:".5rem"}}>
              {
                item.technology.map((data, index) => 
                  <Button 
                  key={key}
                  variant="contained"
                  color="default"
                  size="small" 
                  className={classes.brandBtn}
                  >{data}</Button>
                )
              }
            </Box>
          </CardActionArea>
        </Card>
          )
        }

      </Box>
      
    </div>
  );
};

export default Projects;
