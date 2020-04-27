// pages/home/home.js

const app=getApp()
// const name=app.globalData.name;
// const age=app.globalData.age;


Page({
  data:{
    message:"微信",
    name:'kobe'
  },
  onClick(){
    this.setData({
      message:app.globalData.title,
      name:app.globalData.name
    })
  }
  // handleGetUserInfo(event){
  //     console.log(event)
  // }
})