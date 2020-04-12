import request from '../../utils/request'
import BACK_PREFIX from "./prefix";

//创建
export function createApi(data) {
    return request({
        headers: { "Content-Type": "multipart/form-data" },
        url: "/upload",
        method: "post",
        data
    })
}

//删除
export function deleteApi(id) {
    return request({
        url: BACK_PREFIX + `/upload/delete`,
        method: "post",
        data: "id=" + id //这是传formData
    })
}

//获取列表
export function getListApi(param) {
    return request({
        url: BACK_PREFIX + "/upload/list",
        method: "get",
        params: param
    })
}

