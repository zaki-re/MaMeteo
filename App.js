import React,{ useState } from 'react';
import {View,StyleSheet,Text,FlatList,TouchableOpacity ,ScrollView} from 'react-native'
import { LongPressGestureHandler } from 'react-native-gesture-handler';

export default function App() {
  const[people,setPeople] = useState([
    {name:'zaki',key:'1'},
    {name:'moh',key:'2'},
    {name:'aliout',key:'3'},
    {name:'djilali',key:'4'},
    {name:'kadour',key:'5'},
    {name:'ted',key:'6'},
    {name:'barney',key:'7'},
    
  ]);
  const pressHandler=(key)=>{
    console.log(key);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key);
    })
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={people}
        renderItem={( {item} )=>(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
        )}
      
      />


 {/*      <ScrollView>
      { people.map(item=>{
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
            </View>
        )
      })}
      </ScrollView> */}
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    paddingTop:40,
    paddingHorizontal: 20
    //alignItems:'center',
    //justifyContent:'center'
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
    marginHorizontal:10,
    marginTop: 24,
  }
  
  
})
