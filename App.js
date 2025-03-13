import React,{useEffect, useState} from "react";
import { View,Text,TouchableOpacity,Image,StyleSheet } from "react-native";
const App=()=>{
  const[fields,setfields]=useState([]); //state to hold user data array
  const[curindex,setcurindex]=useState(0); //state to track current index in the API
  const fetchdata=async(query)=>{ //method to fetch data from API
    try{
      const response = await fetch('https://random-data-api.com/api/users/random_user?size=80');
      const data= await response.json();
      const formateddata= data.map((fields)=>({    // mapping to simplified format
        id: fields.id,
        uid:fields.uid,
        firstname: fields.first_name,
        lastname:fields.last_name,
        username: fields.username,
        email: fields.email,
        password: fields.password,
        avatar:fields.avatar,
        gender:fields.gender,
      }));
      setfields(formateddata);  //state updation

    }catch(error){
      console.error('Error fetching Data',error); // handling error during fetch(if any)
    }
  };
  useEffect(()=>{fetchdata();},[]);
  const handlenextdata=()=>{    //handler to go to next user data
    if(curindex< fields.length-1){
      setcurindex(curindex+1);
    }
  };
  const handleprevdata=()=>{  //handler to go to previous user data
    if(curindex>0){
      setcurindex(curindex-1);
    }
  };
  return( // displaying user info 
    <View style={styles.MainContainer}>
      {fields.length>0 ?(
        <View style={styles.userinfobox}>
          <Image source={{uri: fields[curindex].avatar}}
          style={styles.avatar}/>
         
                    
          <View style={styles.infofields}> 
            <Text style={styles.label}>ID: </Text>
            <Text style={styles.box}>{fields[curindex].id}</Text>
          </View>

          <View style={styles.infofields}>
            <Text style={styles.label}>UID: </Text>
            <Text style={styles.box}>{fields[curindex].uid}</Text>
          </View>
          
          <View style={styles.infofields}>
            <Text style={styles.label}>Last Name: </Text>
            <Text style={styles.box}>{fields[curindex].lastname}</Text>
          </View>
          
          <View style={styles.infofields}>
            <Text style={styles.label}>First Name: </Text>
            <Text style={styles.box}>{fields[curindex].firstname}</Text>
          </View>
          
          <View style={styles.infofields}>
            <Text style={styles.label}>Username: </Text>
            <Text style={styles.box}>{fields[curindex].username}</Text>
          </View>
          
          <View style={styles.infofields}>
            <Text style={styles.label}>Email: </Text>
            <Text style={styles.box}>{fields[curindex].email}</Text>
          </View>
          
          <View style={styles.infofields}>
            <Text style={styles.label}>Password: </Text>
            <Text style={styles.box}>{fields[curindex].password}</Text>
          </View>
          </View>
        
        ):(
          <Text>Loading....</Text>  // text while data is loading
        )}
        <View style={styles.navigtionbox}>
          <TouchableOpacity
          onPress={handleprevdata}
          disabled={curindex===0}
          style={[styles.button,curindex===0 && styles.disabledButton]} //edgecase
          >
            <Text style={styles.text}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={handlenextdata}
          disabled={curindex===fields.length-1||fields.length===0}
          style={[styles.button,(curindex===fields.length-1||fields.length===0)&& styles.disabledButton]} //edgecase
          >
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
};

//styling 
const styles=StyleSheet.create({
  MainContainer:{
    padding:10,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey'
  },
  userinfobox:{
    alignSelf:'center',
  },
  avatar:{
    width:120,
    height:120,
    borderRadius:60,
    marginTop:220,
    marginHorizontal:108,
    borderColor:'black',
    borderWidth:2,
    backgroundColor:'white'
  },
  infofields:{
     flexDirection: 'row',
      alignItems: 'center',
      marginTop:8
  },
  label:{
    width:65,
    fontWeight:'bold',
    fontSize:14,
    marginLeft:15
  },
  box:{
    height:40,
    width:250,
    borderWidth:2,
    margin:10,
    borderRadius:10,
    textAlign:'center',
    textAlignVertical:'center',
    backgroundColor:'white'
  },
  text:{
    fontFamily:'Arial',
    fontSize:16,
  },
  navigtionbox:{
    flexDirection:'row',
    marginTop:50,
    marginBottom:200,
    justifyContent:'space-around',
    alignItems:'center',
  },
  button:{
    borderWidth:2,
    height:40,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'green',
    marginHorizontal:20
  },
  disabledButton:{
    backgroundColor:'red',
  }
})
export default App;