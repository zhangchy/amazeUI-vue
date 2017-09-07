<template>
  <div id="app">
    <div>this is template body</div>
    <div style='width:100px;height:100px;background-color:red'>
      <router-view>dd</router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app'
  };
</script>
