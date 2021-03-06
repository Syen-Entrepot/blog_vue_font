import request from '../../modules/admin/request'
import BACK_PREFIX from "./prefix";

//创建
export function createApi(data) {
    return request({
        url: BACK_PREFIX + "/article/create",
        method: "post",
        data
    })
}

//更新
export function updateApi(data) {
    return request({
        url: BACK_PREFIX + "/article/update",
        method: "post",
        data
    })
}

//删除
export function deleteApi(id) {
    return request({
        url: BACK_PREFIX + `/article/delete`,
        method: "post",
        data: "id=" + id //这是传formData
    })
}

//获取列表
export function getListApi(param) {
    return request({
        url: BACK_PREFIX + "/article/list",
        method: "get",
        params: param
    })
}