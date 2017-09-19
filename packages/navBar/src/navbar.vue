<template>
  <header class="ma-navbar" :class="[maStyle ? 'ma-navbar-' + maStyle : '']">
    <h2 v-if="title" class="test" :class="['ma-navbar-title', titleOnLeft ? 'ma-navbar-left' : 'ma-navbar-center']">{{title}}</h2>
    <div class="ma-navbar-nav ma-navbar-left" v-if="leftNav.length>0">
      <a v-for="left in leftNav"
         class="ma-navbar-nav-item"
         :href="left.href"
         @click="linkClick(left, $event)">
        <span class="ma-navbar-nav-title">{{left.title}}</span>
        <span v-if="left.customIcon" :class="[left.customIcon]"></span>
        <span v-if="!left.customIcon && left.icon" class="ma-icon ma-navbar-icon" :class="[left.icon,left.title ? 'ma-navbar-icon-sibling-of-title':'']"></span>
      </a>
    </div>
    <div class="ma-navbar-nav ma-navbar-right" v-if="rightNav.length>0">
      <a v-for="right in rightNav"
         class="ma-navbar-nav-item"
         :href="right.href"
         @click="linkClick(right, $event)">
        <span class="ma-navbar-nav-title">{{right.title}}</span>
        <span v-if="right.customIcon" :class="[right.customIcon]"></span>
        <span v-if="!right.customIcon && right.icon" class="ma-icon ma-navbar-icon" :class="[right.icon,right.title ? 'ma-navbar-icon-sibling-of-title':'']"></span>
      </a>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'ma-navbar',
    methods: {
      linkClick (item, e) {
        if (this.onAction) {
          this.onAction(item, e);
        }
      }
    },
    props: {
      // 分组容器元素，默认为 div
      component: {
        type: String,
        default: 'a'
      }, // 'rfr': reveal from right ; 'rfl': reveal from right,'sfl': show-from-left,'sfr': 'sfl': show-from-right
      maStyle: {
        type: String,
        default: ''
      }, // 颜色样式
      title: {
        type: String,
        default: ''
      }, // 主标题
      leftNav: {
        type: Array,
        default: function () {
          /* {
              title: 'Left',
              href: '',
              customIcon: '', // 自定义图标 URL
              icon: '', // 图标名称，如果设置了自定义图标，则 `icon` 失效
            }
          */
          return [];
        }
      },
      rightNav: {
        type: Array,
        default: function () {
          return [];
        }
      },
      titleOnLeft: {
        type: Boolean,
        default: false
      }, // 主标题是否居左，默认居中
      onAction: {
        type: Function
      } // 链接点击时的处理函数，第一个参数为链接数据对象。
    }
  };
</script>
