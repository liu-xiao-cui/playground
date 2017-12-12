## 表单组件

封装表单组件，能根据配置生成表单，并带校验功能。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/101" target="_blank">http://ife.baidu.com/course/detail/id/101</a>

<a href="https://liu-xiao-cui.github.io/playground/form/" target="_blank">demo</a>

用法举例：

```js
// 实例化一个 form
// form.getFieldValue(key) 函数可以拿到某个表单项的值
// form.validateAll() 函数可以校验所有表单项
const form = new Form()
// 定义表单项
const formItems = [{
    key: 'password',
    label: '密码',
    inputType: 'password',
    help: '必填，长度为6~20个字符，只能包含英文和数字',
    passedMsg: '密码可用',
    // 校验规则
    rules: [{
        required: true, message: '密码不能为空',
    }, {
        pattern: /^[0-9a-zA-Z]+$/, message: '密码只能包含英文和数字',
    }, {
        min: 6, message: '密码长度不能小于6',
    }, {
        max: 20, message: '密码长度不能大于20',
    }],
}, {
    key: 'passwordAgain',
    label: '密码确认',
    inputType: 'password',
    help: '再次输入相同密码',
    passedMsg: '密码输入一致',
    rules: [{
        required: true, message: '密码不能为空',
    }, {
        validator: value => value === form.getFieldValue('password'), message: '密码输入不一致',
    }],
}}]
// 根据表单项初始化，即挂载到 container 元素下
form.create(container, formItems)
```
