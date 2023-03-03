import { Typography } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { Project } from "../utils/types";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects: Project[] = [
    {
      name: "Omnia",
      description: "Cool things",
      skills: [
        "MongoDB",
        "NodeJS (JavaScript)",
        "Angular (TypeScript)",
        "XCode (Swift)"
      ]
    },
    {
      name: "Robotic Arm",
      description: "3D printed robotic arm designed in Solidworks and" +
                   "controlled via Arduino board that communicated with a Python Program",
      skills: [
        "Solidworks",
        "C (Arduino Board)",
        "Python"
      ]
    },
    {
      name: "Stock Trader",
      description: "Attempted to predict the value of a stock and trade it.",
      skills: [
        "Python",
        "Numpy",
        "Pandas",
        "Sci-learn"
      ]
    },
    {
      name: "Titanic",
      description: "First Kaggle challenge. Managed to score 75.36% using random forest.",
      skills: [
        "Python",
        "Numpy",
        "Pandas",
        "Sci-learn"
      ]
    }
  ]
  return (
    <>
      <Typography variant="h4">Projects</Typography>
      {
        projects.map((project) => (
          <>
            <ProjectCard project={project} />
          </>
          )
        )
      }
    </>
  );
}

export default Projects;