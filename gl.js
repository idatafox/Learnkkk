    var cpath="";

    function test(){
          	  //  alert("999");
          }
     
         function display_listview(obj){
	            ipos=-2;
	           
	            obj=JSON.parse(obj);
	            keylist=obj.keylist;
                 
                //  alert();
                 ipos=keylist.indexOf("日记");
                 
                  
	                    
                  
                
                  row="";
                  imgrow="";
                  videorow="";
                  buttonrow="";
                  line="";
                  txt="";
                  ff="";
                  ides="";
                    nsum="文件个数为：<span id='nsum_res' value='" + obj.records.length+"'>" + obj.records.length+ "</span><br>";
                    line=nsum+line;
                 for(seed=0;seed<=obj.records.length-1;seed++){
                 rest=obj.records[seed].filename.indexOf("mp4");
                //  alert(rest+":"+obj.records[seed].filename);
                  row=obj.records[seed];
                 // alert(rest+":"+row.filename);
                        videorow="";
                        imgrow="";
                        if(rest<0){
	                          
	                           if(ipos<0)
                            imgrow="<img id=\""+row.id+"\" src='/images_manager/fimg/"+obj.title+'/'+row.filename +" ' width=300 height=180 />";
                            else
                            imgrow="<img id=\""+row.id+"\" src='"+row.filepath+row.filename +" ' width=300 height=180 />";
                            
                        }
                        else{
                            videorow=videorow+"	<video id=\"" +row.id + "\" width=\"320\" height=\"240\" controls>";
                             videorow= videorow+"    <source src=\"/images_manager/fimg/" +obj.title + "/" +  row.filename + "\" type=\"video/mp4\">";
                              videorow= videorow+" </video>";
                        }
                        
                            //alert("88888886666");
                             buttonrow="<br><input type=\"button\" value=\"删除\" onclick=\" doDelete('" + row.id  +"','" +row.filename + "')\"   class=\"btn btn-primary spaceset_cc \" />";
                              buttonrow1="&nbsp;&nbsp;<input id=\"" + seed + "\" type=\"button\" value=\"注释\" onclick=\" doNote('json" + seed  + "','" + row.filename + "')\"   class=\"btn btn-primary spaceset_cc \" />";
                              line=line+imgrow+videorow+buttonrow+buttonrow1;
                              // 输出对应的  json字符串
                            if(row.ides==null){
                            	$("#ides").val("此专辑无简介");
                                 ides="无简介";
                              }
                                 
                      ff="<br><div style='color: green'>[" + row.filename + "］</div><br>";
                   
                       
                       txt="<div id=\"json" + seed + "\" class=\"record\">";
                     txt=txt + " { \"id\":\"" + seed + "\",\"ides\":\""+ides+"\" , \"filename\":\""+row.filename + "\", \"filepath\":"+"\""+ row.filepath + "\" , \"keylist\":" + "\"" + row.keylist+ "\",";
                     txt=txt + "\"title\":\""+row.title+"\",";
                       txt=txt + "\"year\":\"" + row.year + "\",";
                       txt=txt + "\"month\":\"" + row.month + "\",";
                       txt=txt + "\"day\":\"" + row.day + "\",";
                       txt=txt + "\"note\":\""+row.note+"\",";
                       txt=txt + "\"urlv\":\""+row.urlv+"\",";
                       txt=txt + "\"content\":\""+row.content+"\"}";
                       txt=txt + "</div>";
                       line=line+ff+txt; 
                       //设置全局参数
                       $('#ides').val(obj.ides);
                       $('#keylist').val(obj.keylist);
                       $('#urlv').val(obj.urlv);
                       
                       
                       
                       
                      
                       
                              
                       }
                            
                      $('#contentA').html(line);
                      
                      
               }




      function display(obj){
          	    
            
                //  alert("title=*="+obj.title);
     
                          if(obj.ides==null ) obj.ides="这个专辑无简介";
                         $('#aa').html("&nbsp;&nbsp;<h1><b>"+obj.title+"</b></h1>_"+obj.ides);
                         arrayobj=obj.records;
                         //alert(arrayobj.length+ arrayobj[0]);
                         u1=arrayobj[0];
                       //  alert(u1.title);
                         txt="";
                         ncount=0;
                         for(seed=0;seed<=arrayobj.length-1;seed++){
	                             u1=arrayobj[seed];
	                             
                             $('#content1').html(u1.content);
                              //   $('#content').html();
                              filename_a=arrayobj[seed].filename;
                              
                             // alert(filename_a);
                               if(filename_a=="") continue;
                               pos=filename_a.lastIndexOf("mp4");
                              if(pos>0) continue;
                       
                         	if(ncount==0){
                         	  txt=txt+ " <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 0\"></button>";
                               }
                               else{
                               	txt=txt+" <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\""+ncount+"\" aria-label=\"Slide" +seed+"\"></button>";
                               }
                                ncount=ncount+1;
                     	}
                         
                         $('#indicators').html(txt);
                           $('#log').html(txt);
                         txt="";
                       //  alert($('body').html());
                            ncount=0;
                           for(seed=0;seed<=arrayobj.length-1;seed++){
                               u1=arrayobj[seed];
                            //if item keylist is MD，reset select control selected index.
                            if(u1.keylist.indexOf("MD")){
	                                 // $("#pvl").val("val2").change();
	                               //  $("#pvl:nth-child(1)").prop('selected', true); 
                            }
                           //	alert(u1.note+u1.title+u1.filepath+u1.filename);

                               u2=arrayobj[0];
                                if(u2.content=='none') u2.content="笔记无";
                                if(u1.content=='none') u1.content="笔记无";
                                     
                
                                   filename_a=arrayobj[seed].filename;
                              
                            //  alert(filename_a);
                               pos=filename_a.lastIndexOf("mp4");
                            //alert(pos);
                              if(pos>0) continue;
                               
                             	if(ncount==0){
                         	     txt=txt+ "     <div class=\"carousel-item active\">";
                                 // txt=txt+"     <img src=\""+u1.filepath+""+u1.filename+"\" class=\"d-block w-100\" alt=\"...\">";
                                 txt=txt+"     <img src=\""+u1.filepath+""+u1.filename+"\" class=\"d-block w-100 h-100 \" alt=\"...\">";
                                  txt=txt+"            <div class=\"carousel-caption tit\" >";
               
                                   txt=txt+"                <h2> <b>"+u1.title+"</b></h2>";
                                   txt=txt+"                <h6>"+u1.note+"</h6>";
                                   txt=txt+"           <h8> "+u1.filename+"</h8>";
                                    txt=txt+"                <p class='content'>"+u1.content+"</p>";
                                     txt=txt+"              </div>   </div> ";
                                   $('#log1').html("["+u1.content+"]"+ncount+"/"+arrayobj.length);
                                     
                               }
                               else{
                                 txt=txt+ "     <div class=\"carousel-item \">";
                                  txt=txt+"        <img src=\""+u1.filepath+u1.filename+"\" class=\"d-block w-100  h-100 imgover\" alt=\"...\">";
                                  txt=txt+"            <div class=\"carousel-caption tit\" >";

                                     txt=txt+"                <h2> <b>"+u1.title+"</b></h2>";
                                   txt=txt+"                <h6>"+u1.note+"</h6>";
                                   txt=txt+"                <h8> "+u1.filename+"</h8>";
                                    txt=txt+"                <p class='content'>"+u1.content+"["+ncount+"/"+arrayobj.length+"]</p>";
                                    txt=txt+"              </div>   </div> ";
                                    // alert("ff"+u1.filename);
                                     $('#log1').html("["+u1.content+"]"+ncount+"/"+arrayobj.length);
                                 }
                                 ncount=ncount+1;
                      	}
                         
                         $('#inner').html(txt);
                        // $('#log').html(txt);
                        $('#log1').html("["+u2.content+"]");
                         txt="";
                         
             	
             }



   //display_ps
function display_ps(obj){
	    
            
             // alert("title=*="+obj.title);
     
                          if(obj.ides==null ) obj.ides="这个专辑无简介";
                         $('#aa').html("&nbsp;&nbsp;<h1><b>"+obj.title+"</b></h1>_"+obj.ides);
                         arrayobj=obj.records;
                         //alert(arrayobj.length+ arrayobj[0]);
                         u1=arrayobj[0];
                       //  alert(u1.title);
                         txt="";
                         ncount=0;
                         for(seed=0;seed<=arrayobj.length-1;seed++){
	                             u1=arrayobj[seed];
	                             
                             $('#content1').html(u1.content);
                              //   $('#content').html();
                              filename_a=arrayobj[seed].filename;
                              
                             // alert(filename_a);
                               if(filename_a=="") continue;
                               pos=filename_a.lastIndexOf("mp4");
                              if(pos>0) continue;
                       
                         	if(ncount==0){
                         	  txt=txt+ " <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 0\"></button>";
                               }
                               else{
                               	txt=txt+" <button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\""+ncount+"\" aria-label=\"Slide" +seed+"\"></button>";
                               }
                                ncount=ncount+1;
                     	}
                         
                         $('#indicators').html(txt);
                           $('#log').html(txt);
                         txt="";
                       //  alert($('body').html());
                            ncount=0;
                           for(seed=0;seed<=arrayobj.length-1;seed++){
                               u1=arrayobj[seed];
                            //if item keylist is MD，reset select control selected index.
                            if(u1.keylist.indexOf("MD")){
	                                 // $("#pvl").val("val2").change();
	                               //  $("#pvl:nth-child(1)").prop('selected', true); 
                            }
                           //	alert(u1.note+u1.title+u1.filepath+u1.filename);

                               u2=arrayobj[0];
                                if(u2.content=='none') u2.content="笔记无";
                                if(u1.content=='none') u1.content="笔记无";
                                     
                
                                   filename_a=arrayobj[seed].filename;
                              
                            //  alert(filename_a);
                               pos=filename_a.lastIndexOf("mp4");
                            //alert(pos);
                              if(pos>0){
	
                              }
                               else
{
	if(ncount==0){
	     txt=txt+ "     <div class=\"carousel-item active\">";
                                 // txt=txt+"     <img src=\""+u1.filepath+""+u1.filename+"\" class=\"d-block w-100\" alt=\"...\">";
                                 txt=txt+"     <img src=\""+u1.filepath+""+u1.filename+"\" class=\"d-block w-100 h-100 \" alt=\"...\">";
                                  txt=txt+"            <div class=\"carousel-caption tit\" >";
               
                                   txt=txt+"                <h2> <b>"+u1.title+"</b></h2>";
                                   txt=txt+"                <h6>"+u1.note+"</h6>";
                                   txt=txt+"           <h8> "+u1.filename+"</h8>";
                                    txt=txt+"                <p class='content'>"+u1.content+"</p>";
                                     txt=txt+"              </div>   </div> ";
                                   $('#log1').html("["+u1.content+"]"+ncount+"/"+arrayobj.length);
                                     
                               }
                               else{
                                 txt=txt+ "     <div class=\"carousel-item \">";
                                  txt=txt+"        <img src=\""+u1.filepath+u1.filename+"\" class=\"d-block w-100  h-100 imgover\" alt=\"...\">";
                                  txt=txt+"            <div class=\"carousel-caption tit\" >";

                                     txt=txt+"                <h2> <b>"+u1.title+"</b></h2>";
                                   txt=txt+"                <h6>"+u1.note+"</h6>";
                                   txt=txt+"                <h8> "+u1.filename+"</h8>";
                                    txt=txt+"                <p class='content'>"+u1.content+"["+ncount+"/"+arrayobj.length+"]</p>";
                                    txt=txt+"              </div>   </div> ";
                                    // alert("ff"+u1.filename);
                                     $('#log1').html("["+u1.content+"]"+ncount+"/"+arrayobj.length);
                                 }
                                 ncount=ncount+1;
	}
                           }
                         
                         $('#inner').html(txt);
                        // $('#log').html(txt);
                        $('#log1').html("["+u2.content+"]");
                         txt="";
                         
             	
             }
   
   
   
   
     //绘本页面视图列表
function listVedioesView_pb(obj){
	             arrayobj=obj.records;
             // alert(arrayobj.length);
                        
       	     
                 filename="";
                 pos=-1;
                 resV=""
                for(seed=0;seed<=arrayobj.length-1;seed++){
       	          filename=arrayobj[seed].filename;
                      row=arrayobj[seed];
                      pos=filename.lastIndexOf("mp4");
                     // alert("pos="+pos);
                     resV=resV+"<div class=\"row spaceset_d\">";
                     
                     if(pos>0){
                           if(seed==0){
                              resV=resV+"<div class=\"col-12 bigrow\" >";
                              resV= resV + "	<video id=\"" + row.id + "\" class=\"w-100\" controls>";
                              resV= resV +  "    <source src=\"" +row.filepath+row.filename + "\" type=\"video/mp4\">";
                              resV=resV+  " </video>";
                             // resV=resV+"<br><h8>"+row.filename+"</h8><br*>";
                              resV=resV+"<h3>"+row.title+"</h3>";
                              resV=resV+"<h8>"+row.content+"</h8>";
                              resV=resV+"</div>";
                           }
                           else{
                              resV=resV+"<div class=\"col-6 smallrowA\" >";
	                             resV= resV + "	<video id=\"" + row.id + "\" class=\"w-100\" ftit='"+row.title+"' >";
                              resV= resV +  "    <source src=\"" +row.filepath+row.filename + "\" type=\"video/mp4\">";
                              resV=resV+  " </video>";
                             // resV=resV+"<br><h8>"+row.filename+"</h8><br*>";
                             // resV=resV+"<h3>"+row.title+"</h3>";
                             // resV=resV+"<h8>"+row.content+"</h8>";
                              resV=resV+"</div>";
                              resV=resV+"<div class=\"col-6 smallrowB\" >";
                              resV=resV+"<p>"+row.title+"</p>";
                              

                              
                              
                              
                              resV=resV+row.note+"["+row.filename+"]"+"<p> <button type='button' class='btn btn-primary' onclick='golearn("+row.id+")' data-bs-toggle='modal' data-bs-target='#videoModalPage'>播放</button></p>";
                              resV=resV+"</div>";
                             // $('.smallrowA').html(resV);
                              
                           }
                      }
                      resV=resV+"</div>";
                      $("#lview").html(resV);
                      
                   }
                   
                   return resV;
       
         }
           
     
     
     
     
   
  
       	function listVedioesView(obj){
       	   arrayobj=obj.records;
             // alert(arrayobj.length);
                        
       	     
                 filename="";
                 pos=-1;
                 resV=""
                for(seed=0;seed<=arrayobj.length-1;seed++){
       	          filename=arrayobj[seed].filename;
                      row=arrayobj[seed];
                      pos=filename.lastIndexOf("mp4");
                     // alert("pos="+pos);
                     if(pos>0){
                  
                      resV= resV + "	<video id=\"" + row.id + "\" width=\"320\" height=\"240\" controls>";
                      resV= resV +  "    <source src=\"" +row.filepath+row.filename + "\" type=\"video/mp4\">";
                      resV=resV+  " </video>";
                      resV=resV+"<br><h8>"+row.filename+"</h8><br*>";
                       resV=resV+"<h3>"+row.title+"</h3>";
                      resV=resV+"<h8>"+row.content+"</h8>";
                      }
                      
                   }
                 //  $('#log').html(resV);
                   return resV;
       
         }
            
            //获取项目列表
           function listProjects(){
                   
                   htmlcc="";
	                  cc={topic:"root"};
           
                    $.ajax({        	
                   type: "POST",
                   dataType: "text",
                    url: "/images_manager/listprojects.php",
                    data:cc,
                    success: function(result){
                        
                      //$("#log").html(result);
                        //把字符串换成json
                         result=JSON.parse(result);
                       //alert(result.records.length);
                         htmlcc=htmlcc+" &nbsp;    &nbsp;   &nbsp;  &nbsp; <select id='pvl'  class=\"form-select\">";
                         
                         for(seed=0;seed<=result.records.length-1;seed++){
                         //	alert(result.records[seed].fname);
                         	if(result.records[seed].fname=="0000" || result.records[seed].fname=="") {
                         	                //	alert(result.records[seed].fname);
                                                 continue;
                               }
                         	if(seed==0)
                             htmlcc=htmlcc+"<option selected>"+result.records[seed].fname+"</option>";
                             else
                                      htmlcc=htmlcc+"<option>"+result.records[seed].fname+"</option>";
                     	}
                      
                            
                            
                                  
                                   htmlcc=htmlcc+"</select>";
                                  // alert(htmlcc);
                                 $("#ps").html(htmlcc);
                                  tit=$('#pvl option:selected').text();
                                  
                                        cc={title:tit};
                                       readJsonFile(cc);
                                       schanghandle();
                                       
                                        
                                        
                                        
                         }
                    	});     
                         //第二个ajax
                     
                       
               
                                        
                                        
                                      
                 }
                 
     //绘本列表展示
function listProjects_pc(){
        
                   htmlcc="";
	                  cc={topic:"picbook"};
           
                    $.ajax({	
                   type: "POST",
                   dataType: "text",
                    url: "/images_manager/listprojects.php",
                    data:cc,
                    success: function(result){
                        
                     //  $("#log").html(result);
                        //把字符串换成json
                         result=JSON.parse(result);
                       //alert(result.records.length);
                         htmlcc=htmlcc+" &nbsp;    &nbsp;   &nbsp;  &nbsp; <select id='pvl'  class=\"form-select\">";
                         
                         for(seed=0;seed<=result.records.length-1;seed++){
                         //	alert(result.records[seed].fname);
                         	if(result.records[seed].fname=="0000" || result.records[seed].fname=="") {
                         	                //	alert(result.records[seed].fname);
                                                 continue;
                               }
                         	if(seed==0)
                             htmlcc=htmlcc+"<option selected>"+result.records[seed].fname+"</option>";
                             else
                                      htmlcc=htmlcc+"<option>"+result.records[seed].fname+"</option>";
                     	}
                      
                            
                            
                                  
                                   htmlcc=htmlcc+"</select>";
                                  // alert(htmlcc);
                                 $("#ps").html(htmlcc);
                                  tit=$('#pvl option:selected').text();
                                  
                                       cc={title:tit};
                                     //  alert("8888888");
                                       readJsonFile_pc(cc);
                                       
                                       schanghandle();
                                       
                                        
                                        
                                        
                         }
                    	});     
                       
                 }
     
     
     
     
     
     
     
     
     
           function readJsonFile(cc){
                           	  //  alert('path'+pathV);
                           	   //  pathV="/data/user/htdocs/json_db/清明上河图.json";
                           		$("#aa").html("请稍候,装载中...");
                           	    
                   $.ajax({	
                   type: "POST",
                   dataType: "text",
                    url: "/images_manager/reportlistBK.php",
                    data:cc,
                    success: function(result){
                        //   alert("pathV"+pathV+"## result="+result);
                    	   result=JSON.parse(result);
                           
                           display(result);
                           listVedioesView_pb(result);
                           
                    }
                    });
           }
           
           //picbook read func
function readJsonFile_pc(cc){
	                 
                 //  alert('path'+pathV);
                           	   //  pathV="/data/user/htdocs/json_db/清明上河图.json";
                   $("#aa").html("请稍候,装载中!");
                           	    
                   $.ajax({	
                   type: "POST",
                   dataType: "text",
                    url: "/picbook/picbookBK.php",
                    data:cc,
                    success: function(result){
                       //  alert("## result="+result);
	                        result=JSON.parse(result);
                           
                           display_ps(result);
                           listVedioesView_pb(result);
                           
                           
                    }
                    });
           }
           
           
           
           
           function getCPath(tit){
           	$("#aa").html("请稍候,装载中...");
           	  cc={title:tit};
           	     $.ajax({        	
                   type: "POST",
                   dataType: "text",
                  //  url: "https://www.elearn007.com/images_manager/getPath.php",
                    url: "/images_manager/getPath.php",
                    data:cc,
                    //async:true,
                    success: function(result){
                    	   cpath=result;
                           cpath=cpath.trim();
                        //   $("#bbc").html(cpath);
                           readJsonFile(cpath);
                            
                          
                    }
                    });
           }
           //添加select change event 
           function schanghandle(){
           	          $("#pvl").change(function(){
                                tit=$('#pvl option:selected').text();
                                     cc={title:tit};
                                     readJsonFile(cc);
                           
                           });
           
           }
           //修改图库数据
          function modCfg(){
          	  tit= $("#tit").val();
                cc= {tit:tit}
              //   alert("88");
                
   $.ajax({
   type: "POST",
   dataType: "text",
   url: "/images_manager/modCfg.php",
   data:cc,
    success: function(result){
       $("#log").html("running modCfg...");
     //  $("#log").html(result);
       display_listview(result);
        
     },
     error:function(jqXHR,exception){
   
        $("#log").html("modCfg error="+exception);
        }
      });
          
         }
         
         //文档视图入口
          function docview(){
          	    iflog=-8;
                  if(iflog==-1){
                   alert("docview start...");
                   }
                  //get title
                  title_doc=$("#aa").html();
                  $("#exampleModalLongTitle").html(title_doc);
                  //获取item的总数量carousel-item
                   lenItems=$(".carousel-item").length;
                   itemV="";
                   imgV="";
                   resV="";
                   ipath="";
                   for(nflag=1;nflag<=lenItems;nflag++){
                   	  
                       itemV=$(".carousel-item:nth-child("+nflag+") p").html();
                        imgV=$(".carousel-item:nth-child("+nflag+") h8").html();
                        ipath=$(".carousel-item:nth-child("+nflag+") img").attr("src");
                        resV=resV+"<img src=\""+ipath+"\" class=\"img-fluid\" alt=\"...\">"+"<br>"+itemV+"<br>";
                       
                       
                   }
                 $(".modal-body").html(resV);
                   
                   if(iflog==-1){
                        alert("items sum ;" +lenItems);
                        alert("item total value :"+resV);
                   }
                  
                 
                 
                   
          
          }
      
      
      
      
  //跳转到特定时间点
  var oidvv="";
  function seekVideo(obj,oid){
	    stimev=$(obj).attr("stime");
     
	    //alert("stimev==="+stimev);
	   if(stimev!="" && stimev!=null)
    oidvv.currentTime=stimev;
	//  alert(oidvv.currentTime);
	   oidvv.play();
  }
  //调出单词库
   function goWordLib(oid,outerRes){
	    
	    
     idv="#"+oid;
	    wordFullV="";
	    cnword="";
	    eword="";
	   
     obj=JSON.parse(outerRes);
     
     for(seed=0;seed<=obj.textlist.length-1;seed++){
	        
         cnword=obj.textlist[seed].cnword+"<br>";
         eword=obj.textlist[seed].eword;
         wordFullV=wordFullV+"<div stime='"+obj.textlist[seed].stime+"' onclick='seekVideo(this,this)' class='wordlib'>"+"["+eword+"]"+cnword+"</div>";
         
         
     }
     $("#wlib").html(wordFullV);
	    
    }
      
      
   //获取字幕
 function golearn(oid){
	   
	 //  tit = $("#videoModalPage .modal-title").html();
  idv="#"+oid;
  var vid = document.getElementById(oid);
  tit=$(idv).attr("ftit");
	// tit="亲爱的动物园";
    cc= {title:tit}
   $.ajax({
   type: "POST",
   dataType: "text",
   url: "/images_manager/getVideoScreenTxt.php",
   data:cc,
    success: function(result){
     // $("#vlog").html("running golearn..."+result);
      cfgv=result;
      
      
      videoDocView(oid,cfgv);
      
      
      
        
     },
     error:function(jqXHR,exception){
   
        $("#vlog").html("modCfg error="+exception);
        return -1;
        }
      });
	
 }
      
      
          
    //videoDocView
      vg_vid="";
      function videoDocView(oid,cfgv){
	                 resV="";
	                 idv="#"+oid;
	                 sv=idv+ " source";
                  iflog=-8;
                  if(iflog==-1){
                   
                  //  alert(" vieoDocView start id="+oid);
                   }
                  //get title

                  title_doc=$(idv).attr("ftit");
                  srcV=$(sv).attr("src");
               //   alert("srcV:"+srcV);


                              resV= resV + "	<video id=\"" + oid + "c\" class=\"w-100\">";
                              resV= resV +  "    <source src=\"" +srcV + "\" type=\"video/mp4\">";
                              resV=resV+  " </video>";
                   $("#videoModalPage .modal-title").html(title_doc);
                   $("#videoModalPage .modal-body").html(resV);
                   //获取视频当前播放位置
// Get the <video> element with id="myVideo"
var vid = document.getElementById(oid+"c");
oidvv=vid;
vg_vid=vid;
goWordLib(vid,cfgv);
// Assign an ontimeupdate event to the <video> element, and execute a function if the current playback position has changed
vid.ontimeupdate = function() {myFunction()};

function myFunction() {
// Display the current position of the video in a <p> element with id="demo"
    resv="";
    ctime=parseInt(vid.currentTime);
    document.getElementById("vtimedemo").innerHTML = eval(ctime);
    
  //  $("#vtimedemo").html("res="+cfgv);
    //在这里转换json数据
     obj=JSON.parse(cfgv);
     for(seed=0;seed<=obj.textlist.length-1;seed++){
	          stimev=obj.textlist[seed].stime;
	          etimev=obj.textlist[seed].etime;
	        
	       //   $("#vtimedemo").html(resv);
	           if(ctime==stimev){
		             $(".screendis").html("["+obj.textlist[seed].etxt+"]"+obj.textlist[seed].cntxt);
	           }
	           if(ctime==etimev){

		             $(".screendis").html("字幕君");

	           }
     }
    
 
    
}
                   
                   
                   
                   
                   if(iflog==-1){
                       // alert("vieoDocView finish.");
                       
                   }
	
	
      }

  //切换播放模式
 function  playmodel(obj){
     
     if(pl=="0"){
       $(obj).carousel('cycle');
       pl="-1";
       alert("自动播放");
       return ;
     }
    //  alert("pl="+pl);
     $(obj).carousel('pause');
     pl="0";
     alert("暂停播放");
  }
   // define a instance of diary configure.
   function createDiaryCfg(pagesize){
	       iflog=0;
	       if(pagesize=="")
        pagesize=jQuery('#pagesize').val();
        dtitle=jQuery('#dtitle').val();
        filename=jQuery('#filenamea').val();
        filepath=jQuery('#filepatha').val();
        note=jQuery('#notea').val();
        keylist=jQuery('#ikeylista').val();
        content=jQuery('#content1').html();

        
        
        
        cc={dtitle:dtitle,pagesize:pagesize,filepath:filepath,filename:filename,note:note,keylist:keylist,content:content};
$.ajax({
   type: "POST",
   dataType: "text",
   url: "/images_manager/createDiaryCfg.php",
   data:cc,
    success: function(result){
      // alert("running createDiaryCfg..."+result);
       $("#log").html(result);
       
        
     },
     error:function(jqXHR,exception){
   
        $("#log").html("modCfg error="+exception);
        }
      });
          
        
	       if(iflog==0){
		         alert("create diary starting..."+"data="+cc);
		         
	       }
	       
	       
	       
	       
	       if(iflog==0){
		         alert("create diary ending...");
	       }
   }
   
// diary view 
function diaryView(){
	  //alert("99");
	  $("h8").css({'display':'none'});
   $('#log1').css({'display':'none'});
}
//跳转到指定的影片位置
function skipVideoPos(jvb){
	 
	   posv=$("#"+jvb).val();
	 //  alert("全局视频id="+vg_vid+"posv="+posv);
    if(posv!="" && posv!=null)

    vg_vid.currentTime=eval(posv);
    vg_vid.play();
}

//暂停播放
function pauseVideo(){
	 //  alert("pause");
	   vg_vid.pause();
	  // vg_vid.
}

//播放

function playVideo(){
  // alert("play");
	   vg_vid.play();
}




