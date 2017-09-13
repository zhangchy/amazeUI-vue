<template>
  <div>
    <ul class="ma-list">
      <slot></slot>
     <!-- <List.item v-for="(item,index) in items" :item=item></List.item>-->
    </ul>
  </div>
</template>
<script>
  import ListItem from './list-item';
  import Vue from 'vue';
  Vue.component('List.Item', ListItem);
  export default {
    name: 'ma-list'
  };
</script>
