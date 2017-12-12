class Observer {
    constructor(obj) {
        this.data = obj
        this.initiate(this.data)
    }
    initiate(obj) {
        const keys = Object.keys(obj)
        keys.forEach(key => {
            let value = obj[key]
            Object.defineProperty(obj, key, {
                get: () => {
                    console.log(`你访问了${key}`)
                    return value
                },
                set: newValue => {
                    console.log(`你设置了${key}，新的值为${newValue}`)
                    value = newValue
                },
            })
        })
    }
}
