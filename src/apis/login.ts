// 导入axios实例
import httpRequest from '../request/index'

// 定义接口的传参
interface UserInfoParam {
    username: string,
    password: string
}

// 获取用户信息
export function login(param: UserInfoParam) {
    return httpRequest({
        url: 'user/login',
        method: 'post',
        data: param,
    })
}
