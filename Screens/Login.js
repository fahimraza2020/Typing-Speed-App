import React, { Component } from 'react'
import { Text, View, Image, Button, Modal, TouchableHighlight, Alert } from 'react-native'

class Login extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ width: "100%", flex: 1 }}>
                <View style={{ width: '100%', flex: 0.4, justifyContent: "center" }}>
                    <Text style={{ fontSize: 30, textAlign: 'center', color: 'blue', marginTop: 30 }}>Typing Speed</Text>
                    <Image source={require('../Images/typer.jpg')} style={{ width: "100%", height: 180, marginTop: 10 }} />
                </View>
                <View style={{ width: '100%', flex: 0.6, paddingLeft: 10, paddingRight: 10, }}>
                    <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>This is a typing speed checking appp. This app includes some steps. The steps are given below:</Text>
                    <Text style={{ color: '#2a00e6' }}>1) This game includes 3 levels</Text>
                    <Text style={{ color: '#2a00e6' }}>2) Each level has its own criteria.</Text>
                    <Text style={{ color: '#2a00e6' }}>3) Click on start button.</Text>
                    <Text style={{ color: '#2a00e6' }}>4) Enter your username and age.</Text>
                    <Text style={{ color: '#2a00e6' }}>5) Select the level you want. Easy , Medium , Hard .</Text>
                    <Text style={{ color: '#2a00e6' }}>6) You will see the words time by time and you have to type them in the given time period.</Text>
                    <Text style={{ color: '#2a00e6' }}>7) Once you have type all the words , final score will be generated.</Text>
                    <Text style={{ color: '#2a00e6', marginBottom: 30 }}>8) Your scores will shown on the scores tab on the main screen.</Text>
                    <Button title="Start Game" color="#0000ff" onPress={() => {
                        this.setModalVisible(true);
                    }} />
                </View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default Login
