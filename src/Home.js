import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Header,Card, CardSection } from './components/common';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ImagePicker from 'react-native-image-picker';



const options = {
    title: 'Select Options to Upload Your Post',
    takePhotoButtonTitle: 'Open Camera',
    chooseFromLibraryButtonTitle: 'Choose from Gallery',

};


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { avatarSource: [], isPhotoSelected: false }
    }

    renderHeader = () => {
        return (
            <View style={styles.viewStyle}>

                <TouchableOpacity style={{marginLeft:5}} onPress={this.chooseImagePickerOptions.bind(this)} >
                    <Icon name='camera' size={22} style={{ marginTop: 2 }} />
                </TouchableOpacity>
                <Text style={styles.textStyleHeader}>Instagram</Text>

                {/* <TouchableOpacity>
                  <Icon name={props.iconNameLeft} type='Feather' size={22}   />
              </TouchableOpacity> */}

            </View>
        );
    }
    chooseImagePickerOptions = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response, 'state', this.state.avatarSource);
            if (response.didCancel) {
                console.log('User cancelled image picker', ' avatar ', this.state.avatarSource);
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };

                 //this.state.avatarSource.push(source);
                 this.setState({ avatarSource: [...this.state.avatarSource, source] })
                // this.setState({
                //     avatarSource : source,
                //     isPhotoSelected: true,
                // });
            }
        });
    }
    showImage() {

        if (this.state.isPhotoSelected) {

            return (<FlatList
                data={this.props.avatarSource}
                renderItem={this.renderRow()}
            />)

        }
    }
   

    renderRow = (image) => {
      
        return (
            <Card>
            <CardSection>
                <View style={styles.thumbnailMarginStyle}>
                    <Image source={require('../src/icons/Hassam.png')}  style={styles.thumbnailStyle}/>
                </View>
                <View style={styles.dataStyle}>
                    <Text style = {styles.textStyle}>Hassam Yahya</Text>
                    <Text style={{fontSize:10}}>Islamabad</Text>
                </View>
            </CardSection>
            <CardSection >
            <Image source={image.item}  style={styles.imageStyle}/>
            </CardSection>
           
        </Card>
            )
    }
    render() {
        console.log(this.state.avatarSource)
        return (<View style={{ flex: 1 }}>
            <View>
                {this.renderHeader()}
            </View>
            <Text style={{color:'grey',textAlign:'center'}}>Click Camera Icon to Add Posts</Text>
            <FlatList
                data={this.state.avatarSource}
                renderItem={this.renderRow}
            />
        </View>)
    }
}
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContents: 'center',
        //alignItems:'center',
        height: 40,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.9,
        elevation: 2,
        position: 'relative',
        flexDirection: 'row'
        // borderBottomWidth:3,
        // borderColor:'11111',
        // borderWidth:2,

    },
    textStyleHeader: {
        fontSize: 20,
        marginLeft: 10
    },
    thumbnailStyle:{
        height: 50,
        width: 50,
        borderRadius:50
    },
    dataStyle:{
        justifyContent:'space-around',
        flexDirection:'column'
    },
    textStyle: {
        fontSize:15,
        fontWeight: 'bold'
    },
    thumbnailMarginStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
        marginRight:10
    },
    imageStyle:{
       height:300,
       flex:1,
       width:null,
       marginLeft:2,
       marginRight:2,
       marginBottom:2,
       borderRadius:5
    }
};

export default Home;