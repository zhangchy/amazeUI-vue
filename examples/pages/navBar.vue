<template>
  <div class="navbar-container">
    <ma-group header="默认样式">
      <div v-for="(navbar, index) in styleAll"
           :key="index">
        <ma-navbar
                   :title="navbar.title"
                   :leftNav="navbar.leftNav"
                   :rightNav="navbar.rightNav"
                   :onAction="navbar.onAction"
                   :maStyle="navbar.style">
        </ma-navbar>
        <br/>
      </div>
    </ma-group>
    <ma-group header="图标">
      <div>
        <ma-navbar
                :title="dataLeft.title"
                :leftNav="dataLeft.leftNav"
                :rightNav="[{icon: 'ma-icon-bars'}]"
                :onAction="dataLeft.onAction">
        </ma-navbar>
        <br/>
      </div>
    </ma-group>
    <ma-group header="多链接">
      <div>
        <ma-navbar
                :title="dataRight.title"
                :rightNav="dataRight.rightNav"
                :onAction="dataRight.onAction">
        </ma-navbar>
        <br/>
      </div>
    </ma-group>
    <ma-group header="标题居左">
      <div>
        <ma-navbar
                :title="dataRight.title"
                titleOnLeft=true
                :rightNav="dataRight.rightNav"
                :onAction="dataRight.onAction">
        </ma-navbar>
        <br/>
      </div>
    </ma-group>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: 'navbar',
  methods: {
    clickHandler (item, e) {
      e.preventDefault();
      console.log(item);
    }
  },
  created () {
    this.dataAll = {
      title: 'Navbar',
      leftNav: [{...this.itemLeft, icon: 'ma-icon-left-nav'}],
      rightNav: [{...this.itemRight, icon: 'ma-icon-right-nav'}],
      onAction: this.clickHandler
    };
    let styles = ['', 'primary', 'secondary', 'success', 'warning', 'alert', 'dark'];
    for (let style of styles) {
      this.styleAll.push({...this.dataAll, style: style});
    };
    this.dataLeft = {
      title: 'Navbar',
      leftNav: [{...this.itemLeft, icon: 'ma-icon-left-nav'}],
      onAction: this.clickHandler
    };
    this.dataRight = {
      title: 'Navbar',
      rightNav: [this.itemRight, this.itemRight],
      onAction: this.clickHandler
    };
  },
  data () {
    return {
      test: 'a',
      itemLeft: {
        href: '#',
        title: 'Left'
      },
      itemRight: {
        href: '#',
        title: 'Right'
      },
      dataAll: {
      },
      styleAll: [
      ],
      dataLeft: {
      },
      dataRight: {
      }
    };
  }
};
</script>
