/**
 * 文件说明： 路径信息
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/19.
 */

import * as paths from './paths'


//----------刷新获取信息
export function getPathInfo(href) {
  switch (pathProcessor(href)){

    default:
      return null;

  }
}


export function pathProcessor(href) {
  return href.split(':8888')[1];
}
