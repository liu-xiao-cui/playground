class Observer {
    constructor(obj) {
        this.data = obj
        this.walk(this.data)
        this.callbacks = {}
    }
    // 遍历对象
    walk(obj, prefix) {
        const keys = Object.keys(obj)
        keys.forEach(key => {
            const value = obj[key]
            if(typeof value === 'object') {
                this.walk(value, prefix ? `${prefix}.${key}` : key)
            }
            this.bind(obj, key, prefix)
        })
    }
    // 设置 get 和 set
    bind(obj, key, prefix) {
        let value = obj[key]
        Object.defineProperty(obj, key, {
            get: () => {
                return value
            },
            set: newValue => {
                value = newValue
                const keyWithPrefix = prefix ? `${prefix}.${key}` : key
                if(typeof newValue === 'object') {
                    this.walk(newValue, keyWithPrefix)
                }
                const callback = this.callbacks[keyWithPrefix]
                if(callback) {
                    callback(newValue)
                }
            },
        })
    }
    // 监听设置 key
    $watch(key, callback) {
        this.callbacks[key] = callback
    }
}
