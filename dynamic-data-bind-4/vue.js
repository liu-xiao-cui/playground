class Vue {
    constructor({el, data}) {
        this.initate(el, data)
    }
    initate(el, data) {
        const element = document.querySelector(el)
        let html = element.innerHTML
        const flatData = flat(data)
        Object.keys(flatData).forEach(key => {
            const target = `{{${key}}}`
            const value = flatData[key]
            html = html.replace(new RegExp(target, 'g'), value)
        })
        element.innerHTML = html
    }
}
