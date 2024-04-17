var imgAndVoiceProject={};
var imgAndVoiceProjectArray=[];

result=JSON.parse(result);
这里的解析是异步的，如果用循环，则会产生多个异步进程
出现不可预计的结果，所以要仔细思考应对的办法。


http://192.168.15.11:8080/images_manager/fimg/wlib/wlib_01.jpg


result=JSON.parse(result);
              for(seed=0;seed<=result.records.length-1;seed++){
	                imgAndVoiceProject={};
	                obj=result.records;
	                
	                imgAndVoiceProject.filename=result.records[seed].filename;
	                imgAndVoiceProject.ides=result.records[seed].ides;
	                
	                imgAndVoiceProject.filepath=result.records[seed].filepath;
	                imgAndVoiceProject.columnname=result.records[seed].columnname;
	                 
	                imgAndVoiceProjectArray.push(imgAndVoiceProject);
	                
	                

	             
              }//for end.
	           //  alert("sum project:"+imgAndVoiceProjectArray.length);

