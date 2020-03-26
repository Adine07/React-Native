import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback, TouchableWithoutFeedback, TouchableOpacity,  } from 'react-native';

export default class App extends Component{

    state = {
        user: ' -- None --',
        email: ' -- None --',
        password: ' -- None --',
    }

    handlename = (isi_input) => {
        this.setState({
            user: isi_input,
        })
    }

    handleemail = (isi_input) => {
        this.setState({
            email: isi_input,
        })
    }

    handlepass = (isi_input) => {
        this.setState({
            password: isi_input,
        })
    }

    handletouch(){
        alert('Data Tersebut Akan Dikirim\n' + '\nUser Name: ' + this.state.user + '\nE-Mail: ' + this.state.email + '\nPassword: ' + this.state.password)
    }
    
    render(){
        return(
               <View style={styles.container}>

                    <Text style={styles.title}>
                        FORM REGISTER
                    </Text>

                    <Text style={styles.label}>
                        USER NAME
                    </Text>
                    <TextInput style={styles.TextInput} onChangeText={ (text) => this.handlename(text) } />

                    <Text style={styles.label}>
                        E-MAIL
                    </Text>
                    <TextInput style={styles.TextInput} onChangeText={ (text) => this.handleemail(text) } />

                    <Text style={styles.label}>
                        PASSWORD
                    </Text>
                    <TextInput style={styles.TextInput} secureTextEntry={true} onChangeText={ (text) => this.handlepass(text) } />

                    <TouchableNativeFeedback onPress={ () => this.handletouch() }>
                        <View style={styles.buttonWrapper}>
                            <Text style={styles.buttonText}>SUBMIT</Text>
                        </View>
                    </TouchableNativeFeedback>
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
    title: {
        color: '#fff',
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 30,
    },
    label: {
        margin: 10,
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