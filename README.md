# playground

## 表单组件

封装表单组件，能根据配置生成表单，并带校验功能。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/101" target="_blank">http://ife.baidu.com/course/detail/id/101</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/form" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/form/" target="_blank">demo</a>

## table 组件

封装一个 table 组件，支持排序。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/118" target="_blank">http://ife.baidu.com/course/detail/id/118</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/table" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/table/" target="_blank">demo</a>



## modal 组件

封装一个 modal 组件，支持拖动，支持缩放。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/115" target="_blank">http://ife.baidu.com/course/detail/id/115</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/modal" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/modal/" target="_blank">demo</a>


## 插入排序原理的动态演示

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/105" target="_blank">http://ife.baidu.com/course/detail/id/105</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/insertion-sort" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/insertion-sort/" target="_blank">demo</a>


## 听指令的小方块

棋盘中的小方块可以根据输入的指令行动。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/112" target="_blank">http://ife.baidu.com/course/detail/id/112</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/control-the-block" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/control-the-block/" target="_blank">demo</a>


## 遍历二叉树

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/108" target="_blank">http://ife.baidu.com/course/detail/id/108</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/traverse-binary-tree" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/traverse-binary-tree/" target="_blank">demo</a>


## 多叉树的遍历与查询

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/110" target="_blank">http://ife.baidu.com/course/detail/id/110</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/traverse-multiway-tree" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/traverse-multiway-tree/" target="_blank">demo</a>


## 在多叉树中新增和删除节点

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/111" target="_blank">http://ife.baidu.com/course/detail/id/111</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/operate-node-in-multiway-tree" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/operate-node-in-multiway-tree/" target="_blank">demo</a>


## 动态数据绑定（一）

实现一个 `Observer`，要求如下：

1. 传入参数只考虑对象，不考虑数组；
2. `new Observer` 返回一个对象，其 `data` 属性能访问到传递进去的对象；
3. 通过 `data` 访问和设置属性时，能在控制台打印出相应的信息。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/15" target="_blank">http://ife.baidu.com/course/detail/id/15</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/dynamic-data-bind-1" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/dynamic-data-bind-1/" target="_blank">demo</a>

## 动态数据绑定（二）

在一的基础上增加：

1. 考虑传入对象是一个“比较深”的对象（也就是其属性值也可能是对象）；
2. 在设置属性时，如果新的值也是一个对象，能继续响应 `getter` 和 `setter`；
3. 支持监听属性的变化，即实现一个 `$watch` 函数。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/20" target="_blank">http://ife.baidu.com/course/detail/id/20</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/dynamic-data-bind-2" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/dynamic-data-bind-2/" target="_blank">demo</a>


## 动态数据绑定（三）

在二的基础上增加：

1. 当监听的属性的子属性变化时，也能触发回调函数。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/21" target="_blank">http://ife.baidu.com/course/detail/id/21</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/dynamic-data-bind-3" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/dynamic-data-bind-3/" target="_blank">demo</a>


## 动态数据绑定（四）

实现一个静态的数据绑定，HTML 模板根据传递的值进行显示。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/22" target="_blank">http://ife.baidu.com/course/detail/id/22</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/dynamic-data-bind-4" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/dynamic-data-bind-4/" target="_blank">demo</a>


## 动态数据绑定（五）

实现一个静态的数据绑定，HTML 模板根据传递的值进行显示。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/24" target="_blank">http://ife.baidu.com/course/detail/id/24</a>

<a href="https://github.com/liu-xiao-cui/playground/tree/master/dynamic-data-bind-5" target="_blank">源码</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://liu-xiao-cui.github.io/playground/dynamic-data-bind-5/" target="_blank">demo</a>
