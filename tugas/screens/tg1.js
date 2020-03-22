import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
    Image,
    Button,
    Platform,
    StyleSheet,
    StatusBar,
    ScrollView,
} from 'react-native';

class App extends Component {

    PressButton(){
        Alert.alert('Kepencet woi')
    }
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#fff', paddingTop: StatusBar.currentHeight || 0}}>

                {/* StatusBar */}
                <StatusBar barStyle="dark-content"></StatusBar>

                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Kuchen Oren!</Text>
                </View>

                {/* Content */}
                <View style={{flex: 1}}>
                    <View>
                        <ScrollView horizontal={true}>
                        <Image style={styles.img1} source={{uri: 'https://www.southwarknews.co.uk/wp-content/uploads/2019/12/Fox-Picture-stock-image-665x504.jpg'}}></Image>
                        <Image style={styles.img1} source={{uri: 'https://www.southwarknews.co.uk/wp-content/uploads/2019/12/Fox-Picture-stock-image-665x504.jpg'}}></Image>
                        <Image style={styles.img1} source={{uri: 'https://www.southwarknews.co.uk/wp-content/uploads/2019/12/Fox-Picture-stock-image-665x504.jpg'}}></Image>
                        <Image style={styles.img1} source={{uri: 'https://www.southwarknews.co.uk/wp-content/uploads/2019/12/Fox-Picture-stock-image-665x504.jpg'}}></Image>
                        <Image style={styles.img1} source={{uri: 'https://www.southwarknews.co.uk/wp-content/uploads/2019/12/Fox-Picture-stock-image-665x504.jpg'}}></Image>
                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView>
                            <Image style={styles.img2} source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}></Image>
                            <Image style={styles.img2} source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}></Image>
                            <Image style={styles.img2} source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}></Image>
                            <Image style={styles.img2} source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}></Image>
                            <Image style={styles.img2} source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}></Image>
                            <Image style={styles.img2} source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}></Image>
                            <Image style={styles.img2} source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}></Image>
                            <Image style={styles.img2} source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}></Image>
                            <Image style={styles.img2} source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}></Image>
                            <Image style={styles.img2} source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}></Image>
                        </ScrollView>
                    </View>
                    {/* <View style={styles.content}>
                        <Image
                            source={{uri: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000383682607-e1518623790201.jpg'}}
                            style={{ width: '100%', height: '60%', marginBottom: 20 }}
                        />
                        
                        <Button
                            title="Iki tombol"
                            onPress={ () => {Alert.alert('Button is kepencet')} }
                        />
                        
                        <Button
                            title="Iki tombol"
                            onPress={ this.PressButton }
                        />
                    </View> */}
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text>Footer</Text>
                </View>

            </View>
        )
    }
}

export default App;

const styles = StyleSheet.create({

    header: {
        height: 80,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'salmon',
    },
    title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
    },
    footer: {
        bottom: 0,
        height: 50,
        borderTopWidth: 2,
        borderTopColor: '#eaeaea',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'salmon',
    },
    img1: {
        margin: 20,
        width: 80,
        height: 80,
    },
    img2: {
        marginHorizontal: '10%',
        marginVertical:'10%',
        width: '80%',
        height: 120,
    },
});