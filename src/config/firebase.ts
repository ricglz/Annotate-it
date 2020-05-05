import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
  apiKey: 'AIzaSyDM1D2o_h43MqwvUEMM4EMskf9XMP44VAI',
  authDomain: 'annotate-it-25533.firebaseapp.com',
  databaseURL: 'https://annotate-it-25533.firebaseio.com',
  projectId: 'annotate-it-25533',
  storageBucket: 'annotate-it-25533.appspot.com',
  messagingSenderId: '126420716609',
  appId: '1:126420716609:web:05a65c27423a4869100ac0',
  measurementId: 'G-FVXRN8TQTD'
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;
