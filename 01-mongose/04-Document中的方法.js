/*
* Document对象和集合中的文档是一一对应的。
* Documnet是Model的实例
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
var StuModel = mongoose.model('students',stuSchema);


//创建一个document
var stu = new StuModel({
  name:'白骨精',
  age:48,
  gender:'女',
  address:'白骨山'
});

stu.save(function(err){
  if(!err){
    console.log('保存成功')
  }
});

stu.update({$set:{age:2000}},function(err){
  if(!err){
    console.log('修改成功')
  }
})
