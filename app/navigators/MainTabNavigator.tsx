import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { translate } from "../i18n"
import { AboutScreen, AccountScreen, CartScreen, DonateScreen, ShopScreen } from "../screens"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type MainTabParamList = {
  About: undefined
  Account: undefined
  Cart: undefined
  Donate: undefined
  Shop: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<MainTabParamList>()

/**
 * This is the main navigator for the app screens with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `DemoNavigator`.
 */
export function MainTabNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: translate("navigator.aboutTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="legacy" color={focused ? undefined : colors.text} size={45} />
          ),
        }}
      />

      <Tab.Screen
        name="Donate"
        component={DonateScreen}
        options={{
          tabBarLabel: translate("navigator.donateTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="give" color={focused ? undefined : colors.text} size={40} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: translate("navigator.shopTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="shoppingTag" color={focused ? undefined : colors.text} size={35} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarAccessibilityLabel: translate("navigator.cartTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="cart" color={focused ? undefined : colors.text} size={40} />
          ),
          title: translate("cartScreen.heading"),
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomColor: colors.separator,
            borderBottomWidth: 1,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            textTransform: 'uppercase',
            fontWeight: '700',
          }
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: translate("navigator.accountTab"),
          tabBarIcon: ({ focused }) => (
            <Icon icon="user" color={focused ? undefined : colors.text} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.palette.neutral300,
  borderTopWidth: 1,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.sm,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
}
