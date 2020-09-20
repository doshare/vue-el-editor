export default {
  install: function(Vue) {
    /**
         * setTimeout优化版，自动clearTimeout，参数同setTimeout对应。
         * @param cb setTimeout对应的回调函数。
         * @param time setTimeout对应的参数，时间。
         */
    Vue.prototype.$setTimeout = function(cb, time) {
      if (typeof cb !== 'function') {
        return
      }

      if (!time) {
        time = 0
      }

      let timerId = setTimeout(() => {
        let handler = function() {
          cb.apply(cb, arguments)
        }
        handler()
      }, time)

      this.$once('hook:beforeDestroy', () => {
        if (timerId) {
          clearTimeout(timerId)
        }
      })
    }
  }
}
