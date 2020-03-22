import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
    Image,
    Button,
    Platform,
    StyleSheet,
} from 'react-native';

class App extends Component {
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#salmon',}}>

                {/* Header */}
                <View>
                    <Text>Wow Header!</Text>
                </View>

                {/* Content */}
                <View>
                    <Text>Content</Text>
                </View>

                {/* Footer */}
                <View>
                    <Text>Footer</Text>
                </View>

            </View>
        )
    }
}

export default App;

const style = StyleSheet.create({

});