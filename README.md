# vue-storage-idb-message

> 基于 [storage-idb-message](https://github.com/lllllxt/storage-idb-message) 的vue插件



### 通过 npm 安装

```
npm i @lllllxt/vue-storage-idb-message
```


### 通过`<script>`标签引用

[storage-idb-message.min.js](https://github.com/lllllxt/storage-idb-message/blob/master/storage-idb-message.min.js)

此方法是向 window 对象中注册一个 `VueStorageIdbMessage` 对象

#### 使用
```
// main.js
import VueStorageIdbMessage from '@lllllxt/vue-storage-idb-message'
const opts = {
    name: '666' // 默认是 SIM
}
Vue.use(VueStorageIdbMessage, opts)

// a 标签页 的组件, 发送指令
export default {
    name: 'TestA',
    methods: {
        sendOrder(){
            this.$666.send('log', { name:'lllllxt', age: 18 })
        }
    }
}


// b 标签页 的组件, 监听指令
export default {
    name: 'TestB',
    666: {
        log(data){
            // do something
            console.log(data) // { name:'lllllxt', age: 18 }
        }
    }
}

```

#### 参数(opts)

| 参数       | 描述                                               |
| ---------- | -------------------------------------------------- |
| name | 默认“SIM”，用作$options属性键名，                       |
| [options](https://github.com/lllllxt/storage-idb-message#%E5%8F%82%E6%95%B0opts)   | storage-idb-messagede参数 |


#### 方法

| 方法                               | 描述                     |
| ---------------------------------- | ------------------------ |
| send(order: String, data: any)     | 发送                     |


## License

This project is licensed under the MIT License
