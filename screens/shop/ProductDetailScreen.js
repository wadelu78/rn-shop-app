import React from 'react'
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Color from '../../constants/Color'
import * as cartActions from '../../store/action/cart'

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam('productId')

  const selectProduct = useSelector(state => {
    return state.products.availableProducts.find(prod => prod.id === productId)
  })

  const dispatch = useDispatch()

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectProduct.imageUrl }} />
      <View style={styles.action}>
        <Button
          color={Color.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectProduct))
          }}
        />
      </View>
      <Text style={styles.price}>${selectProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectProduct.description}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  },
  action: {
    marginVertical: 10,
    alignItems: 'center'
  }
})

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  }
}

export default ProductDetailScreen
