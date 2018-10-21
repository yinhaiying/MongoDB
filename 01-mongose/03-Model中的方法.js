/*
* mongoose操作数据库
*
* Schema
* Model
* Document
*
*
* */




var mongoose = require('mongoose');
//mongoose连接数据库
mongoose.connect('mongodb://localhost/mongoose_test');

mongoose.connection.once('open',function(){
  console.log('数据库连接成功')
});

//创建Schema约束对象

var Schema = mongoose.Schema;

//创建模式对象
var stuSchema = new Schema({
  //数据库约束
  name:String,
  age:Number,
  gender:{
    type:String,
    default:"female"
  },
  address:String
});


//通过Schema创建Model
//Model代表的是数据库中的集合，通过Model才能对数据库进行操作
//mongoose.model(modelName, schema)
//modelName:就是要映射的集合名，schema要对集合进行约束的对象
var StuModel = mongoose.model('students',stuSchema)


//向数据库中插入方法
//StuModel.create(doc,function(err){})

StuModel.create([
  {name:'猪八戒',age:1000,address:'高老庄'},
  {name:'沙悟净',age:800,address:'流沙河'}
  ],function(){
    // console.log(arguments)
  }
);

//查询

StuModel.find({name:'孙悟空'},{name:1},{skip:1},function(err,docs){
  if(!err){
    console.log(docs)
  }
});

//修改:

StuModel.updateOne({name:'孙悟空'},{$set:{age:20}},function(err){
  if(!err){
    console.log(arguments)
  }
});

//删除

// StuModel.remove({name:'猪八戒'},function(err){
//   if(!err){
//     console.log('删除成功')
//   }
// });

//获取文档中的数量

StuModel.count({},function(err,count){
  if(!err){
    console.log(count)
  }
})




