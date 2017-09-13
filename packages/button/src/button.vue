<template>
  <button
          class="ma-btn"
          :class="['ma-btn-' + maType, 'mint-button--' + maSize]">
    Default
  </button>
</template>
<script>
  export default {
    name: 'ma-button',
    props: {
      href: String,
      target: String,
      maType: {
        type: String,
        default: 'default',
        validator (value) {
          return [
            'default',
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
        validator (value) {
          return [
            'normal',
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
