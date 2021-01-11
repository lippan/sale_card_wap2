<template>
  <div id="app">
<<<<<<< HEAD
	<loading v-show="isLoading === 'true'"></loading>
=======
>>>>>>> c676375a04c8c813d1366412360981c0602e8677
    <router-view/>
  </div>
</template>

<script>
<<<<<<< HEAD
import loading from "./components/Base/Loading";
export default {
  name: 'App',
  data() {
	  return{
		//   isLoading:''
	  }
  },
  created() {
	  window.localStorage.setItem('loading',false);
  },
  computed:{
	  isLoading(){
		  return window.localStorage.getItem('loading');
	  }
  },
  components:{loading}
=======
export default {
  name: 'App'
>>>>>>> c676375a04c8c813d1366412360981c0602e8677
}
</script>

<style>
body,html{
  width:100%;
  height:100%;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	/* font: inherit; */
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
/* body {
	line-height: 1;
} */
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
#app{
  width:100%;
  min-height: 100%;
  background:#EFEFF4;
}
.text-center{
  text-align: center;
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
<<<<<<< HEAD
.loading {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  padding-top: 5.333333rem;
}
=======

>>>>>>> c676375a04c8c813d1366412360981c0602e8677
</style>
