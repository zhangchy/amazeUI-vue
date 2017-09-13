<template>
  <div id="app">
    <div class="ma-view-transition-rfr-enter">this is template body</div>
    <transition
            enter-class = "ma-view-transition-rfl-enter"
            enter-active-class="ma-view-transition-rfl-enter-active"
            leave-class = "ma-view-transition-rfr-leave"
            leave-active-class="ma-view-transition-rfr-leave-active">
      <router-view>dfgdf</router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'app'
  };
</script>
