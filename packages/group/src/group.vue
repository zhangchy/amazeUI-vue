<template>
  <div class="ma-group" >
    <header class="ma-group-header" v-if="header">{{header}}</header>
    <div class="ma-group-body">
      <slot></slot>
    </div>
   <!-- <List.item v-for="(item,index) in items" :item=item></List.item>-->
  </div>
</template>
<script>
  export default {
    name: 'ma-group',
    props: {
      // 分组容器元素，默认为 div
      component: {
        type: String,
        default: 'div'
      }, // 'rfr': reveal from right ; 'rfl': reveal from right,'sfl': show-from-left,'sfr': 'sfl': show-from-right
      header: {
        type: String,
        default: 'aa'
      }, // 分组标题
      footer: {
        type: String,
        default: ''
      },
      noPadded: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
