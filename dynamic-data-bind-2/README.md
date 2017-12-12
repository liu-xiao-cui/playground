## 动态数据绑定（二）

在一的基础上增加：

1. 考虑传入对象是一个“比较深”的对象（也就是其属性值也可能是对象）；
2. 在设置属性时，如果新的值也是一个对象，能继续响应 `getter` 和 `setter`；
3. 支持监听属性的变化，即实现一个 `$watch` 函数。

题目来自于 IFE：http://ife.baidu.com/course/detail/id/20

<a href="https://liu-xiao-cui.github.io/playground/dynamic-data-bind-2/" target="_blank">demo</a>
