const navbarHTML = `
    <div class="container-fluid d-none d-lg-block" style="background-color: #5D3FD3;">
        <div class="row py-2 px-lg-5">
            <div class="col-lg-6 text-left mb-2 mb-lg-0">
            </div>
            <div class="col-lg-6 text-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white px-2" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="text-white px-2" href="https://wa.me/447946031256"><i class="fab fa-whatsapp"></i></a>
                    <a class="text-white px-2" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" class="navbar-brand ml-lg-3">
                <h1 class="m-0 text-primary"><span class="text-dark">A&V Thai</span> Massage</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav m-auto py-0">
                    <a href="index.html" class="nav-item nav-link mx-lg-3 h5">Home</a>
                    <a href="about.html" class="nav-item nav-link mx-lg-3 h5">About</a>
                    <a href="service.html" class="nav-item nav-link mx-lg-3 h5">Services</a>
                    <a href="contact.html" class="nav-item nav-link mx-lg-3 h5">Contact</a>
                    <a href="blog.html" class="nav-item nav-link mx-lg-3 h5">Blog</a>
                </div>
            </div>
        </nav>
    </div>
    `;

document.getElementById('navbar-container').innerHTML = navbarHTML;