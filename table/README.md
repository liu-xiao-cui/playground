## table 组件

封装一个 table 组件，支持排序。

题目来自于 IFE：<a href="http://ife.baidu.com/course/detail/id/118" target="_blank">http://ife.baidu.com/course/detail/id/118</a>

<a href="https://liu-xiao-cui.github.io/playground/table/" target="_blank">demo</a>

用法举例：

```js
// 表格列的配置
const columns = [
    {title: '姓名', dataIndex: 'name'},
    {title: '语文', dataIndex: 'chinese', sorter: true},
    {title: '数学', dataIndex: 'math', sorter: true},
    {title: '英语', dataIndex: 'english', sorter: true},
    {title: '总分', key: 'total', render: rowData => rowData.chinese + rowData.english + rowData.math, sorter: true},
    {title: '先按数学排序，再按语文排序', key: 'custom', render: rowData => `${rowData.math}, ${rowData.chinese}`, sortOrder: 'descend', sorter: (a, b) => {
        if(a.math > b.math) {
            return 1
        }
        if(a.math === b.math) {
            return a.chinese - b.chinese
        }
        return -1
    }},
]
// 表格的数据源
const dataSource = [
    {name: '小明', chinese: 90, math: 80, english: 80},
    {name: '小红', chinese: 80, math: 80, english: 90},
    {name: '小亮', chinese: 60, math: 100, english: 70},
]
// 实例化
new Table({container, columns, dataSource})
```
