const EXAMPLE = `
// 请打开控制台后操作

let app1 = new Observer({
    name: {
        lastName: 'liang',
        firstName: 'shaofeng',
    },
    age: 25,
})
app1.data.name.lastName  // 这里还需要输出 '你访问了 lastName '


let app2 = new Observer({
    name: 'youngwind',
    age: 25,
})
app2.data.name = {
    lastName: 'liang',
    firstName: 'shaofeng',
}
app2.data.name.lastName
// 这里还需要输出 '你访问了 lastName '
app2.data.name.firstName = 'lalala'
// 这里还需要输出 '你设置了firstName, 新的值为 lalala'


let app3 = new Observer({
    name: 'youngwind',
    age: 25,
})
app3.$watch('age', function(age) {
    console.log(\`我的年纪变了，现在已经是：$\{age}岁了\`)
});
app3.data.age = 100  // 输出：我的年纪变了，现在已经是100岁了
`
