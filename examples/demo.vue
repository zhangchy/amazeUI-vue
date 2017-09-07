<template>
  <section class="page-demo">
    <div v-for="group in navs">
      <div class="page-title" v-text="group.title"></div>
      <div
              v-for="item in group.list"
              :to="item.path"
              is-link>
        <div slot="title">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { navs } from './routes';
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
