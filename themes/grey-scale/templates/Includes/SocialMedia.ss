<% if $SocialMedia %>
    <ul class="list-inline">                
        <% loop SocialMedia %>
        <li>
            <a href="$URL" target="_blank" class="btn btn-social-dark btn-$strip($FontAwesomeIcon)">
                <i class="fa fa-fw $FontAwesomeIcon"></i>
            </a>
        </li>
        <% end_loop %>
    </ul>
<% end_if %>
