class MyHeader extends HTMLElement {
    connectedCallback() {
        
        this.innerHTML = `
        <header id="site_header" class="header">
        <div class="header-content">
            <div class="menu-button">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="header-photo">
            </div>

        </div>
        <div class="site-menu profile-card-on flex-v-align dl-menuwrapper">

            <div class="profile-card flex-v-align">
                <div class="profile-card-block">
                    <div class="profile-img">
                        <a href="index.html">
                            <img src="nova 2.png" alt="image">
                        </a>
                    </div>

                    <a href="index.html">
                        <h3 class="site-title">Ketut Nova Wirya Dinata</h3>
                    </a>

                    <h5 class="site-subtitle">IT Enthusiast</h5>
                    <!-- Social Links -->
                    <div class="social-links">
                        <ul>
                            <li>
                                <a href="https://twitter.com/NovaWirya" target="_blank">
                                    <i class="fafw fafw-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://web.facebook.com/nova.wirya.9/" target="_blank">
                                    <i class="fafw fafw-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/novawiryadnta/" target="_blank">
                                    <i class="fafw fafw-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/6282237653029" target="_blank">
                                    <i class="fafw fafw-whatsapp"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/nova-wirya-b8a572229/" target="_blank">
                                    <i class="fafw fafw-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Novawiryadinata" target="_blank">
                                    <i class="fafw fafw-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- /Social Links -->
                </div>
            </div>

            <ul id="menu-vcard-menu" class="wezen-classic-menu main-menu dl-menu dl-menuopen">

                <li id="menu-item-405"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61">
                    <a href="index.html" data-hover="1">About Me</a>
                </li>
                <li id="menu-item-61"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61"><a
                        href="resume.html" data-hover="1">Resume</a></li>
                <li id="menu-item-231"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-231">
                    <a href="#" data-hover="1">Portfolio</a>
                    <ul class="sub-menu">
                        <li id="menu-item-234"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-234"><a
                                href="I30.html" data-hover="1">I3O IoT in Agriculture</a></li>
                        <li id="menu-item-78"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"><a
                                href="WSEEC.html" data-hover="1">WSEEC - SEEN</a></li>
                        <li id="menu-item-233"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-233"><a
                                href="PHP2D.html" data-hover="1">PHP2D</a></li>
                        <li id="menu-item-232"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-232"><a
                                href="KRSRI.html" data-hover="1">KRSRI</a></li>

                    </ul>
                </li>
                <li id="menu-item-246"
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-246">
                    <a href="#" data-hover="1">Blog</a>
                    <ul class="sub-menu">
                        <li id="menu-item-328"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-328"><a
                                href="post1.html" data-hover="1">Blog 1</a></li>

                    </ul>
                </li>
                <li id="menu-item-111"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-111"><a
                        href="contact.html" data-hover="1">Contact</a></li>
            </ul>
        </div>
    </header>


    <div class="r-sidebar">
                <div class="sidebar-button">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="blog-sidebar" class="blog-sidebar">
                <div class="blog-sidebar-content clearfix">

                    <div class="sidebar-item">
                        <div class="sidebar-title">
                            <h4>Recent Posts</h4>
                        </div>
                        <ul>
                            <li>
                                <a href="blog/2020/06/22/best-practices-for-animated-progress-indicators/index.html">Best
                                    Practices for Animated Progress Indicators</a>
                            </li>
                            <li>
                                <a href="blog/2020/06/22/designing-the-perfect-feature-comparison-table/index.html">Designing
                                    the Perfect Feature Comparison Table</a>
                            </li>
                            <li>
                                <a href="blog/2020/06/22/an-overview-of-e-commerce-platforms/index.html">An Overview of
                                    E-Commerce Platforms</a>
                            </li>
                            <li>
                                <a href="blog/2020/06/22/why-i-switched-to-sketch-for-ui-design/index.html">Why I
                                    Switched to Sketch For UI Design</a>
                            </li>
                            <li>
                                <a href="blog/2020/06/22/creative-and-innovative-navigation-designs/index.html">Creative
                                    and Innovative Navigation Designs</a>
                            </li>
                        </ul>

                    </div>
                    <div class="sidebar-item">
                        <div class="sidebar-title">
                            <h4>Archives</h4>
                        </div>
                        <ul>
                            <li><a href='blog/2020/06/index.html'>June 2020</a></li>
                        </ul>

                    </div>
                    <div class="sidebar-item">
                        <div class="sidebar-title">
                            <h4>Categories</h4>
                        </div>
                        <ul>
                            <li class="cat-item cat-item-12"><a href="blog/category/design/index.html">Design</a>
                            </li>
                            <li class="cat-item cat-item-10"><a
                                    href="blog/category/e-commerce/index.html">E-Commerce</a>
                            </li>
                            <li class="cat-item cat-item-11"><a href="blog/category/ui/index.html">UI</a>
                            </li>
                            <li class="cat-item cat-item-1"><a
                                    href="blog/category/uncategorized/index.html">Uncategorized</a>
                            </li>
                            <li class="cat-item cat-item-13"><a href="blog/category/wordpress/index.html">WordPress</a>
                            </li>
                        </ul>

                    </div>
                    <div class="sidebar-item">
                        <div class="sidebar-title">
                            <h4>Meta</h4>
                        </div>
                        <ul>
                            <li><a href="wp-login.html">Log in</a></li>
                            <li><a href="feed/index.html">Entries feed</a></li>
                            <li><a href="comments/feed/index.html">Comments feed</a></li>

                            <li><a href="https://wordpress.org/">WordPress.org</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('my-header', MyHeader);


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="site-footer clearfix">
                    <div class="footer-social">
                        <ul class="footer-social-links">
                            <li>
                                <a href="https://twitter.com/NovaWirya" target="_blank">Twitter</a>
                            </li>
                            <li>
                                <a href="https://web.facebook.com/nova.wirya.9/" target="_blank">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/novawiryadnta/" target="_blank">Instagram</a>
                            </li>
                            <li>
                                <a href="https://wa.me/6282237653029" target="_blank">Whatsapp</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/nova-wirya-b8a572229/" target="_blank">Linkedin</a>
                            </li>
                            <li>
                                <a href="https://github.com/Novawiryadinata" target="_blank">Git Hub</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-copyrights">
                        <p>© 2022 All rights reserved.</p>
                    </div>
                </footer>
        `;
    }
}

customElements.define('my-footer', MyFooter);


$(document).ready(function () {
    if (window.location == 'index.html') {
        $(' li').addClass('active');
    }
    else if (window.location == 'resume.html') {
        $(' li').addClass('active');
    }
});