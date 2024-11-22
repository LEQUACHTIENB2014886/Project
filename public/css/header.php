<style>
    body,
    html {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow-y: auto;
    }

    #main-header .navbar-brand {
        border: 1px solid white;
        padding: 5px 10px;
    }

    .view {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: url("../library/image/interview/background.jpg") no-repeat center center;
        background-size: cover;
    }

    .content {
        position: relative;
        z-index: 1;
        padding: 20px;
    }

    #main-header {
        background-color: #33333300;
        color: white;
        padding: 10px;
    }

    #main-header .navbar {
        z-index: 1;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.3);
    }

    #main-header .navbar-dark .navbar-nav .nav-link {
        color: #ffffff;
        transition: color 0.3s, background-color 0.3s;
    }

    #main-header .navbar-dark .navbar-nav .nav-link:hover {
        color:#D3D3D3;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
    }

    #main-header .buttonToCourse {
        display: inline-block;
        padding: 15px 30px;
        background-color: SlateGrey;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-size: 20px;
        border: 2px solid rgb(55, 66, 76);
        transition: border-color 0.3s;
    }

    #main-header .buttonToCourse:hover {
        border-color: whitesmoke;
        color: white;
    }

    #main-header a {
        text-decoration: none;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .fadeHomepage {
        animation: fadeIn 0.5s ease-in;
    }

    .fadefast {
        animation: fadeIn 0.2s ease-in;
    }

    .slide-in {
        opacity: 0;
        transform: translateX(-100%);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .slide-in.show {
        opacity: 1;
        transform: translateX(0);
    }

    #homepage-button .buttonToCourse {
        display: inline-block;
        padding: 15px 30px;
        background-color: SlateGrey;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-size: 20px;
        border: 2px solid rgb(55, 66, 76);
        transition: border-color 0.3s;
    }

    #homepage-button .buttonToCourse:hover {
        border-color: whitesmoke;
        color: white;
    }

    a {
        text-decoration: none;
    }
</style>