const EXAMPLE = `
// 请打开控制台后操作

let app1 = new Observer({
    name: {
        firstName: 'shaofeng',
        lastName: 'liang',
    },
    age: 25,
})

app1.$watch('name', function (newName) {
    console.log('我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。')
})

app1.data.name.firstName = 'hahaha'
// 输出：我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。
app1.data.name.lastName = 'blablabla'
// 输出：我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。
`
