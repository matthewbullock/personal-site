<div class="container">
    <div class="row">
        <div class="col-lg-12 text-center">
            <h2>$Section_Five_Section_Heading</h2>
            <hr class="light">
        </div>
    </div>
    <div class="row" data-scrollreveal="enter bottom move 200px over 1.5s">
        <div class="isotope">            
            <% if $Projects.Count = 1 %>
                <% loop $Projects %>
                    <div class="col-sm-4 col-sm-offset-4 portfolio-item">                
                        <% include Project %>
                        <% include ProjectModal %>
                    </div>
                <% end_loop %>
            <% else_if $Projects.Count = 2 %>
                <% loop $Projects %>
                    <% if Pos = 1 %>
                        <div class="col-sm-4 col-sm-offset-2 portfolio-item"> 
                    <% else %>
                        <div class="col-sm-4 portfolio-item"> 
                    <% end_if %>
                            <% include Project %>
                            <% include ProjectModal %>
                        </div>
                <% end_loop %>
            <% else %>
                <% loop $Projects %>  
                    <div class="col-sm-4 portfolio-item">               
                        <% include Project %>
                        <% include ProjectModal %>
                    </div>
                <% end_loop %>
            <% end_if %>
        </div>
    </div>
</div>
 