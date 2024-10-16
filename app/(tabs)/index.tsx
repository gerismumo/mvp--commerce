import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import MainContainer from '@/components/containers/MainContainer';
import { mockProducts } from '@/mock/products';
import ProductCard from '@/components/Card/productsCard';

export default function HomeScreen() {
  return (
    <MainContainer>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.row}>
          {mockProducts.map((item) => (
            <ProductCard key={item.id} product={item}  />
          ))}
        </View>
      </ScrollView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  }
});
