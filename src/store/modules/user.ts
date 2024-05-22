import { defineStore } from 'pinia'
import type { UserState } from './types';
export default defineStore('user', {
  state: (): UserState => ({
    id: 0,
    token: '',
    nickname: '',
    sex: '',
  }),
  actions: {
    getUserInfo() {
      return new Promise(() => {
        // 模拟api请求
        const fetchData = {
          id: 1,
          token: 'abc',
          nickname: '小华',
        }
        Object.assign(this, fetchData)
      })
    },
    updateUser(payload:UserState){
        Object.assign(this, payload)
    }
  },
  getters: {
    niceNickName:(state) => {
      return `尊敬的${state.nickname}`
    },
  }
})