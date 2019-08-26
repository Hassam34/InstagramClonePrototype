import React from 'react';
import { View, Text, Image, Linking, StyleSheet, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Picker } from 'react-native';
import { Button, CardSection, Header } from './components/common';
import Icon from 'react-native-vector-icons/FontAwesome'
const WIDTH = Math.round(Dimensions.get('window').width); a = 2;
class HelpSign extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Login Help',
            headerLeft: null,
            headerTitleStyle: {
                fontSize: 21
            },
            headerStyle: {
                height: 45
            }
        }
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.backgroundImageStyle}>
                    <View>
                        <Text style={{ fontSize: 28, marginTop: 25 }}>
                            Find Your Account
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, marginTop: 15 }}>
                            Enter your Instagram username or the email or
                        </Text >
                    </View>
                    <Text style={{ fontSize: 14 }}> phone number linked to your account.</Text>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            placeholder='Username, email or phone'
                            placeholderTextColor={'gray'}
                            underlineColorAndroid='transparent'
                            style={styles.inputStyle} />
                    </View>
                    <CardSection>
                        <Button>Next</Button>
                    </CardSection>
                    <View>
                        <Text style={{ color: 'gray', marginTop: 10 }}>
                            ------------------------------------OR------------------------------------
                    </Text>
                    </View>
                    <CardSection>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')} style={styles.buttonStyle} >
                            <View style={{ alignSelf: 'center' }}><View >
                                <Icon
                                    name='facebook-square'
                                    size={22}
                                    color='white'
                                    style={{ height: 25, width: 25, position: 'absolute', marginTop: 10 }} />
                                <Text style={styles.textStyle}>Log in with facebook</Text>
                            </View>
                            </View>
                        </TouchableOpacity>
                    </CardSection>

                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => Linking.openURL('https://help.instagram.com')}>
                        <Text style={{ color: 'gray', fontSize: 12 }}>
                            For more help visit the
                    </Text>
                        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}> Instagram Help Center.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default HelpSign;
const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    backgroundImageStyle: {
        flex: 1,
        width: null,
        height: null,
        // justifyContent:'center',
        alignItems: 'center',
        //backgroundColor:'orange'
    },
    logoStyle: {
        marginTop: -180,
        marginBottom: 10,
        width: 175,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        marginTop: 10,
        paddingLeft: 10,
        width: WIDTH - 55,
        height: 40,
        fontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: 'black',
        borderColor: 'gray',
        shadowOpacity: 2,
        borderRadius: 3,
        borderWidth: 0.3,
        marginHorizontal: 25
    },
    loginButtonStyle: {
        paddingLeft: 10,
        paddingRight: 10
    },
    textStyle: {
        //alignSelf: 'center',
        marginLeft: 25,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonStyle: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'stretch',
        // borderColor:'#007aff',
        backgroundColor: '#3b5998',
        // backgroundColor:'white',
        // borderWidth:1,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 5,
    },
    bottomView: {
        width: '100%',
        height: 40,
        //borderTopWidth:0.3,
        borderColor: 'gray',
        // backgroundColor: '#FF9800', 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
})
