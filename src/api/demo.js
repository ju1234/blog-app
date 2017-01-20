/**
 * 文件说明： api
 * 详细描述：
 * 创建者： JU
 * 时间： 2017/1/20
 */
export function get() {
  $.ajax({
    url:'http://16.1.30.200:3000/api/all',
    type:'get', //GET
    async:true,    //或false,是否异
    timeout:5000,    //超时时间
    dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
    success:function(data,textStatus,jqXHR){
      console.log(JSON.parse(data))
      // console.log(textStatus)
      // console.log(jqXHR)
    },
    error:function(xhr,textStatus){
      console.log('错误')
      console.log(xhr)
      console.log(textStatus)
    }
  })
}


export function post() {
  $.ajax({
    url:'http://16.1.30.200:3000/api/all',
    type:'post', //GET
    async:true,    //或false,是否异
    data: {
      username: 'asd'
    },
    timeout:5000,    //超时时间
    dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
    success:function(data,textStatus,jqXHR){
      console.log(JSON.parse(data))
      // console.log(textStatus)
      // console.log(jqXHR)
    },
    error:function(xhr,textStatus){
      console.log('错误')
      console.log(xhr)
      console.log(textStatus)
    }
  })
}
