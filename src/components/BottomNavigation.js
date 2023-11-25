import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home/home";
import IndexHome from "../pages/home/index";
import { Ionicons } from "@expo/vector-icons";
import IndexProfile from "../pages/profile/index";
import IndexReservation from " ../pages/reservation/index";

const Tab = createBottomTabNavigator();

export default BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="IndexHome"
      screenOptions={{
        tabBarActiveTintColor: "#489",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#489",
        },
      }}
    >
      <Tab.Screen
        name="IndexHome"
        component={IndexHome}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="IndexReservation"
        component={IndexReservation}
        options={() => ({
          tabBarLabel: "Reservation",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="reader" color={color} size={size} />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="IndexProfile"
        component={IndexProfile}
        options={({ navigation }) => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              color="#fff"
              size={30}
              style={{ marginLeft: 20 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
