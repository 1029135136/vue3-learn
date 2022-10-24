// 导入axios实例
import httpRequest from '../request'

// 获取用户信息
export function page(params) {
    return httpRequest({
        url: 'menu/page',
        method: 'get',
        params: params
    })
}

export function update(data) {
    return httpRequest({
        url: 'menu/update',
        method: 'put',
        data: data
    })
}

export function save(data) {
    return httpRequest({
        url: 'menu/save',
        method: 'post',
        data: data
    })
}

export function destroy(id) {
    return httpRequest({
        url: 'menu/' + id,
        method: 'delete',
    })
}

export function tree() {
    return httpRequest({
        url: 'menu/tree',
        method: 'get',
    })
}

