import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import api from './services/api'


function App() {

  const [projects, setProjetcs] = useState([])

  useEffect(() => {
    api.get('projeto').then(response => {
      setProjetcs(response.data)
    })
  },[])

  function HandleAddProject(){
        setProjetcs([...projects, `Projeto Criado em: ${Date.now()}`])
  }
  
  return (
    <>
     <Header title="React">
       <ul>
         {projects.map(project => (
           <li key={project.id}>
             {project.dev}
           </li>
         ))}
       </ul>
     </Header>

     <button type="button" onClick={HandleAddProject} >
       Adicionar Projeto
     </button>
    
    </>
  );
}

export default App;
