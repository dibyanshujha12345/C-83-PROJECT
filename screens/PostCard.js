import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
          <View style={styles.authorImageContainer}>
            <Image
              source={require("../assets/profile_img.png")}
              style={styles.profileImage}
            ></Image>
</View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.post.author}
              </Text>
              </View>
              </View>

              <Image
              source={require("../assets/post.jpeg")}
              style={styles.profileImage}
            ></Image>

              
            <View style={styles.captionContainer}>
                <Text style={styles.captionText}>{this.props.post.captain}</Text>
                </View>

                <View styles={styles.actionConatiner}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2a2a2a",
      borderRadius: RFValue(20),
      padding: RFValue(20)
  },
  authorContainer: {
      flex: 0.1,
      flexDirection: "row"
  },
  authorImageContainer: {
      flex: 0.15,
      justifyContent: "center",
      alignItems: "center"
  },
  profileImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
      borderRadius: RFValue(100)
  },
  authorNameContainer: {
      flex: 0.85,
      justifyContent: "center"
  },
  authorNameText: {
      color: "white",
      fontSize: RFValue(20)
  },
  postImage: {
      marginTop: RFValue(20),
      resizeMode: "contain",
      width: "100%",
      alignSelf: "center",
      height: RFValue(275)
  },
  captionContainer: {},
  captionText: {
      fontSize: 13,
      color: "white",
      paddingTop: RFValue(10)
  },
  actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
  },
  likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
  },
  likeText: {
      color: "white",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
  }
});

