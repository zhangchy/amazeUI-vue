<template>
  <button class="ma-btn"
       :class="['ma-btn-' + maType, 'ma-btn-' + maSize, block ? 'ma-btn-block' : '',
        disabled ? 'ma-disabled' : '', active ? 'ma-active' : '',
        hollow ? 'ma-btn-hollow' : ''
       ]">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'ma-button',
    props: {
      href: String,
      target: String,
      hollow: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      },
      block: {
        type: Boolean,
        default: false
      },
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
