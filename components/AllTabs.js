import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, TabScreen } from "react-native-paper-tabs";

const AllTabs = () => {
  return (
<View style={styles.main}>
      <View style={styles.search}>
      </View>
      <Tabs style={{ backgroundColor: "white" }}>
        <TabScreen
          color="black"
          backgroundColor="black"
          style={{ color: "black" }}
          label="Movies"
        >
          <View>
            <View
              style={{
                padding: 14,
                marginBottom: 34,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Hello</Text>
            </View>
          </View>
        </TabScreen>
        <TabScreen label="Search Results">
          <View
            style={{
              padding: 14,
              marginBottom: 34,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
             <Text>How</Text>
            </View>
          </View>

          
        </TabScreen>
        <TabScreen label="TV Shows">
          <View
            style={{
              padding: 14,
              marginBottom: 34,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
             <Text>How</Text>
            </View>
          </View>

          
        </TabScreen>
      </Tabs>
    </View>

  )
};

const styles = StyleSheet.create({
image2: {
  width: 98,
  height: 98,
  borderRadius: 100,
},
viewPatientDataModal: {
  display: "flex",
  flexDirection: "column",
  padding: 40,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
},
textModalStatus: {
  fontSize: 25,
  paddingTop: 40,
  paddingBottom: 20,
  textAlign: "center",
},
image1: {
  width: 98,
  height: 98,
  borderRadius: 49,
},

main: {
  flex: 1,
},
Header: {
  display: "flex",
  // flex: "1",
  // flexDirection: "column",
},
search: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 34,
  marginBottom: 34,
},
headermain: {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#EDF2F7",
  width: 390,
  height: 142,
},
btnview: {
  display: "flex",
  flexDirection: "row",
  marginTop: 10,
},
align: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
},
text2: {
  fontWeight: "700",
  fontSize: 20,
  lineHeight: 24.2,
  marginLeft: 85,
  marginTop: 19,
},
button: {
  width: 315,
  height: 49,
  display: "flex",
  flexDirection: "column",

  marginLeft: 40,
  marginTop: 70,
  backgroundColor: "#74CBD4",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 100,
},

dialogStyles: {
  bottom: 0,
  marginBottom: 0,
  marginTop: "110%",
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
},

modalDate: {
  left: -100,
  paddingBottom: 51,
  fontSize: 20,
  width: 129,
  fontWeight: "600",
},

modalName: {
  fontSize: 16,
  fontWeight: "500",
  paddingTop: 14,
  paddingBottom: 3,
},

modalSymptoms: {
  fontSize: "13%",
},

viewDividerLine: {
  borderBottomColor: "gray",
  borderBottomWidth: StyleSheet.hairlineWidth,
  paddingTop: 10,
  paddingBottom: 10,
},

modalButtonView: {
  width: 315,
  height: 49,
  display: "flex",
  flexDirection: "column",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 20,
  backgroundColor: "#74CBD4",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 100,
  marginBottom: 20,
},
});
  


export default AllTabs

