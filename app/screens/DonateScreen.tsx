import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle, TextStyle, View } from "react-native"
import { Text } from "app/components"
import { colors, spacing } from "../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { MainTabScreenProps } from "app/navigators/MainTabNavigator"

// TODO: consume Bloomerang API to process donations - https://bloomerang.co/product/integrations-data-management/api/

export const DonateScreen: FC<MainTabScreenProps<"Donate">> = observer(function AboutScreen() {

  return (
    <View style={$container}>
      <SafeAreaView>
        <Text
          testID="donate-heading"
          style={$marginLg}
          tx="donateScreen.heading"
          preset="heading"
        />
        <Text
          testID="donate-subheading"
          style={$marginLg}
          tx="donateScreen.subheading"
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
