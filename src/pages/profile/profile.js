import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { useSelector } from "react-redux";
import ProfileSummary from "../profile/parts/profile-summary";
import Setting from "./setting";

export default Profile = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = !!user.email;

  return (
    <ScrollView style={styles.container}>
      <ProfileSummary user={user} />
      {isAuthenticated && <Setting />}
      {!isAuthenticated && (
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
          buttonStyle={styles.loginButton}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  loginButton: {
    backgroundColor: '#489', 
    borderRadius: 10, 
    marginTop: 10,
  },
});

