<div class="loading">
    <div class="dot-revolution"></div>
</div>

<style>
    .loading {
        height: 100vh;
        display: flex;
        place-content: center;
        place-items: center;
    }
    .dot-revolution {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: var(--svg-color);
        color: var(--svg-color);
    }
    .dot-revolution::before, .dot-revolution::after {
        content: "";
        display: inline-block;
        position: absolute;
    }
    .dot-revolution::before {
        left: 0;
        top: -15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: var(--svg-color);
        color: var(--svg-color);
        transform-origin: 5px 20px;
        animation: dot-revolution 1.4s linear infinite;
    }
    .dot-revolution::after {
        left: 0;
        top: -30px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: var(--svg-color);
        color: var(--svg-color);
        transform-origin: 5px 35px;
        animation: dot-revolution 1s linear infinite;
    }

    @keyframes dot-revolution {
        0% {
            transform: rotateZ(0deg) translate3d(0, 0, 0);
        }
        100% {
            transform: rotateZ(360deg) translate3d(0, 0, 0);
        }
    }
</style>