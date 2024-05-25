<!doctype html>

<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>学霸点读助手2024版</title>
    <link href="/bootstrap5/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
 <link href="/css/root.css?x=8" rel="stylesheet" >
 
 <link rel="stylesheet" href="/jqueryUI011302/jquery-ui.css" >
 <script src="/js/jquery.js"></script>
  <!--
  <script src="https://www.elearn007.com/js/gl.js"></script>
  -->
  <script src="/js/imgapp.js?x=184"></script>
  <script src="/jqueryUI011302/jquery-ui.js"></script>
  </head>
  <body style="padding-left:5px;padding-right:5px; background:white" >
	
	
	<!--   menubar  -->
<nav class="navbar navbar-expand-lg navbar-light  bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="/images/youdian.jpg" width="80" height="60"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><!--<img src="/images/root.png" width="80" height="160"/>--></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">少儿英语</a>
        <a class="nav-link" href="#">天文知识</a>
        <a class="nav-link" href="#">少儿编程</a>
        <a class="nav-link" href="#">文&nbsp;&nbsp;档</a>
        <a class="nav-link" href="#">下&nbsp;&nbsp;载</a>
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Termux ifconfig</a>
      </div>
    </div>
  </div>
</nav>
	
	
	 <span id='bbc' style="text-align:center">
   </span>   
               
  <span id='aa' style="text-align:center">
  </span>   
  
&nbsp;&nbsp;<span id="log1" style="margin-left:2px;color:green;padding-left:6px;">
	 </span>
	

	
	
	
	<!--   menubar  end-->
	
	<!--
    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">首页</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/download/pubexe.zip">安装文件下载</a>
  </li>
    <li class="nav-item">
    <a class="nav-link" href="/download/AWebServer.apk" target="_new">服务器下载</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/download/quickEdit_1.9.7.apk">代码编辑器</a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link"  href=""></a>
  </li>
 
  <li class="nav-item">
    <a class="nav-link ">帮助</a>
  </li>
  
</ul>
-->
    <!--
       &nbsp;    &nbsp;   &nbsp;  &nbsp; 专辑: &nbsp;<input id="tit" type="text" size='12' value='杭州旅游'/>
       -->
       <span id="ps">
	          
        </span>
         <!--
        <button id="readData" type="button" class="btn btn-danger  ">查阅专辑</button>
-->
        

  <div id="bb">
  	
  
  </div>
  
    <div id="ttest"> </div>

  <script>
  //get projects name list and 
  //create a selection controls
  
   $(document).ready(function(){
	      
	     //from a name called imgapp_root file
      //that is in json_db_imgapp directory.
       
     //  alert("topcfg="+topcfg_a);
        listProjects(topcfg_a);
        
        init_bb("root");
        createVoiceWall_bb();
        addLisenToCarousel();
        ifdebug="0";
        getprojectsByArray();
        
       
        $("#logfull").val(txt);
        $('#cname').val(tit);
	            
            
             

           
     
    
  // addLisenToCarousel();
    
	 });//on end
        
        
      
        
     
              
             
              
      


         
   
  
  
      
      
  </script>
  
  
  
  
  
 <input id="cname" type="hidden" value=""/>
 <div id="page_pos">0/0</div>
   <?php

      /*

        $title = $_POST['title'];
        echo "from vale is " . params['title'];
        echo "<script>tit=". $title . " ;</script>";
        echo "<script>$('#cname').value("+$title+") ;</script>";*/
      // echo "value from page:" . htmlspecialchars($_GET["title"]) . "<p>finish</p>";
       $title = htmlspecialchars($_GET["title"]);
       $topcfg = htmlspecialchars($_GET["rootcfg"]);
       echo "<script>tit = '$title';topcfg_a='$topcfg';</script>";
        
   ?>
    <div id="carouselExampleCaptions" 
     class="carousel slide h-100 w-100" data-bs-ride="carousel">
     <div id="indicators" class="carousel-indicators">

     </div>
  <div id="inner" class="carousel-inner">
  	
     
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
        <!--   foot    -->

	<p></p>

	<p></p>
    <p></p>
	
	<div class="container bkA">
		
		<div class="row ">
    <div class="col-3" >
           
    </div>
    <div class="col-6">
    	        <p></p>
           <img   src="/images/06.png" class="img-fluid"/>
        </div>
        
         <div class="col-3" >
           
        </div>
     
    </div>
		
		
		
		
		<div class="row paddingCfg-a">
    <div class="col-1 " >
           
    </div>
    <div class="col-11">
           <p class="paddingCfg-a">
             <a  href="https://beian.miit.gov.cn/" style="color:white;"> 
       京ICP备09087443号-1
             </a>
          </p>
        </div>
     
    </div>
   
    </div>
      <script src="/bootstrap5/js/bootstrap.bundle.min.js"  crossorigin="anonymous"></script>
    </body>
  </html>
	
	<button onclick="test1()">测试演示</button>
		<textarea id="logfull" rows="200"

	          cols="300">

		
	</textarea>