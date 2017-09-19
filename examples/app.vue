<template>
  <div id="app"  style="height:100%;overflow:auto">
    <div class="header">
      <ma-navbar :title="title"
                 :leftNav="[{title:$route.path!=='/' ? '返回' : '', href: '', icon: 'ma-icon-left-nav'}]"
                 :onAction="goBack"
                 maStyle="primary">
      </ma-navbar>
    </div>
    <transition name = "ma-view-transition-rfl">
      <router-view  class="container"></router-view>
    </transition>
  </div>
</template>
<style>
  ::-webkit-scrollbar{width: 0;}
  .header{
    z-index: 5;
    position: fixed;
    width: 100%;
  }
  .container{
    overflow-y: hidden;
    position: relative;
    top: 2.75rem;
  }
</style>
<script>
  export default {
    name: 'app',
    methods: {
      goBack: (item, event) => {
        history.go(-1);
      }
    },
    computed: {
      title: function () {
        if (this.$route.path === '/') {
          return 'AMAZEUI-VUE';
        } else {
          return this.$route.name;
        }
      }
    }
  };
</script>
