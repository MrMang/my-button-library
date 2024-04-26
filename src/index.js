import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import components from "./components";

Object.keys(components).forEach((name) => {
  Vue.component(name, components[name]);
});

Vue.use(ElementUI);

export default {
  install: function (Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });

    Vue.use(ElementUI);
  },
};
