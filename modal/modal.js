class Modal {
    constructor() {
        this.mask = ''
        this.modal = ''
    }
    create(config) {
        this.initiateModal(config)
        this.enableDragMove()
        this.enableDragScale()
    }
    // 根据 config 设置 modal 并挂载到 dom 中
    initiateModal(config) {
        const {title, content, width, height, onCancel, onOk} = config
        const wrapper = document.createElement('div')
        const html = `
            <div class="modal-mask"></div>
            <div class="modal">
                <div class="title">${title}</div>
                <div class="content">${content}</div>
                <div class="footer">
                    <button class="cancel-btn">取消</button>
                    <button class="ok-btn">确定</button>
                </div>
            </div>
        `
        wrapper.innerHTML = html
        document.body.insertAdjacentElement('beforeend', wrapper)

        this.mask = wrapper.querySelector('.modal-mask')
        this.modal = wrapper.querySelector('.modal')
        const cancelBtn = wrapper.querySelector('.cancel-btn')
        const okBtn = wrapper.querySelector('.ok-btn')

        if(width) {
            this.modal.style.width = width
        }
        if(height) {
            this.modal.style.height = height
        }

        this.modal.style.left = `${(window.innerWidth - this.modal.clientWidth)/2}px`
        this.modal.style.top = `${(window.innerHeight - this.modal.clientHeight)/2}px`

        this.mask.addEventListener('click', () => this.close())
        cancelBtn.addEventListener('click', onCancel)
        okBtn.addEventListener('click', onOk)
    }
    // 打开弹窗
    open() {
        this.modal.classList.add('visible')
        this.mask.classList.add('visible')
        document.body.style.overflow = 'hidden'
    }
    // 关闭弹窗
    close() {
        this.modal.classList.remove('visible')
        this.mask.classList.remove('visible')
        document.body.style.overflow = 'initial'
    }
    // 允许拖动
    enableDragMove() {
        const type = 'draggable'
        this.bindMouseDownAndUp(this.modal, type, e => {
            return e.target.localName !== 'button'
        })
        this.bindMouseMove(type, ({diffX, diffY}) => {
            this.modal.style.left = `${this.defaultStyle.left + diffX}px`
            this.modal.style.top = `${this.defaultStyle.top + diffY}px`
        })
    }
    // 监听鼠标 down 和 up
    bindMouseDownAndUp(element, type, condition) {
        element.addEventListener('mousedown', e => {
            if(condition && !condition(e)) {
                return
            }
            e.stopPropagation()
            const modal = this.modal
            // 在 mousedown 的时候把一些参数给存起来
            this.defaultPosition = {
                x: e.x,
                y: e.y,
            }
            this.defaultStyle = {
                left: parseFloat(modal.style.left),
                top: parseFloat(modal.style.top),
            }
            this.defaultSize = {
                width: modal.clientWidth,
                height: modal.clientHeight,
            }
            this[type] = true
        })
        document.addEventListener('mouseup', () => {
            this[type] = false
        })
    }
    // 绑定鼠标移动
    bindMouseMove(type, callback) {
        document.addEventListener('mousemove', e => {
            if(this[type]) {
                const diffX =  e.x - this.defaultPosition.x
                const diffY =  e.y - this.defaultPosition.y
                callback({diffX, diffY})
            }
        })
    }
    // 允许缩放
    enableDragScale() {
        this.modal.insertAdjacentHTML('beforeend', `
            <div class="left-resize"></div>
            <div class="right-resize"></div>
            <div class="up-resize"></div>
            <div class="down-resize"></div>
            <div class="left-up-resize"></div>
            <div class="left-down-resize"></div>
            <div class="right-up-resize"></div>
            <div class="right-down-resize"></div>
        `)

        const query = selector => this.modal.querySelector(selector)
        const modal = this.modal

        const leftResizeDiv = query('.left-resize')
        this.bindMouseDownAndUp(leftResizeDiv, 'leftResize')
        this.bindMouseMove('leftResize', ({diffX, diffY}) => {
            modal.style.left = `${this.defaultStyle.left + diffX}px`
            modal.style.width = `${this.defaultSize.width - diffX}px`
        })

        const rightResizeDiv = query('.right-resize')
        this.bindMouseDownAndUp(rightResizeDiv, 'rightResize')
        this.bindMouseMove('rightResize', ({diffX, diffY}) => {
            modal.style.width = `${this.defaultSize.width + diffX}px`
        })

        const upResizeDiv = query('.up-resize')
        this.bindMouseDownAndUp(upResizeDiv, 'upResize')
        this.bindMouseMove('upResize', ({diffX, diffY}) => {
            modal.style.height = `${this.defaultSize.height - diffY}px`
            modal.style.top = `${this.defaultStyle.top + diffY}px`
        })

        const downResizeDiv = query('.down-resize')
        this.bindMouseDownAndUp(downResizeDiv, 'downResize')
        this.bindMouseMove('downResize', ({diffX, diffY}) => {
            modal.style.height = `${this.defaultSize.height + diffY}px`
        })

        const leftUpResizeDiv = query('.left-up-resize')
        this.bindMouseDownAndUp(leftUpResizeDiv, 'leftUpResize')
        this.bindMouseMove('leftUpResize', ({diffX, diffY}) => {
            modal.style.width = `${this.defaultSize.width - diffX}px`
            modal.style.left = `${this.defaultStyle.left + diffX}px`
            modal.style.height = `${this.defaultSize.height - diffY}px`
            modal.style.top = `${this.defaultStyle.top + diffY}px`
        })

        const leftDownResizeDiv = query('.left-down-resize')
        this.bindMouseDownAndUp(leftDownResizeDiv, 'leftDownResize')
        this.bindMouseMove('leftDownResize', ({diffX, diffY}) => {
            modal.style.width = `${this.defaultSize.width - diffX}px`
            modal.style.left = `${this.defaultStyle.left + diffX}px`
            modal.style.height = `${this.defaultSize.height + diffY}px`
        })

        const rightUpResizeDiv = query('.right-up-resize')
        this.bindMouseDownAndUp(rightUpResizeDiv, 'rightUpResize')
        this.bindMouseMove('rightUpResize', ({diffX, diffY}) => {
            modal.style.width = `${this.defaultSize.width + diffX}px`
            modal.style.height = `${this.defaultSize.height - diffY}px`
            modal.style.top = `${this.defaultStyle.top + diffY}px`
        })

        const rightDownResizeDiv = query('.right-down-resize')
        this.bindMouseDownAndUp(rightDownResizeDiv, 'rightDownResize')
        this.bindMouseMove('rightDownResize', ({diffX, diffY}) => {
            modal.style.width = `${this.defaultSize.width + diffX}px`
            modal.style.height = `${this.defaultSize.height + diffY}px`
        })
    }
}
