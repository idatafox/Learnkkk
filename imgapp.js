var audioObj;
var idV;
var tit;
var fcount;
function test(){
	alert("88888888");
}
function listProjects(){
	alert("listProjects start...");
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
	   });//ajax over
	
}//func over
//≠=====≠==========
function readJsonFile(cc){
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
                                  txt=txt+"            <div class=\"carousel-caption tit\" >\n";
               
                                   txt=txt+"                <h2> <b>"+obj.title+"</b></h2>\n";
                                   txt=txt+"                <h6>"+obj.note+"</h6>\n";
                                   txt=txt+"           <h8> "+obj.filename+"</h8>\n";
                                    txt=txt+"                <p class='content'>"+obj.content+"</p>\n";
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