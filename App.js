import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, ImageBackground, Image, TouchableHighlight, TouchableNativeFeedback, 
  TouchableOpacity, TouchableWithoutFeedback, View, TextInput, ScrollView, span } from 'react-native';


class App extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handlePress = () => {
    alert('Button pressed!');
  }

  render(){
    const {count} = this.state;
    
    return(

      <ScrollView>
        <View style={styles.container}>
          <ImageBackground source={{uri:"https://i.pinimg.com/564x/71/bb/19/71bb199e8827b479dd019bbccb951f04.jpg"}} 
            resizeMode="cover" style={styles.imgBackground}> 
            <View style={styles.imgContainer}>
              <Image
              source={{
                uri: "https://i.pinimg.com/564x/12/27/0d/12270dd8915987dbbb43679d3d7efc7a.jpg"
              }}
              style={styles.img}
              />
            </View>

            <View style={styles.countContainer}>
              <TextInput style={styles.textIn}> Text Input</TextInput>
              <TextInput placeholder='Here is placeholder' style={styles.textHolder}></TextInput>
              <Text style={styles.textTouch}>Count: {count}</Text>
            </View>

              <View style={styles.touchable}>
            <TouchableOpacity style={styles.button} onPress={this.onPress}>
              <Text style={styles.textTouch}>TouchableOpacity</Text>
            </TouchableOpacity>

            <TouchableHighlight style={styles.highlightButton} onPress = {this.handlePress} underlayColor="#a64b23" >
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
          </ImageBackground>
        </View>
      </ScrollView>
      

      
      );
    }
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 30, 
    backgroundColor:'#f1bc80'
  },

  imgContainer: {
    paddingTop: 100,
    justifyContent: 'center',
    alignItems:'center',
  },

  textIn:{
    color: '#a64b23',
    fontWeight:'bold',
    fontSize: 30,
    paddingBottom:10,
  },

  textHolder: {
    color: '#a64b23',
    fontSize: 20,
    paddingBottom:10,
  },

 touchable: {
  paddingHorizontal: 30,
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
    width: 250,
    height: 250,
    borderRadius: 200,
  },

  imgBackground: {
    flex: 1,
    justifyContent: 'center',
  }

});

export default App;