// 拿到一个节点的最左的子节点
function getMostLeftEle(element) {
    let parent = element
    let end = false
    while (!end) {
        if (parent.firstElementChild) {
            parent = parent.firstElementChild
        } else {
            end = true
        }
    }
    return parent
}

// 拿到一个节点的最右的子节点
function getMostRightEle(element) {
    let parent = element
    let end = false
    while (!end) {
        if (parent.lastElementChild) {
            parent = parent.lastElementChild
        } else {
            end = true
        }
    }
    return parent
}
