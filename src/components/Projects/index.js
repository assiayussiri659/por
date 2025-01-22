import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'E-commerce applications' ? (
            <ToggleButton active value="E-commerce applications" onClick={() => setToggle('E-commerce applications')}>
              E-commerce applications
            </ToggleButton>
          ) : (
            <ToggleButton value="E-commerce applications" onClick={() => setToggle('E-commerce applications')}>
              E-commerce applications
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'Frontend Projects | Based on UI design' ? (
            <ToggleButton active value="Frontend Projects | Based on UI design" onClick={() => setToggle('Frontend Projects | Based on UI design')}>
              Frontend Projects | Based on UI design
            </ToggleButton>
          ) : (
            <ToggleButton value="Frontend Projects | Based on UI design" onClick={() => setToggle('Frontend Projects | Based on UI design')}>
              Frontend Projects | Based on UI design
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {toggle !== 'all' &&
            projects
              .filter((project) => project.category === toggle)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
