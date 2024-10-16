import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors'; 

const HomeHeader = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Ionicons name="menu" size={28} color={Colors.primary} style={styles.icon} />
        <TextInput
          placeholder="Search products"
          placeholderTextColor="#ddd"
          style={styles.searchInput}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.background, 
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  icon: {
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1, 
    height: 40,
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    paddingHorizontal: 16,
    color: Colors.light,
    marginHorizontal: 8,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeHeader;
