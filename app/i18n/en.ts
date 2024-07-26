const en = {
  aboutScreen: {
    heading: "LEGACY WORKS",
    subheading: "this page is still under construction..."
  },
  accountScreen: {
    heading: "ACCOUNT",
    subheading: "this page is still under construction..."
  },
  cartScreen: {
    heading: "Cart",
    subheading: "this page is still under construction..."
  },
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  donateScreen: {
    heading: "DONATE",
    subheading: "this page is still under construction..."
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  navigator: {
    aboutTab: "About",
    accountTab: "Account",
    cartTab: "Cart",
    donateTab: "Donate",
    shopTab: "Shop",
    supportTab: "Support",
  },
  shopScreen: {
    heading: "SHOP",
    subheading: "this page is still under construction..."
  },
}

export default en
export type Translations = typeof en
