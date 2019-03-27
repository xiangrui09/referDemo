<template>
  <div id="app">
    <div class="menus">
      <router-link :class=" navIndex === index ? 'active' : ''" :to="item.path" v-for="(item,index) in nav">{{item.title}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      nav:[
        {'title':'首页',path:'/list'},
        {'title':'暂空',path:'/aa'},
        {'title':'暂空2',path:'/bb'},
      ],
      navIndex: 0
    }
  },
  methods: {
    checkRouterLocal(path){
      this.nav.forEach((item,index) => {
        if(path.indexOf(item.path) >= 0){
          this.navIndex = index
        }
      });
    }
  },
  watch: {
    "$route" () {
      let path = this.$route.path;
      this.checkRouterLocal(path)
    }
  }
}
</script>

<style>
  *{
    margin:0;padding:0;
  }
  ul,ol,li{
    list-style: none outside none;
  }
  body,html{
    font-size:16px;
    line-height:1.6;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height:100vh;
  flex-direction: column;
}
  a{
    text-decoration: none;
  }
  .menus{
    border-bottom:solid 1px #ccc;
    background:#aaa;
  }
  .menus{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menus a{
    margin:10px;
    box-shadow:0 0 25px 0 rgba(0,0,0,.1) inset;
    padding:5px 35px;
    border-radius:6px;
    border:solid 1px #eee;
    transition: all .3s ease-in-out;
    cursor:pointer;
    background:#fff;
    display: block;
    color:#000;
    font-size:14px;
  }
  .menus a:hover,
  .menus a.active{
    background: #0a8fbd;
    color:#fff;
    box-shadow:0 0 12px 0 rgba(0,0,0,.3) inset;
    border:solid 1px #0a8fbd;
  }

</style>
