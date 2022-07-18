<script setup lang="ts">
import type { TreeObject } from '../types'

defineProps<{
  tree: TreeObject
}>()
</script>

<template>
  <div pl-6>
    <div cursor="pointer" hover="c-#61bc9f" flex items-center>
      <i icon-btn i-carbon-caret-down /> {{ tree.name }}
    </div>
    <div v-if="tree.children && tree.children.length">
      <Node v-for="child in tree.children" :key="child.id" :tree="child" />
    </div>
  </div>
</template>
