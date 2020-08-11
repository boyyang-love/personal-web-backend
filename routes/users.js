var express = require('express');
var router = express.Router();

const db = require('../db/connect')
const users = require('../db/model/users')
const comment = require('../db/model/comment')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 用户注册账号
router.post('/sinup', async function (req, res) {
  let {
    nickname,
    email
  } = await req.body
  let result = await users.findOne({
    email
  })
  if (result) {
    res.send(result)
  } else {
    users.create({
      nickname,
      email
    })
    res.send('注册成功')
  }
})

// 添加评论
router.post('/comment', async function (req, res) {
  let email = await req.body.email
  let comments = await req.body.comment

  let result = await users.findOne({
    email
  })
  // 将评论存入comment集合中
  comment.create({
    nickname: result.nickname,
    email: result.email,
    commentText: comments
  })
  // 将评论添加到user的comment中
  if (result) {
    users.updateOne({
      email
    }, {
      $push: {
        comment: comments
      }
    }, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  } else {
    res.send("没有该数据")
  }
})

// 获取所有评论
router.get('/allComment', async function (req, res) {
  let result = await comment.find({
    commentText: {
      $ne: ''
    }
  })
  res.send(result)
})

// 删除评论事件
router.post('/delComment', async function (req, res) {
  let _id = await req.body._id
  comment.deleteOne({
    _id
  }, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('删除评论成功')
    }
  })
})


module.exports = router;