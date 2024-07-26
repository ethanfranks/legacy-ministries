import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { SafeAreaView, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "app/components"
import { colors, spacing } from "../theme"
import { MainTabScreenProps } from "app/navigators/MainTabNavigator"

export const CartScreen: FC<MainTabScreenProps<"Cart">> = observer(function CartScreen() {

  return (
    <View style={$container}>
      <SafeAreaView>
        <Text
          testID="cart-subheading"
          style={$marginLg}
          tx="cartScreen.subheading"
          preset="subheading"
        />
      </SafeAreaView>
    </View>
  )
})

const $marginLg: TextStyle = {
  margin: spacing.lg,
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral100,
}
