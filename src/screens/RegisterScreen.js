import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native'
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
import { ImagePickerAvatar } from '../components/image-picker-avatar';


export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);
  const showImagePicker = async () => {
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
    console.log(result.assets[0]);

    /*if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }*/
  }

  const openCamera = async () => {
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
    console.log(result.assets[0]);

   /* if (!result.cancelled) {
      setImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }*/
}

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.navigate('Signup')
   /* navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })*/
  }

  return (
    <Background>

      <BackButton goBack={navigation.goBack} />
      <View style={[{height:200, marginBottom : 20, }]}>
      <ImagePickerAvatar uri={image} onPress={() => setVisible(true)} />
      </View>
      <TextInput
        label="Nom"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Continuer
      </Button>
      <View style={styles.row}>
        <Text>Vous possédez déja un compte? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Se Connecter</Text>
        </TouchableOpacity>
      </View>
      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={ showImagePicker}
        onCameraPress={openCamera}
      />
    </Background>
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
  
})
