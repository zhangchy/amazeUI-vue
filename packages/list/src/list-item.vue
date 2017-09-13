<template>
    <li
        class="ma-item"
        :class="{'ma-item-header': role==='header','ma-item-linked': !!href || !!linkComponent}">
        <a :href="href || linkComponent">
          <h3 class="ma-item-title" v-if="title">{{title}}</h3>
          <slot name="right">
            <span class="ma-icon ma-icon-right-nav ma-item-icon" v-if="href || linkComponent"></span>
          </slot>
          <div class="ma-item-after" v-if="after" v-html="after"></div>
          <div class="ma-item-media" v-if="media" :html="media"></div>
          <div class="ma-item-desc" v-if="desc" >{{desc}}</div>
        </a>
    </li>
</template>
<script>
  export default {
    name: 'ma-list-item',
    props: {
      role: {
        type: String,
        default: 'item'
      }, // enum 'item' or 'header'
      title: String, // 当前内容
      subTitle: String,
      href: String,
      media: String,
      linkComponent: {
        default: null
      },
      linkProps: {
        type: Object,
        default: function () {
          return {};
        }
      },
      after: String, // 列表标题后面的附加信息，如日期、小徽章等。
      desc: String // 列表项摘要、描述信息。
    }
  };
</script>
