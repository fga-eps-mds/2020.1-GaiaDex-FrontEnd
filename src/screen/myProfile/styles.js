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
        alignSelf: "center",
        width: largura/1.2,
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
        marginTop: altura*2/11 - largura*3/16 - largura*1/8,
    },
    name:{
        color: "#E5E5E5",
        fontSize: 13,
        textAlign: "center",
        marginTop: 7,
    },
    frameDown:{
        flex: 1,
        backgroundColor: "#F2E0F5",
    },
    sumary:{
        position: "absolute",
        backgroundColor: "#19BB53",
        width: largura*10/11,
        height: 114,
        marginHorizontal: (largura - largura*10/11)/2,
        marginVertical: (altura/2)-57,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sumaryComponents:{
        height: 100,
        width: largura*10/33,
        paddingTop: 25,
        alignItems: "center",
    },
    minhasAtividades:{
        marginTop: 75,
        marginLeft: (largura - largura*10/11)/2,
        fontSize: 18,
        fontWeight: "600",
    },
});

export default styles;