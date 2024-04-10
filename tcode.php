$('.carousel').on('slid.bs.carousel',function(e){
	       $('.hotTxt').remove();
         var slideFrom = $(this).find('.active').index();
         var slideTo = $(e.relatedTarget).index();
         
            if(slideTo!=null){
               if(slideTo==0){
	                  slideTo=eval(slideFrom+2);
	                 // alert("to===="+slideTo);
                }
            }
              //按照当前索引检索相关配置文件
              tit="小猫的故事";
              direc=e.direction;
             // alert("slideTo==="+slideTo+"direction=="+e.direction);
             // if(direc.equals("left")) slideTo=eval(slideTo+1);

              if(slideTo==null) slideTo=0;
              cc={title:tit,posPage:eval(slideTo)};
              
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
             
             result=JSON.parse(result);
             arrayobj=result.records;
             
             for(seed=0;seed<=arrayobj.length-1;seed++){

	            u1=arrayobj[seed];
	            
            
             var newButton= $("<button></button>");
             newButton.html(u1.content_en);
             
             
            
             
             newButton.css({"position":"relative","top":u1.top,"left":"0px","z-index":"999"});
             
              newButton.attr("audio_en",u1.audio_en);
              newButton.css({"top":u1.top});
              newButton.css({"left":u1.left});
              newButton.addClass("hotTxt");
              newButton.addClass(u1.classname_en);
              $('.carousel-inner').find('.active').append(newButton);
              
             
                
             } //for loop end
           

       },//success done
     complete: function (data) {
           
           audioName= new Audio();	  
           $('.hotTxt').on("click",function(){
                           // alert($(this).attr("audio_en"));
                             audioEn=$(this).attr("audio_en");
                                   	           
                     
            audioName.src=audioEn;
             audioName.play();
                     
	              
               });
     }//complete done
      });//ajax finish.
              