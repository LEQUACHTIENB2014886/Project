<!-- CSS -->
<link href="../library/interval-finder/style.css" rel="stylesheet">
<link rel="stylesheet" href="../public/css/guitar.css">
<link rel="stylesheet" href="../public/css/piano.css">
<link href="../library/interval-finder/tool.css" rel="stylesheet">

<!-- JavaScript -->
<script src="../library/interval-finder/jquery.js"></script>
<script defer src="../library/interval-finder/app.js"></script>

<div class="fix__content bg-white">
    <div class="wrapper">
        <div class="content">
            <div class="container">
                <div class="row flex__row">
                    <div class="content__right text-center">
                        <div id="system-message-container" aria-live="polite"></div>
                        <div itemprop="articleBody">
                            <div class="default__page__content">
                                <div id="interactive-finder">
                                    <div class="App">
                                        <div class="chord-selector">
                                            <div class="selector-wrap">
                                                <div class="selector-chord-name">
                                                    <span></span>
                                                    <span class="selector-minor"></span>
                                                    <span class="selector-interval">
                                                        <p>C unison</p>
                                                    </span>
                                                </div>
                                                <div class="selector">
                                                    <div class="css-1pcexqc-container select-chord">
                                                        <div class="css-bg1rzq-control">
                                                            <div class="css-1hwfws3">
                                                                <div class="css-151xaom-placeholder">C</div>
                                                                <input id="react-select-2-input" readonly tabindex="0" class="css-gj7qu5-dummyInput" value="">
                                                            </div>
                                                            <div class="css-1wy0on6">
                                                                <span class="css-bgvzuu-indicatorSeparator"></span>
                                                                <div aria-hidden="true" class="css-16pqwjk-indicatorContainer">
                                                                    <svg height="20" width="20" viewBox="0 0 20 20" class="css-19bqh2r">
                                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="css-1pcexqc-container select">
                                                        <div class="css-bg1rzq-control">
                                                            <div class="css-1hwfws3">
                                                                <div class="css-151xaom-placeholder">♮</div>
                                                                <input id="react-select-3-input" readonly tabindex="0" class="css-gj7qu5-dummyInput" value="">
                                                            </div>
                                                            <div class="css-1wy0on6">
                                                                <span class="css-bgvzuu-indicatorSeparator"></span>
                                                                <div aria-hidden="true" class="css-16pqwjk-indicatorContainer">
                                                                    <svg height="20" width="20" viewBox="0 0 20 20" class="css-19bqh2r">
                                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="buttons-module">
                                            <div class="buttons">
                                                <nav class="drop-down">
                                                    <button>Instrument</button>
                                                    <ul>
                                                        <li class="active">Piano</li>
                                                        <li>Guitar</li>
                                                        <li>Notation</li>
                                                    </ul>
                                                </nav>
                                                <button>Play interval</button>
                                            </div>
                                        </div>

                                        <div class="piano-wrapper">
                                            <div class="piano--black-keys">
                                                <ul>
                                                    <li class="key key-left key--left"><span class="black-key"><i></i></span></li>
                                                    <li class="key key-right key--right"><span class="black-key"><i></i></span></li>
                                                </ul>
                                            </div>
                                            <ul class="piano--white-keys">
                                                <li class="key"><span class="white-key"><i></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <script src="../library/interval-finder/translation/Vietnamese.js"></script>
                            <script src="../library/interval-finder/keycodes.js"></script>
                            <script src="../library/interval-finder/audio.js"></script>
                            <script src="../library/interval-finder/process_audio2.js"></script>
                            <script src="../library/interval-finder/main.js"></script>
                        </div>
                        <div class="after__content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Inline Style -->
<style>
    p {
        font-size: 50px;
        color: black;
        font-style: italic;
    }
</style>