var audioObj;
var idV;
var tit;
var fcount;
var namelist=[];
var imgItemList=[];
var logTxt="";
var txt;
var pictxt;
var doctxt;
var res;
function test1(){

	alert($("body").html());

	ccc=$("body").html();
	$("#logfull").val(ccc);
}
function initTit(){
	  	   htmlcc="";
       cc={topic:"root"};
       $.ajax({	

        type: "POST",

        dataType: "text",
        url: "/images_manager/imgapp_listprojects.php",
        data:cc,
        success: function(result){
	
         },//success over
         complete:function(data){
	
         }// complete over
       });//ajax over

       tit="走遍中国";
}
function createVoiceWall(){

	   cc={title:tit,posPage:0};


    readJsonFile(cc);
    
}//createVoiceWall over

function addLisenToCarousel(){
$('.carousel').on('slid.bs.carousel',function(e){
         
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
	            
            
             
       },//success
       complete: function (data) {
                                  	         
           audioName = new Audio();
           $('.hotTxt').on("click",function(){
           
            audioEn=$(this).attr("audio_en");
                                   	           
                     
            audioName.src=audioEn;
             audioName.play();
           });//on done
       }
           
      });//ajax end
	 });//on end

}
function listProjects(){
	
	   htmlcc="";
    cc={topic:"root"};

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
           tit=$('#pvl option:selected').text();
           cc={title:tit,posPage:0};
           readJsonFile(cc);
        },
        complete: function (data){
	         $("#pvl").on("change",function(){
		            tit=$('#pvl option:selected').text();
		            cc={title:tit,posPage:0};
              readJsonFile(cc);
		            //alert("well"+tit);
		            
	         });
        }
	   });//ajax over
    
	
}//func over
//≠=====≠==========
function readJsonFile(cc){
//	alert(cc.title);
  	$("#aa").html("请稍候,装载中(readJsonFile)...");
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
	          for(i=0;i<=fcount-1;i++){
		             addItem(i);
	          }
	        //display(result,fcount);
	          
	        
       }
      });
	}
	
	//========================
	function addItem(ipos){

	
      // alert("tit"+tit);
	    // tit=$('#pvl option:selected').text();
	  //  tit="小猫的故事";
	    txt="";
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
             
             obj=JSON.parse(result);
             if(ipos==0)
             txt=txt+ "     <div id='a"+ipos+"' class=\"carousel-item active \">\n";
             else
             txt=txt+ "     <div id='a"+ipos+"' class=\"carousel-item  \">\n";


                                 // txt=txt+"     <img src=\""+u1.filepath+""+u1.filename+"\" class=\"d-block w-100\" alt=\"...\">";
                                 txt=txt+"     <img  src=\""+obj.filepath+""+obj.filename+"\" class=\"d-block w-100 h-100 \" alt=\"...\">";
                                  txt=txt+"            <div class=\"carousel-caption "+obj.class_tit +"\" >\n";
               
                                   txt=txt+"                <h2 class=\""+ obj.class_tit_0+ "\"> <b>"+obj.title+"</b></h2>\n";
                                   txt=txt+"                <h6 class=\""+ obj.class_tit_1 +"\">"+obj.note+"</h6>\n";
                                   txt=txt+"           <h8 class=\"" + obj.class_tit_2 +"\"> "+obj.filename+"</h8>\n";
                                    txt=txt+"                <p class='content "+obj.class_tit_3+"'>"+obj.content+"</p>\n";
                                     txt=txt+"              </div>   </div>\n ";
                                     
                                  // $('#log1').html("["+obj.content+"]"+ncount+"/"+fc);
                                   //txt=$('#inner').html()+txt;
                                   //alert("yyyyyy="+txt);
                                 $('#inner').html(txt); 
             
             
       },
       complete: function (data){

	           
	           
	           
	           

       }
       
        });
  }
  
  
  
  
  
  //next code for image and videoes

function IVdisplay(obj){

  if(obj.ifindexpage=="0"){
   pictxt=pictxt+"<div class=\"row paddingCfg-a\">\n";
   pictxt=pictxt+"<div class=\"col-8\" >\n";
   pictxt=pictxt+"<p class=\"textCfg\">";
   pictxt=pictxt+" <button type=\"button\" class=\"btn btn-primary \" \n";
   pictxt=pictxt+" data-bs-toggle=\"modal\" \n ";
   pictxt=pictxt+" onclick=invokeDocViewByIndexPg('"+obj.cfile+"') \n";
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
	 
	 
	 function getprojectsByArray(){
   
	                 cc={topic:"root"};
          
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

                        
                           
                           
                    },
                    complete:function(data){
                          
	                    // alert("88889999"+txt);
                      $("#bbb").html(pictxt);
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
function invokeDocViewByIndexPg(obj){
	   doctxt="";
	  //parameters obj initial cc json objec
    cc={title:obj};
    $("#arc").html(obj);
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





