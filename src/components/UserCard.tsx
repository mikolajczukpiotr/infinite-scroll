import React, { memo } from 'react';
import { Result } from '../types';
import { Text, View, StyleSheet, Image } from 'react-native';

export const UserCard = memo(({ item }: { item: Result }) => {
    return (
        <View style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.title}>{`${item.name.first} ${item.name.last}`}</Text>
            <Image
              style={styles.image}
              source={{
                uri: item.picture.large,
              }}
            />
            <Text style={styles.description}>{item.email}</Text>
            <Text>{item.registered.date}</Text>
          </View>
      </View>
    );
});


const styles = StyleSheet.create({
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: "90%",
      padding: 20,
      margin: 10,
      position: 'relative',
      borderRadius: 10,
      backgroundColor: '#6B6ECC',
    },
    content: {
      padding: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
    },
    image: {
        width: 150,
        height: 150,
      },
    description: {
      color: 'rgba(255, 255, 255, 0.6)',
      marginTop: 10,
      fontSize: 14,
    },
    title: {
      fontWeight: '800',
      textTransform: 'uppercase',
      color: 'rgba(255, 255, 255, 0.64)',
      marginTop: 10,
      fontSize: 25,
      letterSpacing: 1,
    },
    
  });