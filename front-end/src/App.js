import React, {useState} from 'react'
import Header from './components/Header'


function App() {

  const [projects, setProjetcs] = useState(["Facebook", "Uber"])

  function HandleAddProject(){
        setProjetcs([...projects, `Projeto Criado em: ${Date.now()}`])
  }
  
  return (
    <>
     <Header title="react">
       <ul>
         {projects.map(project => (
           <li key={project}>
             {project}
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
