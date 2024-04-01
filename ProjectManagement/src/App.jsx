import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  //* Adding a new tasks
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();

      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  //* Deleting an existing task
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState, //spread old state to not lose data about old state
        tasks: prevState.tasks.filter((tasks) => tasks.id !== id),
      };
    });
  }

  //*handle a project that is deleted
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState, //spread old state to not lose data about old state
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  //*Handling a project that is selected
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState, //spread old state to not lose data about old state
        selectedProjectId: id,
      };
    });
  }

  //*Adding a new Project
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState, //spread old state to not lose data about old state
        selectedProjectId: null,
      };
    });
  }

  //*Handling when a project is cancelled
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState, //spread old state to not lose data about old state
        selectedProjectId: undefined,
      };
    });
  }

  //*A project is added by saving
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();

      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  //*finding an eement in an array by ID
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // console.log(projectsState.projects);
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
