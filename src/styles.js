import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  screenOverlay: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.85,
  },
  dialogPrompt: {
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        borderRadius: 13,
      },
      android: {
        borderRadius: 3,
      },
    }),
    marginHorizontal: 20,
    marginTop: 150,
    padding: 20,

    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    width: '100%',
    paddingHorizontal: 5,
    ...Platform.select({
      ios: {
        borderRadius: 15,
        backgroundColor: 'rgba(166, 170, 172, 0.9)',
      },
      android: {},
    }),
  },
  buttonsOuterView: {
    flexDirection: 'row',
    ...Platform.select({
      ios: {},
      android: {
        justifyContent: 'flex-end',
      },
    }),
    width: '100%',
  },
  buttonsDivider: {
    ...Platform.select({
      ios: {
        width: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      android: {
        width: 20,
      },
    }),
  },
  buttonsInnerView: {
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        borderTopWidth: 0.5,
        flex: 1,
      },
      android: {},
    }),
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center',
    ...Platform.select({
      ios: { flex: 1 },
      android: {},
    }),
    marginTop: 5,
    padding: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  submitButtonText: {
    color: 'rgb(0, 129, 251)',
    fontWeight: '600',
    fontSize: 16,
  },
})
