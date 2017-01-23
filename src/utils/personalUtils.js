/**
 * 文件说明： 个人主页工具
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/23
 */

import moment from 'moment';
import {getByteLen} from './regFormValidator.js'
import * as api from './api.js'
import {apiPost} from '../api/API.js'
// 信息处理
export function infoProcess(info) {
  let array = [];
  for (let key in info) {
    array.push({
      key: key,
      value: info[key],
      edit: true,
      editType: 'input'
    })
  }

  array.map(item => {
    switch (item.key) {
      case "name":
        item.title = '用户名';
        break;
      case "id":
        item.title = 'id';
        item.edit = false;
        break;
      case "phone":
        item.title = '手机号';
        break;
      case "sex":
        item.title = '性别';
        item.editType = 'select';
        break;
      case "age":
        item.title = '年龄';
        item.editType = 'select';
        break;
      case "address":
        item.title = '居住地';
        break;
      case "email":
        item.title = '邮箱';
        break;
      case "time":
        item.title = '创建时间';
        item.value = moment(item.value).format('YYYY-MM-DD h:mm:ss');
        item.edit = false;
        break;
    }
  });
  return array;
}


// 表单验证
export function dataValidator(data, type) {
  switch (type) {
    case 'name':
      if (data !== '' && getByteLen(data) < 10) {
        return true
      } else {
        return false;
      }
      break;
    case 'phone':
      const isNumber = /^[0-9]+$/;
      if (isNumber.test(data) && data.length === 11) {
        return phoneValidator(data);
      } else {
        return false;
      }
    default:
      return true;
  }
}

function phoneValidator(value) {
  apiPost(api.HAS_THIS_PHONE, {field: 'phone', phone: value})
    .then((data) => {
      return data.isPass
    })
}
