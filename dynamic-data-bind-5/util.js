// 把一个嵌套的对象解析成一层的
// 比如 {a: {aa: {aaa: 1}}} --> {a.aa.aaa: 1}
const flat = data => {
    let flatData = {}
    let walk = (obj, prefix) => {
        const keys = Object.keys(obj)
        keys.forEach(key => {
            const value = obj[key]
            const currentKey = prefix ? `${prefix}.${key}` : key
            if(typeof value === 'object') {
                walk(value, currentKey)
                return
            }
            flatData[currentKey] = value
        })
    }
    walk(data)
    walk = null
    return flatData
}
