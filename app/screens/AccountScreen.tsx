import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { SafeAreaView, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "app/components"
import { colors, spacing } from "../theme"
import { MainTabScreenProps } from "app/navigators/MainTabNavigator"

// TODO: add Supabase authentication

export const AccountScreen: FC<MainTabScreenProps<"Account">> = observer(function AccountScreen() {

  return (
    <View style={$container}>
      <SafeAreaView>
        <Text
          testID="account-heading"
          style={$marginLg}
          tx="accountScreen.heading"
          preset="heading"
        />
        <Text
          testID="account-subheading"
          style={$marginLg}
          tx="accountScreen.subheading"
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
