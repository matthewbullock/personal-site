<div class="container">
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 text-center" data-scrollreveal="enter left move 200px over 1.5s">
            
            <h2>$Title</h2>
                   
            <hr class=<% if colorBackground($BgType) != true %> "primary" <% else %> "light" <% end_if %> >

			<% if $FeatureImage %>
            	<img src="$FeatureImage.URL" class="img-circle img-responsive img-centered " id="about-img" alt="">
			<% end_if %>
            
            <p data-scrollreveal="enter right move 200px over 1.5s">$Content</p>

           <% include SocialMedia %>
          

              
           	<% if $Skills %>
                <% include Skills %>
            <% end_if %>

           



        </div>
    </div>
</div>