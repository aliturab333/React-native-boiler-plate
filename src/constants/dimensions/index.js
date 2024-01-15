import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
export const hp = (height) => heightPercentageToDP(0.1184 * height);
export const wp = (width) => widthPercentageToDP(0.2564 * width);
