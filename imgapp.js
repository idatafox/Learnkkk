var audioObj;
var idV;
var tit;
var fcount;
var namelist=[];
var imgItemList=[];
var imgItemList_order=[];
var logTxt="";
var txt;
var pictxt;
var doctxt;
var res;
var iforder="-1";

var imgAndVoiceProjectArray=[];

function test1(){
	ccc=$("body").html();
	$("#logfull").val(txt);
	changeItem();
// reOrderImageList();
	//
}
function init_bb(){
			     htmlcc="";

       cc={topic:"root"};

       $.ajax({	

        type: "POST",

        dataType: "text",
        url: "/images_manager/imgapp_listprojects.php",
        data:cc,
        success: function(result){
             // result=JSON.parse(result);
              
	           //  alert("sum project:"+imgAndVoiceProjectArray.length);


	             
         },//success over
         complete:function(data){
	               
         }// complete over
       });//ajax over

       
}

function initTit(rootProjectName){
	   
		     htmlcc="";
		     
       cc={topic:rootProjectName};
       $.ajax({	

        type: "POST",

        dataType: "text",
        url: "/images_manager/imgapp_listprojects.php",
        data:cc,
        success: function(result){
              result=JSON.parse(result);
              for(seed=0;seed<=result.records.length-1;seed++){
	                imgAndVoiceProject={};
	                obj=result.records;
	                
	                imgAndVoiceProject.filename=result.records[seed].filename;
	                imgAndVoiceProject.ides=result.records[seed].ides;
	                
	                imgAndVoiceProject.filepath=result.records[seed].filepath;
	                imgAndVoiceProject.columnname=result.records[seed].columnname;
                  imgAndVoiceProject.title=result.records[seed].title;
	                imgAndVoiceProjectArray.push(imgAndVoiceProject);
	                
              }//for end.
	           //  alert("sum project:"+imgAndVoiceProjectArray.length);


	             
         },//success over
         complete:function(data){
	                createIVProjectListView(rootProjectName);
         }// complete over
       });//ajax over

       
}
//finance , kid english and so on.
function createVoiceWall(topcolumn){
    
    tit=topcolumn;
	   cc={title:tit,posPage:0};
    readJsonFile(cc);
    
    
    
    
}//createVoiceWall over

function createVoiceWall_bb(){
    
   // tit="少儿英语";
    $("#pvl contain:contains('走遍中国')").attr("selected",true).change();
   // alert("tit======="+tit);
	   cc={title:tit,posPage:0};
    readJsonFile(cc);
    
    
    
    
}//createVoiceWall over

function createIVProjectListView(cc){
	
	  txt="";
   ncount=imgAndVoiceProjectArray.length;
   arrayobj=imgAndVoiceProjectArray;
  // alert("ncount:"+imgAndVoiceProjectArray.length);
	  for(seed=0;seed<=arrayobj.length-1;seed++)
	  {
		    
		    if(seed==0)

             txt=txt+ "		<div class=\"row paddingCfg-a\">\n";
             else
             txt=txt+ "		<div class=\"row paddingCfg-a\">\n";
             
             txt=txt+"      <div class=\"col-8\" >\n";

                                  txt=txt+"                 <p class=\"textCfg\">\n";
                                   txt=txt+" <button type=\"button\" class=\"btn btn-primary \" \n";
   txt=txt+" data-bs-toggle=\"modal\" \n ";
   txt=txt+" onclick=newOpenWin('"+arrayobj[seed].ides+"','"+arrayobj[seed].columnname+"','"+cc+"') \n";
   txt=txt+" data-bs-target=\"#exampleModalLong_8\"> \n";
   txt=txt+imgAndVoiceProjectArray[seed].title+" \n</button>";
                                    txt=txt+"                              \n <span class=\"textCfg\"> \n";
                                    txt=txt+imgAndVoiceProjectArray[seed].ides+'\n';
                                     txt=txt+"              \n                </span>\n <\p></div>\n";
                                     txt=txt+"              <div class=\"col-4\" >";
                                     txt=txt+"           <img   src=\""+imgAndVoiceProjectArray[seed].filepath+imgAndVoiceProjectArray[seed].filename+"\" class=\"img-fluid\"/>";
                                     txt=txt+"          </div>\n          </div> \n";
                $("#ivlist").html(txt);
               
	      
				
	  }//for over
}//createIVProjectListView over

//new open
function newOpenWin(aa,bb,cc){
	// alert("bb="+bb);
	 tit=bb;
	 
	 window.open('/images_manager/reportlist_imgapp.php?title='+bb+'&rootcfg='+cc, '_blank').focus();
}
function changeItem(){

	     alert("8888"+tit);
	     
	     tit=$("#cname").val();
	     alert("999"+tit);
      $("#pvl option:contains('"+tit+"')").attr("selected",true).change();
  }
//re order array of image item
function reOrderImageList(){


var bbc=$(".carousel-item");
len=bbc.length;
//alert("图片len=="+len);
 
  // alert("bbc:"+$(bbc[0]).html()+"bbc len:"+bbc.length);
   
   idv="";
   oid="";
  // alert("len:"+len);
   
   for(i=0;i<=eval(len-1);i++){
	      oid="#a"+i;
      // alert(oid);
	        imgv=$(".carousel-item img").eq(i).attr("src");
	      //  alert("img="+imgv);
	     spos=imgv.lastIndexOf("/");
	     //alert(spos);
	     subV=imgv.substring(0,spos);
	     
	     
	  spos=imgv.lastIndexOf(".");
	   fv=imgv.substring(spos);
	    //alert("subv:"+subV+"fv:"+fv);  
	    srcv=subV+"/0"+eval(i+1)+fv;
	    $(".carousel-item img").eq(i).attr("src",srcv);

	   // alert(srcv);

	        
	       
   }
   
}
function rechangeItemNote(){
	   //alert(fcount+":"+tit);
	   
	   for(i=0;i<=eval(fcount-1);i++){
     
     

	   }
}
function addLisenToCarousel(){

$('.carousel').on('slid.bs.carousel',function(e){
         //$("#logfull").val(txt);
         //alert("iforder=="+iforder);
         if(iforder=="-1"){
	        //alert("reorder");
	        reOrderImageList();
	        rechangeItemNote();
	        iforder="0";
	
         }

        
         var slideFrom = $(this).find('.active').index();
         var slideTo = $(e.relatedTarget).index();
        // alert(tit);
         cc={title:tit,posPage:eval(slideTo)};
      $.ajax({	
       type: "POST",
       dataType: "text",
       url: "/images_manager/reportlist_imgapp_bk.php",
       data:cc,
       success: function(result){
             pos_n=result.indexOf("]");
             fileCount=result.substring(1,pos_n);
             result=result.substring(pos_n+1);
             
             result=JSON.parse(result);
             arrayobj=result.records;
             $('.hotTxt').remove();
        for(seed=0;seed<=arrayobj.length-1;seed++){

	            u1=arrayobj[seed];
	            var newButton= $("<button></button>");

             newButton.html(u1.content_en);
             newButton.css({"position":"relative","top":u1.top,"left":"0px","z-index":"999"});
   
              newButton.attr("audio_en",u1.audio_en);
             // alert(u1.top);
              newButton.css({"top":u1.top});
              newButton.css({"left":u1.left});
              newButton.addClass("hotTxt");
              newButton.addClass(u1.classname_en);
              $('.carousel-inner').find('.active').append(newButton);
             
             
              
        }//for loop
	        //重新添加图片总说明
	        fx=$('.carousel-inner').find('.active img').attr("src");
	        // alert('fx:'+fx+"ttoposp:"+slideTo);
	         $('.carousel-inner').find('.active h8').html(result.filename);
	         $('.carousel-inner').find('.active h2').html(result.title);
	         $('.carousel-inner').find('.active content').html(result.content);
	         
	         
            
             
       },//success
       complete: function (data) {
                                  	         
           audioName = new Audio();
           $('.hotTxt').on("click",function(){
           
            audioEn=$(this).attr("audio_en");
                                   	           
                     
            audioName.src=audioEn;
             audioName.play();
             //reOrderImageList();
           });//on done
       }
        
      });//ajax end
	 });//on end

}
function listProjects(rootcfgv){
	
	   htmlcc="";
    cc={topic:rootcfgv};

	   $.ajax({	
        type: "POST",
        dataType: "text",
        url: "/images_manager/imgapp_listprojects.php",
        data:cc,
        success: function(result){
	          result=JSON.parse(result);
	          
           htmlcc=htmlcc+" &nbsp;    &nbsp;   &nbsp;  &nbsp; <select id='pvl'  class=\"form-select\">";
           
           for(seed=0;seed<=result.records.length-1;seed++){

                      // alert(result.records[seed].columnname);
	                if(result.records[seed].columnname=="0000" || result.records[seed].columnname=="") {
	         
                                  continue;
                  }
                         	if(seed==0)
                             htmlcc=htmlcc+"<option selected>"+result.records[seed].columnname+"</option>";
                             else
                                      htmlcc=htmlcc+"<option>"+result.records[seed].columnname+"</option>";
              }//end for loop
           
           
           
           htmlcc=htmlcc+"</select>";
           $("#ps").html(htmlcc);
          // alert("666666==="+tit);
          // $("#pvl option:contains('"+tit+"')").attr("selected",true).change();
           tit=$('#pvl option:selected').text();
           // alert("8888888888"+tit);
          // cc={title:tit,posPage:0};
          // readJsonFile(cc);
        },
        complete: function (data){
	         
	            tit_n=$("#cname").val();
		           if(tit_n!=""){
			            // alert("8888800000");
			             $("#pvl option:contains('"+tit_n+"')").attr("selected",true);
		           }
		            //alert(tit_n);
		            tit=tit_n;
		            cc={title:tit,posPage:0};
		            //readJsonFile(cc);
	            $("#pvl").on("change",function(){
		            //alert("oonchange");
		            iforder="-1";
		            $("#cname").val("");
		            
		            
		            //alert(tit);
		           // if(tit=="")
		            tit_n=$("#cname").val();
		            if(tit_n=="")
		              tit=$('#pvl option:selected').text();
		            else
		               {
			                //alert("tit_n"+tit_n);
			                $("#pvl option:contains('"+tit_n+"')").attr("selected",true);
		                 tit=tit_n;
		               }
		            
		            cc={title:tit,posPage:0};
		            //if(tit_n=="")
              readJsonFile(cc);
		           
		            
		            
	         });
         // alert($("#pvl option:contains('少儿英语')").html());
         // $("#pvl option:contains('少儿英语')").attr("selected",true).change();
           // alert("tit"+tit);
         //changeItem()；
        }
	   });//ajax over
    
	      
}//func over
//≠=====≠==========
function readJsonFile(cc){
	
// alert("title="+cc.title);
	$("#aa").html("请稍候,装载中(readJsonFile)...");
	$.ajax({	
       type: "POST",
       dataType: "text",
       url: "/images_manager/reportlist_imgapp_bk.php",
       data:cc,
       success: function(result){
	          //handle result get file sum
             //fileCount=0;
             pos_n=result.indexOf("]");
             fileCount=result.substring(1,pos_n);
             fcount=fileCount;
             
   
             result=result.substring(pos_n+1);
              result=JSON.parse(result);
              

            

       },
       complete:function(data){
	    
      
	        // set indicators
          
          
     txt="";
for(pseed=0;pseed<=fcount-1;pseed++)
      {
	        // u1=arrayobj[pseed];
	           if(pseed==0){

             txt=txt+ " \n<button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 0\"></button>\n";

             }
          else{
	             txt=txt+" \n<button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\""+pseed+"\" aria-label=\"Slide " +pseed+"\"></button>\n";
                }
                
        }       
          
          $('#indicators').html(txt);
	           ////////////////
	          
	        //display(result,fcount);
	        
	          for(i=0;i<=fcount-1;i++){


             
		             addItem(i);

	          }
          
	          
       }
      }).done(function(){
	           // $("#inner").html(txt);
      });
	}
	
	//========================
	function addItem(ipos){
   txt="";
   
	 
      // alert("tit"+tit);
	    // tit=$('#pvl option:selected').text();
	  //  tit="小猫的故事";
	    
	     cc={title:tit,posPage:ipos};
	     $.ajax({	

       type: "POST",

       dataType: "text",
       url: "/images_manager/reportlist_imgapp_bk.php",
       data:cc,
       success: function(result){
	          //handle result get file sum
             pos_n=result.indexOf("]");
             fileCount=result.substring(1,pos_n);
             fcount=fileCount;
             result=result.substring(pos_n+1);
             
             obj=JSON.parse(result);//point time key
             
             
             
       },
       complete: function (data){
          // alert("8989");
			       //$('#inner').html(txt); 
	           if(ipos==0)
             txt=txt+ "     <div id='a"+ipos+"' class=\"carousel-item active \">\n";
             else
             txt=txt+ "     <div id='a"+ipos+"' class=\"carousel-item  \">\n";
             
             txt=txt+"     <img  src=\""+obj.filepath+""+obj.filename+"\" class=\"d-block w-100 h-100 \" alt=\"...\">";

                                  txt=txt+"            <div class=\"carousel-caption "+obj.class_tit +"\" >\n";
               
                                   txt=txt+"                <h2 class=\""+ obj.class_tit_0+ "\"> <b>"+obj.title+"</b></h2>\n";
                                   txt=txt+"                <h6 class=\""+ obj.class_tit_1 +"\">"+obj.note+"</h6>\n";
                                   txt=txt+"           <h8 class=\"" + obj.class_tit_2 +"\"> "+obj.filename+"</h8>\n";
                                    txt=txt+"                <p class='content "+obj.class_tit_3+"'>"+obj.content+"</p>\n";
                                     txt=txt+"              </div>   </div>\n ";
                $("#inner").html(txt);
                imgItemList.push(txt);
              //  reOrderImageList();
       }
       
        });
  }//addItem Over
  
  
  
  
  
  //next code for image and videoes

function IVdisplay(obj){

  if(obj.ifindexpage=="0"){
   pictxt=pictxt+"<div class=\"row paddingCfg-a\">\n";
   pictxt=pictxt+"<div class=\"col-8\" >\n";
   pictxt=pictxt+"<p class=\"textCfg\">";
   pictxt=pictxt+" <button type=\"button\" class=\"btn btn-primary \" \n";
   pictxt=pictxt+" data-bs-toggle=\"modal\" \n ";
   pictxt=pictxt+" onclick=invokeDocViewByIndexPg('"+obj.cfile+"','"+obj.title+"') \n";
   pictxt=pictxt+" data-bs-target=\"#exampleModalLong\"> \n";
   pictxt=pictxt+obj.title+"\n";
   pictxt=pictxt+"</button>\n";
   pictxt=pictxt+"      <span class=\"textCfg\">\n";
   pictxt=pictxt+obj.ides;
   pictxt=pictxt+"                </span>\n";
   pictxt=pictxt+"            </p>\n";
   pictxt=pictxt+"    </div>\n";
   pictxt=pictxt+"    <div class=\"col-4\">\n";
   pictxt=pictxt+"               <img   src=\""+obj.img+"\" class=\"img-fluid paddingCfg\"/>\n";
   pictxt=pictxt+"    </div> \n ";
   pictxt=pictxt+"</div> \n ";
   
  }
    
    
   

	 }
	 
	 
	 function getprojectsByArray(topcolumn){
   
	                 cc={topic:topcolumn};
          
                  pictxt="";
                  
           

                    $.ajax({        	
                   type: "POST",
                   dataType: "text",
                    url: "/images_manager/listprojects.php",
                    data:cc,
                    success: function(result){
	                      
	                      result=JSON.parse(result);
                       for(seed=0;seed<=result.records.length-1;seed++){
	                          
	                          namelist.push(result.records[seed].fname);
	                          
	                          
                       }
                       
                    },
                    complete:function(data){
                       
                        
                      //alert(namelist.length);
                       for(i=0;i<=namelist.length-1;i++){
	                          
	                          cc={title:namelist[i]};
	                          
	                          addlogline("getprojectsByArray;projName:",namelist[i]);
	                          
	                          IV_readJsonFile(cc);
                       }
                       
	                       
                        //$("#logfull").val(logTxt);
                        
                    }// complete over
                    });
}

function IV_readJsonFile(cc){
	   

	    $.ajax({	
                   
                   type: "POST",

                   dataType: "text",
                    url: "/images_manager/reportlistBK.php",
                    data:cc,
                    success: function(result){
                        //   alert("pathV"+pathV+"## result="+result);
	                      
	                       addlogline("IV_readjsonfile",result);
	                       result=JSON.parse(result);
	                       IVdisplay(result); 
                        $("#bbb").html(pictxt);
                        
                           
                           
                    },
                    complete:function(data){
                          
	                    // alert("88889999"+txt);
                      
                      addlogline("",pictxt);
                      $("#logfull").html(pictxt);
                      
                    }// complete over
              });//ajax over
}//IV_readJsonFile over

//addlogline(linetxt)
function addlogline(funcname,linetxt){
			     logTxt=logTxt+"\n "+funcname+":log start!\n "+linetxt+"]\n";
}
	  
//首页部分的文档模式
function invokeDocViewByIndexPg(obj,title){
	   doctxt="";
	  //parameters obj initial cc json objec
    cc={title:obj};
    $("#arc").html(title);
   // visit configure file
     $.ajax({	

                   

                   type: "POST",

                   dataType: "text",
                    url: "/images_manager/reportlistBK.php",
                    data:cc,
                    success: function(result){
                        //   alert("pathV"+pathV+"## result="+result);
	                       //alert("66666"+result);
	                       addlogline("invokeDocViewByIndexPg",result);
	                       result=JSON.parse(result);
	                       //alert(result.title);
	                       obj=result;
	                       
	                      //doctxt variable for doc view 


		  doctxt=doctxt+"<imgItem orderpos=\"a0\">\n";

	                         	  doctxt=doctxt+"		                     <div class=\"imgenty\">\n";
	                         	  doctxt=doctxt+"					                      <img src=\""+obj.img+"\" class=\"img-fluid\"/>\n";
	          doctxt=doctxt+"	                 	                     </div>\n";
	                         	                 		                     doctxt=doctxt+"<p class=\"imgdoc\">\n";
	                         	                 		                     doctxt=doctxt+obj.ides+"\n";
	                         	                 		                     doctxt=doctxt+"</p>\n";
	                         	                 		                     doctxt=doctxt+"</imgItem>\n";
	   //loop get images
    for(seed=0;seed<=obj.records.length-1;seed++){
	       dataOne=obj.records[seed];
	       //alert(dataOne.filename);
			  doctxt=doctxt+"<imgItem orderpos=\"a0\">\n";



		  doctxt=doctxt+"		                     <div class=\"imgenty\">\n";
		  if(dataOne.filename.indexOf("mp4")<0)
		     doctxt=doctxt+"					                      <img src=\""+dataOne.filepath+dataOne.filename+"\" class=\"img-fluid\"/>\n";
		  else{
			   doctxt= doctxt + "	<video id=\"" + dataOne.id + "c\" class=\"w-100\" controls>";

                              doctxt= doctxt +  "    <source src=\"" +dataOne.filepath+dataOne.filename+ "\" type=\"video/mp4\">";

                              doctxt=doctxt+  " </video>";
	                         	  }
	                         	  
	          doctxt=doctxt+"		                     </div>\n";
	          
					                     doctxt=doctxt+"<p class=\"imgdoc\">\n";

				                     doctxt=doctxt+dataOne.note+"\n";
				                     doctxt=doctxt+dataOne.content+"\n";

	                         	                 		                     doctxt=doctxt+"</p>\n";
	                         	                 		                     doctxt=doctxt+"</imgItem>\n";
	   //loop get images
	                         
    }

                        
                           
                           
                    },
                    complete:function(data){
                          
	                    // alert("88889999");
	                    jst=JSON.stringify(res);
	                    // alert("obj.title"+obj.title);
	                     $("#title_doc").html(obj.title);
                      IVdisplay_doc(res); 
                    //  $(".modal-body").html(doctxt);
                      addlogline("",doctxt);
                      $("#logfull").html(doctxt);
	                     $("#title_doc").html(obj.title);
		                     
	                     
                      
                    }// complete over
              });//ajax ove
    
}

function IVdisplay_doc(obj){
	//alert("IVdisplay_doc start...");

    $("#ilist").html(doctxt);
				                        
}





