class Vue {
    constructor({el, data}) {
        this.container = document.querySelector(el)
        this.defaultHTML = this.container.innerHTML
        this.keysListen = []
        this.initiate(data, true)
        this.listen(data)
    }
    // 初始化
    initiate(data, isFirstTime) {
        const flatData = flat(data)
        let html = this.defaultHTML
        Object.keys(flatData).forEach(key => {
            const target = `{{${key}}}`
            const value = flatData[key]
            if(html.includes(target)) {
                // 在第一次初始化时存下需要监听的 key
                isFirstTime && this.keysListen.push(key)
                html = html.replace(new RegExp(target, 'g'), value)
            }
        })
        this.container.innerHTML = html
    }
    // 监听 key
    listen(data) {
        const observerInstance = new Observer(data)
        this.keysListen.forEach(key => {
            observerInstance.$watch(key, () => this.initiate(data))
        })
    }
}
