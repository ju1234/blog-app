/**
 * 文件说明： 注册表单验证 + 数据处理
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/21
 */

import * as api from '../utils/api.js'
import {apiPost} from '../api/API.js'


export function regFormValidator(value, type, msg, status) {
  const values = value.trim();
  switch (type) {
    case 'name':
      if (values === '') {
        msg.innerHTML = '用户名不得为空';
        msg.style.color = '#f00';
        status[0] = 0;
        return
      }
      if (getByteLen(values) > 10) {
        msg.innerHTML = '用户名过长';
        msg.style.color = '#f00';
        status[0] = 0;
        return
      } else {
        msg.innerHTML = '验证通过';
        msg.style.color = '#1296db';
        status[0] = 1;
      }
      break;
    case 'password':
      if (values === '') {
        msg.innerHTML = '密码不得为空';
        msg.style.color = '#f00';
        return
      }
      if (getByteLen(values) < 6) {
        msg.innerHTML = '密码过短';
        msg.style.color = '#f00';
        status[1] = 0;
        return
      } else if (getByteLen(values) > 20) {
        msg.innerHTML = '密码过长';
        msg.style.color = '#f00';
        status[1] = 0;
        return
      } else {
        msg.innerHTML = '验证通过';
        msg.style.color = '#1296db';
        status[1] = 1;
      }
      break;
    case 'phone':
      const isNumber = /^[0-9]+$/;
      if (isNumber.test(values) && values.length === 11) {
        phoneValidator(value, msg, status[3]);
      } else {
        msg.innerHTML = '格式不正确';
        msg.style.color = '#f00';
        status[3] = 0;
        return
      }
    default:
      return false;
  }
}
//
// 获取字符串长度
function getByteLen(val) {
  let len = 0;
  for (let i = 0; i < val.length; i++) {
    let a = val.charAt(i);
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    }
    else {
      len += 1;
    }
  }
  return len;
}


export function phoneValidator(value, msg, status) {
  apiPost(api.HAS_THIS_PHONE, {field: 'phone', phone: value})
    .then((data) => {
      msg.innerHTML = data.msg;
      if (data.isPass) {
        msg.style.color = '#1296db';
        status = 1;
      } else {
        msg.style.color = '#f00';
        status = 0
      }
    })
}





