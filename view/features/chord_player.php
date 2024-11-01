<link href="../library/chord_player/style.css" rel="stylesheet" />
<link href="../library/chord_player/m3.css" rel="stylesheet" />
<script src="../library/chord_player/jquery.js"></script>
<script defer src="../library/chord_player/app.js"></script>
<div class="fix__content bg-white" style="margin-right:-70px;"><br>
    <div class="wrapper">
        <div class="content">
            <div class="container">
                <div class="row flex__row">
                    <div class="content__right col-9-m col-">
                        <div class="page-header default__page__header">
                            <h1 class="h1 default__page__title text-center" itemprop="name">
                                Ứng dụng đệm hợp âm</h1><br>
                        </div>
                        <div itemprop="articleBody">
                            <div class="default__page__content">
                                <div id="chord-player"></div>
                                <script src="../library/chord_player/vnm.js"></script>
                                <script src="../library/chord_player/presets.js"></script>
                                <script src="../library/chord_player/aa.js"></script>
                                <script src="../library/chord_player/g8.js"></script>
                                <script src="../library/chord_player/chunk.js"></script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><br><br><br><br><br><br><br>
</div>
<style>
    #main-header .navbar {
        margin-right: 16px;
    }

    .dropdown-content li {
        margin-left: -32px;
    }

    .dropdown--highlight {
        padding-left: 0px;
    }

    .modal--select-instrument {
        border-bottom: 1px solid rgba(0, 0, 0, .085)
    }

    .select-instrument {
        height: 90px;
        padding: 0 20px
    }

    .audio-wave-wrapper,
    .select-instrument {
        align-items: center;
        display: flex;
        justify-content: space-between
    }


    .handle--resizer {
        height: 100%;
        width: 100%
    }

    .handle--line {
        background-color: #909090;
        border-radius: 10px;
        height: 90%;
        opacity: 0;
        position: absolute;
        right: 10px;
        top: 5%;
        transition: .5s ease-in;
        width: 4px
    }

    .sequencer--cell:hover .handle--line {
        opacity: 1
    }

    .sequencer--circle-counter {
        align-items: center;
        background-color: #fff;
        border-radius: 50%;
        bottom: 60px;
        box-shadow: 0 3px 5px 3px rgba(0, 0, 0, .2);
        color: #555;
        cursor: pointer;
        display: flex;
        font-size: 1.1rem;
        height: 35px;
        justify-content: center;
        position: absolute;
        right: -5px;
        transition: .7s;
        -webkit-user-select: none;
        user-select: none;
        width: 35px;
        z-index: 4
    }

    .sequencer--circle-counter:hover {
        background-color: #e4e4e4;
        color: #151515
    }

    .accidentals,
    .accidentals-select {
        font-family: Opus Chords Std
    }

    .accidentals-select {
        font-size: 1.1rem
    }

    .ReactModalPortal {
        z-index: 101
    }

    .modal--button-red {
        background-color: #db4437;
        color: #fff
    }

    .modal--button-red:hover {
        background-color: #bc3c31
    }

    .modal--button-green {
        background-color: #72ac51;
        color: #fff
    }

    .modal--button-green:hover {
        background-color: #5f9a43
    }

    .modal--buttons,
    .modal--duration,
    .modal--select-chord {
        align-items: center;
        display: flex;
        padding: 0 20px
    }

    .modal--buttons,
    .modal--select-chord {
        height: 85px
    }

    .modal--duration {
        height: 50px;
        justify-content: end
    }

    .modal--buttons {
        justify-content: space-between
    }

    .modal--text {
        color: #4e5056;
        font-size: 1.2rem;
        font-weight: 700
    }

    .modal--confirm-btn {
        background-color: #72ac51;
        height: 40px;
        line-height: 0;
        margin: 0;
        padding: 0;
        transition: .3s;
        width: 40px
    }

    .buttons-wrapper {
        height: 73px
    }

    .buttons-container {
        display: flex;
        font-family: Open Sans, sans-serif;
        justify-content: center
    }

    .buttons {
        margin-top: 14px
    }

    .buttons,
    .buttons--section-b {
        display: flex;
        justify-content: flex-start;
        width: 100%
    }

    .buttons--section-b {
        align-items: center;
        height: 81px
    }

    button {
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 4px;
        color: #000;
        cursor: pointer;
        font-family: Open Sans, sans-serif;
        font-size: 14px;
        height: 37px;
        margin-right: 8px;
        padding: 8px 14px;
        transition: .25s ease;
        -webkit-user-select: none;
        user-select: none;
        white-space: nowrap
    }

    button.active {
        background-color: #e4e4e4;
        border-color: #dadada
    }

    button:hover {
        border-color: #dadada;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2)
    }

    .dropdown {
        position: relative;
        -webkit-user-select: none;
        user-select: none
    }

    .dropdown ul.active {
        display: block
    }

    .dropdown .dropdown-content {
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .2);
        display: none;
        font-family: Open Sans, sans-serif;
        font-size: 13px;
        left: 1px;
        max-height: 294px;
        overflow-y: scroll;
        position: absolute;
        z-index: 4
    }

    .dropdown button {
        margin-bottom: 0
    }

    .dropdown ::-webkit-scrollbar,
    .modal--load-samples::-webkit-scrollbar,
    .select-chord__key ::-webkit-scrollbar {
        width: 12px
    }

    .dropdown ::-webkit-scrollbar-thumb,
    .modal--load-samples::-webkit-scrollbar-thumb,
    .select-chord__key ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, .2);
        border: 2px solid #fff;
        border-radius: 10px
    }

    .dropdown ::-webkit-scrollbar-track,
    .modal--load-samples::-webkit-scrollbar-track,
    .select-chord__key ::-webkit-scrollbar-track {
        background-color: #fff
    }

    .dropdown ::-webkit-scrollbar-track:hover,
    .modal--load-samples::-webkit-scrollbar-track:hover,
    .select-chord__key ::-webkit-scrollbar-track:hover {
        background-color: #f8f8f8
    }

    .dropdown .dropdown-content .name {
        padding-right: 8px
    }

    .dropdown ul li:first-child {
        border-radius: 4px 4px 0 0
    }

    .dropdown ul li:last-child {
        border-radius: 0 0 4px 4px
    }

    .dropdown ul li {
        align-items: center;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px 10px 14px;
        text-align: center;
        white-space: nowrap
    }

    .dropdown ul li:hover {
        background-color: #e1e1e1
    }

    .dropdown ul li.active {
        background-color: #eee
    }

    .modal--load-samples {
        height: 216px;
        overflow-y: auto
    }

    .open-sample {
        display: flex;
        list-style: none;
        padding: 0
    }

    .open-sample div {
        align-items: center;
        cursor: pointer;
        display: flex;
        padding-right: 20px
    }

    .modal--sample li:hover {
        background-color: #e1e1e1
    }

    .open-sample--name {
        overflow: hidden;
        padding: 0 20px;
        width: 100%
    }

    .open-sample--name span {
        overflow: hidden;
        padding: 10px 0;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .open-sample--edit-icon {
        align-items: center;
        background-color: #eee;
        border-radius: 15%;
        display: flex;
        height: 26px;
        justify-content: center;
        line-height: 0;
        -webkit-user-select: none;
        user-select: none;
        width: 28px
    }

    .open-sample--edit-icon:hover {
        background-color: #fff
    }

    .play--button {
        align-items: center;
        display: flex
    }

    .play--button svg {
        height: 13px;
        width: 10px
    }

    .default__page__content ul {
        padding-bottom: 0
    }

    .progression-name {
        align-items: center;
        background-color: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 4px;
        display: flex;
        height: 37px;
        overflow: hidden;
        width: 100%
    }

    .progression-name span {
        color: #494949;
        font: 600 14px Open Sans, sans-serif;
        overflow: hidden;
        padding: 8px 14px;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    @media(max-width:767px) {
        .buttons-container {
            -ms-overflow-style: none;
            overflow-x: scroll;
            scrollbar-width: none
        }

        .buttons-container::-webkit-scrollbar {
            display: none
        }

        .buttons-open {
            height: 350px
        }

        .progression-name {
            overflow: visible
        }
    }

    input[type=text].tempo,
    textarea.tempo {
        border: 1px solid #eee;
        margin-bottom: 0;
        outline: 0;
        transition: all .3s ease-in-out
    }

    input[type=text].tempo {
        -webkit-appearance: none;
        appearance: none;
        background: #f8f8f8;
        border: 1px solid #eee;
        border-radius: 4px;
        color: #272927;
        font-family: Open Sans, sans-serif;
        font-size: 14px;
        height: 37px;
        margin-right: 8px;
        text-align: center;
        width: 60px
    }

    .add-chord {
        align-items: center;
        background-color: #fcfcfc;
        border: 2px solid #e2e2e2;
        border-radius: 5px;
        color: #4d4d4d;
        cursor: pointer;
        display: flex;
        font-size: 1.6rem;
        height: 80px;
        justify-content: center;
        margin: 2px;
        transition: .3s;
        -webkit-user-select: none;
        user-select: none;
        width: 36px
    }

    .add-chord:hover {
        background-color: #eee
    }

    .add-section {
        margin-left: 0
    }

    .modal--content-single-line,
    input[type=text].modal--share-input {
        display: flex;
        justify-content: space-between;
        width: 100%
    }

    input[type=text].modal--share-input {
        align-items: center;
        background-color: #e8f0fe;
        border: none;
        font-size: 16px;
        height: 40px;
        margin-right: 10px;
        overflow: hidden;
        resize: none;
        white-space: nowrap
    }

    .modal--content-single-line .share-btn {
        border: 1px solid #72ac51;
        outline: 1px solid #72ac51
    }

    .modal--content-single-line .share-btn:hover {
        border: 1px solid #5f9a43;
        outline: 1px solid #5f9a43
    }

    .modal--content {
        height: 170px;
        padding-bottom: 25px
    }

    .modal--notifications-container {
        display: flex;
        justify-content: center
    }

    .modal--notifications {
        height: 50px;
        position: absolute;
        top: -40px;
        width: 100%
    }

    .modal--notifications .error-message {
        background-color: #f8e0e0;
        border: 1px solid #db4437;
        border-radius: 4px;
        color: #db4437;
        font-size: 15px;
        margin: 0 20px;
        padding: 10px;
        position: absolute
    }

    .modal--notifications .success-message {
        background-color: #e8f5e9;
        border: 1px solid #0f9d58;
        border-radius: 4px;
        color: #0f9d58;
        font-size: 15px;
        margin: 0 20px;
        padding: 10px;
        position: absolute
    }

    .error-message,
    .success-message {
        opacity: 0;
        top: 0;
        transition: visibility 0s, opacity .5s linear;
        visibility: hidden
    }

    .error-message.animate,
    .success-message.animate {
        opacity: 1;
        top: 55px;
        transition: top .5s ease-out, visibility 0s, opacity .5s linear;
        visibility: visible
    }

    .wave {
        width: 30px
    }

    .Line_1 {
        -webkit-animation: pulse .6s infinite;
        animation: pulse .6s infinite;
        -webkit-animation-delay: .15s;
        animation-delay: .15s
    }

    .Line_2 {
        -webkit-animation: pulse .6s infinite;
        animation: pulse .6s infinite;
        -webkit-animation-delay: .3s;
        animation-delay: .3s
    }

    .Line_3 {
        -webkit-animation: pulse .6s infinite;
        animation: pulse .6s infinite;
        -webkit-animation-delay: .45s;
        animation-delay: .45s
    }

    .Line_4 {
        -webkit-animation: pulse .6s infinite;
        animation: pulse .6s infinite;
        -webkit-animation-delay: .6s;
        animation-delay: .6s
    }

    .Line_5 {
        -webkit-animation: pulse .6s infinite;
        animation: pulse .6s infinite;
        -webkit-animation-delay: .75s;
        animation-delay: .75s
    }

    .Line_6 {
        -webkit-animation: pulse .6s infinite;
        animation: pulse .6s infinite;
        -webkit-animation-delay: .9s;
        animation-delay: .9s
    }

    .Line_7 {
        -webkit-animation: pulse .6s infinite;
        animation: pulse .6s infinite;
        -webkit-animation-delay: 1.05s;
        animation-delay: 1.05s
    }

    .Line_8 {
        -webkit-animation: pulse .6s infinite;
        animation: pulse .6s infinite;
        -webkit-animation-delay: 1.2s;
        animation-delay: 1.2s
    }

    .Line_9 {
        -webkit-animation: pulse .6s infinite;
        animation: pulse .6s infinite;
        -webkit-animation-delay: 1.35s;
        animation-delay: 1.35s
    }

    @-webkit-keyframes pulse {
        0% {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%
        }

        50% {
            -webkit-transform: scaleY(.7);
            transform: scaleY(.7);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%
        }

        to {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%
        }
    }

    @keyframes pulse {
        0% {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%
        }

        50% {
            -webkit-transform: scaleY(.7);
            transform: scaleY(.7);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%
        }

        to {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%
        }
    }

    .switch {
        display: inline-block;
        height: 34px;
        position: relative;
        width: 60px
    }

    .switch input {
        height: 0;
        opacity: 0;
        width: 0
    }

    .slider {
        background-color: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        right: 0;
        top: 0
    }

    .slider,
    .slider:before {
        position: absolute;
        transition: .4s
    }

    .slider:before {
        background-color: #fff;
        bottom: 4px;
        content: "";
        height: 26px;
        left: 4px;
        width: 26px
    }

    input:checked+.slider {
        background-color: #72ac51
    }

    input:focus+.slider {
        box-shadow: 0 0 1px #72ac51
    }

    input:checked+.slider:before {
        -webkit-transform: translateX(26px);
        transform: translateX(26px)
    }

    .slider.round {
        border-radius: 34px
    }

    .slider.round:before {
        border-radius: 50%
    }

    @font-face {
        font-family: Opus Chords Std;
        font-style: normal;
        font-weight: 400;
        src: url(../library/chord_player/OpusChordsStd.6e24e53467c24cc2caa2.otf) format("truetype")
    }

    #chord-player {
        position: relative
    }

    .sequencer {
        background-color: #ebebeb;
        border-radius: 5px;
        display: flex;
        flex-wrap: wrap;
        padding: 3px;
        position: relative;
        width: 70%;
        box-sizing: border-box;
    }

    .sequencer ul {
        display: flex;
        width: 100%;
        z-index: 3;
        padding: 0;
        margin: 0;
    }

    .sequencer li {
        flex: 1 1 auto;
        list-style-type: none;
        margin: 5px;
        background-color: #f3f3f3;
        padding: 10px;
        border-radius: 3px;
        transition: transform 100ms;
        text-align: center;
    }

    .sequencer li:hover {
        transform: scale(1.05);
    }



    .sequencer li {
        align-items: center;
        color: #4d4d4d;
        cursor: pointer;
        display: flex;
        font-size: 1.6rem;
        font-weight: 700;
        height: auto;
        outline: none;
        padding: 2px;
        transition: .3s;
        -webkit-user-select: none;
        user-select: none;
        width: auto;
        z-index: 3
    }

    .sequencer li>div {
        align-items: center;
        background-color: #fcfcfc;
        border: 2px solid #e2e2e2;
        border-radius: 5px;
        display: flex;
        flex-shrink: 1 !important;
        height: 100%;
        overflow: hidden;
        position: relative;
        transition: .2s ease-out;
        width: 100%
    }

    .sequencer li>div:hover {
        background-color: #f3f3f3
    }

    .sequencer li .lines {
        bottom: 0;
        display: flex;
        justify-content: space-between;
        left: 0;
        padding: 0 13px;
        position: absolute;
        -webkit-user-select: none;
        user-select: none;
        width: 100%
    }

    .sequencer li .lines span {
        color: #ddd;
        display: inline-flex;
        height: 15px;
        justify-content: center;
        overflow: hidden;
        width: 100%
    }

    .sequencer--cell {
        overflow: hidden
    }

    .sequencer--cell.active>div {
        background-color: #909090;
        color: #f8f8f8
    }

    .sequencer--cell.active>div:hover {
        background-color: grey;
        color: #f8f8f8
    }

    .sequencer--cell.active svg {
        stroke: #f8f8f8
    }

    .sequencer--cell--text svg {
        stroke: #4d4d4d;
        transition: .3s
    }

    .sequencer--cell--text .special--symbol {
        font-size: 1.2rem;
        position: absolute;
        top: 23px
    }

    .sequencer--cell--text .inner--symbol {
        bottom: 4px;
        font-size: 1.2rem;
        position: absolute
    }

    .sequencer--cell-duration-1 .inner--symbol,
    .sequencer--cell-duration-1 .special--symbol,
    .sequencer--cell-duration-2 .inner--symbol,
    .sequencer--cell-duration-2 .special--symbol {
        font-size: 1rem
    }



    .sequencer--cell--text .sign-dim {
        bottom: 25px;
        position: absolute
    }

    .sequencer--cell--text .accidentals {
        padding-right: 1px
    }

    .sequencer--cell--text {
        padding-left: 6px;
        -webkit-user-select: none;
        user-select: none
    }

    .sequencer--cell--content,
    .sequencer--cell--text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .sequencer--cell--draggable {
        align-items: center;
        background: 0 0;
        display: flex;
        height: 100%;
        opacity: .3;
        position: absolute;
        width: 100%
    }

    .sequencer--cell--draggable.dragging {
        background: repeating-linear-gradient(320deg, #d3d3d3, #d3d3d3 5px, #a9a9a9 0, #a9a9a9 10px)
    }
</style>