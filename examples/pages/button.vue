<template>
  <div class="btn-container">
    <h2>基本样式</h2>
    <ma-group header="默认样式">
      <ma-button size="large">default</ma-button>
    </ma-group>
    <ma-group header="颜色样式">
      <ma-button v-for="maType in maTypes" :maType="maType" :key="index">{{maType}}</ma-button>
    </ma-group>
    <ma-group header="块级显示">
      <ma-button block="true">default</ma-button>
      <ma-button block="true" maType="primary">primary</ma-button>
    </ma-group>
    <ma-group header="按钮大小">
      <ma-button v-for="maSize in maSizes" :maSize="maSize" :key="index">default {{maSize}}</ma-button>
    </ma-group>
    <ma-group header="按钮状态">
      <h4>disabled</h4>
      <ma-button maType="primary" disabled="true">primary</ma-button>
      <h4>active</h4>
      <ma-button maType="primary" active="true">primary</ma-button>
    </ma-group>
    <ma-group header="形状镂空">
      <ma-button v-for="maType in maTypes" :maType="maType" hollow=true :key="index">{{maType}}</ma-button>
    </ma-group>
    <h2>Button Group</h2>
    <ma-group header="默认形状">
      <ma-button-group>
        <ma-button>left</ma-button>
        <ma-button>center</ma-button>
        <ma-button>right</ma-button>
      </ma-button-group>
      <ma-button-group>
        <ma-button maType="primary">left</ma-button>
        <ma-button maType="primary">center</ma-button>
        <ma-button maType="primary">right</ma-button>
      </ma-button-group>
      <ma-button-group>
        <ma-button maType="warning">left</ma-button>
        <ma-button maType="warning">center</ma-button>
        <ma-button maType="warning">right</ma-button>
      </ma-button-group>
    </ma-group>
    <ma-group header="镂空按钮组">
      <ma-button-group>
        <ma-button hollow=true>left</ma-button>
        <ma-button hollow=true>center</ma-button>
        <ma-button hollow=true>right</ma-button>
      </ma-button-group>
    </ma-group>
    <ma-group header="垂直堆叠">
      <ma-button-group stacked=true>
        <ma-button>left</ma-button>
        <ma-button>center</ma-button>
        <ma-button>right</ma-button>
      </ma-button-group>
    </ma-group>
  </div>
</template>
<script>
export default {
  name: 'button',
  data () {
    return {
      maTypes: ['primary', 'secondary', 'success', 'waning', 'alert', 'dark'],
      maSizes: ['xs', 'sm', '', 'lg', 'xl']
    };
  }
};
</script>
<style>
  .btn-container>h2{
    padding-left: 15px;
    padding-right: 15px;
    color: #555;
    font-size: 16px;
  }
</style>
