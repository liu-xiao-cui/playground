class Table {
    constructor({container, columns, dataSource}) {
        this.container = container
        this.columns = columns.map(item => ({...item, key: item.dataIndex || item.key}))
        // 有排序的列
        this.sortColumn = this.columns.find(item => item.sortOrder)
        this.dataSource = dataSource
        this.initiateTable()
        this.initiateSorters()
    }
    // 挂载表格到 dom 中
    initiateTable() {
        const ths = this.columns.map(item => `<th>${item.title}</th>`).join('')
        const dataSource = this.getSortedDataSource()
        const trs = dataSource.map(rowData => {
            const tds = this.columns.map(column => {
                const {key, render} = column
                const tdValue = render ? render(rowData) : rowData[key]
                return `<td>${tdValue}</td>`
            }).join('')
            return `<tr>${tds}</tr>`
        }).join('')

        const innerHTML = `
            <table class="my-table">
                <thead>
                    <tr>
                        ${ths}
                    </tr>
                </thead>
                <tbody>
                    ${trs}
                </tbody>
            </table>
        `
        this.container.innerHTML = innerHTML
    }
    // 根据某一列进行排序
    getSortedDataSource() {
        if(!this.sortColumn) {
            return this.dataSource
        }
        const {sorter, sortOrder, key, render} = this.sortColumn
        const getValue = render ? render : rowData => rowData[key]
        const sortFunc = typeof sorter === 'boolean' ? (a, b) => getValue(a) - getValue(b) : sorter
        const dataSource = [...this.dataSource].sort(sortFunc)
        return sortOrder === 'ascend' ? dataSource : dataSource.reverse()
    }
    // 挂载排序组件
    initiateSorters() {
        const ths = this.container.querySelectorAll('th')
        this.columns.forEach((column, index) => {
            const {sorter, key} = column
            if(sorter) {
                const sortOrder = this.sortColumn && this.sortColumn.key === key && this.sortColumn.sortOrder
                new Sorter({
                    container: ths[index],
                    sortOrder,
                    onSort: newOrder => this.onSort(key, newOrder)
                })
            }
        })
    }
    // 点击排序时
    onSort(key, newOrder) {
        const columnFind = this.columns.find(item => item.key === key)
        this.sortColumn = {...columnFind, sortOrder: newOrder}
        // 重新渲染 table
        this.initiateTable()
        this.initiateSorters()
    }
}
