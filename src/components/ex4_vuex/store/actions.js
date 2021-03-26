/* 
  一个用于间接更新状态数据的方法的对象模块
    可以包含异步 | 逻辑 代码
*/


import { 
  REQUESTING,
  REQ_ERROR,
  REQ_SUCCESS
 } from "./mutation-types";

 import axios from "axios";

export default {
  /* 
    搜索的异步action: 包含了异步代码的action
  */

  async search({commit}, searchName){

    // 发请求前, 提交一个请求中的mutation
    commit(REQUESTING)
    // 发异步ajax请求, 获取数据
    try {
      const response =  await axios('https://api.github.com/search/users',{params: {q: searchName},})
      // 如果成果了, 更新状态数据(成功)
      const result = response.data
      const users = result.items.map(item=>{
        return {
          username: item.login,
          url: item.html_url,
          avatar_url:item.avatar_url
        }
      })
    //如果成功了, 通知mutation更新数据, 提交请求成功的mutation
      // commit(REQ_SUCCESS, users)
      commit(REQ_SUCCESS, {users})
    } catch (error) { // 如果失败了, 更新状态数据(失败)
    //如果失败了, 体骄傲请求失败的mutation
      commit(REQ_ERROR,{errorMsg: error.message})
    }



  }

}