<template>
  <div>
    <a>
      test
    </a>
  </div>
</template>
<script>
  export default {
    name: 'ma-button',
    data () {
      return {
        msg: 'hello vue'
      };
    },
    props: {
      hollow: Boolean,
      disabled: Boolean,
      block: Boolean,
      active: Boolean,
      amStyle: String,
      href: String,
      target: String,
      amSize: String
    }
  };
</script>
