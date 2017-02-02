/**
 * 文件说明： api
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/20.
 */


//============================= POST=====================================

// 密码核实
export const VERIFY_PASSWORD = '/api/verifyPassword';

//注册
export const REG = '/api/reg';

// 验证手机是否注册
export const HAS_THIS_PHONE = '/api/hasThisPhone';

//修改个人信息
export const ALTER_USER_INFO = '/api/alterUserInfo';

//获取首页展示文章
export const GET_HOMEPAGE_ARTICLE = '/api/getArticle';

//点击量+1
export const HITS_ADD = '/api/hits';

//获取文章查看页 文章数据
export const GET_VIEW_ARTICLE = '/api/getViewArticle';

// 获取我的文章数据
export const GET_MYARTICLE = '/api/getMyArticle';
