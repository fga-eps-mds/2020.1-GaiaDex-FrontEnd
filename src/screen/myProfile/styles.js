import { StyleSheet, Dimensions } from "react-native"
import Constants from "expo-constants";

const altura = Dimensions.get("screen").height;
const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    framePerfil:{
        flex: 1,
        backgroundColor: "#242528",
        paddingTop: Constants.statusBarHeight,
        //justifyContent: "center",
    },
    perfilTextView: {
        alignItems:"center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
    },
    perfilText: {
        fontSize: altura/20,
        color: "#D6DADF",
        fontWeight: "500",
    },
    vector:{
        // alignSelf:"center",
        marginTop: 10,
        height: altura*4/11,
        width: largura,
    },
    photoView:{
        backgroundColor: "white",
        height: largura*3/8,
        width: largura*3/8,
        borderRadius: largura*3/16,
        marginLeft: largura/2 - largura*3/16,
        marginTop: altura*2/11 - largura*3/16,
    },
    frameDown:{
        flex: 1,
        backgroundColor: "#F2E0F5",
    },
    sumary:{
        position: "absolute",
        // backgroundColor: "#13A448",
        backgroundColor: "#19BB53",
        width: largura*10/11,
        height: 100,
        marginHorizontal: (largura - largura*10/11)/2,
        marginVertical: (altura/2)-50,
        borderRadius: 20,
    },
});

export default styles;