<template>
  <transition :enter-class = "'ma-view-transition-' + enter + '-enter'"
              enter-active-class="'ma-view-transition-' + enter + '-enter-active'"
              leave-class = "'ma-view-transition-' + leave + '-leave'"
              leave-active-class="'ma-view-transition-' + leave + '-leave-active'">
    <slot></slot>
   <!-- <List.item v-for="(item,index) in items" :item=item></List.item>-->
  </transition>
</template>
<script>
  export default {
    name: 'ma-transition',
    data () {
      return {
        enter: 'rfr',
        leave: 'rfl'
      };
    },
    mounted () {
      this.transition();
    },
    methods: {
      transition () {
        let transWay = this.taType.substring(0, 1);
        let direction = this.taType.substring(this.taType.length() - 1);
        let reDirection = 'r';
        direction === 'r' ? reDirection = 'l' : reDirection = 'r';
        this.enter = transWay + 'f' + direction;
        this.leave = transWay + 'f' + reDirection;
      }
    },
    props: {
      taType: {
        type: String,
        default: 'rfr'
      } // 'rfr': reveal from right ; 'rfl': reveal from right,'sfl': show-from-left,'sfr': 'sfl': show-from-right
    }
  };
</script>
