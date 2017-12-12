class Sorter {
    constructor({container, sortOrder, onSort}) {
        this.container = container
        this.sortOrder = sortOrder
        this.initiateHTML()
        this.bindEvents(onSort)
    }
    // 挂载 html 到 dom
    initiateHTML() {
        const html = `
            <div class="sorter">
                <div class="arrow-up ${this.sortOrder === 'ascend' ? 'active' : ''}">
                    <svg width="16" height="8">
                        <use xlink:href="#arrow-up"></use>
                    </svg>
                </div>
                <div class="arrow-down ${this.sortOrder === 'descend' ? 'active' : ''}">
                    <svg width="16" height="8">
                        <use xlink:href="#arrow-down"></use>
                    </svg>
                </div>
            </div>
        `
        this.container.insertAdjacentHTML('beforeend', html)
    }
    // 绑定点击事件
    bindEvents(onSort) {
        const sorter = this.container.querySelector('.sorter')
        this.up = sorter.firstElementChild
        this.down = sorter.lastElementChild

        this.up.addEventListener('click', () => {
            if(this.sortOrder !== 'ascend') {
                onSort('ascend')
            }
        })
        this.down.addEventListener('click', () => {
            if(this.sortOrder !== 'descend') {
                onSort('descend')
            }
        })
    }
}
