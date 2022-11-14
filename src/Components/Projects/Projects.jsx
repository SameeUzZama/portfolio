import React from "react";
import "./Projects.css";
import { projects } from "../../db";
import image1 from "../../Asset/E-Commerce.JPG";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(projects);
  }, []);

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
                      sx={{
                        color: darkMode ? "white" : "",
                        textAlign: "justify",
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.description}
                    </Typography>
                    <a
                      className="link"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        sx={{
                          fontSize: "80%",
                          backgroundColor: "orange",
                        }}
                        variant="contained"
                      >
                        Open Project
                      </Button>
                    </a>
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
