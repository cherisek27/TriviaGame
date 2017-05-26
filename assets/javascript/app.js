body {
	font-family:'Arial', "Helvetica Neue", Helvetica, sans-serif;
	font-size: 18px;
	line-height: 34px; 
	color: #777;
	background: url("../assets/images/circles-and-roundabouts.png.png");
} 

* { 
	box-sizing: border-box;
 } 

 /*general */ 

 .container { 
	width: 100%;
	max-width: 960px;
	margin: 0 auto;
	clear: both;
  } 

  h1, 
  h2, 
  h3, 
  p { 
	margin-bottom: 20px;
   } 

  p:last-child {
  	margin-bottom: 0;
  } 


  h1, 
  h2, 
  h3 { 
	font-family: Georgia, Times, "Times New Roman", serif; 
	font-weight: 700; 
	color: #4aaaa5;
   }

h1 { 
	padding-bottom: 20px;
	font-size: 30px;
	line-height: 49px; 
	border-bottom: 3px solid #ddd; 
 }

 h2, 
 h3 { 
	font-size: 22px;
  } 

  /* header */

  #masthead { 
	position: static;
	z-index: 99;
	width: 100%;
	margin: 0 0 30px;
	overflow: auto; 
	color: #fff; 
	background: #fff; 
	border-bottom: 2px solid #ccc; 
   }

   #logo { 
	float: left;
	width: 250px; 
	height: 90px; 
	font-family: Georgia, Times, "Times New Roman", serif; 
	font-size: 30px; 
	font-weight: 700; 
	line-height: 90px;
	color: #fff; 
	text-align: center;
	text-decoration: none;
	background: #4aaaa5;
  }

 nav { 
	float: right;
	margin-top: 25px;
 } 

nav a { 
	display: inline-block;
	padding-left: 15px;
	margin-left: 15px;
	line-height: 18px;
	color: #999; 
	text-decoration: none;
	border-left: 1px solid #efefef; 
 } 

 nav a:first-child { 
		border-left: 0 none;
 } 

/* footer */ 

footer { 
	padding: 30px 0; 
	clear: both;
	font-size: 12px; 
	color: #fff; 
	color: #ccc; 
	text-align: center; 
	background: #666;
	border-top: 8px solid #4aaaa5; 	 
} 

/* sidebar */ 

.sidebar {
	float: right;
	width: 100%;
	max-width: 270px; 
	padding: 30px;
	margin-bottom: 20px; 
	background: #fff; 
	border: 1px solid #ddd;
} 

h3, 
.sidebar h2 { 
	padding-bottom: 20px; 
	margin-bottom: 15px; 
	line-height: 22px; 
	border-bottom: 2px solid #eee; 
 }

 .social { 
	width: 62px; 
	height: 62px;
	margin-top: 8px;
	margin-right: 5px;
  } 

  .social:last-child {
  	margin-right: 0;
  } 

  /* main */

  #maincontainer {
  	padding-top: 130px; 
  } 

  .main-section {
  	float: left;
  	width: 100%;
  	max-width: 650px; 
  	padding: 30px; 
  	margin: 0 0 40px;
  	background: #fff; 
  	border: 1px solid #ddd; 
  } 


  /* portfolio page */

  .work { 
	position: relative;
	float: left;
	width: 274px; 
	margin: 20px 0 25px;
	overflow: auto;
} 

   .work:nth-child(even) {
   	margin-right: 40px;
}


   .work img {
   	width: 100%;
   	border: 0 none;
   	opacity: 0.8;
} 

   .work h3 { 
	position: absolute;
	bottom: 20px; 
	width: 100%; 
	padding: 15px; 
	margin-bottom: 0;
	font-weight: 300px;
	line-height: 30px; 
	color: #fff; 
	text-align: center;
	background: #4aaaa5; 
	border-bottom: 0;
} 

    .auth-image {
    float: left;
    width: 200px; 
    height: auto;
    margin-top: 10px;
    margin-right: 25px;
    } 
  

    /* contact page */

    #contact-form ul {
    margin-bottom: 20px;
    } 

    #contact-form li {
    margin-bottom: 10px; 
    } 

    label, 
    input[type=text],
    input[type=email],
    textarea {
    	display: block;
    	width: 100%;	
    }  

    label, 
    input[type=text],
    input[type=email],
    textarea {
    	height: 35px;
    	padding: 0 10px;
    	font-size: 14px;
    	border: 1px solid #ddd; 	
    } 

    textarea {
    	height: 200px; 
    } 

    input[type=submit] {
    	padding: 10px 30px;
    	font-size: 18px; 
    	color: #fff; 
    	cursor: pointer;
    	background: #4aaaa5; 
    	border: 0 none; 
    } 

@media screen and (max-width:980px) {
    #container{
      width:100%;
    }
    #main-section{
      width:70%; 
    }
    #sidebar{
      width:30%;
    }
  } 

  @media screen and (max-width:768px) {
      #container{
      width:100%;
    }
    .main-section{
      width:70%; 
    }
    .sidebar{
      width:30%;
    } 
  } 

    @media screen and (max-width:640px) {
      #container{
      width:100%;
    }
    .main-section{
      width:50%; 
    }
    .sidebar{
      width:40%;
    } 
    .social{
      width:10%;
    }
  } 

  @media screen and (max-width:980px) {
      .work{
      width:30%;
      }
      .auth-image {
      width:70%;
      }
} 

  @media screen and (max-width:768px) {
      .work{
      width:40%;
      }
      .auth-image {
      width:60%;
      }
} 

  @media screen and (max-width:640px) {
      .work{
      width:40%;
      } 
      .work h3{
      width:30%;
      }
      .auth-image {
      width:30%;
      }
}

  @media screen and (max-width:980px) {
    #contact-form{
      width:50%;
    }
    #sidebar{
      width:80%;
    }
} 

 @media screen and (max-width:768px) {
    #contact-form{
      width:70%;
    }
    #sidebar{
      width:30%;
    }
}

 @media screen and (max-width:640px) {
    #contact-form{
      width:90%;
    }
    #sidebar{
      width:10%;
    }