//use rncs + TAB to get default React structure

import React, { Component } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import * as theme from "../theme";
import { TouchableOpacity } from "react-native-gesture-handler";

//for the dimensions
const { width, height } = Dimensions.get("screen");

const mocks = [
  {
    id: 1,
    user: {
      name: "Ann Adaya",
      avatar:
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9"
    },
    saved: true,
    location: "Santorini, Greece",
    temperature: 34,
    title: "Santorini",
    description:
      "Spend a few days in this majistic place, the one and only, Santorini. It's the perfect place to spend some quality together with the love of your life, and your family. Never miss out this once in a lifetime experience in our once in a lifetime journey in life. Nothing is impossible in this world of ours, you just have to believe in yourself that everything will turn out just fine, always keep that in mind. You are the creator of your greatness, you deserve it, take it.",
    rating: 3.1,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    images: [
      "https://images.unsplash.com/photo-1461319805560-d7d182e9fbbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
    ]
  },

  {
    id: 2,
    user: {
      name: "Jan Tanseco",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg"
    },
    location: "Barcelona, Spain",
    saved: false,
    temperature: 34,
    title: "Barcelona, Spain",
    description:
      "When you don't know where to go, book a one-way ticket and start here. It's the perfect place to spend some quality together with the love of your life, and your family. Never miss out this once in a lifetime experience in our once in a lifetime journey in life. Nothing is impossible in this world of ours, you just have to believe in yourself that everything will turn out just fine, always keep that in mind. You are the creator of your greatness, you deserve it, take it",
    rating: 5,
    reviews: 50302,
    preview:
      "https://images.unsplash.com/photo-1480548004877-593316be2bd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1480548004877-593316be2bd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    ]
  },

  {
    id: 3,
    user: {
      name: "Nikka Ortiz",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    location: "Turkey",
    saved: true,
    temperature: 34,
    title: "Turkey",
    description:
      "When you don't know where to go, book a one-way ticket and start here. It's the perfect place to spend some quality together with the love of your life, and your family. Never miss out this once in a lifetime experience in our once in a lifetime journey in life. Nothing is impossible in this world of ours, you just have to believe in yourself that everything will turn out just fine, always keep that in mind. You are the creator of your greatness, you deserve it, take it",
    rating: 4,
    reviews: 50302,
    preview:
      "https://images.unsplash.com/photo-1526048598645-62b31f82b8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    images: [
      "https://images.unsplash.com/photo-1526048598645-62b31f82b8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1534548974179-ecda905ac8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
    ]
  },

  {
    id: 4,
    user: {
      name: "Rhea Santillan",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    location: "Mumbai, India",
    temperature: 34,
    saved: false,
    title: "Taj Mahal, India",
    description:
      "When you don't know where to go, book a one-way ticket and start here. It's the perfect place to spend some quality together with the love of your life, and your family. Never miss out this once in a lifetime experience in our once in a lifetime journey in life. Nothing is impossible in this world of ours, you just have to believe in yourself that everything will turn out just fine, always keep that in mind. You are the creator of your greatness, you deserve it, take it",
    rating: 2.5,
    reviews: 50302,
    preview:
      "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    images: [
      "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    ]
  }
];

//these are for the styling
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: "space-between",
    alignItems: "center"
  },
  articles: {
    //paddingHorizontal: 36
  },
  destinations: {
    justifyContent: "space-between"
  },

  destination: {
    width: width - theme.sizes.padding * 2,
    height: width * 0.6, //- 36 * 2,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    padding: 36,
    //marginRight: 12,
    borderRadius: theme.sizes.radius
    //overflow: "visible"
  },

  destinationInfo: {
    position: "absolute",
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    //padding: 24,
    bottom: -theme.sizes.padding,
    left: theme.sizes.padding,
    right: theme.sizes.padding,
    backgroundColor: theme.colors.white
    //justifyContent: "space-between"
  },

  recommended: {
    //padding: 36
  },

  recommendedHeader: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: theme.sizes.padding,
    marginVertical: theme.sizes.margin * 0.66
  },

  recommendedList: {
    // paddingHorizontal: 36
  },

  recommendation: {
    width: (width - theme.sizes.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    borderTopRightRadius: theme.sizes.border,
    borderTopLeftRadius: theme.sizes.border
  },

  recommendationHeader: {
    overflow: "hidden",
    borderTopRightRadius: theme.sizes.border,
    borderTopLeftRadius: theme.sizes.border
  },

  recommendationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white
  },

  recommendationImage: {
    width: (width - theme.sizes.padding * 2) / 2,
    height: (width - theme.sizes.padding * 2) / 2
    //borderRadius: 16
  },

  recommendationOptions: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.sizes.padding / 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },

  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2
  },

  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: "bold"
  },

  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.05,
    shadowRadius: 10
  },

  dots: {
    width: 11,
    height: 11,
    borderRadius: theme.sizes.radius,
    borderWidth: 2.5,
    marginHorizontal: 7,
    //borderColor: "#007BFA",
    borderColor: "transparent",
    backgroundColor: theme.colors.gray
  },

  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: theme.sizes.radius,
    //borderWidth: 2.5,
    borderColor: theme.colors.active
  },

  title: {
    fontSize: theme.sizes.font * 2,
    fontWeight: "bold"
  },

  description: {
    fontSize: theme.sizes.font * 1.2,
    lineHeight: theme.sizes.font / 1.5,
    color: theme.colors.caption
  }
});

//these are the components of the page
class Articles extends Component {
  scrollX = new Animated.Value(0);

  static navigationOptions = {
    header: (
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <Text style={{ color: theme.colors.caption }}>Search for place</Text>
          <Text style={{ fontSize: theme.sizes.font * 2 }}>Destination</Text>
        </View>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: "https://randomuser.me/api/portraits/women/32.jpg" }}
          />
        </View>
      </View>
    )
  };

  renderDots() {
    const { destinations } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View
        style={[
          styles.flex,
          styles.row,
          {
            justifyContent: "center",
            alignItems: "center",
            marginTop: theme.sizes.margin * 2
          }
        ]}
      >
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[
                styles.dots,
                styles.activeDot,
                { borderWidth: borderWidth }
              ]}
            />
          );
        })}
      </View>
    );
  }

  renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return stars.map((_, index) => {
      const activeStar = Math.floor(rating) >= index + 1;
      // console.log("renderRatings", { rating, index });
      return (
        <FontAwesome
          name="star"
          key={`star-${index} `}
          size={theme.sizes.font}
          color={theme.colors[activeStar ? "active" : "gray"]}
        />
      );
    });
  }

  //this is for the content of the body - list of the destination
  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column, styles.destinations]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow: "visible" }}
          //getting the data from the sample data set above
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.scrollX } } }
          ])}
          renderItem={({ item }) => this.renderDestination(item)}
        />

        {this.renderDots()}
      </View>
    );
  };

  //this is the individual destination setup
  //inside each destination we have different components including header, images, rate, introduction, address.
  //after setting up the data, we can just call them here -> item.title for example
  renderDestination = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Article", { article: item })}
      >
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={{ uri: item.preview }}
        >
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <View style={{ flex: 0 }}>
              <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            </View>
            <View
              style={[
                styles.column,
                { flex: 2, paddingHorizontal: theme.sizes.padding / 2 }
              ]}
            >
              <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
                {item.user.name}
              </Text>
              <Text style={{ color: theme.colors.white }}>
                <Octicons
                  name="location"
                  size={theme.sizes.font * 0.8}
                  color={theme.colors.white}
                />
                <Text> {item.location}</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 0,
                justifyContent: "center",
                alignItems: "flex-end"
              }}
            >
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
          <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
            <Text
              style={{
                fontSize: theme.sizes.font * 1.25,
                fontWeight: "500",
                paddingBottom: 8
              }}
            >
              {item.title}
            </Text>
            <View
              style={[
                styles.row,
                { justifyContent: "space-between", alignItems: "flex-end" }
              ]}
            >
              <Text style={{ color: theme.colors.caption }}>
                {/* //to minimize character on the display */}
                {item.description.split("").slice(0, 100)}...
              </Text>
              <FontAwesome
                name="chevron-right"
                size={theme.sizes.font * 0.75}
                color={theme.colors.caption}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[styles.row, styles.recommendedHeader]}>
          <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Recommended</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: theme.colors.caption }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={{ overflow: "visible" }}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) =>
              this.renderRecommendation(item, index)
            }
          />
        </View>
      </View>
    );
  };

  renderRecommendation = (item, index) => {
    const { destinations } = this.props;
    const isLastItem = index === destinations.length - 1;
    // console.log("isLastItem", { index, length: destinations.length });

    return (
      <View
        style={[
          styles.flex,
          styles.column,
          styles.recommendation,
          //styles.shadow,
          { shadowOpacity: 1 },
          index === 0 ? { marginLeft: theme.sizes.margin } : null,
          isLastItem ? { marginRight: theme.sizes.margin / 2 } : null
        ]}
      >
        <View style={[styles.flex, styles.recommendationHeader]}>
          <Image
            style={[styles.recommendationImage]}
            source={{ uri: item.preview }}
          />
          <View style={[styles.flex, styles.row, styles.recommendationOptions]}>
            <Text style={styles.recommendationTemp}>{item.temperature}℃</Text>
            <FontAwesome
              name={item.saved ? "bookmark" : "bookmark-o"}
              size={theme.sizes.font * 1.25}
              color={theme.colors.white}
            />
          </View>
          <View
            style={[
              styles.flex,
              styles.column,
              styles.shadow,
              {
                justifyContent: "space-evenly",
                padding: theme.sizes.padding / 2
              }
            ]}
          >
            <Text
              style={{
                fontSize: theme.sizes.font * 1.25,
                fontWeight: "500",
                paddingBottom: theme.sizes.padding / 4.5
              }}
            >
              {item.title}
            </Text>
            <Text style={{ color: theme.colors.caption }}>{item.location}</Text>

            <View
              style={[
                styles.row,
                {
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: theme.sizes.margin
                }
              ]}
            >
              {this.renderRatings(item.rating)}
              <Text style={{ color: theme.colors.active }}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  //this is for the body -> Articles of places returning to show up
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        {this.renderDestinations()}
        {this.renderRecommended()}
      </ScrollView>
    );
  }
}

Articles.defaultProps = {
  destinations: mocks
};

export default Articles;
