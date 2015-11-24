<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

    <title>Onepage - clean responsive HTML5 themes - thomsoon.com</title>

		<meta name="description" content="Free download theme onepage, clean and modern responsive for all"/>
		<meta name="keywords" content="responsive, html5, onepage, themes, template, clean layout, free web"/>
		<meta name="author" content="Thomsoon.com"/>
		
		<link rel="shortcut icon" href="img/favicon.png"> 
		
		<link rel="stylesheet" type="text/css" href="css/reset.css" />
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<link rel="stylesheet" type="text/css" href="css/style-responsive.css" />				

	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
		
</head>

<body>

<div class="container">

<!-- section start-page -->

  <section class="start-page parallax-background" id="home">
    <div class="opacity"></div> 
    <!-- Opacity color -->
      <div class="content">
        <div class="text">
        
          <div class="logo"><img src="img/logo.png"></div>
        
          <h1>Learn Biology</h1><hr/>
          <p>Belajar biologi secara mandiri</p>
		<center><?php include('login.php'); ?>  </center>        

      </div>

  </section>

     <section class="footer">
        <div class="logo"><img src="img/logo-footer.png"></div>
        <div class="menu-footer">
        
          <a href="#home">Home</a>
          <a href="#">Privacy policy</a>
          <a href="#">RSS</a>
          <a href="#">Facebook</a>
          <a href="#">Dribble</a>
          <a href="#">Twitter</a>
          <a href="#">Contact</a>        </div>
        
        <div class="copyright">© 2014. All Rights Reserved Thomsoon.com</div>            
    </section>    
    

</div>



	<!-- Scripts -->
	
	<script src="js/jquery-1.11.0.min.js" type="text/javascript"></script>
	<script src="js/jquery-ui-1.10.4.min.js" type="text/javascript"></script> <!-- jQuery -->
	<script src="js/jquery.nicescroll.js"></script> <!-- jQuery NiceScroll -->
	<script src="js/jquery.sticky.js"></script> <!-- jQuery Stick Menu -->
	<script src="js/masonry.pkgd.min.js"></script> <!-- All script -->
	<script src="js/imagesloaded.pkgd.min.js"></script> <!-- All script -->	

   <script>
     $(function(){
   
       var $container = $('.grid');
     
       $container.imagesLoaded( function(){
         $container.masonry({
           itemSelector : 'li'
         });
       });
     
     });
   </script>
	<script src="js/jquery.parallax.js"></script> <!-- jQuery Parallax -->	
	<script src="js/script.js"></script> <!-- All script -->	


</body>

</html>
