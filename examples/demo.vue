<template>
  <section class="page-demo">
    {{的幅度幅度}}
    <List v-for="items in navs" :key="items.title">
      <List.Item :title="items.title" :role="header"></List.Item>
      <List.Item v-for="item in items.list"
                 :title="item.name"
                 :href="'/#' + item.path"
                 media={img}
                 :key="item.path">

      </List.Item>
    </List>
  </section>
</template>
<style>
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
<script type="text/babel">
  import { navs } from './router';
  export default {
    data () {
      return {
        navs: []
      };
    },
    created () {
      this.navs = navs;
    }
  };
</script>