<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const callbackUrl = 'http://192.168.1.137:5174//fc/portal/';
  //回调url配置在重定向URL中  https://open-dev.dingtalk.com/fe/ai#/app/dcd8c633-1d84-4b62-869a-f24e464d2b4c/security
  // const redirect_uri = encodeURIComponent(callbackUrl);
  const redirect_uri = encodeURIComponent(callbackUrl);
  // @ts-ignore: hmltodo
  window['DTFrameLogin'](
    {
      id: 'self_defined_element',
      width: 300,
      height: 300,
    },
    {
      redirect_uri,
      response_type: 'code',
      client_id: 'dingtydx5a8p6edmvqqt',
      scope: 'openid',
      prompt: 'consent',
    },
    (loginResult: any) => {
      console.log('icey loginResult', loginResult);
      // const { redirectUrl, authCode, state } = loginResult;
      // 这里可以直接进行重定向
      // window.location.href = redirectUrl;
    },
    (errorMsg: any) => {
      // 这里一般需要展示登录失败的具体原因
      console.log(`Login Error: ${errorMsg}`);
    }
  );
});
</script>

<template>
  <div>
    login
    <div id="self_defined_element" class="self-defined-classname"></div>
  </div>
</template>

<style scoped>
.self-defined-classname {
  width: 300px;
  height: 300px;
}
</style>
