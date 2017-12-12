// 创建带文本的 element
function createElementWithText(type, text) {
    const element = document.createElement(type)
    element.innerText = text
    return element
}
// 计算字符串长度
function calculateLength(value) {
    return value.split('').reduce((total, item) => {
        if (item.charCodeAt(0) < 128) {
            return total + 1
        }
        return total + 2
    }, 0)
}
