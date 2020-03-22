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
                <Text style={styles.title}>Hello Iyas Muzan!</Text>
                <Text style={styles.subtit}>lorem wkwkwk</Text>
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
    title: {
        fontSize: 32,
        color: '#eaeaea',
    },
    subtit: {
        fontSize: 20,
        opacity: 0.7,
        paddingTop: 0,
    }
})