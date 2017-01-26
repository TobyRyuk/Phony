import './scss/index.scss'

import Vue from 'vue'
import store from './store'

import App from './App.vue'

/* eslint-disable no-new */
var Phonegap = {
  initialize () {
    this.bindEvents()
  },
  bindEvents () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  onDeviceReady () {
    Phonegap.receivedEvent()
  },
  receivedEvent () {
    console.log('The device is ready!')
    new Vue({
      el: '#app',
      store,
      components: { 'App': App }
    })
  }
}

Phonegap.initialize()
