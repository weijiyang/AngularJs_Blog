// JavaScript Document
var date = new Date()
var data_year = new Date(2010,0,14,5,10,30);
var data_month = new Date(2018,0,14,5,10,30);
var data_date = new Date(2018,2,14,5,10,30);
var data_hour = new Date(2018,2,20,5,10,30);
var data_minute = new Date(2018,2,20,11,10,30);
// console.log(data_year)
var noSignIn={
    id : null,
    name : '未登录',
    work : '未知',
    img :"./images/SignIn.jpg",
    content:"请先登录",
    follow:0,
    replyid:0,
    place:"未知",
    dianzan:0,
    article:[]
}

// var NavList=["我的消息"}];
var userList = [

{
    id : 1,
    name : '老大',
    work : '程序员',
    img :"./images/a1.jpg",
    content:"hello user1~",
    follow:1,
    replyid:0,
    place:"石家庄",
    dianzan:11,
    fans : [
    { 
        id:1,
        name : '粉丝1',
        img:"./images/a1.jpg",
        work:"work1",
        isStar:false
    }
    ],
    article:[
        {
            article_id:1,
            article_img:"./images/c5.jpg",
            article_content:"这里是文章 1",
            article_time:new Date()
        }
    ]
   
},
{
    id : 2,
    name : '老二',
    work : '美工',
    img :"./images/a2.jpg",
    content:"hello user2~",
    follow:2,
    replyid:0,
    place:"廊坊",
    dianzan:22,
     fans : [
    { 
        id:1,
        name : '粉丝1',
        img:"./images/a1.jpg",
        work:"work1",
        isStar:false
    },
    { 
        id:2,
        name : '粉丝2',
        img:"./images/a2.jpg",
        work:"work2",
        isStar:false
    }
    ],
    article:[
        {
            article_id:1,
            article_img:"./images/c5.jpg",
            article_content:"这里是文章 1",
            article_time:new Date(),
            article_good:1
        }
    ]
  
},
{
    id : 3,
    name : '老三',
    work : '打酱油',
    img :"./images/a3.jpg",
    content:"hello user3~",
    follow:3,
    replyid:0,
    place:"北京",
    dianzan:33,
    fans : [
    { 
        id : 1,
        name : '粉丝1',
        img:"./images/a1.jpg",
        work:"work1",
        isStar:true
    },
    { 
        id:2,
        name : '粉丝2',
        img:"./images/a2.jpg",
        work:"work2",
        isStar:true
    },
    { 
        id:3,
        name : '粉丝3',
        img:"./images/a3.jpg",
        work:"work3",
        isStar:true
    }
    ],
    article:[
        {
            article_id:1,
            article_img:"./images/c5.jpg",
            article_content:"这里是文章 1",
            article_time:new Date(),
            article_good:1
        }
    ]

},
{
    id : 4,
    name : '老四',
    work : '项目经理',
    img :"./images/a4.jpg",
    content:"hello user4~",
    follow:4,
    replyid:0,
    place:"山东",
    dianzan:44,
    fans : [
        { 
            id:1,
            name : '粉丝1',
            img:"./images/a1.jpg",
            work:"work1",
            isStar:true
        },
        { 
            id:2,
            name : '粉丝2',
            img:"./images/a2.jpg",
            work:"work2",
            isStar:true
        },
        { 
            id:3,
            name : '粉丝3',
            img:"./images/a3.jpg",
            work:"work3",
            isStar:false
        },
        { 
            id:4,
            name : '粉丝4',
            img:"./images/a4.jpg",
            work:"work4",
            isStar:false
        }
    ],
    article:[
        {
            article_id:1,
            article_img:"./images/c5.jpg",
            article_content:"这里是文章 1",
            article_time:data_month,
            article_good:3
        },
        {
            article_id:2,
            article_img:"./images/c5.jpg",
            article_content:"这里是文章 2",
            article_time:data_year,
            article_good:2
        }
    ]

}];