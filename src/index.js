if(typeof Object.assign !='function') {//判断是否支持
  (function(){
    Object.assign =function(target){
      'use strict';
      if(target ===undefined|| target ===null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output =Object(target);
      for(var index =1; index <arguments.length; index++) {
        var source =arguments[index];
        if(source !==undefined&& source !==null) {
          for(var nextKey in source) {
            if(source.hasOwnProperty(nextKey)) {//判断一个属性是定义在对象本身而不是继承自原型链
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;//最终输出
    };
  })();
}

import React from 'react';
import {render} from  'react-dom';
import routes from './routes';



render(
  routes,document.getElementById('root')
);





