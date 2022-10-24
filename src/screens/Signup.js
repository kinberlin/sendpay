import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,ImageBackground,KeyboardAvoidingView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import * as ImagePickers from 'expo-image-picker'
import { ImagePickerHeader } from '../components/image-picker-header';
import { ImagePickerModal } from '../components/image-picker-modal';
import { CniPicker } from '../components/cni-image-picker';
import { images } from '../assets';


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visibleR, setVisibleR] = useState(false);
  const [visibleV, setVisibleV] = useState(false);
  const [imageR, setImageR] = useState(null);
  const [imageV, setImageV] = useState(null);

  const showImagePickerR = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePickers.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Sendpay n'a pas la permission d'accéder à votre Gallerie!");
      return;
    }

    const result = await ImagePickers.launchImageLibraryAsync(
      {
        mediaTypes: ImagePickers.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      }
    );

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setImageR(result.uri);
      console.log(result.uri);
    }
  }
  const showImagePickerV = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePickers.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Sendpay n'a pas la permission d'accéder à votre Gallerie!");
      return;
    }

    const result = await ImagePickers.launchImageLibraryAsync(
      {
        mediaTypes: ImagePickers.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      }
    );

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setImageV(result.uri);
      console.log(result.uri);
    }
  }

  const openCameraV = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePickers.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Sendpay n'a pas recu d'autorisation pour utiliser la caméra");
      return;
    }

    const result = await ImagePickers.launchCameraAsync(
      {
        mediaTypes: ImagePickers.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      }
    );

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setImageV(result.uri);
      console.log(result.uri);
    }
}
const openCameraR = async () => {
  // Ask the user for the permission to access the camera
  const permissionResult = await ImagePickers.requestCameraPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Sendpay n'a pas recu d'autorisation pour utiliser la caméra");
    return;
  }

  const result = await ImagePickers.launchCameraAsync(
    {
      mediaTypes: ImagePickers.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }
  );

  // Explore the result
  console.log(result);

  if (!result.cancelled) {
    setImageR(result.uri);
    console.log(result.uri);
  }
}

  const onSignUpPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <ImageBackground
    source={images.whatsappBackground}
    resizeMode="repeat"
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <BackButton goBack={navigation.goBack} />
      <Header>Créer un Compte (KYC)</Header>
      <Text style={styles.text}>Photo de pièce d'identité Recto</Text>

      <CniPicker uri={imageR} onPress={() => setVisibleR(true)} />
  
      <Text style={styles.text}>Photo de pièce d'identité Verso</Text>

      <CniPicker uri={imageV} onPress={() => setVisibleV(true)} />
    

      <ImagePickerModal
        isVisible={visibleV}
        onClose={() => setVisibleV(false)}
        onImageLibraryPress={ showImagePickerV}
        onCameraPress={openCameraV}
      />
        <ImagePickerModal
        isVisible={visibleR}
        onClose={() => setVisibleR(false)}
        onImageLibraryPress={ showImagePickerR}
        onCameraPress={openCameraR}
      />
            <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Continuer
      </Button>        
    </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  text : {
    fontSize: 18,
    fontWeight: '100',
    color: '#ffffff',
    marginTop: 5,
  },
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
