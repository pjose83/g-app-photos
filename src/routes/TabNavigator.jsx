
import { Dimensions, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { Map, Posts, NotAvaliable } from '../views';
import { Header } from '../components';

const { height } = Dimensions.get("window")

const Tab = createBottomTabNavigator();

const routes = [
  { name: "Posts", component: Posts, icon: "home" },
  { name: "Map", component: Map, icon: "location" },
  { name: "Messages", component: NotAvaliable, icon: "comment" },
  { name: "Notifications", component: NotAvaliable, icon: "bell" },
  { name: "Profile", component: NotAvaliable, icon: "person" }
]

export const TabNavigator = () => {
  const { Navigator, Screen } = Tab
  return (
    <Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarStyle: styles.navBar,
        tabBarActiveTintColor: "#000",
        header: () => <Header />
      }}
    >
      {routes.map(({ name, component, icon }) => (
          <Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => <Octicons name={icon} size={30} color={color} />
            }}
          />
      ))}
    </Navigator>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#F4DFCA",
    paddingHorizontal: 20,
    height: height * .12
  }
})