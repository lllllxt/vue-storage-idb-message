<template>
  <div id="app">
    <img alt="Vue logo" width="100" src="./assets/logo.png" />
    <div>
      <a href="./" target="_blank">打开新标签页</a>
    </div>
    <input type="text" placeholder="输入内容, 回车键发送, 看其他标签页输出" @keyup.enter="handleSend" v-model="inputText" />
    <div v-for="(item ,idx) in log" :key="idx">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  666: {
    print(data) {
      this.log.push(data)
      console.log(data)
    },
  },
  data() {
    return {
      inputText: '',
      log: [],
    }
  },
  methods: {
    handleSend() {
      this.$666.send('print', this.inputText)
      this.inputText = ''
    },
  },
  mounted() {
    window.vv = this
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
