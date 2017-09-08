<template>
  <button
    class="ma-btn"
    :class="['ma-btn-' + maType, 'mint-button--' + maSize]">
    默认样式
  </button>
</template>
<style>
  .test{
      height: 100px;
      width: 100px;
      background-color:#ff0000;
  }
</style>
<script>
  export default {
    name: 'ma-button',
    props:{
      href: String,
      target: String,
      maType: {
        type: String,
        default: 'default',
        validator(value) {
          return [
            'primary',
            'warning',
            'alert',
            'dark',
            'secondary',
            'success'
          ].indexOf(value) > -1;
        }
      },
      maSize: {
        type: String,
        default: 'normal',
        validator(value) {
          return [
            'xs',
            'sm',
            'lg',
            'xl'
          ].indexOf(value) > -1;
        }
      }
    }
  };
</script>
