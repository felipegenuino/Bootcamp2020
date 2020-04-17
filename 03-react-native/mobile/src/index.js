import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  console.log('1');

  useEffect(() => {
    api.get('/projects').then((response) => {
      console.log(response);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject(){
      const response = await api.post('/projects', {
        title: `Novo Projeto ${Date.now()}` ,
        owner: "Felipe Genuino",
      });
      const project = response.data;
      setProjects([...projects, project])
  }

 


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.title}> {project.title} </Text>
          )}
        />

        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleAddProject}>
          <Text style={styles.buttonText}> Adicionar projecto</Text>
        </TouchableOpacity>
      </SafeAreaView>

      {/* <View style={styles.container} >
                <Text style={styles.title}> hi, im Felipe Genuino3</Text>
                {repositories.map(repository => (
                     <Text style={styles.title} key={repository.id}> {repository.title} </Text>
                     ))}
            </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  title: {
    color: '#fff',
    fontSize: 18,    
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7159c1'
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin:20
  },
  buttonText: {
      fontWeight:'bold',
      fontSize:16
  },
});
