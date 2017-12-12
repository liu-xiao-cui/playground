// 用法
// 在实例化后调用 create 方法将表单挂载到指定的 container 下
// getFieldValue 可以拿到单个表单项的值
// validateAll 可以校验所有表单项
class Form {
    constructor() {
        this.formItems = []
    }
    // 初始化
    create(container, formItems) {
        // 生成 html
        const innerHTML = formItems.map(item => {
            const {key, label, inputType = 'text', help, rules} = item
            return `
                <div class="form-item">
                    <label for=${key}>${label}</label>
                    <div class="input-wrapper">
                        <input id=${key} type=${inputType}>
                        <div>${help}</div>
                    </div>
                </div>
            `
        }).join('')
        container.innerHTML = `<form>${innerHTML}</form>`
        // 监听 blur 事件
        formItems.forEach(item => {
            const {key, rules} = item
            const element = container.querySelector(`#${key}`)
            item.element = element
            this.formItems.push(item)
            element.addEventListener('blur', () => this.validateItem(item))
        })
    }
    // 校验单个表单
    validateItem(item) {
        const {rules, passedMsg, element} = item
        const value = element.value
        // 看是否有没通过的 rule
        const find = rules.find(rule => {
            return !this.validateRule(rule, value)
        })
        const inputWrapperEle = element.parentElement
        const helpDiv = element.nextElementSibling
        if(find) {
            inputWrapperEle.className = 'input-wrapper error'
            helpDiv.innerText = find.message
            return false
        } else {
            inputWrapperEle.className = 'input-wrapper success'
            helpDiv.innerText = passedMsg
            return true
        }
    }
    // 校验单条规则
    validateRule(rule, value) {
        if('required' in rule) {
            return Boolean(value)
        }
        if('pattern' in rule) {
            return rule.pattern.test(value)
        }
        if('min' in rule) {
            return calculateLength(value) >= rule.min
        }
        if('max' in rule) {
            return calculateLength(value) <= rule.max
        }
        if('validator' in rule) {
            return rule.validator(value)
        }
    }
    // 拿某个表单项的值
    getFieldValue(key) {
        const find = this.formItems.find(item => item.key === key)
        if(find) {
            return find.element.value
        }
    }
    // 校验所有表单项
    validateAll() {
        const result = this.formItems.map(item => this.validateItem(item)).every(item => item)
        return result
    }
}
