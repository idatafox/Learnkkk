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

