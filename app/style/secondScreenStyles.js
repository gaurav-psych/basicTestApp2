import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {colors} from './colors';
import {color} from 'react-native-reanimated';

export const secondScreenStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.theme,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  first: {
    height: 30,
    width: 30,
    marginLeft: 10,
    marginVertical: 10,
  },
  tetx: {
    fontSize: 16,
    marginLeft: '20%',
    marginVertical: 10,
    color: colors.white,
  },
  cardW: {
    backgroundColor: colors.white,

    marginHorizontal: 20,
    marginVertical: 10,
  },
  cardHead: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 0.3,
  },
  cardHeadT: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 20,
  },
  titleS: {
    paddingTop: 0,
    marginLeft: 20,
    marginTop: Platform.OS === 'android' ? -12 : -10,
  },
  lisV: {
    marginLeft: 10,
    marginTop: 20,
  },
  timeS: {
    paddingLeft: 10,
    borderRadius: 13,
    padding: 0,
  },
  descSty: {
    color: 'gray',
    paddingTop: 0,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 12,
    margin: 0,
  },
  icStt: {
    backgroundColor: '#fff',
    width: 18,
    height: 18,
    marginTop: 2,
  },
  keepL: {
    backgroundColor: colors.theme,
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 10,
    shadowColor: colors.theme,
  },

  keepLBut: {
    backgroundColor: '#5A67F2',
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    elevation: 10,
    shadowColor: colors.theme,
    borderRadius: 5,
  },
  keepLSt: {
    color: colors.white,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
