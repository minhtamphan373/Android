import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, Image, TouchableHighlight, TouchableNativeFeedback, 
  TouchableOpacity, TouchableWithoutFeedback, View, FlatList, TextInput } from 'react-native';


class App extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render(){
    const {count} = this.state;
    const handlePress = () => {
      console.log('Button pressed!');
    }
    return(

      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
          source={{
            uri: "https://i.pinimg.com/564x/d8/3f/52/d83f52e6eca309d746545bfaf54000f2.jpg"
          }}
          style={styles.img}
          />
        </View>

      
        <View style={styles.countContainer}>
          <TextInput style={styles.textIn}> Type Here</TextInput>
          <Text style={styles.textTouch}>Count: {count}</Text>
          
        </View>

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.textTouch}>TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableHighlight style={styles.highlightButton} onPress = {this.onPress} underlayColor="#a64b23" >
          <Text style={styles.textTouch}>TouchableHighlight</Text>
        </TouchableHighlight>

        <TouchableNativeFeedback onPress={this.onPress}>
        <View style={styles.button}>
          <Text style={styles.textTouch}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={styles.button}>
          <Text style={styles.textTouch}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      
      );
    }
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10, 
    backgroundColor:'#f1bc80'
  },

  imgContainer: {
    justifyContent: 'center',
    alignItems:'center',
  },

  textIn:{
    color: '#a64b23',
    fontWeight:'bold',
    fontSize: 30,
    paddingBottom:10,
  },

  textTouch: {
    color:'#8d6b4e',
    fontWeight: 'bold',
    fontSize:20,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginBottom: 20,
    borderRadius: 50
  },

  countContainer: {
    alignItems: 'center',
    padding: 10,
  },

  highlightButton: {
    backgroundColor:'blue', 
    padding: 20, 
    alignItems:'center',
    backgroundColor:"#DDDDDD",
    marginBottom: 20,
    borderRadius: 50
  },

  nativeButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginBottom: 20,
    borderRadius: 50
  },

  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  }

});

export default App;