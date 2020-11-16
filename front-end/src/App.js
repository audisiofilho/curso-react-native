import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import api from './services/api'


 function App() {

  const [projects, setProjetcs] = useState([])

  useEffect(() => {
    api.get('projeto').then(response => {
      setProjetcs(response.data)
    })
  }, [])

  async function HandleAddProject(){
        //setProjetcs([...projects, `Projeto Criado em: ${Date.now()}`])
       const response = await api.post('projeto', {
          title: `Projeto Estático: ${Date.now()}`,
          dev: "Samuel"
        })

        const projeto = response.data
        setProjetcs([...projects, projeto])
  }
  
  return (
    <>
     <Header title="React">
       <ul>
         {projects.map(project => (
           <li key={project.id}>
             {project.title}
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
