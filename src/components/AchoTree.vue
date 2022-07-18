<script setup lang="ts">
import type { TreeObject } from '../types'

defineProps<{
  treeData: TreeObject[]
}>()
</script>

<template>
  <div>
    <p>这是一个树形组件</p>
    <Node v-for="tree in treeData" :key="tree.id" :tree="tree" />
  </div>
</template>
