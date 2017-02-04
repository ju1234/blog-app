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

//html实体转字符串
var decodeEntities = (function() {
  // this prevents any overhead from creating the object each time
  var element = document.createElement('div');

  function decodeHTMLEntities (str) {
    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }

  return decodeHTMLEntities;
})();
