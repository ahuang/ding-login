<script setup lang="ts">
import useStore from '@/store';
import type { UserState } from '@/store/modules/types';

const { user } = useStore(); // 1. 使用store
user.getUserInfo() // 2. 调用store中action，初始化state 
// 5. 修改state
function onClick() {
  // 方式1：action 推荐 
  user.updateUser({ nickname: '小花花', sex: 'female' } as UserState)
  // 方式2： $patch 
  // user.$patch({ nickname: '小草草',sex:'male'})
}
</script>
<template>
  <h1>pinia demo </h1>
  <!-- 读取 state -->
  <p> nickname {{ user.nickname }} </p>
  <p> token {{ user.token }} </p>
  <!-- 读取 state: getter -->
  <p>{{ user.niceNickName }}</p>
  <!-- 修改state: action -->
  <p><button @click="onClick">修改nickname</button></p>
</template>