import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { Identity } from "./Identity";
import { Button } from "./Button";

export const CustomModal = ({
  isVisible,
  handleOutsidePress,
  handleBtnPress,
}) => {
  return (
    <View>
      <Modal isVisible={isVisible} onBackdropPress={handleOutsidePress}>
        <View
          style={{
            flex: 0.65,
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
        >
          <Identity />
          <Button
            btnText={"Mbyll"}
            backgroundColor={"#daeef7"}
            btnColor={"#008bce"}
            handleBtnPress={handleBtnPress}
          />
        </View>
      </Modal>
    </View>
  );
};
