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


$(document).ready(function(){
	      //get global variables :tit
       alert("running...");
        initTit()；
        createVoiceWall()；
   });//doc over 
  
