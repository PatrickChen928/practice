<script setup lang="ts">
const treeData = ref([
  {
    id: 1,
    name: 'Level1',
    children: [
      {
        id: 2,
        name: 'Level2',
        children: [
          { id: 21, name: 'Level21' },
          { id: 22, name: 'Level22' },
        ],
      },
      { id: 3, name: 'Level3' },
      { id: 4, name: 'Level4' },
    ],
  },
])
const treeDataStr = ref('')
treeDataStr.value = JSON.stringify(treeData.value, null, 2)
watch(treeDataStr, () => {
  treeData.value = JSON.parse(treeDataStr.value)
})

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
</script>

<template>
  <div>
    <!-- <textarea v-model="treeDataStr" cols="60" rows="10" /> -->
    <AchoTree :tree-data="treeData" />

    <div class="card-box">
      <Card
        avatar="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02ac8fd2cdb040f5bc7d73b562518d97~tplv-k3u1fbpfcp-watermark.image"
        user-name="John Doe"
        user-role="Mobile App Developer"
        :contact-list="contactList" :social-list="socialList"
      />
    </div>
  </div>
</template>

<style lang="less">
  .card-box {
    display: flex;
    justify-content: center;
    background-color: rgb(109, 205, 137);
  }
</style>
