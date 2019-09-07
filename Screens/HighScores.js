import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, List, ListItem, Text } from 'native-base'

class HighScores extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <View style={{ width: "50%", alignContent: 'flex-end' }}>
                                <Text>Name</Text>
                            </View>
                            <View style={{ width: "50%", alignContent: 'flex-start' }}>
                                <Text>Score</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View style={{ width: "50%", alignContent: 'flex-end' }}>
                                <Text>Name</Text>
                            </View>
                            <View style={{ width: "50%", alignContent: 'flex-start' }}>
                                <Text>Score</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View style={{ width: "50%", alignContent: 'flex-start' }}>
                                <Text>Name</Text>
                            </View>
                            <View style={{ width: "50%", alignContent: 'flex-end' }}>
                                <Text>Score</Text>
                            </View>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default HighScores
