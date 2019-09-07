import React, { Component } from 'react'
import { Text, View, Image, Button, Modal, TouchableHighlight, ImageBackground } from 'react-native'
import { Container, Content, Form, Item, Input, Label } from 'native-base';

class Login extends Component {

    constructor() {
        super()
        this.state = {
            modalVisible: false,
            userName: '',
            password: '',
            difficulty: '',
            background: '',
            backgroundtwo: '',
            backgroundthree: ''
        };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    start() {
        const { userName, password, difficulty } = this.state
        console.log(userName, ' / ', password, ' / ', difficulty)
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
                >
                    <ImageBackground style={{ flex: 1, justifyContent: 'center' }} source={require('../Images/assign.jpeg')} >
                        <View style={{ flex: 0.5, width: '80%', borderWidth: 1, padding: 10, borderColor: 'black', backgroundColor: 'white', alignSelf: 'center' }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>Login</Text>
                            <Container>
                                <Content>
                                    <Form>
                                        <Item floatingLabel>
                                            <Label>Username</Label>
                                            <Input style={{ padding: 10 }} onChangeText={(e) => this.setState({ userName: e })} />
                                        </Item>
                                        <Item floatingLabel last>
                                            <Label>Password</Label>
                                            <Input
                                                style={{ padding: 10 }}
                                                onChangeText={(e) => this.setState({ password: e })}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                keyboardType="default"
                                                returnKeyType="send"
                                                secureTextEntry={true}
                                            />
                                        </Item>
                                    </Form>
                                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                                        <TouchableHighlight style={{ padding: 20, borderWidth: 1, borderColor: 'black', backgroundColor: this.state.background }} onPress={() => this.setState({ difficulty: 'Easy', background: 'gray', backgroundtwo: '', backgroundthree: '' })}>
                                            <Text>
                                                Easy
                                            </Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight style={{ padding: 20, borderWidth: 1, borderColor: 'black', backgroundColor: this.state.backgroundtwo }} onPress={() => this.setState({ difficulty: 'Medium', backgroundtwo: 'gray', background: '', backgroundthree: '' })}>
                                            <Text>
                                                Medium
                                            </Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight style={{ padding: 20, borderWidth: 1, borderColor: 'black', backgroundColor: this.state.backgroundthree }} onPress={() => this.setState({ difficulty: 'Hard', backgroundthree: 'gray', background: '', backgroundtwo: '' })}>
                                            <Text>
                                                Hard
                                            </Text>
                                        </TouchableHighlight>
                                    </View>
                                    <View style={{ justifyContent: 'center', marginTop: 8 }}>
                                        <TouchableHighlight style={{ padding: 15, backgroundColor: 'blue' }} onPress={this.start.bind(this)}>
                                            <Text style={{ textAlign: 'center', color: 'white' }}>
                                                Start
                                            </Text>
                                        </TouchableHighlight>
                                    </View>
                                </Content>
                            </Container>
                        </View>
                    </ImageBackground>
                </Modal>
            </View >
        )
    }
}

export default Login
