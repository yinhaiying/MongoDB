
//mongoose的使用模板开始
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose_test');

mongoose.connection.once('open',function(){
  console.log('数据库连接成功')
});

//mongoose的使用模板结束



mongoose.connection.once('close',function(){
  console.log('数据库已经断开')
});


//断开数据库的连接
mongoose.disconnect()
