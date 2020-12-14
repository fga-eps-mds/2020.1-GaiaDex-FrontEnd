import { StyleSheet, Dimensions } from 'react-native';

const altura = Dimensions.get('screen').height;
const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  framePerfil: {
    // paddingTop:Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#242528',
    // justifyContent: "center",
  },
  perfilTextView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: largura / 1.2,
  },
  perfilText: {
    fontSize: altura / 20,
    color: '#D6DADF',
    fontWeight: '500',
  },
  vector: {
    // alignSelf:"center",
    marginTop: 10,
    height: (altura * 4) / 11,
    width: largura,
  },
  photoView: {
    marginLeft: largura / 2 - (largura * 3) / 16,
    marginTop: (altura * 2) / 11 - (largura * 3) / 16 - (largura * 1) / 8,
  },
  photo: {
    height: (largura * 3) / 8,
    width: (largura * 3) / 8,
    borderRadius: (largura * 3) / 16,
  },
  name: {
    marginTop: (largura * 3) / 8 + 7,
    color: '#E5E5E5',
    fontSize: 13,
    textAlign: 'center',
  },
  frameDown: {
    flex: 1,
    backgroundColor: '#F2E0F5',
  },
  sumary: {
    position: 'absolute',
    backgroundColor: '#19BB53',
    width: (largura * 10) / 11,
    height: altura / 9,
    marginHorizontal: (largura - (largura * 10) / 11) / 2,
    marginTop: altura / 2 - altura / 9,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  sumaryComponents: {
    height: altura / 11,
    width: (largura * 10) / 33,
    paddingTop: 25,
    alignItems: 'center',
  },
  minhasAtividades: {
    marginTop: 50,
    marginLeft: (largura - (largura * 10) / 11) / 2,
    fontSize: 18,
    fontWeight: '600',
  },
  item: {
    height: altura * (5 / 61),
    marginHorizontal: (largura - (largura * 10) / 11) / 2,
    borderRadius: 5,
    marginBottom: 10,
    padding: 6,
    justifyContent: 'space-between',
  },
  plantItem: {
    backgroundColor: '#B7F5CD',
  },
  topicItem: {
    backgroundColor: '#D8A3E0',
  },
  time: {
    fontSize: 10,
    color: 'rgba(0,0,0,0.3)',
  },
  list: {
    marginTop: 10,
    height: altura / 4,
  },
});
// ruan@outlook.com.br
export default styles;
