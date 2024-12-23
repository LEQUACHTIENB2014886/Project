<style>
    .course {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 15px;
        margin-top: -600px;
    }

    .box {
        width: calc(33.33% - 10px);
        background-color: #f3f3f3;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .content {
        text-align: center;
        padding: 15px;
    }

    .box a {
        text-decoration: none;
        color: inherit;
    }

    .box a:hover {
        color: gray;
    }

    .box a:active {
        color: white;
    }

    .image {
        text-align: center;
        padding: 10px;
        height: 100%;
    }

    .image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }

    .tools {
        text-decoration: none;
        color: inherit;
    }

    .tools:hover {
        color: inherit;
    }

    a {
        text-decoration: none;
    }

    h1,
    h5 {
        text-shadow: 2px 3px 5px black;
    }

    .box:hover {
        transform: scale(1.03);
    }
</style>