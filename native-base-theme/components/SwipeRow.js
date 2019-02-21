// @flow

import variable from "./../variables/platform";

export default (variables /*: * */ = variable) => {
  const swipeRowTheme = {
    "NativeBase.ListItem": {
      ".list": {
        backgroundColor: "#F00",
      },
      marginLeft: 0,
    },
    "NativeBase.Left": {
      flex: 0,
      alignSelf: null,
      alignItems: null,
      "NativeBase.Button": {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        borderRadius: 0,
      },
    },
    "NativeBase.Right": {
      flex: 0,
      alignSelf: null,
      alignItems: null,
      "NativeBase.Button": {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        borderRadius: 0,
      },
    },
    "NativeBase.Button": {
      flex: 1,
      height: null,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "stretch",
      borderRadius: 0,
    },
    backgroundColor: 'transparent'
  };

  return swipeRowTheme;
};
