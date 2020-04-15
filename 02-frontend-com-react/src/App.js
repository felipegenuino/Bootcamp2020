import React, {useState, useEffect} from 'react';
import './App.css';

import api from './services/api.js'
 
import Header from './components/Header';


 function App(){
   
  const [projects, setProjects] = useState([]);

  useEffect( () => {
    api.get('projects').then(response => {
      setProjects(response.data)
    });
  }, []);

 async function handleAddProject(){ 
  //  setProjects([...projects, `Novo Projeto ${Date.now()}` ])
 const response= await api.post('projects', {
    title: `Novo Projeto ${Date.now()}` ,
    owner: "Felipe Genuino"
  })

  const project = response.data

  setProjects([...projects, project])
 }

  return ( 
    <>
     <Header title="Home Page" /> 
      <ul>
        { projects.map( project => <li key={project.id}> {project.title} </li>)  }
        </ul> 
        <button  type='button' onClick={handleAddProject} >Add project </button>
    </>
  )
}

export default App;