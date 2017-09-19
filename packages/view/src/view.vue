<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ma-view',
    props: {
      taType: {
        type: String,
        default: 'rfl'
      } // 'rfr': reveal from right ; 'rfl': reveal from right,'sfl': show-from-left,'sfr': 'sfl': show-from-right
    }
  };
</script>
