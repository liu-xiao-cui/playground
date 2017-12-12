## modal 组件

封装一个 modal 组件，支持拖动，支持缩放。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/115" target="_blank">http://ife.baidu.com/course/detail/id/115</a>

<a href="https://liu-xiao-cui.github.io/playground/modal/" target="_blank">demo</a>

用法举例：

```js
// 实例化一个 modal
// modal.open() 函数用来打开弹窗
// modal.close() 函数用来关闭弹窗
const modal = new Modal()
// modal 的 config
const modalConfig = {
    title: 'modal title',
    content: 'modal content',
    width: '400px',
    // height: '300px',
    onCancel: () => {
        // 点击取消时
        console.log('onCancel')
        modal.close()
    },
    onOk: () => {
        // 点击确定时
        console.log('onOk')
        modal.close()
    },
}
// 创建 modal，即挂载 modal 到 dom 中
modal.create(modalConfig)
```
