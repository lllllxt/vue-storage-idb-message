import EventBus from '@lllllxt/event-bus'
import StorageIdbMessage from '@lllllxt/storage-idb-message'

export default {
  install(Vue, cfg) {
    const optName = cfg?.name || 'SIM'
    const prototypeName = '$' + optName
    // 注册服务
    const _SIM = new StorageIdbMessage(cfg)
    _SIM.response = (orderName, data) => {
      EventBus.emit(optName + '_' + orderName, data)
    }
    Vue.prototype[prototypeName] = _SIM
    Vue.mixin({
      data() {
        return {
          $$SIM_KEY: Math.random(),
        }
      },
      created() {
        this.$options[optName] = this.$options[optName] || {}
        const _opts = this.$options[optName]
        Object.keys(_opts).forEach((key) => {
          EventBus.on(optName + '_' + key, _opts[key].bind(this), this.$data.$$SIM_KEY)
        })

        this[prototypeName] = this[prototypeName] || {}
      },
      beforeDestroy() {
        EventBus.removeGroup(this.$data.$$SIM_KEY)
        this.$options[optName] = null
      },
    })
    const strategies = Vue.config.optionMergeStrategies
    strategies[optName] = strategies.methods
  },
}
