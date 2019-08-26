import React, { Component } from 'react';
import { View, Text, Image, Linking, StyleSheet, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Picker } from 'react-native';
import { Button, CardSection } from './components/common';
import Icon from 'react-native-vector-icons/FontAwesome'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { DrawerActions } from 'react-navigation';
const WIDTH = Math.round(Dimensions.get('window').width); a = 2;

class Welcome extends Component {

    static navigationOptions=({navigation})=>{
        return{
            header:null
        }
    }




    state = { stateLanguage: '' }
    render() {
        return (<View style={styles.MainContainer}>
            <View style={styles.backgroundImageStyle}>
                <View style={{ alignItem: 'center', flexDirection: 'row', width: 130 }}>
                    <Picker style={{ paddingBottom: 5, paddingRight: 5, paddingLeft: 5, flex: 2 }}
                        selectedValue={this.state.stateLanguage}
                        onValueChange={value => this.setState({ stateLanguage: value })}
                    >
                        <Picker.Item color='gray' label='English' value='English' />
                        <Picker.Item color='gray' label='French' value='French' />
                        <Picker.Item color='gray' label='Hindi' value='Hindi' />
                        <Picker.Item color='gray' label='Urdu' value='Urdu' />
                    </Picker>
                </View>


                <View >
                    <Image source={require('../src/icons/instaB.png')} style={styles.logoStyle} />
                </View>
           
                <CardSection >
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')} style={styles.buttonStyle} >
                        <View style={{ alignSelf: 'center'}}><View >
                            <Icon
                                name='facebook-square'
                                size={22}
                                color='white'
                                style={{ height: 25, width: 25, position: 'absolute', marginTop: 10 }} />
                            <Text style={styles.textStyle}>Sign in with facebook</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                </CardSection>
            
                 <View style={{ marginTop: 37 }}>
                     <TouchableOpacity onPress={() => this.props.navigation.navigate('EandPSignin')}>
                     <Text style={{ color: '#007aff', fontSize: 12, fontWeight:'bold'}}>Sign up with email or phone number</Text>
                     </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ color: 'gray', marginTop: 10 }}>
                        ------------------------------------OR------------------------------------
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{ color: 'gray', marginTop: 10, fontSize: 12 }}>
                        Already have an account? 
                    </Text>
                    <Text  style={{ color: 'black', marginTop: 10, fontSize: 12, fontWeight:'bold' }}> Sign up.</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.bottomView}>
                <Text style={{ color: 'gray', fontSize: 12 }}>
                    Instagram from Facebook
                    </Text>
            </View>
        </View>);
    }
}
export default Welcome;

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    backgroundImageStyle: {
        flex: 1,
        width: null,
        height: null,
        // justifyContent:'center',
        alignItems: 'center'
    },
    logoStyle: {
        marginTop: 80,
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
    bottomView:{
        width: '100%', 
        height: 40, 
        borderTopWidth:0.3,
        borderColor:'gray',
       // backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      },
})