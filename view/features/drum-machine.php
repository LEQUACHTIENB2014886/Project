<script src="../library/drum-machine/jquery.js"></script>
<div class="bg-white"><br><br>
    <div class="wrapper">
        <div class="content">
            <div class="container">
                <div class="row flex__row">
                    <div class="content__right col-9-m col-">
                        <div id="system-message-container" aria-live="polite"></div>

                        <div class="page-header default__page__header">
                            <h1 class="h1 text-center">
                                Trống điện tử</h1>
                        </div>
                        <div itemprop="articleBody">
                            <div class="default__page__content">
                                <link rel="stylesheet" href="../library/drum-machine/drum-machine.css">
                                <div id="app" class="seq-ui">
                                    <div id="r-top"></div>
                                    <div id="r-mid"></div>
                                </div>
                                <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0/handlebars.min.js"></script>
                                <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>
                                <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"></script>

                                <script>
                                    // TRANSLATION PART
                                    var DRUM_MACHINE_TRANSLATION = {
                                        pathToSoundFiles: '../library/drum-machine/audio/',
                                        url: './drum-machine.php',
                                        buttonNames: {
                                            swing: 'Swing',
                                            presetsButtonName: 'Presets',
                                            presets: {
                                                1: 'Pop/rock 1',
                                                2: 'Pop/rock 2',
                                                3: 'Pop/rock 3',
                                                4: 'Pop/rock 4',
                                                5: 'Pop/rock 5',
                                                6: 'Pop/rock 6',
                                                7: 'Pop/rock in 3/4',
                                                8: 'Pop/rock in 6/8',
                                                9: 'Jazz 1',
                                                10: 'Jazz 2',
                                                11: 'Jazz 3',
                                                12: 'Jazz 4',
                                                13: 'Funk 1',
                                                14: 'Funk 2',
                                                15: 'Disco 1',
                                                16: 'Disco 2',
                                                17: 'Hip hop 1',
                                                18: 'Hip hop 2',
                                                19: 'Heavy metal 1',
                                                20: 'Heavy metal 2'
                                            },
                                            tact: ' time',
                                            reset: 'Clear'
                                        },
                                        patternName: {
                                            hihatfod: 'Bàn đạp hi-hat',
                                            sidetamlys: 'Trống tom',
                                            gulvtam: 'Sàn tom',
                                            ride: 'Cymbal',
                                            hihat: 'Hi-hat',
                                            lilletromme: 'Snare',
                                            stortromme: 'Trống Bass'
                                        },
                                    }
                                </script>
                                <script src="../library/drum-machine/drum.js"></script><br>
                                
                            </div>
                        </div>
                        </article>
                        <div class="after__content">
                            <a class="text-muted" href="./drum-machine.php?data=70-n-44-a--1cdi2adegi3cdk4aegm5i6egko7aik-2ce6c">
                                Điệu Bolero 1</a>,
                                <a class="text-muted" href="./drum-machine.php?data=70-n-44-a--1cdi2adegik3cdk4aegm5i6ego7aik-2ce6a">
                                Điệu Bolero 1</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
        h1{
            font-style: italic;
        }
        ul.sound-types,
        ul.dropdown__content {
            list-style-type: none;
            padding: 0;
            margin: 0;
            width: 110px;
        }

        .custom-modal {
            background-color: white;
            width: 415px;
            height: 105px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            position: absolute;
            top: 250px;
            left: 600px;
            transform: translate(-50%, -50%);
            cursor: move;
            z-index: 1000;
        }

        .custom-modal-content {
            display: flex;
            flex-direction: row;
            gap: 20px;
            height: 100%;
        }

        .modal-item {
            flex: 1;
        }

        .modal-item-title {
            font-weight: bold;
            color: #555;
        }

        .modal-item-selector {
            display: flex;
            align-items: center;
        }

        .dropdown__select {
            position: relative;
            cursor: pointer;
        }
    </style>
</div>