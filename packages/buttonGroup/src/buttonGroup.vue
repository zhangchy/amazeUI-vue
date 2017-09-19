<template>
  <div class="ma-btn-group"
    :class="[justify ? 'ma-btn-group-justify' : '',stacked ? 'ma-btn-group-stacked' : '']">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ma-button-group',
    props: {
      justify: {
        type: Boolean,
        default: false
      },
      stacked: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
