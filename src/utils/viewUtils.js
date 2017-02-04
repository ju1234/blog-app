/**
 * 文件说明： 实体转字符串
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/2/4
 */

// html实体转字符串
export function noEscapeSequence(string) {
  let a = document.createElement('div');
  a.innerHTML = string;
  return a.innerText;
}
