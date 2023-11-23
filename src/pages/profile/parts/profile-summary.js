import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const dummyAvatar =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

export default ProfileSummary = ({
  onPress,
  orders,
  favorites,
  display,
  user,
  handlePressBooking,
  handlePressFavorite,
}) => {
  return (
    <View style={[styles.container, styles.boxShadow]}>
      <View
        style={[
          styles.flexRow,
          styles.justifyBetween,
          styles.alignCenter,
          styles.underLine,
          { padding: 20 },
        ]}
      >
        {user.email ? (
          <Image source={{ uri: dummyAvatar }} containerStyle={styles.item} />
        ) : (
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            You're not logged in
          </Text>
        )}
        <View style={styles.about}>
          <Text style={[styles.textTitle, styles.textCenter]}>
            {user.firstName ? `${user.firstName} ${user.lastName}` : user.email}
          </Text>
          <Text style={[styles.textSmall, styles.textCenter]}>
            {user.email}
          </Text>
        </View>
        <TouchableOpacity style={styles.settingIcon} onPress={onPress}>
          <Ionicons name="settings" color="#489" size={25} />
        </TouchableOpacity>
      </View>
      <View style={[styles.flexRow, styles.justifyBetween]}>
        <TouchableOpacity
          onPress={() => handlePressBooking()}
          style={[
            styles.containerInfo,
            styles.alignCenter,
            display === "ORDERED" && styles.boxShadowGreen,
            {
              justifyContent: "center",
              borderRightWidth: 1,
              borderColor: "#d6d6d6",
            },
          ]}
        >
          <Text style={[styles.textStandar, styles.textBold]}>Booking</Text>
          <Text style={[styles.textStandar, styles.textBold, styles.textInfo]}>
            {orders}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePressFavorite()}
          style={[
            styles.containerInfo,
            styles.alignCenter,
            display === "FAVORITES" && styles.boxShadowGreen,
            {
              justifyContent: "center",
              borderLeftWidth: 1,
              borderColor: "#d6d6d6",
            },
          ]}
        >
          <Text style={[styles.textStandar, styles.textBold]}>Favorites</Text>
          <Text style={[styles.textStandar, styles.textBold, styles.textInfo]}>
            {favorites}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 7,
    padding: 5,
  },
  boxShadow: {
    shadowColor: "#808080",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  item: {
    width: 125,
    aspectRatio: 1,
    resizeMode: "contain",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  about: {
    flex: 1,
    textAlign: "left",
    padding: 10,
  },
  underLine: {
    borderBottomWidth: 2,
    borderColor: "#d6d6d6",
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textSmall: {
    fontSize: 13,
  },
  textCenter: {
    textAlign: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  alignCenter: {
    alignItems: "center",
  },
  textStandar: {
    fontSize: 15,
  },
  textBold: {
    fontWeight: "bold",
  },
  textInfo: {
    color: "#489",
  },
  containerInfo: {
    flex: 1,
    height: 100,
    display: "flex",
    zIndex: 1,
  },
  settingIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  boxShadowGreen: {
    shadowColor: "#489",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
});
