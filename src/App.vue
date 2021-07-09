<template>
  <!--  <Header />-->
  <router-view/>
<!--    <Footer />-->
</template>
<script>
import {Config} from "/src/Axios/API/Config/index.js";
import {onMounted} from "vue";
// import Header from '/src/views/Layout/components/Header.vue';
// import Footer from '/src/views/Layout/components/Footer.vue';
import {useStore} from 'vuex'

export default {
  components:{
    // Header,
    // Footer
  },
  setup() {
    // const store = useStore()
    // const GetConfig = () => {
    //   // Config().then((res) => {
    //   //   if(res.data.code == 200){
    //   //     store.commit('InfoConfig', res.data.data)
    //   //   }
    //   // })
    // }
    onMounted(() => {
      // GetConfig()
    })
    return {
      // GetConfig
    }
  }

}
</script>
<style rel="stylesheet" lang="scss">
// Message 消息提示
.zZindex {
  z-index: 3000 !important;
}

// Message 消息提示 End

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

a {
  text-decoration: none;
  color: #333333;
}

p {
  margin: 0;
}

img {
  vertical-align: middle;
}

input, textarea, select, a:focus {
  outline: none;
}

html, body {
  margin: 0;
  color: #333333;
  background-color: #ffffff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
