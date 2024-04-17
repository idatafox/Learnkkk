var imgAndVoiceProject={};
var imgAndVoiceProjectArray=[];

result=JSON.parse(result);
这里的解析是异步的，如果用循环，则会产生多个异步进程
出现不可预计的结果，所以要仔细思考应对的办法。

