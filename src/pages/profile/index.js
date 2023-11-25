import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./profile";
import setting from "./setting";
import { Ionicons } from "@expo/vector-icons";

const ProfileStack = createNativeStackNavigator();

export default IndexProfile = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarActiveTintColor: "#489",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#489",
        },
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              color="#fff"
              size={30}
              style={{ marginRight: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <ProfileStack.Screen
        name="Setting"
        component={setting}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              color="#fff"
              size={30}
              style={{ marginRight: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </ProfileStack.Navigator>
  );
};