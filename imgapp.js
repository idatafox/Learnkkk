var audioObj;
var idV;
//test 
function test(){
	       alert("888");
         txt="<button id='a12' value='how are you '>fine thank you </button>";  
         
         alert($("#im001").html());
}
function test1(){
	alert($("body").html());
	ccc=$("body").html();
	$("#logfull").val(ccc);
}
//获取项目列表

 function listProjects(){
	  //alert("listProjects start...");
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
        }
	   });
	
	          //define carousel event



         /*
$("#carouselExampleCaptions").on('slide.bs.carousel', function (){

	            
	            var carouselData = $(this).data('bs.carousel');
             var currentIndex = $(this).find('.active').index();
            
             alert(currentIndex);
             cc={title:tit,posPage:currentIndex};
             readJsonFile(cc);
   });*/
                 
	  
 }
 
 // read second level json configure file
// they are in folds.
 function readJsonFile(cc){
	  alert("readJsonFile"+cc);
	$("#aa").html("请稍候,装载中...");
	$.ajax({	
       type: "POST",
       dataType: "text",
       url: "/images_manager/reportlist_imgapp_bk.php",
       data:cc,
       success: function(result){
	          //handle result get file sum
             pos_n=result.indexOf("]");
             fileCount=result.substring(1,pos_n);
             result=result.substring(pos_n+1);
             alert(result);
            result=JSON.parse(result);
            alert("解析成功");
            
            display(result,fileCount);
            alert("展示成功");
           txt="<button id='a11' value='how are you ' onClick='test()'>how are you </button>";  
           

         //  $("#bbc").append(txt);
          // $("#a11").css('{top:"0",left:"0",width:"100px",height:"200px", background:"red"}');
           $("#a11").css({"background-color": "yellow", "font-size": "200%"})
          
         //  listVedioesView_pb(result);
                           
       }
      });
	}
	//display images on web page 
	//one time one pic.
	function display(obj,fileCount){
		       if(obj.ides==null ) obj.ides="这个专辑无简介";
		       $('#aa').html("&nbsp;&nbsp;<h1><b>"+obj.title+"</b></h1>_"+obj.ides);
		       
		       arrayobj=obj.records;
		       u1=arrayobj[0];
		       txt="";
         ncount=0;
         
         for(pseed=0;pseed<=eval(fileCount-1);pseed++){
	        // u1=arrayobj[pseed];
	           if(ncount==0){

             txt=txt+ " \n<button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 0\"></button>\n";

             }
          else{
	txt=txt+" \n<button type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide-to=\""+ncount+"\" aria-label=\"Slide" +seed+"\"></button>\n";
                }
                ncount=ncount+1;
         }
	
         $('#indicators').html(txt);
         txt="";
         ncount=0;
        //set image in control
         for(seed=0;seed<=eval(fileCount-1);seed++){
	          if(ncount==0){

	                                txt=txt+ "     <div id='im001' class=\"carousel-item active\">\n";

                                 // txt=txt+"     <img src=\""+u1.filepath+""+u1.filename+"\" class=\"d-block w-100\" alt=\"...\">";
                                 txt=txt+"     <img  src=\""+obj.filepath+""+obj.filename+"\" class=\"d-block w-100 h-100 \" alt=\"...\">";
                                  txt=txt+"            <div class=\"carousel-caption tit\" >\n";
               
                                   txt=txt+"                <h2> <b>"+obj.title+"</b></h2>\n";
                                   txt=txt+"                <h6>"+obj.note+"</h6>\n";
                                   txt=txt+"           <h8> "+obj.filename+"</h8>\n";
                                    txt=txt+"                <p class='content'>"+obj.content+"</p>\n";
                                     txt=txt+"              </div>   </div>\n ";
                                     
                                   $('#log1').html("["+obj.content+"]"+ncount+"/"+fileCount);
                                     
                               }
                               else{
	
                                 txt=txt+ "     <div class=\"carousel-item \">";
                                  txt=txt+"        <img src=\""+obj.filepath+obj.filename+"\" class=\"d-block w-100  h-100 imgover\" alt=\"...\">";
                                  txt=txt+"            <div class=\"carousel-caption tit\" >";

                                     txt=txt+"                <h2> <b>"+obj.title+"</b></h2>";
                                   txt=txt+"                <h6>"+obj.note+"</h6>";
                                   txt=txt+"                <h8> "+obj.filename+"</h8>";
                                    txt=txt+"                <p class='content'>"+obj.content+"["+ncount+"/"+fileCount+"]</p>";
                                    txt=txt+"              </div>   </div> ";
                                    // alert("ff"+u1.filename);
                                     $('#log1').html("["+obj.content+"]"+ncount+"/"+fileCount);
                                 }
                                 ncount=ncount+1;
         }
         $('#inner').html(txt);
         txt="";
         ncount=0;
         //add text information to picture
         //count number is a couple of .
         
            alert("text counts : "+arrayobj.length);
           for(seed=0;seed<=arrayobj.length-1;seed++){

	            u1=arrayobj[seed];
	            alert(u1.audio_en);
             txt="\n<button id='a" + u1.id + "' value='how are you '>"+u1.content_en +"</button>\n";  
             $("#im001").append(txt);

          // $("#a11").css('{top:"0",left:"0",width:"100px",height:"200px", background:"red"}');
              idV="#a"+u1.id;
              alert(idV);
              $(idV).css({"background-color": "red", "font-size": "200%","position":"relative","top":u1.top,"left":"0px","z-index":"999"});
              $(idV).attr("audio_en",u1.audio_en);
              $(idV).css({"top":u1.top});
              $(idV).css({"left":u1.left});
              audioName= new Audio();
              $(idV).on("click",function(){
	                   //alert("good"+u1.audio_en);
	                  // audio = new Audio("http://192.168.13.236:8080/audio_manager/小猫的故事/yy2_en.mp3");
		                  //audioObj.src="/audio_manager/小猫的故事/yy2_en.mp3";
		                   
                     
		                   audioName.src=$(this).attr("audio_en");
		                   alert("audioName==="+audioName.src);
                     audioName.play();
                     
	              
              });
                
             // $("#logfull").html($("body").html());
              
           }
          
          

	}

	