<!doctype html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>学霸点读助手2024版00</title>
    <link href="/bootstrap5/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
 <link href="/css/root.css?x=10" rel="stylesheet" >
 
 <link rel="stylesheet" href="/jqueryUI011302/jquery-ui.css" >
 <script src="/js/jquery.js"></script>
   
  <!--
  <script src="https://www.elearn007.com/js/gl.js"></script>
  -->
  <script src="/js/imgapp.js?x=143"></script>
  <script src="/jqueryUI011302/jquery-ui.js"></script>
  </head>
  <body style="padding-left:5px;padding-right:5px; background:white" >
  	
  

  <script>
  
  $(document).ready(function(){
	      //get global variables :tit
       
        initTit();
        createVoiceWall();
        addLisenToCarousel();
        ifdebug="0";
        getprojectsByArray();
        
        $("#logfull").val(txt);
        
        
        
        
   });//doc
   
  </script>
  
  
  <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">首页</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/articles/small/art_2023030601.html">游记</a>
  </li>
    <li class="nav-item">
    <a class="nav-link" href="#">视频</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/small/ima1.html">图集</a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link"  href="/small/ima2.html">商品</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/images_manager/reportlist.php">AI自习室</a>
  </li>
</ul>
  
  
  
  
  
  
  
  
  
  
  <!-- 图片轮播  -->
  <div id="carouselExampleCaptions" class="carousel slide">
  <div id="indicators" class="carousel-indicators">

  </div>
  <!--要挂一个语音墙 -->
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

<!--语音墙结束位置 -->

      <!--
<img   src="/images/changxing/changxing01.jpg" class="img-thumbnail paddingCfg"/>
   -->
   	<p>
   	   	</p>
       <h1 class="paddingCfg">
               <b>徒步中国进行中，需要您支持  </b>
         <h1>
         <p class="textCfg-tt">
	 2019-至今 我是徒步全国者，已经徒步经过了山东、河北、山西、陕西、河南、江苏、浙江、福建、广东等省份。
                <br/>现在:
<button type="button" class="btn btn-success">福建宁德 </button>
<button type="button" class="btn btn-success">福建厦门</button>
<button type="button" class="btn btn-success">福建漳州</button>
<button type="button" class="btn btn-success">广东潮州市</button>
<button type="button" class="btn btn-danger">汕头市</button>

 <div class="container text-center gfont">
 	<!--  第一行 -->
 	 	  <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/service/small/service_01.html" target="_new" class="common">	
            <b>加入粉丝团</b>
       </a>
               <span class="textCfg">
          	  助您交友、推广、卖货、拓展合作等
               </span>
          </p>
          
     
          
    </div>
    <div class="col-4">
           
                    <img   src="/service/images/service_01.jpg" class="img-fluid paddingCfg"/>
    </div>  </div>
    
    
    
    <!--  图片墙动态生成.开始-->
 <div id="bbb"></div>
 <div class="row paddingCfg-a">

    <div class="col-8" >

      <p class="textCfg">
      <a href="/small/live/live_dqthz.html?x=1" target="_new" class="common">	
            <b>图文直播|德清县到杭州市</b>
       </a>
               <span class="textCfg">
          	  天气不错，但过程很波折。
               </span>
          </p>
    </div>
    <div class="col-4">
               <img   src="/images/live/live_2023030502.jpg" class="img-fluid paddingCfg"/>
    </div>  
 </div>
    
    
    <!--  图片墙动态生成.结束-->
    
     <!--  德清县到杭州市-->
    <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/small/live/live_dqthz.html?x=1" target="_new" class="common">	
            <b>图文直播|德清县到杭州市</b>
       </a>
               <span class="textCfg">
          	  天气不错，但过程很波折。
               </span>
          </p>
    </div>
    <div class="col-4">
               <img   src="/images/live/live_2023030502.jpg" class="img-fluid paddingCfg"/>
    </div>  </div>
    <!--  湖州市到德清县 -->
   <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/small/live/live_hztdq.html?x=1" target="_new" class="common">	
            <b>图文直播|湖州市到德清县</b>
       </a>
               <span class="textCfg">
          	  天气不错，一路风景
               </span>
          </p>
    </div>
    <div class="col-4">
               <img   src="/images/live/live_2023030413.jpg" class="img-fluid paddingCfg"/>
    </div>  </div>
 	<!--  长兴县到湖州市 -->
 		 	  <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/small/live.html" target="_new" class="common">	
            <b>图文直播|长兴县到湖州市</b>
       </a>
               <span class="textCfg">
          	  路上很热闹，相对江苏更有烟火气
               </span>
          </p>
    </div>
    <div class="col-4">
               <img   src="/images/live/live-2023022504.jpg" class="img-fluid paddingCfg"/>
    </div>  </div>
  	<!--  第二行 -->
  	
 	  <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/small/changxing/changxing01.html" target="_new" class="common">	
            <b>对浙江湖州长兴的第一印象</b>
       </a>
               <span class="textCfg">
          	    浙江人很有礼貌，很善良。
               </span>
          </p>
          
     
          
    </div>
    <div class="col-4">
           
            <img   src="/images/changxing/changxing04.jpg" class="img-fluid"/>
    </div>  </div>
    
   	<!--  许愿墙 -->
   	
  	  <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/small/changxing/changxing02.html" target="_new" class="common">	
            <b>杭州精选墙</b>
       </a>
               <span class="textCfg">
          	    杭州本地的特产、美食、交易、服装、旅游等商品。
               </span>
          </p>
    </div>
    <div class="col-4">
            <img   src="/images/changxing/changxing18.jpg" class="img-fluid"/>
    </div> </div>
 
       
</div>


                
                 <ul class="fc">
         	          <li>
                                	<a href="/small/english-index.html" target="_new" class="common">	
                                        <img   src="/images/25.jpg" class="img-fluid"/>
                                    </a>
                        </li>
                        
                 </ul>
               
     	</p>
     
     
          <h1 class="paddingCfg">
          我们一起可以做什么？
         <h1>
         <p class="">
         	     <ul class="fc">
         	          <li>
                                <button type="button" class="btn btn-danger">我的服务</button>
                        </li>
                          <li>
	          
	   <ul class="fc">
	            <li>
	                 <h2>  欢迎扫码加好友  </h2>
	           </li>
	           <li>
	            <img   src="/images/06.png?x=9" class="img-fluid"/>
                                        </li>
                                         <li>了解中国社会/学习编程、英语、绘画/推广与卖货、市场调研、加盟合作拓展/交友、合作
                                         </li>
                                  </ul>
                           </li>
         	     </ul>
     	</p>
        
         <div class="container text-center gfont">
           	
           <!--. page ad codding learn center -->
           	<div class="row paddingCfg-a">
                    <div class="col-12" >
                    	<a href="/articles/small/art_20230309.html" target="_new" class="common">	
                                  <img   src="/images/hangzhou/m_2023030901.jpg" class="img-fluid"/>
                        </a>
                    </div>
                </div>
                </div>
        
               <p class="">
         	     <ul class="fc">
         	          <li>
                                <button type="button" class="btn btn-primary">代办服务</button>
                        </li>
                          <li>
                          	   <ul>
                                         <li>代购物/送礼物、祝福/故地直播游/</li>
                                  </ul>
                           </li>
         	     </ul>
     	</p>
        
        
           <div class="container text-center gfont">
           	
           <!--. page ad codding learn center -->
           	<div class="row paddingCfg-a">
                    <div class="col-12" >
                    	<a href="/small/codding-index.html" target="_new" class="common">	
                                  <img   src="/images/24.jpg" class="img-fluid"/>
                        </a>
                    </div>
                </div>
           
           
               <!--. small article -->
    <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/small/3.html" target="_new" class="common">	
            <b>手机网站编程第一课</b>
       </a>
          </p>
          
          <p class="textCfg">
          	    从这里下载手机网站编程的三个工具
         </p>
          
    </div>
    <div class="col-4">
           
            <img   src="/images/18.jpg" class="img-fluid"/>
    </div>
    
  </div>  
           
        <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/small/3.html" target="_new" class="common">	
            <b>幼儿园小朋友的积木编程法</b>
       </a>
          </p>
          
          <p class="textCfg">
          	   ScratchJR-美国麻省理工大学的开源教育项目
         </p>
          
    </div>
    <div class="col-4">
           
            <img   src="/images/26.jpg" class="img-fluid"/>
    </div>
    
  </div>  
     <!--. small article -->
  
  
  <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/small/4.html" target="_new" class="common">	
            <b>年轻人（学历不高）为什么学编程、孩子们为什么学编程</b>
       </a>
          </p>
          
          <p class="textCfg">
          	   
                    
                   	     编程技能是未来社会非常非常重要的技能，不会低过开车。 </li>
                    
                   
         </p>
          
    </div>
    <div class="col-4">
           
            <img   src="/images/19.jpg" class="img-fluid"/>
    </div>
    
  </div>  
  
  
  
    <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/small/5.html" target="_new" class="common">	
            <b>网站开发实战项目介绍</b>
       </a>
          </p>
          
          <p class="textCfg">
          	   
                    
                   	     编程技能是未来社会非常非常重要的技能，不会低过开车。 </li>
                    
                   
         </p>
          
    </div>
    <div class="col-4">
           
            <img   src="/images/20.jpg" class="img-fluid"/>
    </div>
    
  </div>  
  
  
  
<!--      end-->
</div>
        
        
        
        <p class="">
        	  <img   src="/images/17.jpg?x=1" class="img-fluid paddingCfg"/>
         	     <ul class="fc">
         	          <li>
                                <button type="button" class="btn btn-warn">代办服务</button>
                        </li>
                          <li>
                          	   <ul>
                                         <li>代许愿</li>
                                         
                                  </ul>
                           </li>
         	     </ul>
     	</p>
    
    <script src="/bootstrap5/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
   
   
   
   
   <div class="container text-center gfont">
   	
   
    <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/shouchuan/small/shouchuan_1.html" target="_new" class="common">	
            <b>站内精品手串展示</b>
       </a>
          </p>
          
          <p class="textCfg">
          	   
                    
                   	    当前有货的手串,站长推荐款。
                    
                   
         </p>
          
    </div>
    
        <div class="col-4">
           
            <img   src="/shouchuan/images/shouchuan_xuetan_01.jpg" class="img-fluid"/>
    </div>
    
  </div>  
  
  
  
  
   	
   <div class="row">
    
    <div class="col ">
      <img   src="/images/04.jpg?x=1" class="img-fluid paddingCfg"/>
    </div>
    
  </div>
   
  <div class="row">
    <div class="col-3 " >
      2020年3月
    </div>
    <div class="col-8 ">
    	<ul>
    	         <li>
      从山东济南省会城市出发，进入318国道，一路向西。
                 </li>
           </ul>
    </div>
    
  </div>
  
  
  
  
  <div class="row">
    <div class="col-3 " >
      2020年6月
    </div>
    <div class="col-8 ">
    	<ul>
    	         <li>
                        由山东馆陶县进入河北省，离开了山东省，山东济南-聊城
                 </li>
           </ul>
    </div>
    
  </div>
  
  
  
  
  
  
  
  <!--      -->
  	  <p></p>
  <div class="row">
    
    <div class="col ">
         
         <a class="btn btn-primary" href="/small/2.html" role="button">更多路线</a>
   </div>
    
  </div>
  	  <p></p>
        <!--  
  <div class="row">
    <div class="col-1 " >
      
    </div>
    <div class="col-10 ">
      学习编程、学习英语、分享徒步故事、帮你卖货、帮你宣传
     
    </div>
    
  </div>
  
    -->
    	    <!--  fo     -->
    
      <div class="row">
    
    <div class="col ">
           <img   src="/images/13.jpg" class="img-fluid"/>
   </div>
    
  </div>
  
  
      <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href=" https://mp.weixin.qq.com/s/btzohcbhnazyEXRoBFBhXw" target="_new" class="common">	
            <b>徒步中国|在泰州到扬州的路上见到了东山寺</b>
       </a>
          </p>
          
          <p class="textCfg">
          	  泰州到扬州终于解封了，可以自由通行了，开始去扬州了。
         </p>
          
    </div>
    <div class="col-4">
           
            <img   src="/images/15.jpg" class="img-fluid"/>
    </div>
    
  </div>
  
  
    <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href=" https://v.kuaishou.com/Hs7Drr 徒步西藏102天，路过一座万佛庙， "北上广深 "人生感悟 "徒步 "陕西 "延安 该作品在快手被播放过764次，点击链接，打开【快手极速版】直接观看！" target="_new" class="common">	
            <b>徒步中国|在大山深处遇到了一处庙宇</b>
       </a>
          </p>
             <p class="textCfg">
             	心中有信仰才有安全感 这不是迷信
              </p>
    </div>
    <div class="col-4">
           
            <img   src="/images/14.jpg" class="img-fluid"/>
    </div>
    
  </div>
  
  
  <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href=" https://v.kuaishou.com/HEzlup 徒步西藏126，我在富平万佛寺塔，据说建于唐代，很灵！ "富平 "陕西 "徒步 "户外 该作品在快手被播放过2274次，点击链接，打开【快手极速版】直接观看！" target="_new" class="common">	
            <b>徒步中国|在富平县见到了圣佛塔</b>
       </a>
          </p>
             <p class="textCfg">
             	在一个院子里，院子是锁着，竟然被我拿到了钥匙🔑。
              </p>
    </div>
    <div class="col-4">
           
            <img   src="/images/16.jpg" class="img-fluid"/>
    </div>
    
  </div>
  
  
    <!--  fo  end   -->
    
    
    
    
    
  
  <div class="row">
    
    <div class="col ">
           <img   src="/images/05.jpg" class="img-fluid"/>
   </div>
    
  </div>
    <div class="row paddingCfg-a">
    <div class="col-8" >
      <p class="textCfg">
      <a href="/small/1.html" target="_new" class="common">	
            <b>徒步中国|回顾徒步整个过程图片集展</b>
       </a>
          </p>
    </div>
    <div class="col-4">
           
            <img   src="/images/02.jpg" class="img-fluid"/>
    </div>
    
  </div>
  
  
  <div class="row paddingCfg-a">
    <div class="col-8 " >
        <p class="textCfg common">
        	  <a  href="https://v.kuaishou.com/HCvdgI 徒步西藏第48天我在屯留，这里有后羿射日的传说， "山西长治 "徒步西藏 该作品在快手被播放过1981次，点击链接，打开【快手极速版】直接观看！" target="_new"  class="common">	
            <b> 徒步西藏第48天我在屯留，这里有后羿射日的传说</b>
               </a>
          </p>
          <p class="textCfg">记得这里很热闹，一点也看不到疫情的影响，这个后羿射日像
很高大</p>
    </div>
    <div class="col-4">
           
            <img   src="/images/11.jpg" class="img-fluid"/>
    </div>
    
  </div>
  
  
    <div class="row paddingCfg-a">
    <div class="col-8 " >
        <p class="textCfg common">
        	  <a  href="https://v.kuaishou.com/JrFhEb 徒步西藏第49天，60公里徒步三天我花了多少钱💰？ "山西长治 "山西屯留区 "徒步西藏 该作品在快手被播放过665次，点击链接，打开【快手极速版】直接观看！ " target="_new"  class="common">	
            <b> 徒步西藏第29天最开始的时候我的装备就这么简单</b>
               </a>
          </p>
          <p class="textCfg">
          	    回头看，当时自己真的是在毫无准备的情况下开始徒步的 
                  塑料袋里是三个包子 ，可能就是一天的食物了 。
          </p>
    </div>
    <div class="col-4">
           
            <img   src="/images/12.jpg" class="img-fluid"/>
    </div>
    
  </div>
     
     
  <div class="row">
    <div class="col-10 " >
        
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >



  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 id="arc" class="modal-title" >Modal title00</h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <p id="title_doc"> </p>
            <imglist id="ilist">
	
	                  <imgItem orderpos="0">
		                     <div class="imgenty">
			                      <img src=""/>
		                     </div>
		                     
			                        <p class="imgdoc">
				
			                        </p>
		                     
			                </imgItem>
			                
	           </imglist>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        
        
        
    </div><!--  col end -->
    <div class="col-1 ">
	   </div>
		 </div>
		 
		 
		   <div class="row">

	<button onclick="test1()">测试演示</button>
		<textarea id="logfull" rows="200"

	          cols="100%">

		
	</textarea><div class="col-10 ">
	
	         
	    </div><!--  col end -->

    <div class="col-1 ">

	   </div>
		   </div><!--  row end -->
		 
		 
		 

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
	<!--
	<button onclick="test1()">测试演示</button>
		<textarea id="logfull" rows="200"

	          cols="300">

		
	</textarea>
	-->
	
