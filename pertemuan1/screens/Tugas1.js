import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class App extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}><Text>Title</Text></View>
                <View style={styles.main}>    
                    <View style={styles.content}><Text>Content1</Text></View>
                    <View style={styles.content}><Text>Content1</Text></View>
                </View>
                <View style={styles.footer}><Text>Footer</Text></View>
            </View>
        )
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'salmon',
    },
    header: {
        flex: 1,
        backgroundColor: 'red',
        color: '#464646',
        fontSize: 32,
    },
    main: {
        flex: 5,
        backgroundColor: 'red',
    },
    content: {
        flex: 1,
        backgroundColor: 'grey',
    },
    footer: {
        flex: 1,
        backgroundColor: 'black',
        color: '#fefefe',
    },
})