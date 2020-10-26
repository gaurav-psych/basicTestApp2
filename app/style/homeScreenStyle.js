import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../style/colors';

export const homeScreenStyle = StyleSheet.create({
  first: {
    height: 20,
    width: 20,
    marginLeft: 20,
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#232324',
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardBooked: {
    backgroundColor: '#d41a0d',
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameT: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 10,
    color: '#36e4ff',
  },
  nameSecon: {
    fontSize: 12,
    color: '#ccc',
    marginLeft: 20,
    marginBottom: 10,
  },
  img: {
    height: 30,
    width: 30,
    marginRight: 10,
  },

  cardStyle: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 5,

    // alignSelf: 'center',
  },
  headST: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  imgSt: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  heaText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
