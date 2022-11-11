import React from "react";
import "./Projects.css";
import dbjson from "../../db";
import image1 from "../../Asset/E-Commerce.JPG";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export default function Projects() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(dbjson.projects);
  }, []);
  console.log(project);

  return (
    <Box className="projects" id="Projects">
      <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
      >
        {project.map((item, key) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
              <Card
                sx={{
                  backgroundColor: "gray",
                  maxWidth: 345,
                  m: 5,
                }}
              >
                <img src={image1} alt="img" />
                <CardActionArea sx={{ color: darkMode ? "white" : "" }}>
                  <CardContent sx={{ color: darkMode ? "white" : "" }}>
                    <Typography
                      sx={{ color: darkMode ? "white" : "" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ color: darkMode ? "white" : "" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
