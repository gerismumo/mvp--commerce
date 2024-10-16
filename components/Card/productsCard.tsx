import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductCard = ({ product }: { product: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.cardContent}>
      <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 6,
        marginBottom: 16,
        width: '49%', 
        overflow: 'hidden',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
      },
      image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
      },
      cardContent: {
        padding: 12,
      },
      category: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.primary,
        textAlign: 'center'
      },
      productName: {
        fontSize: 12,
        fontWeight: '300',
        marginBottom: 4,
        textAlign: 'center'
      },
      productPrice: {
        fontSize: 14,
        color: Colors.secondary,
        textAlign:'right'
      },
  })

export default ProductCard;

