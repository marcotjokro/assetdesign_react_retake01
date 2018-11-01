import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  
	state={
		bgcolor: "",
		size: 400,
		opacity: 1
	}

	handlePurpleBG=()=>{
		this.setState({
			bgcolor: '#9999FA'
		})
	}
	
	handleTealBG=()=>{
		this.setState({
			bgcolor: '#11847E'
		})
	}
	
	handleWhiteBG=()=>{
		this.setState({
			bgcolor: '#fff'
		})
	}
	
	handleBlackBG=()=>{
		this.setState({
			bgcolor: '#000'
		})
	}
	
	handleBGSize=(num)=>{
		this.setState({
			size: this.state.size+num 
		})
	}
	
	handleBGOpacity=()=>{
		this.setState({
			opacity: 1
		})
	}
	
	handleBGHalfOpacity=()=>{
		this.setState({
			opacity: 0.5
		})
	}
	
	render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.bgcolor, width: this.state.size, height: this.state.size, opacity: this.state.opacity}}>
					<Button
						title="purple"
						onPress={this.handlePurpleBG}
						/>
					<Button
						title="teal"
						onPress={this.handleTealBG}
						/>
					<Button
						title="white"
						onPress={this.handleWhiteBG}
						/>
					<Button
						title="black"
						onPress={this.handleBlackBG}
						/>
					<Button
						title="+"
						onPress={this.handleBGSize.bind(this, +20)}
						/>
					<Button
						title="-"
						onPress={this.handleBGSize.bind(this, -20)}
						/>
					<Button
						title="Opaque"
						onPress={this.handleBGOpacity}
						/>
					<Button
						title="Half Opaque"
						onPress={this.handleBGHalfOpacity}
						/>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
