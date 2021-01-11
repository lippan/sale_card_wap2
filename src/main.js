// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
<<<<<<< HEAD
import { Loading, Form, Field, Button, Cell, CellGroup, Checkbox, Tabbar, TabbarItem, Icon, Dialog, NoticeBar, Swipe, SwipeItem, Grid, GridItem, Col, Row  } from 'vant';
Vue.use(Loading);
=======
import { Form, Field, Button, Cell, CellGroup, Checkbox, Tabbar, TabbarItem, Icon, Dialog, NoticeBar, Swipe, SwipeItem, Grid, GridItem, Col, Row  } from 'vant';
>>>>>>> c676375a04c8c813d1366412360981c0602e8677
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Checkbox);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(NoticeBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Col);
Vue.use(Row);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
