# Card

### 介绍

个人信息展示卡片

### 引入

```js
import { createApp } from 'vue'
import Card from './Card.vue'

const app = createApp()
app.use(Card)
```

### 基础用法

```typescript

const contactList = ref([
  {
    icon: 'i-carbon-mobile',
    value: '5-555-666-777',
    desc: 'Mobile number',
  },
  {
    icon: 'i-carbon-email',
    value: 'example@gmail.com',
    desc: 'Email address',
  },
  {
    icon: 'i-carbon-flight-international',
    value: 'www.example.com',
    desc: 'Website address',
  },
])

const socialList = ref([
  {
    icon: 'i-carbon-logo-facebook',
    link: 'https://www.facebook.com/',
  },
  {
    icon: 'i-carbon-logo-twitter',
    link: 'https://twitter.com/',
  },
  {
    icon: 'i-carbon-logo-instagram',
    link: 'https://www.instagram.com/',
  },
  {
    icon: 'i-carbon-logo-linkedin',
    link: 'https://www.linkedin.com/',
  },
])

<Card
  avatar="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image"
  user-name="John Doe"
  user-role="Mobile App Developer"
  :contact-list="contactList" 
  :social-list="socialList"
/>
```

### 使用插槽

```html
<Card>
  <!-- 自定义头部内容 -->
  <template #header>
    <div>我是头部</div>
  </template>

  <!-- 自定义尾部内容 -->
  <template #footer>
    <div>我是尾部</div>
  </template>

  <!-- 默认内容插槽 -->
  <div>我是中间</div>
</Card>
</v-cell>
```

## API

### Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| width  | 卡片的宽度       | _string_  | `15rem`    |
| avatar | 头像图片链接 | _string_ | `-` |
| userName | 用户名 | _string_ | `-` |
| userRole | 用户岗位 | _string_ | `-` |
| wrapClass | 自定义content的class | _string \| Array \| object_ | `-` |
| headerClass | 自定义头部的class | _string \| Array \| object_ | `-` |
| bodyClass | 自定义中间部分的class | _string \| Array \| object_ | `-` |
| footerClass | 自定义尾部的class | _string \| Array \| object_ | `-` |
| contactList | 中间联系方式的列表 | _Array_ | `-` |
| socialList | 社交模块的列表 | _Array_ | `-` |
| footerBgColor | 社交模块的背景 | _string_ | `'#68c8a2'` |
| footerIconColor | 社交模块的icon颜色 | _string_ | `#000` |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 默认插槽       |
| header   | 头部的插槽 |
| footer   | 尾部的插槽 |
