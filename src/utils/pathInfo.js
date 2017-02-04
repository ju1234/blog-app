/**
 * 文件说明： 路径信息
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/19.
 */

import * as paths from './paths'

//----------刷新获取信息
export function getPathTitle(path) {
  switch (path){
    case paths.INDEX:
      return '首页';
    case paths.MYFAVORITE:
      return '我的收藏';
    case paths.LOGIN:
      return '登录';
    case paths.MYARTICLE:
      return '我的文章';
    case paths.PERSONAL:
      return '个人主页';
    case paths.REG:
      return '注册';
    case paths.PROFILE:
      return '个人资料';
    case paths.WRITE:
      return '新建文章';
    case paths.SEARCH:
      return '搜索';
  }

}


export function pathProcessor(href) {
  return href.split(':8888')[1];
}
