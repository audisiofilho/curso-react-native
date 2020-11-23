import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import api from './src/service/api';

export default function App() {

   const [projects, setProjects] = useState([])

   useEffect(()=>{
     api.get('projeto').then(response => {
       console.log(response.data)
       setProjects(response.data)
     })
   }, [])


  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor='#FF8C00'/>
    <View style={styles.div}>
      <Text style={styles.title}>FoXTi</Text>
      <Text style={styles.description}>High Tecnology!</Text>
      <Text style={styles.titleProjects}>Projetos:</Text>

      <FlatList
         style={styles.projectList}
         data={projects}
         keyExtractor={(project) => project.id}
         renderItem={({ item: project}) => (
          <Text style={styles.project} key={project.id}>
          {project.title}
        </Text>)} 
      />

      {/*<View style={styles.projects}>
        <Text style={styles.titleProjects}>Projetos:</Text>

      {projects.map((project) => (
        <Text style={styles.project} key={project.id}>
          {project.title}
        </Text>
      ))}
      </View>*/}

      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#FF8C00',
    fontSize: 55,
    fontWeight: 'bold',
    marginTop: 60
  },
  description:{
    color:'#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  projects:{
    marginTop: 40,
    alignItems: 'center'
  },
  titleProjects:{
    color: '#FF8C00',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30
  },
  project:{
    color: '#fff',
    fontSize: 20,
  }
});
