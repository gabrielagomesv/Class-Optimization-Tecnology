//Importing vue from node_modules
import Vue from "vue/dist/vue.esm.js"
import exemplo01 from "./exemplo01.vue"

var app = new Vue(
  {
    el: "#app",
    components: {
      exemplo01
    },
    template: "<exemplo01></exemplo01>"
  }
)