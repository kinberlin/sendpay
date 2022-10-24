import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';

import { images } from '../assets';

export function ImagePickerAvatar({ uri, onPress }) {
  return (
    <ImageBackground
      style={styles.imageBackground}
      >
      <View style={styles.avatar}>
        <Image
          style={styles.avatarImage}
          source={uri ? { uri } : images.avatar}
        />
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <Image style={styles.addButtonIcon} source={images.addButton} />
        </TouchableOpacity>
        <Text style={styles.usernameText}></Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    
  },
  avatar: {
    alignItems: 'center',
    marginTop: '10%',
  },
  avatarImage: {
    height: 210,
    width: 210,
    overflow: 'hidden',
    borderColor: 'blue',
    borderWidth: 4,
    borderRadius: 260 / 2,
  },
  addButton: {
    height: 44,
    width: 44,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 104,
    bottom: 40,
  },
  addButtonIcon: {
    height: 44,
    width: 44,
  },
  usernameText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
  },
});
