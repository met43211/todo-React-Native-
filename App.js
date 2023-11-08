import { useEffect, useState } from 'react';
import styles from './static/styles';
import { Text, View, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Header from './components/Header';
import Options from './components/Options';

export default function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  const [index, setIndex] = useState(null)
  return (
    <SafeAreaView style={styles.wrapper}> 
        <Header />
        <TextInput
          placeholder='Введите задачу'
          style={styles.input}
          value={value}
          onChangeText={(text)=>{setValue(text)}}
          />
          <Options setTodos={setTodos} setValue={setValue} index={index} value={value}/>
          {todos.length===0?<View style={styles.nothing}>
            <Text style={styles.nothingText}>Задач пока нет</Text>
          </View>:
          <View style={styles.todos}>
            {todos.map((todo, index)=><Text style={styles.todo} key={index} onPress={()=>{
              setIndex(index)
              setTodos(prev=>[...prev.slice(0, index), ...prev.slice(index+1, prev.length+1)])
              }}>{todo}</Text>)}
          </View>}
    </SafeAreaView>
  );
}
