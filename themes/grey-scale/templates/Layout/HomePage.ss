<div id="loader-wrapper">
	<% include Preloader %>  	
</div>

<header class="cd-auto-hide-header">
	<% include Nav %>
</header> 

<section class="video-bg scroll" id="Home" data-stellar-background-ratio="0.5">
	<% include SectionOne %>
</section>
<section id="About" >
	<% include About %>
</section>

<aside class="bg-parallax-dark" id="Business" style="background-image: url($ThemeDir/img/demo-bgs/demo-bg-3.jpg);" data-stellar-background-ratio="0.5">
	<% include Buisness %>
</aside>

<!-- <section id="Services" class="bg-primary" style="background-image: url($ThemeDir/img/pattern-background02.png);">
	<% include Services %>  
</section>  -->

<section id="Reasons">
	<% include Reasons %>
</section>


<section id="FAQ" class="bg-primary" style="background-image: url($ThemeDir/img/pattern-background03.png);">
	<% include FAQ %>  
</section>

<section id="Contact" class="scroll">
	<% include Contact  %>
</section>

<% include Footer %>

