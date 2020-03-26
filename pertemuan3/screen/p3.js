import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, TouchableOpacity,  } from 'react-native';

export default class App extends Component{

	state = {
		password: '2 Patah Kata',
	}

	handleTouch(pesan){
		this.setState({
			password: pesan,
		})
	}

	handleInput = (isi_input) => {
		this.setState({
			password: isi_input,
		})
	}

	handleTouch2(){
		alert('WOW!');
	}
	
	render(){
		return(
				<View style={styles.container}>
					<Text style={styles.Text}>{this.state.password}</Text>
					<TextInput 
						style={styles.TextInput}
						secureTextEntry={true}
						onChangeText={(text) => this.handleInput(text)}
					/>

					<TouchableNativeFeedback onPress={() => this.handleTouch('ini Native')}>
						<View style={styles.buttonWrapper}>
							<Text style={styles.buttonText}>
								Native Feedback
							</Text>
						</View>
					</TouchableNativeFeedback>

					<TouchableOpacity onPress={ this.handleTouch2 }>
						<View style={styles.buttonWrapper}>
							<Text style={styles.buttonText}>
								Opacity
							</Text>
						</View>
					</TouchableOpacity>
					
					<TouchableWithoutFeedback onPress={() => this.handleTouch('ini Non-Feedback')}>
						<View style={styles.buttonWrapper}>
							<Text style={styles.buttonText}>
								Without Feedback
							</Text>
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
		alignItems: 'center',
		backgroundColor: 'skyblue',
	},
	Text: {
		color: '#fff',
		marginBottom: 10,
		fontWeight: 'bold',
		fontSize: 30,
	},
	radiuss: {
		borderRadius: 25,
	},
	TextInput: {
		borderColor: '#555',
		borderWidth: 1,
		width: '80%',
		marginBottom: 10,
	},
	buttonWrapper: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		backgroundColor: "salmon",
		elevation: 5,
		margin: 10,
		borderRadius: 25,
	},
	buttonText: {
		fontWeight: 'bold',
		fontSize: 17,
		letterSpacing: 2,
	},
})