// 导入axios实例
import httpRequest from '../request'

// 获取用户信息
export function page(params) {
    return httpRequest({
        url: 'student/page',
        method: 'get',
        params: params
    })
}

export function update(data) {
    return httpRequest({
        url: 'student/edit',
        method: 'post',
        data: data
    })
}

export function save(data) {
    return httpRequest({
        url: 'student/save',
        method: 'post',
        data: data
    })
}

export function destroy(id) {
    return httpRequest({
        url: 'student/' + id,
        method: 'delete',
    })
}
