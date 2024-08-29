<html lang="en" data-theme="dark" class="pc chrome127 js">

<head>
    <meta charset="UTF-8">
    <title>JavaScript Drum Kit</title>


    <style type="text/css">
        @font-face {
            font-family: Lato;
            font-style: normal;
            font-weight: 400;
            src: url(/cf-fonts/s/lato/5.0.18/latin/400/normal.woff2);
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: normal;
            font-weight: 400;
            src: url(/cf-fonts/s/lato/5.0.18/latin-ext/400/normal.woff2);
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: normal;
            font-weight: 700;
            src: url(/cf-fonts/s/lato/5.0.18/latin/700/normal.woff2);
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: normal;
            font-weight: 700;
            src: url(/cf-fonts/s/lato/5.0.18/latin-ext/700/normal.woff2);
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: normal;
            font-weight: 900;
            src: url(/cf-fonts/s/lato/5.0.18/latin/900/normal.woff2);
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: normal;
            font-weight: 900;
            src: url(/cf-fonts/s/lato/5.0.18/latin-ext/900/normal.woff2);
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: italic;
            font-weight: 400;
            src: url(/cf-fonts/s/lato/5.0.18/latin/400/italic.woff2);
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: italic;
            font-weight: 400;
            src: url(/cf-fonts/s/lato/5.0.18/latin-ext/400/italic.woff2);
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: italic;
            font-weight: 700;
            src: url(/cf-fonts/s/lato/5.0.18/latin/700/italic.woff2);
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: italic;
            font-weight: 700;
            src: url(/cf-fonts/s/lato/5.0.18/latin-ext/700/italic.woff2);
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: italic;
            font-weight: 900;
            src: url(/cf-fonts/s/lato/5.0.18/latin/900/italic.woff2);
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            font-display: swap;
        }

        @font-face {
            font-family: Lato;
            font-style: italic;
            font-weight: 900;
            src: url(/cf-fonts/s/lato/5.0.18/latin-ext/900/italic.woff2);
            unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            font-display: swap;
        }
    </style>
    <meta name="twitter:title" content="JavaScript Drum Kit">
    <meta name="twitter:description" content="JavaScript Drum Kit - based off of the javascript30 course by WesBos....">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="https://shots.codepen.io/username/pen/xdooWa-800.jpg?version=1496385791">
    <meta property="og:image" content="https://shots.codepen.io/username/pen/xdooWa-800.jpg?version=1496385791" itemprop="thumbnailUrl">
    <meta property="og:title" content="JavaScript Drum Kit">
    <meta property="og:url" content="https://codepen.io/amdsouza92/details/xdooWa">
    <meta property="og:description" content="JavaScript Drum Kit - based off of the javascript30 course by WesBos....">
    <link rel="alternate" type="application/json+oembed" href="https://codepen.io/api/oembed?url=https%3A%2F%2Fcodepen.io%2Famdsouza92%2Fpen%2FxdooWa&amp;format=json" title="JavaScript Drum Kit">
    <link rel="stylesheet" media="all" href="https://cpwebassets.codepen.io/assets/global/global-6175919292ede0cb0e1f54eaa21b7491f2b778b89d7121b7cf789e552fd005ae.css">
    <link rel="stylesheet" media="screen" href="https://cpwebassets.codepen.io/assets/packs/css/everypage-bcf75bfb.css">
    <link rel="stylesheet" media="all" href="https://cpwebassets.codepen.io/assets/editor/editor-91eb7fc7fdea01c5a0ffafd26e6d428be3df64853fcf29f12a3ff15a35621377.css">
    <meta name="description" content="JavaScript Drum Kit - based off of the javascript30 course by WesBos....">
    <link rel="stylesheet" media="screen" href="https://cpwebassets.codepen.io/assets/editor/themes/twilight-123214b13ed2699670d09785cc8ac3cbc46ebf6eeb43e268f0bb1a1e07c69684.css" id="cm-theme">
    <style id="cm-font-family" class="cm-font-family" nonce="">
        .CodeMirror,
        .console-logs .console-line,
        .console-command-line-input,
        .console-message,
        .CodeMirror-hint {
            font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
                monospace;
        }
    </style>
    <style id="cm-font-size" nonce="">
        .CodeMirror,
        .console-logs .console-line,
        .console-command-line-input,
        .console-message,
        .CodeMirror-hint {
            font-size: 14px;
        }
    </style>
    <link rel="apple-touch-icon" type="image/png" href="https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png">
    <meta name="apple-mobile-web-app-title" content="CodePen">
    <link rel="shortcut icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico">
    <link rel="mask-icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-b4b4269c16397ad2f0f7a01bcdf513a1994f4c94b8af2f191c09eb0d601762b1.svg" color="#111">
    <meta name="csrf-param" content="authenticity_token">
    <meta name="csrf-token" content="Vf8DNdRdf+i0k2cHQNfA0PZpj5eO76sdQLJRmjPhy0hEXN6qyH+Eq5j1wn7+Qwclt/DuYwDXf3V01Icc2lstoQ==">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <style id="_goober">
        @keyframes go2264125279 {
            from {
                transform: scale(0) rotate(45deg);
                opacity: 0;
            }

            to {
                transform: scale(1) rotate(45deg);
                opacity: 1;
            }
        }

        @keyframes go3020080000 {
            from {
                transform: scale(0);
                opacity: 0;
            }

            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes go463499852 {
            from {
                transform: scale(0) rotate(90deg);
                opacity: 0;
            }

            to {
                transform: scale(1) rotate(90deg);
                opacity: 1;
            }
        }

        @keyframes go1268368563 {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        @keyframes go1310225428 {
            from {
                transform: scale(0) rotate(45deg);
                opacity: 0;
            }

            to {
                transform: scale(1) rotate(45deg);
                opacity: 1;
            }
        }

        @keyframes go651618207 {
            0% {
                height: 0;
                width: 0;
                opacity: 0;
            }

            40% {
                height: 0;
                width: 6px;
                opacity: 1;
            }

            100% {
                opacity: 1;
                height: 10px;
            }
        }

        @keyframes go901347462 {
            from {
                transform: scale(0.6);
                opacity: 0.4;
            }

            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        .go4109123758 {
            z-index: 9999;
        }

        .go4109123758>* {
            pointer-events: auto;
        }
    </style>
    <script src="https://srv.buysellads.com/ads/CWYDP2QE.json?callback=customJSONPCallback"></script>
</head>

<body class="room-editor editor state-htmlOn-cssOn-jsOn twilight   layout-top  logged-out">
    <header class="main-header" id="main-header">
        <div class="EditorHeader-module_root-cpo0V header-wrap HeaderWrap-module_root-PsKVw">
            <div class="Logo-module_root-ojP5q" data-component="Logo" data-test-id="logo"><a href="/" class="Logo-module_small-T4UEU"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z"></path>
                    </svg><span class="ScreenReaderText-module_root-jASUi">CodePen Home</span></a><a href="/" class="Logo-module_large-J2pKy"><svg fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" viewBox="0 0 138 26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
                    </svg><span class="ScreenReaderText-module_root-jASUi">CodePen Home</span></a></div>
            <div class="ItemTitle_root-BLXtW" data-test-id="item-title-area">
                <div class="ItemTitle_text-t2tKF" data-view="pen">
                    <h1 class="ItemTitle_title-skUR3" id="item-title"><a href="https://codepen.io/amdsouza92/pen/xdooWa" class="ItemTitle_titleLink-dPGjg" id="editable-title-span" title="JavaScript Drum Kit">JavaScript Drum Kit</a></h1>
                    <div class="ItemTitle_by-typsS"><a class="ItemTitle_ownerLink-L8qgY" href="/amdsouza92">Arun Michael Dsouza </a><button data-test="follow-button" data-following="false" title="Follow Arun Michael Dsouza" class="Button-module_root-xw+9D FollowButton-module_root-Q92Q+ ItemTitle_followButton-2+Mhs follow-user-button" data-size="mini" data-has-icon="true" data-color="green"><svg viewBox="0 0 132.4 132.4" xmlns="http://www.w3.org/2000/svg" class="FollowButton-module_statusIcon-U62Ef">
                                <path d="M75.4 123.1V75.4h47.7c5.1 0 9.2-4.1 9.3-9.3s-4.2-9.3-9.3-9.3H75.4V9.3c0-5.1-4.1-9.2-9.3-9.3-5.2-.1-9.3 4.2-9.3 9.3V57H9.1C4 57-.1 61.1-.2 66.3c-.1 5.2 4.2 9.3 9.3 9.3h47.7v47.7c0 5.1 4.1 9.2 9.3 9.3s9.3-4.4 9.3-9.5z"></path>
                            </svg> Follow</button></div>
                </div>
            </div><button title="Love" data-anon="true" data-view="pen" data-item="Pen" data-hashid="xdooWa" class="Button-module_root-xw+9D EditorHeaderPen-module_loveButton-7F910 loves heart-button"><svg viewBox="-2 0 105 92" xmlns="http://www.w3.org/2000/svg" class="LoveButtonIcon-module_root-3tVfn">
                    <path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z"></path>
                </svg><span class="ScreenReaderText-module_root-jASUi">Love</span></button>
            <div class="EditorHeaderPen-module_navigationWrap-4Dq5Z"><button aria-expanded="false" data-open="false" class="Button-module_root-xw+9D EditorHeaderPen-module_toggleActionsButton-E+eAn MobileNavButton-module_root-EApZk" data-size="mini" style="height: 35px; padding: 1px 3px 3px 7px; border-radius: 4px; margin-left: 8px; margin-right: 8px;">
                    <div class="MobileNavButton-module_icon-uF4CA" aria-hidden="true"><span></span><svg viewBox="-122.9 121.1 105.9 61.9" xmlns="http://www.w3.org/2000/svg">
                            <path d="m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5-4-2.7-6.5-2.7-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path>
                        </svg></div><span class="ScreenReaderText-module_root-jASUi">Pen Editor Menu</span>
                </button>
                <div aria-hidden="false" class="EditorHeaderPen-module_editorActions-76b6L" data-expanded="false"><button id="run" title="Com/Ctrl - Shift - 7 to Run" class="Button-module_root-xw+9D run" data-has-icon="true"><svg viewBox="0 0 20 20">
                            <path d="M10.66 1.91a.833.833 0 0 1 1.18 0l2.5 2.5a.833.833 0 0 1 0 1.18l-2.5 2.5a.833.833 0 1 1-1.18-1.18l1.078-1.077h-1.321C7.46 5.833 5 8.293 5 11.25c0 2.956 2.46 5.417 5.417 5.417 2.956 0 5.416-2.46 5.416-5.417a.833.833 0 1 1 1.667 0c0 3.877-3.207 7.083-7.083 7.083-3.877 0-7.084-3.206-7.084-7.083s3.207-7.083 7.084-7.083h1.321l-1.077-1.078a.833.833 0 0 1 0-1.178z"></path>
                        </svg>Run</button><button data-test-id="edit-settings" id="edit-settings" title="Pen Settings" class="Button-module_root-xw+9D" data-has-icon="true"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M87.687 45.077c-.313-2.433-.816-4.807-1.542-7.079l8.145-11.73-5.827-7.515-.094-.123-5.824-7.514-12.955 5.577c-2.041-1.265-4.192-2.362-6.459-3.219L59.42 0H40.586l-3.709 13.474c-2.27.857-4.421 1.955-6.463 3.222l-12.957-5.577-5.825 7.514-.097.124-5.822 7.517 8.146 11.731a39.832 39.832 0 0 0-1.544 7.079L0 52.032l2.08 9.375.033.15 2.08 9.375 14.001.761a39.157 39.157 0 0 0 4.4 5.668l-2.396 14.227 8.416 4.173.138.067L37.169 100l9.309-10.796c1.161.109 2.335.173 3.524.173s2.358-.074 3.52-.184l9.317 10.804 8.415-4.173.141-.066 8.413-4.172-2.396-14.228a39.06 39.06 0 0 0 4.4-5.672l14-.759 2.078-9.375.035-.154L100 52.025zM50.003 34.51c8.435 0 15.272 7.035 15.272 15.719 0 8.679-6.839 15.717-15.272 15.717-8.436 0-15.272-7.038-15.272-15.717 0-8.684 6.838-15.719 15.272-15.719z"></path>
                        </svg>Settings</button><span class="DropdownControlled-module_root-3ewM0 EditorHeaderViewSwitcher_root-kz6-q" data-direction="bottom left" data-open="false"><button id="view-switcher-button" data-test-id="view-switcher-button" title="Change View" aria-haspopup="menu" aria-expanded="false" aria-controls="oc-1724320011508" class="Button-module_root-xw+9D"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="EditorHeaderViewSwitcher_iconPen-jP26l">
                                <path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997z"></path>
                            </svg></button>
                        <div class="DropdownControlled-module_content-mxnG0" id="oc-1724320011508" role="menu" data-open="false" hidden="" data-direction="bottom left">
                            <div class="DropdownContent-module_root-rQ0al view-switcher EditorHeaderViewSwitcher_dropdown-Qhuhu">
                                <h3>Change View</h3>
                                <div class="ButtonGroup-module_root-RfSlH EditorHeaderViewSwitcher_switch-thcS- view-switcher-layout EditorHeaderViewSwitcherLayoutButtons-module_buttonGroup-SZ+7j" id="view-switcher-buttons"><button id="left-layout" data-layout-type="left" class="Button-module_root-xw+9D"><span class="ScreenReaderText-module_root-jASUi">Use Left Layout</span><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="EditorHeaderViewSwitcherLayoutButtons-module_newPenLeftLayout-PhHzQ" width="20" height="20">
                                            <path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997z"></path>
                                        </svg></button><button id="top-layout" data-layout-type="top" class="Button-module_root-xw+9D"><span class="ScreenReaderText-module_root-jASUi">Use Top Layout</span><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                            <path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997z"></path>
                                        </svg></button><button id="right-layout" data-layout-type="right" class="Button-module_root-xw+9D"><span class="ScreenReaderText-module_root-jASUi">Use Right Layout</span><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="EditorHeaderViewSwitcherLayoutButtons-module_newPenRightLayout-X2VCi" width="20" height="20">
                                            <path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 0 1 6 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 0 1 0 5.997zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0 1 13 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 0 1 7 5.997zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0 1 20 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0 1 14 5.997z"></path>
                                        </svg></button></div>
                                <div class="EditorHeaderViewSwitcher_switch-thcS-">
                                    <nav class="EditorHeaderViewSwitcherLinks_linkList-b3AAG"><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link pen-link active" href="/amdsouza92/pen/xdooWa" id="pen-link">Editor View<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/pen/<span data-href="https://blog.codepen.io/documentation/views/editor-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13">
                                                        <path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path>
                                                    </svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link details-link" href="/amdsouza92/details/xdooWa" id="details-link">Details View<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/details/<span data-href="https://blog.codepen.io/documentation/views/details-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13">
                                                        <path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path>
                                                    </svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link full-link" href="/amdsouza92/full/xdooWa" id="full-link">Full Page View<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/full/<span data-href="https://blog.codepen.io/documentation/views/full-page-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13">
                                                        <path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path>
                                                    </svg></span></span></a></nav>
                                </div>
                            </div>
                        </div>
                    </span>
                    <div class="view-switcher EditorHeaderViewSwitcher_mobile-TM24l">
                        <div class="EditorHeaderViewSwitcher_switch-thcS-">
                            <nav class="EditorHeaderViewSwitcherLinks_linkList-b3AAG"><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link pen-link active" href="/amdsouza92/pen/xdooWa" id="pen-link">Editor View<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/pen/<span data-href="https://blog.codepen.io/documentation/views/editor-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13">
                                                <path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path>
                                            </svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link details-link" href="/amdsouza92/details/xdooWa" id="details-link">Details View<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/details/<span data-href="https://blog.codepen.io/documentation/views/details-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13">
                                                <path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path>
                                            </svg></span></span></a><a class="EditorHeaderViewSwitcherLink_link-wYdA5 editor-link full-link" href="/amdsouza92/full/xdooWa" id="full-link">Full Page View<span class="EditorHeaderViewSwitcherLink_linkMeta-rzMQe">/full/<span data-href="https://blog.codepen.io/documentation/views/full-page-view/" class="EditorHeaderViewSwitcherLink_learnMore-iaxpx"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="13" height="13">
                                                <path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 0 1-4.101 3.751 91.479 91.479 0 0 0-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 0 0-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 0 1 9.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path>
                                            </svg></span></span></a></nav>
                        </div>
                    </div>
                </div>
            </div><a data-test-id="signup-button" href="/accounts/signup/user/free" class="Button-module_root-xw+9D LogInAndSignUpButtons-module_signupButton-hxnR0" data-color="green">Sign Up</a><a data-test-id="login-button" href="/login" class="Button-module_root-xw+9D LogInAndSignUpButtons-module_loginButton-XjHhF">Log In</a>
        </div>
    </header>
    <div class="item-settings-modal tab-layout tab-layout-modal pen  item-settings-modal-half" id="item-settings-modal">
        <header class="item-settings-modal-header tab-layout-header">
            <h2 class="item-settings-modal-header-title tab-layout-header-title">Pen Settings</h2>
            <div class="save-and-close-wrap">
                <button type="button" class="button mini-button button-no-right-margin close" id="top-close-settings">
                    <svg class="icon-x" viewBox="0 0 100 100">
                        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                    </svg>
                </button>
            </div>
        </header>
        <div class="tabs tab-layout-wrapper settings-tabs-wrapper">
            <nav id="settings-tabs" class="no-mobile-nav tab-layout-tabs item-settings-tabs  notranslate" translate="no">
                <div class="tab-layout-tab-group">
                    <a id="settings-html-tab" href="#settings-html" class="settings-tab-html active" data-type="html">

                </div>
                <div class="tab-layout-tab-group">
                    <a id="settings-behavior-tab" href="#settings-behavior" class="settings-tab-behavior" data-type="behavior">
                        Behavior
                    </a>
                    <a id="settings-editor-tab" href="#settings-editor" class="settings-tab-editor" data-type="editor">
                        Editor
                    </a>
                </div>
            </nav>
            <div class="settings tab-page active" id="settings-html">
                <h3 aria-label="HTML">HTML</h3>
                <div class="settings-row top-label-form normal-labels">
                    <h4>
                        <label for="html-preprocessor">
                            HTML Preprocessor
                        </label>
                    </h4>
                    <div class="help-flyout-link">
                        <svg class="icon-help" viewBox="0 0 100 100">
                            <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
                        </svg>
                        <div class="help-flyout help-flyout-reverse">
                            <h5>About HTML Preprocessors</h5>
                            <svg class="icon-x" viewBox="0 0 100 100">
                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                            </svg>
                            <p>HTML preprocessors can make writing HTML more powerful or convenient. For instance, Markdown is designed to be easier to write and read for text documents and you could write a loop in Pug.</p>
                            <p><a href="https://blog.codepen.io/documentation/editor/using-html-preprocessors/" target="_blank" rel="noopener">Learn more</a> · <a href="/versions/" target="_blank" rel="noopener">Versions</a></p>
                        </div>
                    </div>
                    <div class="custom-select-wrap">
                        <select name="html-preprocessor" id="html-preprocessor" class="fullwidth">
                            <option value="none">None</option>
                            <option value="haml">Haml</option>
                            <option value="markdown">Markdown</option>
                            <option value="slim">Slim</option>
                            <option value="pug">Pug</option>
                        </select>
                        <div class="select-icon">
                            <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
                                <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
                            </svg>
                            <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
                                <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="settings-row top-label-form normal-labels">
                    <h4>
                        <label for="html-classes">Add Class(es) to &lt;html&gt;</label>
                    </h4>
                    <div class="help-flyout-link">
                        <svg class="icon-help" viewBox="0 0 100 100">
                            <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
                        </svg>
                        <div class="help-flyout help-flyout-reverse">
                            <h5>Adding Classes</h5>
                            <svg class="icon-x" viewBox="0 0 100 100">
                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                            </svg>
                            <p>In CodePen, whatever you write in the HTML editor is what goes within the <code>&lt;body&gt;</code> tags in <a target="_blank" rel="noopener" href="https://blog.codepen.io/documentation/features/preview-template/">a basic HTML5 template</a>. So you don't have access to higher-up elements like the <code>&lt;html&gt;</code> tag. If you want to add classes there that can affect the whole document, this is the place to do it.</p>
                        </div>
                    </div>
                    <input type="text" id="html-classes" name="html-classes" class="fullwidth" placeholder="e.g. single post post-1234" maxlength="250">
                </div>
                <div class="settings-row top-label-form normal-labels">
                    <h4>
                        <label for="head-content">Stuff for &lt;head&gt;</label>
                    </h4>
                    <div class="help-flyout-link">
                        <svg class="icon-help" viewBox="0 0 100 100">
                            <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
                        </svg>
                        <div class="help-flyout help-flyout-reverse">
                            <h5>About the &lt;head&gt;</h5>
                            <svg class="icon-x" viewBox="0 0 100 100">
                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                            </svg>
                            <p>In CodePen, whatever you write in the HTML editor is what goes within the <code>&lt;body&gt;</code> tags in <a target="_blank" rel="noopener" href="https://blog.codepen.io/documentation/features/preview-template/">a basic HTML5 template</a>. If you need things in the <code>&lt;head&gt;</code> of the document, put that code here.</p>
                        </div>
                    </div>
                    <div class="head-content-wrapper">
                        <textarea id="head-content" name="head-content" class="fullwidth is-code head-content notranslate" translate="no" placeholder="e.g. <meta>, <link>, <script>"></textarea>
                        <span class="insecure-resource-tooltip resource-problem-tooltip">
                            <div class="help-flyout-link">
                                <span class="icon-help">!</span>
                                <div class="help-flyout help-flyout-reverse">
                                    <svg class="icon-x" viewBox="0 0 100 100">
                                        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                    </svg>
                                    <h5>Insecure Resource</h5>
                                    <p>The resource you are linking to is using the 'http' protocol, which may not work when the browser is using https.</p>
                                </div>
                            </div>
                        </span>
                    </div>
                    <button class="button mini-button button-medium" id="meta-tag-insert">↑ Insert the most common viewport meta tag</button>
                </div>
            </div>
            <div class="settings tab-page" id="settings-css">
                <h3 aria-label="CSS">CSS</h3>
                <div class="settings-row top-label-form normal-labels">
                    <h4>
                        <label for="css-preprocessor">
                            CSS Preprocessor
                        </label>
                    </h4>
                    <div class="help-flyout-link">
                        <svg class="icon-help" viewBox="0 0 100 100">
                            <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
                        </svg>
                        <div class="help-flyout help-flyout-reverse">
                            <h5>About CSS Preprocessors</h5>
                            <svg class="icon-x" viewBox="0 0 100 100">
                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                            </svg>
                            <p>CSS preprocessors help make authoring CSS easier. All of them offer things like variables and mixins to provide convenient abstractions.</p>
                            <p><a href="https://blog.codepen.io/documentation/editor/using-css-preprocessors/" target="_blank">Learn more</a> · <a href="/versions/" target="_blank">Versions</a></p>
                        </div>
                    </div>
                    <div class="custom-select-wrap">
                        <select name="css-preprocessor" id="css-preprocessor" class="fullwidth css-preprocessor">
                            <option value="none">None</option>
                            <option value="less">Less</option>
                            <option value="scss">SCSS</option>
                            <option value="sass">Sass</option>
                            <option value="stylus">Stylus</option>
                            <option value="postcss">PostCSS</option>
                        </select>
                        <div class="select-icon">
                            <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
                                <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
                            </svg>
                            <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
                                <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
                            </svg>
                        </div>
                    </div>
                    <div id="need-an-addon" class="align-right hide">
                        <a id="css-need-an-addon-button" href="#0" class="button button-medium mini-button need-an-addon-button">
                            Need an add-on?
                        </a>
                    </div>
                    <div class="add-ons add-ons-scss hide" id="add-ons"></div>
                </div>
                <div id="startercss-options-form" class="settings-row top-label-form">
                    <h4>
                        CSS Base
                    </h4>
                    <div class="help-flyout-link">
                        <svg class="icon-help" viewBox="0 0 100 100">
                            <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
                        </svg>
                        <div class="help-flyout help-flyout-reverse">
                            <h5>About CSS Base</h5>
                            <svg class="icon-x" viewBox="0 0 100 100">
                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                            </svg>
                            <p>It's a common practice to apply CSS to a page that styles elements such that they are consistent across all browsers. We offer two of the most popular choices: <a href="http://necolas.github.io/normalize.css/" target="_blank" rel="noopener">normalize.css</a> and a <a href="http://meyerweb.com/eric/tools/css/reset/" target="_blank" rel="noopener">reset</a>. Or, choose <b>Neither</b> and nothing will be applied.</p>
                        </div>
                    </div>
                    <ul class="radio-list">
                        <li>
                            <input type="radio" id="startercss-normalize" name="startercss" checked="" value="normalize">
                            <label for="startercss-normalize" class="small-inline">Normalize</label>
                        </li>
                        <li>
                            <input type="radio" id="startercss-reset" name="startercss" checked="" value="reset">
                            <label for="startercss-reset" class="small-inline">Reset</label>
                        </li>
                        <li>
                            <input type="radio" id="startercss-neither" name="startercss" checked="" value="neither">
                            <label for="startercss-neither" class="small-inline">Neither</label>
                        </li>
                    </ul>
                </div>
                <div id="prefix-options-form" class="settings-row top-label-form">
                    <h4>
                        Vendor Prefixing
                    </h4>
                    <div class="help-flyout-link">
                        <svg class="icon-help" viewBox="0 0 100 100">
                            <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
                        </svg>
                        <div class="help-flyout help-flyout-reverse">
                            <h5>About Vendor Prefixing</h5>
                            <svg class="icon-x" viewBox="0 0 100 100">
                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                            </svg>
                            <p>To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance <code>-webkit-</code> or <code>-moz-</code>.</p>
                            <p>We offer two popular choices: <a href="https://github.com/postcss/autoprefixer" target="blank" rel="noopener">Autoprefixer</a> (which processes your CSS server-side) and <a href="http://leaverou.github.io/prefixfree/" target="_blank" rel="noopener">-prefix-free</a> (which applies prefixes via a script, client-side).</p>
                        </div>
                    </div>
                    <ul class="radio-list">
                        <li>
                            <input type="radio" id="prefix-autoprefixer" name="prefix" value="autoprefixer">
                            <label for="prefix-autoprefixer" class="small-inline">Autoprefixer</label>
                        </li>
                        <li>
                            <input type="radio" id="prefix-prefixfree" name="prefix" value="prefixfree">
                            <label for="prefix-prefixfree" class="small-inline">Prefixfree</label>
                        </li>
                        <li>
                            <input type="radio" id="prefix-neither" name="prefix" value="neither">
                            <label for="prefix-neither" class="small-inline">Neither</label>
                        </li>
                    </ul>
                </div>
                <div id="external-css-resources" class="settings-row">
                    <h4>
                        Add External Stylesheets/Pens
                    </h4>
                    <p>Any URLs added here will be added as <code>&lt;link&gt;</code>s in order, and before the CSS in the editor. You can use the CSS from another Pen by using its URL and the proper <a href="https://blog.codepen.io/documentation/url-extensions/">URL extension</a>.</p>
                    <div class="resource-search-bar">
                        <svg class="icon icon-mag" viewBox="0 0 56.7 56.7">
                            <path d="M42.8,7.3C33-2.4,17.1-2.4,7.3,7.3c-9.8,9.8-9.8,25.7,0,35.5c8.7,8.7,22.2,9.7,32,2.9l9.6,9.6c1.8,1.8,4.7,1.8,6.4,0
	c1.8-1.8,1.8-4.7,0-6.4l-9.6-9.6C52.5,29.5,51.5,16,42.8,7.3z M36.6,36.6c-6.4,6.4-16.7,6.4-23.1,0s-6.4-16.7,0-23.1
	c6.4-6.4,16.7-6.4,23.1,0C43,19.9,43,30.3,36.6,36.6z"></path>
                        </svg>
                        <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input id="external-css-search" type="text" value="" placeholder="Search for resources (Bootstrap, Foundation, Animate.css...)" class="aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="both" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top;">
                            <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Lato, &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Tahoma, sans-serif; font-size: 15px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;">
                                <div class="aa-dataset-1"></div>
                                <div class="aa-dataset-2"></div>
                            </span>
                        </span>
                    </div>
                    <div class="algolia-shoutout">
                        <a href="https://www.algolia.com/?utm_source=react-instantsearch&amp;utm_medium=website&amp;utm_content=codepen.io&amp;utm_campaign=poweredby" target="_blank">
                            Powered by <img alt="Algolia" src="https://cpwebassets.codepen.io/assets/settings/algolia-9e1c0c887f4db420704b2a79926864019ef156bcecc9d5774a7e4eaa731fc5b5.svg">
                        </a>
                    </div>
                    <div class="help-flyout-link">
                        <svg class="icon-help" viewBox="0 0 100 100">
                            <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
                        </svg>
                        <div class="help-flyout help-flyout-reverse">
                            <h5>About External Resources</h5>
                            <svg class="icon-x" viewBox="0 0 100 100">
                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                            </svg>
                            <p>You can apply CSS to your Pen from any stylesheet on the web. Just put a URL to it here and we'll apply it, in the order you have them, before the CSS in the Pen itself.</p>
                            <p>You can also link to another Pen here (use the <code>.css</code> <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a>) and we'll pull the CSS from that Pen and include it. If it's using a <em>matching</em> preprocessor, use the appropriate URL Extension and we'll combine the code before preprocessing, so you can use the linked Pen as a true dependency.</p>
                            <p><a href="https://blog.codepen.io/documentation/editor/adding-external-resources/" target="_blank" rel="noopener">Learn more</a></p>
                        </div>
                    </div>
                    <div id="css-external-resources" class="external-resource-wrapper ui-sortable">
                        <div data-view-id="01752104" class="external-resource-url-row">

                            <span class="move-external-url">
                                <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
                                    <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"></path>
                                </svg>
                            </span>

                            <input id="external-resource-input-01752104" class="fullwidth css-resource external-resource" type="text" pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&amp;%@!\-\/]))?$" name="external-css" placeholder="https://yourwebsite.com/style.css" value="" data-view-id="01752104">

                            <span class="insecure-resource-tooltip resource-problem-tooltip">
                                <div class="help-flyout-link">
                                    <span class="icon-help">?</span>
                                    <div class="help-flyout help-flyout-reverse">
                                        <svg class="icon-x" viewBox="0 0 100 100">
                                            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                        </svg>
                                        <h5>Insecure Resource</h5>
                                        <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
                                    </div>
                                </div>
                            </span>

                            <span class="not-using-url-extension-tooltip resource-problem-tooltip">
                                <div class="help-flyout-link">
                                    <span class="icon-help">?</span>
                                    <div class="help-flyout help-flyout-reverse">
                                        <svg class="icon-x" viewBox="0 0 100 100">
                                            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                        </svg>
                                        <h5>URL Extension Required</h5>
                                        <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
                                    </div>
                                </div>
                            </span>

                            <div class="resource-actions">
                                <span class="remove-external-url external-url-option" data-view-id="01752104">
                                    <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
                                        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                    </svg>
                                </span>

                                <a id="external-resource-input-view-link-01752104" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="01752104" href="">
                                    <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
                                        <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"></path>
                                    </svg>
                                </a>
                            </div>

                        </div>
                        <div data-view-id="52001271" class="external-resource-url-row">

                            <span class="move-external-url">
                                <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
                                    <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"></path>
                                </svg>
                            </span>

                            <input id="external-resource-input-52001271" class="fullwidth css-resource external-resource" type="text" pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&amp;%@!\-\/]))?$" name="external-css" placeholder="https://codepen.io/username/pen/aBcDef.css" value="" data-view-id="52001271">

                            <span class="insecure-resource-tooltip resource-problem-tooltip">
                                <div class="help-flyout-link">
                                    <span class="icon-help">?</span>
                                    <div class="help-flyout help-flyout-reverse">
                                        <svg class="icon-x" viewBox="0 0 100 100">
                                            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                        </svg>
                                        <h5>Insecure Resource</h5>
                                        <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
                                    </div>
                                </div>
                            </span>

                            <span class="not-using-url-extension-tooltip resource-problem-tooltip">
                                <div class="help-flyout-link">
                                    <span class="icon-help">?</span>
                                    <div class="help-flyout help-flyout-reverse">
                                        <svg class="icon-x" viewBox="0 0 100 100">
                                            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                        </svg>
                                        <h5>URL Extension Required</h5>
                                        <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
                                    </div>
                                </div>
                            </span>

                            <div class="resource-actions">
                                <span class="remove-external-url external-url-option" data-view-id="52001271">
                                    <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
                                        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                    </svg>
                                </span>

                                <a id="external-resource-input-view-link-52001271" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="52001271" href="">
                                    <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
                                        <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"></path>
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                    <script id="css-external-resources-template" nonce="" type="text/template">
                        <div data-view-id="<%= view_id %>" class="external-resource-url-row <%= insecure_resource %>">

    <span class="move-external-url">
      <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
        <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"/>
      </svg>
    </span>

    <input
      id="external-resource-input-<%= view_id %>"
      class="fullwidth css-resource external-resource"
      type="text"
      pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$"
      name="external-css"
      placeholder="<%= placeholder %>"
      value="<%= url %>"
      data-view-id="<%= view_id %>">

    <span class="insecure-resource-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
          </svg>
          <h5>Insecure Resource</h5>
          <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
        </div>
      </div>
    </span>

    <span class="not-using-url-extension-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
          </svg>
          <h5>URL Extension Required</h5>
          <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
        </div>
      </div>
    </span>

    <div class="resource-actions">
      <span class="remove-external-url external-url-option" data-view-id="<%= view_id %>">
        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
          <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
        </svg>
      </span>

      <a id="external-resource-input-view-link-<%= view_id %>" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="<%= view_id %>" href="<%= url %>">
        <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
          <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"/>
        </svg>
      </a>
    </div>

  </div>
</script>
                    <div class="external-resource-actions group">
                        <span id="add-css-resource" class="button mini-button button-medium add-resource" data-type="css">
                            <span data-type="css">+ add another resource</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="settings tab-page" id="settings-js">
                <div class="item-settings-javascript normal-labels">
                    <h3>
                        JavaScript
                    </h3>
                    <div class="item-settings-javascript-preprocessor settings-row">
                        <h4>
                            <label for="js-preprocessor">
                                JavaScript Preprocessor
                            </label>
                        </h4>
                        <div class="help-flyout-link">
                            <svg class="icon-help" viewBox="0 0 100 100" width="14" height="14">
                                <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
                            </svg>
                            <div class="help-flyout help-flyout-reverse">
                                <h5>About JavaScript Preprocessors</h5>
                                <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
                                    <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                </svg>
                                <p>JavaScript preprocessors can help make authoring JavaScript easier and more convenient.</p>
                                <p><a href="https://blog.codepen.io/documentation/editor/using-js-preprocessors/" target="_blank" rel="noopener">Learn more</a> · <a href="/versions/" target="_blank">Versions</a></p>
                            </div>
                        </div>
                        <div class="custom-select-wrap">
                            <select name="js-preprocessor" id="js-preprocessor" class="fullwidth">
                                <option value="none">None</option>
                                <option value="babel">Babel</option>
                                <option value="typescript">TypeScript</option>
                                <option value="coffeescript">CoffeeScript</option>
                                <option value="livescript">LiveScript</option>
                            </select>
                            <div class="select-icon">
                                <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
                                    <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
                                </svg>
                                <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
                                    <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
                                </svg>
                            </div>
                        </div>
                        <p><small>Babel includes JSX processing.</small></p>
                    </div>
                    <div id="external-js-resources" class="item-settings-javascript-external settings-row external-js-resources top-label-form">
                        <h4>
                            Add External Scripts/Pens
                        </h4>
                        <p>Any URL's added here will be added as <code>&lt;script&gt;</code>s in order, and run <em>before</em> the JavaScript in the editor. You can use the URL of any other Pen and it will include the JavaScript from that Pen.</p>
                        <div class="resource-search-bar">
                            <svg viewBox="0 0 56.7 56.7" class="icon icon-mag" width="18" height="18">
                                <path d="M42.8,7.3C33-2.4,17.1-2.4,7.3,7.3c-9.8,9.8-9.8,25.7,0,35.5c8.7,8.7,22.2,9.7,32,2.9l9.6,9.6c1.8,1.8,4.7,1.8,6.4,0
	c1.8-1.8,1.8-4.7,0-6.4l-9.6-9.6C52.5,29.5,51.5,16,42.8,7.3z M36.6,36.6c-6.4,6.4-16.7,6.4-23.1,0s-6.4-16.7,0-23.1
	c6.4-6.4,16.7-6.4,23.1,0C43,19.9,43,30.3,36.6,36.6z"></path>
                            </svg>
                            <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input id="external-js-search" type="text" value="" placeholder="Search CDNjs (jQuery, Lodash, React, Angular, Vue.js, Ember...)" class="aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="both" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-3" dir="auto" style="position: relative; vertical-align: top;">
                                <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Lato, &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Tahoma, sans-serif; font-size: 15px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-3" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;">
                                    <div class="aa-dataset-4"></div>
                                    <div class="aa-dataset-5"></div>
                                </span>
                            </span>
                        </div>
                        <div class="algolia-shoutout">
                            <a href="https://www.algolia.com/?utm_source=react-instantsearch&amp;utm_medium=website&amp;utm_content=codepen.io&amp;utm_campaign=poweredby" target="_blank">
                                Powered by <img alt="Algolia" src="https://cpwebassets.codepen.io/assets/settings/algolia-9e1c0c887f4db420704b2a79926864019ef156bcecc9d5774a7e4eaa731fc5b5.svg">
                            </a>
                        </div>
                        <div class="help-flyout-link">
                            <svg class="icon-help" viewBox="0 0 100 100" width="14" height="14">
                                <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
                            </svg>
                            <div class="help-flyout help-flyout-reverse">
                                <h5>About External Resources</h5>
                                <svg class="icon-x" viewBox="0 0 100 100" height="12" width="12">
                                    <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                </svg>
                                <p>You can apply a script from anywhere on the web to your Pen. Just put a URL to it here and we'll add it, in the order you have them, before the JavaScript in the Pen itself.</p>
                                <p>If the script you link to has the file extension of a preprocessor, we'll attempt to process it before applying.</p>
                                <p>You can also link to another Pen here, and we'll pull the JavaScript from that Pen and include it. If it's using a matching preprocessor, we'll combine the code before preprocessing, so you can use the linked Pen as a true dependency.</p>
                                <p><a href="https://blog.codepen.io/documentation/adding-external-resources/" rel="noopener" target="_blank">Learn more</a></p>
                            </div>
                        </div>
                        <div id="js-external-resources" class="external-resource-wrapper ui-sortable">
                            <div data-view-id="40444725" class="external-resource-url-row">

                                <span class="move-external-url">
                                    <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
                                        <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"></path>
                                    </svg>
                                </span>

                                <input id="external-resource-input-40444725" class="fullwidth js-resource external-resource" type="text" pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&amp;%@!\-\/]))?$" name="external-js" placeholder="https://yourwebsite.com/script.js" value="" data-view-id="40444725">

                                <span class="insecure-resource-tooltip resource-problem-tooltip">
                                    <div class="help-flyout-link">
                                        <span class="icon-help">?</span>
                                        <div class="help-flyout help-flyout-reverse">
                                            <svg class="icon-x" viewBox="0 0 100 100">
                                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                            </svg>
                                            <h5>Insecure Resource</h5>
                                            <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
                                        </div>
                                    </div>
                                </span>

                                <span class="not-using-url-extension-tooltip resource-problem-tooltip">
                                    <div class="help-flyout-link">
                                        <span class="icon-help">?</span>
                                        <div class="help-flyout help-flyout-reverse">
                                            <svg class="icon-x" viewBox="0 0 100 100">
                                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                            </svg>
                                            <h5>URL Extension Required</h5>
                                            <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
                                        </div>
                                    </div>
                                </span>

                                <div class="resource-actions">
                                    <span class="remove-external-url external-url-option" data-view-id="40444725">
                                        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
                                            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                        </svg>
                                    </span>

                                    <a id="external-resource-input-view-link-40444725" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="40444725" href="">
                                        <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
                                            <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"></path>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                            <div data-view-id="41214251" class="external-resource-url-row">

                                <span class="move-external-url">
                                    <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
                                        <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"></path>
                                    </svg>
                                </span>

                                <input id="external-resource-input-41214251" class="fullwidth js-resource external-resource" type="text" pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&amp;%@!\-\/]))?$" name="external-js" placeholder="https://codepen.io/username/pen/aBcDef.css" value="" data-view-id="41214251">

                                <span class="insecure-resource-tooltip resource-problem-tooltip">
                                    <div class="help-flyout-link">
                                        <span class="icon-help">?</span>
                                        <div class="help-flyout help-flyout-reverse">
                                            <svg class="icon-x" viewBox="0 0 100 100">
                                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                            </svg>
                                            <h5>Insecure Resource</h5>
                                            <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
                                        </div>
                                    </div>
                                </span>

                                <span class="not-using-url-extension-tooltip resource-problem-tooltip">
                                    <div class="help-flyout-link">
                                        <span class="icon-help">?</span>
                                        <div class="help-flyout help-flyout-reverse">
                                            <svg class="icon-x" viewBox="0 0 100 100">
                                                <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                            </svg>
                                            <h5>URL Extension Required</h5>
                                            <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
                                        </div>
                                    </div>
                                </span>

                                <div class="resource-actions">
                                    <span class="remove-external-url external-url-option" data-view-id="41214251">
                                        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
                                            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                        </svg>
                                    </span>

                                    <a id="external-resource-input-view-link-41214251" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="41214251" href="">
                                        <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
                                            <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"></path>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <script id="js-external-resources-template" nonce="" type="text/template">
                            <div data-view-id="<%= view_id %>" class="external-resource-url-row <%= insecure_resource %>">

    <span class="move-external-url">
      <svg viewBox="0 0 17 20" class="icon-drag-handle" width="20" height="17">
        <path d="m1.5 3a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3z"/>
      </svg>
    </span>

    <input
      id="external-resource-input-<%= view_id %>"
      class="fullwidth js-resource external-resource"
      type="text"
      pattern="^((ftp|http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$"
      name="external-js"
      placeholder="<%= placeholder %>"
      value="<%= url %>"
      data-view-id="<%= view_id %>">

    <span class="insecure-resource-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
          </svg>
          <h5>Insecure Resource</h5>
          <p>You are linking to a resource using the non-secure http:// protocol, which may not work when the browser is using https:// like CodePen enforces.</p>
        </div>
      </div>
    </span>

    <span class="not-using-url-extension-tooltip resource-problem-tooltip">
      <div class="help-flyout-link">
        <span class="icon-help">?</span>
        <div class="help-flyout help-flyout-reverse">
          <svg class="icon-x" viewBox="0 0 100 100">
            <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
          </svg>
          <h5>URL Extension Required</h5>
          <p>When linking another Pen as a resource, make sure you use a <a href="https://blog.codepen.io/documentation/url-extensions/">URL Extension</a> of the type of code you want to link to. Either <code>.css</code>, <code>.js</code>, or the extension of a matching code processor.</p>
        </div>
      </div>
    </span>

    <div class="resource-actions">
      <span class="remove-external-url external-url-option" data-view-id="<%= view_id %>">
        <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
          <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"/>
        </svg>
      </span>

      <a id="external-resource-input-view-link-<%= view_id %>" class="open-external-url external-url-option" target="_blank" rel="noopener" data-view-id="<%= view_id %>" href="<%= url %>">
        <svg viewBox="0 0 30.5 16.5" id="icon-eye" width="14" height="14">
          <path d="M15.3,0C8.9,0,3.3,3.3,0,8.3c3.3,5,8.9,8.3,15.3,8.3c6.4,0,12-3.3,15.3-8.3C27.3,3.3,21.7,0,15.3,0z M15.3,14.5 c-3.4,0-6.2-2.8-6.2-6.2C9,4.8,11.8,2,15.3,2c3.4,0,6.2,2.8,6.2,6.2C21.5,11.7,18.7,14.5,15.3,14.5z"/>
        </svg>
      </a>
    </div>

  </div>
</script>
                        <div class="external-resource-actions group">
                            <span id="add-js-resource" class="button button-medium mini-button add-resource" data-type="js">
                                <span data-type="js">+ add another resource</span>
                            </span>
                        </div>
                    </div>
                    <h3 aria-label="Packages">Packages</h3>
                    <div class="item-settings-packages settings-row" id="item-settings-packages">
                        <h4>Add Packages</h4>
                        <p>Search for and use JavaScript packages from <a href="https://www.npmjs.com/" target="blank" rel="noopener">npm</a> here. By selecting a package, an <code>import</code> statement will be added to the top of the JavaScript editor for this package.</p>
                        <div class="resource-search-bar">
                            <svg viewBox="0 0 56.7 56.7" class="icon icon-mag" width="18" height="18">
                                <path d="M42.8,7.3C33-2.4,17.1-2.4,7.3,7.3c-9.8,9.8-9.8,25.7,0,35.5c8.7,8.7,22.2,9.7,32,2.9l9.6,9.6c1.8,1.8,4.7,1.8,6.4,0
c1.8-1.8,1.8-4.7,0-6.4l-9.6-9.6C52.5,29.5,51.5,16,42.8,7.3z M36.6,36.6c-6.4,6.4-16.7,6.4-23.1,0s-6.4-16.7,0-23.1
c6.4-6.4,16.7-6.4,23.1,0C43,19.9,43,30.3,36.6,36.6z"></path>
                            </svg>
                            <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input id="packages-search" type="text" value="" placeholder="Search npm and add a package..." class="aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="both" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-6" dir="auto" style="position: relative; vertical-align: top;">
                                <pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Lato, &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Tahoma, sans-serif; font-size: 15px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-6" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;">
                                    <div class="aa-dataset-7"></div>
                                </span>
                            </span>
                        </div>
                        <div class="algolia-shoutout">
                            <a href="https://www.algolia.com/?utm_source=react-instantsearch&amp;utm_medium=website&amp;utm_content=codepen.io&amp;utm_campaign=poweredby" target="_blank">
                                Powered by <img alt="Algolia" src="https://cpwebassets.codepen.io/assets/settings/algolia-9e1c0c887f4db420704b2a79926864019ef156bcecc9d5774a7e4eaa731fc5b5.svg">
                            </a>
                        </div>
                        <div class="help-flyout-link">
                            <svg class="icon-help" viewBox="0 0 100 100" width="14" height="14">
                                <path d="M75,0H25C11.19,0,0,11.193,0,25v50c0,13.802,11.19,25,25,25h50c13.811,0,25-11.198,25-25V25C100,11.193,88.811,0,75,0z
   M57.203,85.067H41.504V72.542h15.699V85.067L57.203,85.067z M73.357,42.041c-0.84,2.066-1.873,3.834-3.102,5.298
  c-1.235,1.474-2.604,2.718-4.101,3.751c-1.498,1.035-2.922,2.066-4.249,3.101c-1.333,1.034-1.553,2.214-2.596,3.547
  c-1.025,1.335-0.977,3.004-0.977,5.006v3.924H41.668v-4.623c0-2.864,1.366-5.265,2.27-7.202c0.896-1.935,2.255-3.581,3.459-4.947
  c1.196-1.367,2.62-2.556,3.955-3.557c1.327-0.993,2.637-1.993,3.776-2.995c1.123-1.001,2.083-2.1,2.783-3.304
  c0.7-1.197,1.043-2.694,0.977-4.5c0-3.06-0.74-5.33-2.245-6.795c-1.498-1.465-3.582-2.206-6.25-2.206c-1.8,0-3.337,0.351-4.639,1.05
  c-1.303,0.7-2.369,1.635-3.199,2.808c-0.837,1.163-1.448,3.593-1.847,5.156c-0.407,1.57-0.602,6.115-0.602,6.115H25.399
  c0.073-8.333,0.684-7.963,1.855-10.965c1.164-2.995,2.8-6.132,4.899-8.33c2.099-2.197,4.63-4.179,7.601-5.417
  c2.962-1.228,6.283-1.977,9.945-1.977c4.736,0,8.683,0.581,11.856,1.876c3.167,1.302,5.713,2.889,7.65,4.817
  c1.929,1.937,3.312,4.004,4.149,6.234c0.831,2.237,1.245,4.313,1.245,6.242C74.601,37.354,74.187,39.975,73.357,42.041z"></path>
                            </svg>
                            <div class="help-flyout help-flyout-reverse">
                                <h5>About Packages</h5>
                                <svg class="icon-x" viewBox="0 0 100 100" width="12" height="12">
                                    <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                </svg>
                                <p>Using packages here is powered by <a href="https://esm.sh/">esm.sh</a>, which makes packages from npm not only available on a CDN, but prepares them for native JavaScript ESM usage.</p>
                                <p>All packages are different, so refer to their docs for how they work.</p>
                                <p>If you're using React / ReactDOM, make sure to turn on Babel for the JSX processing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="settings tab-page" id="settings-behavior">
                <h3 aria-label="Pen Behavior">Behavior</h3>
                <div class="settings-row">
                    <h4>Auto Save</h4>
                    <div>
                        <p class="hint">If active, Pens will autosave every 30 seconds after being saved once.</p>
                        <div class="ios-toggle-mega-label-wrap">
                            <span class="ios-toggle ios-toggle-reverse">
                                <input type="checkbox" id="auto-save" name="auto-save" checked="">
                                <label for="auto-save"></label>
                                <label for="auto-save" class="ios-toggle-mega-label"></label>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="settings-row">
                    <h4>Auto-Updating Preview</h4>
                    <p class="hint">If enabled, the preview panel updates automatically as you code. If disabled, use the "Run" button to update.</p>
                    <div class="ios-toggle-mega-label-wrap">
                        <span class="ios-toggle ios-toggle-reverse">
                            <input type="checkbox" id="auto-run" name="auto-run" checked="">
                            <label for="auto-run"></label>
                            <label for="auto-run" class="ios-toggle-mega-label"></label>
                        </span>
                    </div>
                </div>
                <div class="settings-row">
                    <h4>Format on Save</h4>
                    <p class="hint">If enabled, your code will be formatted when you actively save your Pen. <strong><span class="inline-note">Note:</span> your code becomes un-folded during formatting.</strong></p>
                    <div class="ios-toggle-mega-label-wrap">
                        <span class="ios-toggle ios-toggle-reverse">
                            <input type="checkbox" id="format_on_save" name="format_on_save">
                            <label for="format_on_save"></label>
                            <label for="format_on_save" class="ios-toggle-mega-label"></label>
                        </span>
                    </div>
                </div>
            </div>
            <div class="settings tab-page" id="settings-editor">
                <h3 aria-label="Editor Settings">Editor Settings</h3>
                <div id="editor-settings-form" class="settings-row top-label-form">
                    <h4>
                        Code Indentation
                    </h4>
                    <ul class="radio-list">
                        <li>
                            <input type="radio" id="indent-with-spaces" name="indent-with" value="spaces" checked="">
                            <label for="indent-with-spaces" class="small-inline">Spaces</label>
                        </li>
                        <li>
                            <input type="radio" id="indent-with-tabs" name="indent-with" value="tabs">
                            <label for="indent-with-tabs" class="small-inline">Tabs</label>
                        </li>
                    </ul>
                </div>
                <div class="settings-row top-label-form normal-labels">
                    <h4>
                        <label for="tab-size">
                            Code Indent width
                        </label>
                    </h4>
                    <div class="custom-select-wrap">
                        <select id="tab-size" class="fullwidth" name="tab-size">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <div class="select-icon">
                            <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
                                <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
                            </svg>
                            <svg viewBox="-122.9 121.1 105.9 61.9" class="icon-arrow-down-mini">
                                <path d="M-63.2,180.3l43.5-43.5c1.7-1.7,2.7-4,2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.7l-37.2,37.2l-37.2-37.2
        c-1.7-1.7-4-2.7-6.5-2.7s-4.8,1-6.5,2.6c-1.9,1.8-2.8,4.2-2.8,6.6c0,2.3,0.9,4.6,2.6,6.5l0,0c11.4,11.5,41,41.2,43,43.3l0.2,0.2
        C-73.5,183.9-66.8,183.9-63.2,180.3z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="settings-row">
                    <h4>Want to change your Syntax Highlighting theme, Fonts and more?</h4>
                    <p>Visit <a href="/settings/editor" target="_blank">your global Editor Settings</a>.</p>
                </div>
            </div>
        </div>
        <footer>
            <div class="save-and-close-wrap">
                <input type="button" class="button button-small green button-no-right-margin close" value="Close" id="close-settings">
            </div>
        </footer>
    </div>
    <div class="page-wrap">
        <div class="boxes">
            <div class="mobile-editor-nav">
                <button id="html-toggle" class="selected"><span>HTML</span></button>
                <button id="css-toggle"><span>CSS</span></button>
                <button id="js-toggle"><span>JS</span></button>
                <button id="result-toggle" class="selected"><span>Result</span></button>
            </div>

            <div id="resizer" class="resizer">
                <span></span>
                <div id="width-readout" class="width-readout">982px</div>
                <div id="pen-ad"></div>
            </div>
            <section id="drawer" class="comments">
            </section>
            <div class="output-container">
                <div class="output-sizer">
                    <div id="result_div" class="result">
                        <iframe id="result" name="CodePen" title="CodePen Preview" src="https://codepen.io/amdsouza92/fullpage/xdooWa?anon=true&amp;view=" sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="accelerometer *; bluetooth *; camera *; encrypted-media *; display-capture *; geolocation *; gyroscope *; microphone *; midi *; clipboard-read *; clipboard-write *; web-share *; serial *; xr-spatial-tracking *" scrolling="auto" allowtransparency="true" allowpaymentrequest="true" allowfullscreen="true" class="result-iframe " loading="lazy">
                        </iframe>
                        <div id="editor-drag-cover" class="drag-cover"></div>
                    </div>
                    <div id="box-console" class="box box-console notranslate" translate="no">
                        <div class="editor-resizer editor-resizer-console" title="Drag to resize. Double-click to expand."></div>
                        <div class="powers">
                            <div class="powers-drag-handle" title="Drag to resize. Double-click to expand."></div>
                            <div class="editor-actions-left">
                                <h2 class="box-title"><span class="box-title-name">Console</span></h2>
                            </div>
                            <div class="editor-actions-right">
                                <button class="button button-medium mini-button console-clear-button" title="Clear">
                                    Clear
                                </button>
                                <button class="button button-medium mini-button close-editor-button" data-type="console" title="Close">
                                    <svg class="icon-x" viewBox="0 0 100 100">
                                        <path d="M96.8 83.7L63.1 50l33.7-33.7c3.6-3.6 3.6-9.4 0-13.1s-9.5-3.6-13.1 0L50 36.9 16.3 3.2C12.7-.4 6.9-.4 3.2 3.2s-3.6 9.5 0 13.1L36.9 50 3.2 83.7c-3.6 3.6-3.6 9.4 0 13.1s9.5 3.6 13.1 0L50 63.1l33.7 33.7c3.6 3.6 9.4 3.6 13.1 0s3.6-9.5 0-13.1z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="console-wrap">
                            <div class="console-entries short-no-scroll"></div>
                            <div class="console-command-line">
                                <span class="console-arrow forwards"></span>
                                <textarea class="console-command-line-input auto-expand" rows="1" data-min-rows="1"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="asset-bin-goes-here"></div>
    <footer id="react-pen-footer" class="site-footer editor-footer">
        <div class="footer-left">
            <div class="footer-actions-menu"><button id="footer-button" aria-expanded="false" class="Button-module_root-xw+9D toggle-footer-menu-button"><svg viewBox="-122.9 121.1 105.9 61.9" xmlns="http://www.w3.org/2000/svg">
                        <path d="m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5-4-2.7-6.5-2.7-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path>
                    </svg></button><select name="zoom-choice" data-placeholder="Zoom Scale..." class="footer-button button mini-button zoom-select">
                    <option value="1.0" class="option-green" selected="">1.0×</option>
                    <option value="0.5" class="option-green">0.5×</option>
                    <option value="0.25" class="option-green">0.25×</option>
                </select></div>
        </div>
        <div class="footer-right"><span class="PenEditorFooterStatus_editorState-WVwoB" data-state="EMPTY"><span class="PenEditorFooterStatus_text-5fDLt"></span><svg></svg></span><button data-test-id="fork-button" title="Fork this Pen" class="Button-module_root-xw+9D" data-size="mini" data-has-icon="true"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M84.339 62.504a15.805 15.805 0 0 0-11.313 4.721 40.187 40.187 0 0 1-1.578-1.572c-6.965-7.211-14.451-19.189-22.311-29.678-7.977-10.209-16.196-20.413-29.012-20.906H0v14.37h20.126c2.555-.111 6.556 1.993 11.208 6.914 6.961 7.197 14.454 19.171 22.315 29.662 4.822 6.164 9.759 12.293 15.741 16.289 1.99 6.191 7.93 10.688 14.949 10.688 8.648 0 15.661-6.824 15.661-15.244s-7.013-15.244-15.661-15.244zM51.541 29.438h18.986c2.637 4.795 7.831 8.059 13.811 8.059 8.648 0 15.661-6.824 15.661-15.243S92.986 7.01 84.338 7.01c-5.979 0-11.174 3.264-13.811 8.058H36.3c6.007 3.551 10.861 8.924 15.241 14.37z"></path>
                </svg>Fork</button><button class="Button-module_root-xw+9D embed-modal-button" data-size="mini">Embed</button><span class="DropdownControlled-module_root-3ewM0" data-direction="top left" data-open="false"><button aria-haspopup="menu" aria-expanded="false" aria-controls="oc-1724320012179" class="Button-module_root-xw+9D" data-size="mini">Export</button>
                <div class="DropdownControlled-module_content-mxnG0" id="oc-1724320012179" role="menu" data-open="false" hidden="" data-direction="top left">
                    <div class="DropdownContent-module_root-rQ0al PenEditorFooterExportDropdown-module_dropdown-mInw+">
                        <header class="PenEditorFooterExportDropdown-module_header-5Usha">
                            <h3>Export</h3><a target="codepen_documentation" rel="noopener noreferrer" href="https://blog.codepen.io/documentation/exporting-pens/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill-rule="evenodd">
                                    <path d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12zm.793-10.129a.721.721 0 0 0-.583-.264.82.82 0 0 0-.594.264.964.964 0 0 0-.286.649.92.92 0 0 0 .21.638.78.78 0 0 0 .604.253.803.803 0 0 0 .605-.253.954.954 0 0 0 .253-.638.87.87 0 0 0-.209-.649zm-.176 2.86c-.146-.235-.41-.352-.792-.352-.249 0-.473.059-.67.176-.191.117-.36.268-.507.451a2.578 2.578 0 0 0-.34.561 2.466 2.466 0 0 0-.177.528l.594.176c.096-.33.187-.557.275-.682.088-.125.173-.187.253-.187.044 0 .085.018.121.055.037.03.055.106.055.231 0 .176-.018.4-.055.671-.036.264-.08.55-.132.858a51.94 51.94 0 0 0-.12.902 6.242 6.242 0 0 0-.056.759c0 .389.074.693.22.913.154.22.433.33.836.33.25 0 .47-.059.66-.176.198-.117.367-.264.506-.44.14-.183.25-.374.33-.572.088-.198.147-.374.176-.528L7.2 8.229c-.095.33-.187.557-.275.682-.088.125-.176.187-.264.187-.036 0-.073-.018-.11-.055-.036-.037-.055-.114-.055-.231 0-.125.019-.323.055-.594l.121-.902c.044-.33.085-.645.121-.946.037-.3.055-.539.055-.715 0-.389-.077-.697-.23-.924z"></path>
                                </svg></a>
                        </header><a data-url="/ajax/upgrades/zip" data-test-id="export-zip" href="/cpe/pen/export/xdooWa" target="_blank" class="Button-module_root-xw+9D upsell" data-has-icon="true" data-full-width="true" data-align="start"><svg viewBox="0 0 23 17" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.18 5.76a1.221 1.221 0 0 0-.461-.273 2.044 2.044 0 0 0-.663-.096H16v2.772h1.056c.528 0 .908-.126 1.14-.378.232-.252.348-.604.348-1.056 0-.2-.03-.382-.09-.546a1.118 1.118 0 0 0-.273-.423zM21 0H2C.9 0 0 .9 0 2v13c0 1.1.9 2 2 2h19c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM9.208 4.605a.936.936 0 0 1-.051.306c-.034.1-.081.194-.141.282l-4.104 5.862h4.164v1.56H2.332v-.78c0-.093.016-.184.048-.273a.951.951 0 0 1 .132-.25l4.116-5.88h-3.96v-1.56h6.54zm3.145 8.01h-2.041V3.872h2.04zm8.01-4.686c-.141.364-.355.676-.643.936-.288.26-.654.462-1.095.609-.442.145-.965.218-1.57.218H16v2.922h-2.028V3.873h3.084c.616 0 1.145.073 1.587.219.442.146.806.347 1.092.603.286.256.496.558.633.906.136.348.204.724.204 1.128 0 .436-.07.836-.21 1.2z"></path>
                            </svg>Export .zip</a>
                        <div class="PenEditorFooterExportDropdown-module_proWrap-vPSu8"><a class="PenEditorFooterExportDropdown-module_proBadge-unLGM BadgePro-module_root-EhalN BadgePro-module_svg-OztkH Badge-module_root-+zThw" title="PRO" data-test-id="pro-badge" href="https://codepen.io/pro"><svg viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 16px;">
                                    <rect fill="#ffdd40" height="16" rx="1.5" width="32"></rect>
                                    <path d="M9.174 5.598c.834 0 1.214.44 1.214 1.113 0 .76-.422 1.113-1.182 1.113h-.56c-.094 0-.105-.011-.105-.11V5.708c0-.1.01-.11.106-.11zm.106 3.67c.76 0 1.404-.188 1.847-.563.56-.452.855-1.135.855-2.016 0-.893-.317-1.61-.887-2.039-.443-.33-.97-.507-1.857-.507H7.106c-.095 0-.106.011-.106.11v7.494c0 .099.01.11.106.11h1.33c.094 0 .105-.011.105-.11v-2.37c0-.099.01-.11.106-.11zM14.375 9.047c0-.077 0-.11.063-.11.053 0 .074.022.116.088l1.953 2.722c.074.099.084.11.18.11h1.635c.064 0 .095 0 .095-.022a.31.31 0 0 0-.053-.088c-.707-.96-1.425-1.885-2.132-2.854a.085.085 0 0 1-.02-.045c0-.022.01-.044.041-.055.95-.286 1.573-1.124 1.573-2.28 0-.96-.454-1.62-1.055-1.973-.539-.32-1.056-.397-1.943-.397H12.94c-.095 0-.105.011-.105.11v7.494c0 .099.02.11.116.11h1.32c.094 0 .105-.011.105-.11zm.654-3.515c.834 0 1.214.418 1.214 1.09 0 .76-.422 1.07-1.182 1.07h-.58c-.096 0-.106-.012-.106-.11v-1.94c0-.1.01-.11.105-.11zM26 8c0-2.182-1.636-4-3.726-4s-3.726 1.818-3.726 4 1.636 4 3.726 4S26 10.182 26 8zm-5.837 0c0-1.311.855-2.402 2.111-2.402 1.256 0 2.111 1.09 2.111 2.402 0 1.311-.855 2.402-2.11 2.402-1.257 0-2.112-1.09-2.112-2.402z"></path>
                                </svg></a><button data-test-id="export-zip-with-build" class="Button-module_root-xw+9D" data-has-icon="true" data-color="grad-yellow" data-full-width="true" data-align="start"><svg viewBox="0 0 23 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.18 5.76a1.221 1.221 0 0 0-.461-.273 2.044 2.044 0 0 0-.663-.096H16v2.772h1.056c.528 0 .908-.126 1.14-.378.232-.252.348-.604.348-1.056 0-.2-.03-.382-.09-.546a1.118 1.118 0 0 0-.273-.423zM21 0H2C.9 0 0 .9 0 2v13c0 1.1.9 2 2 2h19c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM9.208 4.605a.936.936 0 0 1-.051.306c-.034.1-.081.194-.141.282l-4.104 5.862h4.164v1.56H2.332v-.78c0-.093.016-.184.048-.273a.951.951 0 0 1 .132-.25l4.116-5.88h-3.96v-1.56h6.54zm3.145 8.01h-2.041V3.872h2.04zm8.01-4.686c-.141.364-.355.676-.643.936-.288.26-.654.462-1.095.609-.442.145-.965.218-1.57.218H16v2.922h-2.028V3.873h3.084c.616 0 1.145.073 1.587.219.442.146.806.347 1.092.603.286.256.496.558.633.906.136.348.204.724.204 1.128 0 .436-.07.836-.21 1.2z"></path>
                                </svg>Export .zip with Build Process </button></div>
                    </div>
                </div>
            </span><span class="DropdownControlled-module_root-3ewM0" data-direction="top left" data-open="false"><button aria-haspopup="menu" aria-expanded="false" aria-controls="oc-1724320012180" class="Button-module_root-xw+9D" data-size="mini">Share</button>
                <div class="DropdownControlled-module_content-mxnG0" id="oc-1724320012180" role="menu" data-open="false" hidden="" data-direction="top left"></div>
            </span></div>
        <div class="footer-actions" data-expanded="false"><button class="Button-module_root-xw+9D console-toggle-button" data-size="mini">Console</button><button class="Button-module_root-xw+9D" data-size="mini">Assets</button><button data-id="editor-comments-button" class="Button-module_root-xw+9D" data-size="mini">Comments</button><button title="Keyboard Shortcuts" class="Button-module_root-xw+9D keyboard-commands-button" data-size="mini"><span>Ctrl</span></button></div>
    </footer>
    <div id="keycommands" class="modal modal-neutral">
        <div class="keycommands-container">
            <section class="editor-commands inline-editor-commands">
                <h2>Editor Commands</h2>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key pc_only">Ctrl</span>
                        <span class="key mac_only">Ctrl</span>
                        <span class="key">Space</span>
                    </kbd>
                    Autocomplete
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key">F</span>
                    </kbd>
                    Find
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key">G</span>
                    </kbd>
                    Find Next
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key" title="Shift">⇧</span>
                        <span class="key">G</span>
                    </kbd>
                    Find Previous
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key pc_only" title="Shift">⇧</span>
                        <span class="key mac_only">Opt</span>
                        <span class="key">F</span>
                    </kbd>
                    Find &amp; Replace
                </div>
                <div class="key-group mac_only">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key" title="Shift">⇧</span>
                        <span class="key">F</span>
                    </kbd>
                    Format Code
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key">[</span>
                    </kbd>
                    Indent Code Right
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key">]</span>
                    </kbd>
                    Indent Code Left
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key" title="Shift">⇧</span>
                        <span class="key">Tab</span>
                    </kbd>
                    Auto Indent Code
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key">/</span>
                    </kbd>
                    Line Comment
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key pc_only" title="Shift">⇧</span>
                        <span class="key mac_only">Opt</span>
                        <span class="key">/</span>
                    </kbd>
                    Block Comment
                </div>
                <p class="inline-tab-triggers">Also see: <a href="https://blog.codepen.io/documentation/features/tab-triggers/" target="_blank" rel="noopener">Tab Triggers</a></p>
            </section>
            <section class="editor-commands">
                <h2>Editor Focus</h2>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key pc_only">Alt</span>
                        <span class="key mac_only">Opt</span>
                        <span class="key">1</span>
                    </kbd>

                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key" title="Shift">⇧</span>
                        <span class="key">9</span>
                    </kbd>
                    Open This Dialog
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key" title="Shift">⇧</span>
                        <span class="key">0</span>
                    </kbd>
                    Open Debug View
                </div>
                <h2>HTML Specific</h2>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key" title="Shift">⇧</span>
                        <span class="key">A</span>
                    </kbd>
                    Wrap With...
                </div>
                <h2>Pen Actions</h2>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key">P</span>
                    </kbd>
                    Create New Pen
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key">S</span>
                    </kbd>
                    Save
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key" title="Shift">⇧</span>
                        <span class="key">S</span>
                    </kbd>
                    Save As Private <span style="border-radius: 2px; padding: 1px 6px 2px 5px; color: black !important; background: var(--cp-color-yellow); white-space: nowrap; text-shadow: none; letter-spacing: 0; font-size: 71%; position: relative; top: -1px;">PRO</span>
                </div>
                <div class="key-group">
                    <kbd class="keycommand">
                        <span class="key -command"></span>
                        <span class="key">I</span>
                    </kbd>
                    Info Panel (if owned)
                </div>
            </section>
        </div>
    </div>
    <div id="popup-overlay" class="overlay popup-overlay"></div>
    <div id="modal-overlay" class="overlay modal-overlay"></div>
    <noscript>

        <input type="checkbox" class="modal-closing-trick" id="modal-closing-trick">

        <div class="overlay noscript-overlay" style="display: block;"></div>

        <div class="modal modal-message group modal-warning">

            <div class="modal-title">CodePen requires JavaScript to render the code and preview areas in this view.</div>

            <p>Trying <a href="https://codepen.io/amdsouza92/debug/xdooWa">viewing this Pen in Debug Mode</a>, which is the preview area without any iframe and does not require JavaScript. Although what the preview is of might!</p>

            <p>Need to know how to enable JavaScript? <a href="http://enable-javascript.com/" target="_blank" rel="noopener">Go here.</a></p>

            <label class="button button-medium" for="modal-closing-trick">Close this, use anyway.</label>

        </div>

    </noscript>
    <textarea id="init-data" style="display:none">{"__browser":{"country":"VN","device":"unknown_device","mobile":false,"name":"chrome","platform":"pc","version":"127"},"__constants":{},"__CPDATA":{"domain_iframe":"https://cdpn.io","environment":"production","host":"codepen.io","iframe_allow":"accelerometer *; bluetooth *; camera *; encrypted-media *; display-capture *; geolocation *; gyroscope *; microphone *; midi *; clipboard-read *; clipboard-write *; web-share *; serial *; xr-spatial-tracking *","iframe_sandbox":"allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups-to-escape-sandbox allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"},"__graphql":{"data":{"data":{"sessionUser":{"id":"VoDkNZ","name":"Captain Anonymous","title":"Captain Anonymous","avatar":"https://assets.codepen.io/t-1/user-default-avatar.jpg?format=auto&amp;version=0","currentContext":{"id":"VoDkNZ","title":"Captain Anonymous","name":"Captain Anonymous","avatar":"https://assets.codepen.io/t-1/user-default-avatar.jpg?format=auto&amp;version=0","username":"anon","__typename":"User"},"currentTeamId":null,"username":"anon","admin":false,"anon":true,"pro":false,"verified":false,"featureFlags":[],"teams":[],"__typename":"User"}}},"url":"https://codepen.io/graphql","api":"cprails"},"__user":{"anon":true,"base_url":"/anon/","cohorts":[],"current_team_hashid":null,"current_team_id":0,"hashid":"VoDkNZ","id":1,"itemType":"user","name":"Captain Anonymous","paid":false,"tier":0,"username":"anon","created_at":null,"email_verified":null,"collections_count":0,"collections_private_count":0,"followers_count":0,"followings_count":0,"pens_count":0,"pens_private_count":0,"projects_count":0,"projects_private_count":0},"__firebase":{"config":{"apiKey":"AIzaSyBgLAe7N_MdFpuVofMkcQLGwwhUu5tuxls","authDomain":"codepen-store-production.firebaseapp.com","databaseURL":"https://codepen-store-production.firebaseio.com","disabled":false,"projectId":"codepen-store-production"},"token":"eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImNsYWltcyI6eyJvd25lcklkIjoiVm9Ea05aIiwiYWRtaW4iOmZhbHNlfSwiZXhwIjoxNzI0MzIzNjEyLCJpYXQiOjE3MjQzMjAwMTIsImlzcyI6ImZpcmViYXNlLWFkbWluc2RrLThva3lsQGNvZGVwZW4tc3RvcmUtcHJvZHVjdGlvbi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLThva3lsQGNvZGVwZW4tc3RvcmUtcHJvZHVjdGlvbi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6IlZvRGtOWiJ9.iuXbK-c0_x5q4CFYHXOEDrEpfwJePvFPHzbqV-b_SFG9fv0Ke-MyyKvthPyJzMLQXShJnzZD9xNuPfmCCkUVy4p9u4LYyyft41PZrpWmIsIH5Z_IG9U3Tdb6daUJD2DRKv8MBH79XIh5s-JL-8564g3W_cliXlJrptn7JGDEqnfghZRDYKOb_lGCFNT3GDFO73giDnITEh3noMlk7dWbvO1EBMYoas-kVZctYrIbS2Z-3K_M_1AVjfyyvRggOTCMn_r0XX9AzbOnsDlu0kDL4Gr35FC9EHY8nokI8pPpaBIlE2EO5N4qp0DRyd0QLV820Uof4fdsJtAysfXe0lc6KQ"},"__pay_stripe_public_key":"pk_live_2GndomDfiklqpSNQn8FrGuwZSMIMzha7DkLJqlYe7IR0ihKAlKdiHg68JJc5eVPt68rzAjzAAVXcUwjySHRCsgjQQ00gtRBUFNH","__pay_braintree_env":"production","__boomboom":{"serve_url":"https://cdpn.io/cpe/boomboom","store_url":"https://codepen.io/cpe/boomboom/store"},"__editor_config":{"id":"classic","editors":[{"id":"html","type":"html","name":"HTML","showEditor":true,"showSettings":true,"showProcessors":true,"embeds":{"showViewCompiled":true},"settings":[{"id":"processor","name":"HTML Preprocessor","type":"select","visible":true,"values":[{"id":"none","name":"None","value":"none","default":true},{"id":"haml","name":"Haml","value":"haml"},{"id":"markdown","name":"Markdown","value":"markdown"},{"id":"slim","name":"Slim","value":"slim"},{"id":"pug","name":"Pug","value":"pug"}]},{"id":"html_classes","name":"Add Class(es) to &lt;html&gt;","type":"input","placeholder":"e.g. single post post-1234","visible":true},{"id":"head","name":"Stuff for &lt;head&gt;","type":"textarea","placeholder":"e.g. &lt;meta&gt;, &lt;link&gt;, &lt;script&gt;","visible":true}],"actions":[{"id":"tidy_html","type":"tidy_code","name":"Format HTML","disabled_processors":["haml","slim"]},{"id":"view_compiled_html","type":"view_compiled","name":"View Compiled HTML","disabled_processors":["none"],"showInEmbeds":true},{"id":"analyze_html","type":"analyze","name":"Analyze HTML"},{"id":"maximize_html_editor","type":"maximize","name":"Maximize HTML Editor"},{"id":"minimize_html_editor","type":"minimize","name":"Minimize HTML Editor"},{"id":"fold_all_html","type":"fold_all","name":"Fold All"},{"id":"unfold_all_html","type":"unfold_all","name":"Unfold All"}],"processors":[{"id":"none","name":"None"},{"id":"haml","name":"Haml"},{"id":"markdown","name":"Markdown"},{"id":"slim","name":"Slim"},{"id":"pug","name":"Pug"}]},{"id":"css","type":"css","name":"CSS","showEditor":true,"showSettings":true,"showProcessors":true,"showVendorPrefixing":true,"embeds":{"showViewCompiled":true},"actions":[{"id":"tidy_css","type":"tidy_code","name":"Format CSS","disabled_processors":["sass","stylus"]},{"id":"view_compiled_css","type":"view_compiled","name":"View Compiled CSS","disabled_processors":["none"],"disabled_prefixes":["neither","prefixfree"]},{"id":"analyze_css","type":"analyze","name":"Analyze CSS"},{"id":"maximize_css_editor","type":"maximize","name":"Maximize CSS Editor"},{"id":"minimize_css_editor","type":"minimize","name":"Minimize CSS Editor"},{"id":"fold_all_css","type":"fold_all","name":"Fold All","disabled_processors":["sass"]},{"id":"unfold_all_css","type":"unfold_all","name":"Unfold All","disabled_processors":["sass"]}],"processors":[{"id":"none","name":"None"},{"id":"less","name":"Less"},{"id":"scss","name":"SCSS"},{"id":"sass","name":"Sass"},{"id":"stylus","name":"Stylus"},{"id":"postcss","name":"PostCSS"}],"parSuffixes":["less","scss","sass","styl"]},{"id":"js","type":"js","name":"JS","showEditor":true,"showSettings":true,"showProcessors":true,"detectImports":true,"externalResourcesHidden":false,"embeds":{"showViewCompiled":true},"actions":[{"id":"tidy_js","type":"tidy_code","name":"Format JavaScript","disabled_processors":["coffeescript, livescript"]},{"id":"view_compiled_js","type":"view_compiled","name":"View Compiled JavaScript","disabled_processors":["none"]},{"id":"analyze_js","type":"analyze","name":"Analyze JavaScript"},{"id":"maximize_js_editor","type":"maximize","name":"Maximize JavaScript Editor"},{"id":"minimize_js_editor","type":"minimize","name":"Minimize JavaScript Editor"},{"id":"fold_all_js","type":"fold_all","name":"Fold All"},{"id":"unfold_all_js","type":"unfold_all","name":"Unfold All"}],"processors":[{"id":"none","name":"None"},{"id":"babel","name":"Babel"},{"id":"typescript","name":"TypeScript"},{"id":"coffeescript","name":"CoffeeScript"},{"id":"livescript","name":"LiveScript"}]}],"formatters":[{"id":"classic","name":"Classic","runOn":[{"eventType":"demand"}],"url":"https://fi593g2v2a.execute-api.us-west-2.amazonaws.com/production/format"}],"layout":{"default":"top"},"linters":[{"id":"classic","name":"Classic","runOn":[{"eventType":"demand"}],"url":"https://fi593g2v2a.execute-api.us-west-2.amazonaws.com/production/lint"}],"preview":{"intervalMaxWaitMS":3500,"intervalMS":1200},"settings":[{"id":"behavior","name":"Behavior","type":"setting"},{"id":"editor","name":"Editor","type":"setting"}]},"__item":"{\"editor_settings\":{\"auto_run\":true,\"autocomplete\":false,\"code_folding\":true,\"css_pre_processor\":\"none\",\"css_prefix\":\"neither\",\"css_starter\":\"neither\",\"emmet_active\":true,\"font_size\":14,\"font_type\":\"system\",\"format_on_save\":false,\"html_pre_processor\":\"none\",\"indent_with\":\"spaces\",\"js_pre_processor\":\"none\",\"key_bindings\":\"normal\",\"line_numbers\":true,\"line_wrapping\":true,\"match_brackets\":true,\"snippets\":{\"markupSnippets\":{},\"stylesheetSnippets\":{}},\"tab_size\":2,\"theme\":\"twilight\",\"id\":\"xdooWa\",\"auto_save\":true},\"hashid\":\"xdooWa\",\"itemType\":\"pen\",\"resources\":[],\"tags\":[],\"id\":15379508,\"user_id\":320394,\"html\":\"&lt;main&gt;\\n  &lt;section class=\\\"main-wrapper\\\"&gt;\\n    &lt;div class=\\\"key-map-wrapper\\\"&gt;\\n      &lt;h2&gt;Key Mapping&lt;/h2&gt;\\n      &lt;ul class=\\\"key-map-list\\\"&gt;\\n        &lt;li&gt;\\n          &lt;kbd class=\\\"key-code\\\"&gt;E&lt;/kbd&gt;\\n          &lt;span class=\\\"key-sound\\\"&gt;Crash&lt;/span&gt;\\n        &lt;/li&gt;\\n        &lt;li&gt;\\n          &lt;kbd class=\\\"key-code\\\"&gt;R&lt;/kbd&gt;\\n          &lt;span class=\\\"key-sound\\\"&gt;Ride&lt;/span&gt;\\n        &lt;/li&gt;\\n        &lt;li&gt;\\n          &lt;kbd class=\\\"key-code\\\"&gt;F&lt;/kbd&gt;\\n          &lt;span class=\\\"key-sound\\\"&gt;Floor tom&lt;/span&gt;\\n        &lt;/li&gt;\\n        &lt;li&gt;\\n          &lt;kbd class=\\\"key-code\\\"&gt;G&lt;/kbd&gt;\\n          &lt;span class=\\\"key-sound\\\"&gt;Mid tom&lt;/span&gt;\\n        &lt;/li&gt;\\n        &lt;li&gt;\\n          &lt;kbd class=\\\"key-code\\\"&gt;H&lt;/kbd&gt;\\n          &lt;span class=\\\"key-sound\\\"&gt;High tom&lt;/span&gt;\\n        &lt;/li&gt;\\n        &lt;li&gt;\\n          &lt;kbd class=\\\"key-code\\\"&gt;V&lt;/kbd&gt;\\n          &lt;kbd class=\\\"key-code\\\"&gt;B&lt;/kbd&gt;\\n          &lt;span class=\\\"key-sound\\\"&gt;Kick&lt;/span&gt;\\n        &lt;/li&gt;\\n        &lt;li&gt;\\n          &lt;kbd class=\\\"key-code\\\"&gt;J&lt;/kbd&gt;\\n          &lt;span class=\\\"key-sound\\\"&gt;Snare&lt;/span&gt;\\n        &lt;/li&gt;\\n        &lt;li&gt;\\n          &lt;kbd class=\\\"key-code\\\"&gt;I&lt;/kbd&gt;\\n          &lt;span class=\\\"key-sound\\\"&gt;Hi-Hat Open&lt;/span&gt;\\n        &lt;/li&gt;\\n        &lt;li&gt;\\n          &lt;kbd class=\\\"key-code\\\"&gt;K&lt;/kbd&gt;\\n          &lt;span class=\\\"key-sound\\\"&gt;Hi-Hat Closed&lt;/span&gt;\\n        &lt;/li&gt;\\n      &lt;/ul&gt;\\n    &lt;/div&gt;\\n    &lt;h1 class=\\\"main-title\\\"&gt;JavaScript Drum Kit&lt;/h1&gt;\\n    &lt;div class=\\\"drum-kit-wrapper\\\"&gt;\\n      &lt;img id=\\\"crash-ride\\\" class=\\\"crash-cymbal\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/img/crash.png\\\" alt=\\\"Crash cymbal\\\"&gt;\\n      &lt;img id=\\\"hihat-top\\\" class=\\\"hihat-top-cymbal\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/img/hihat-top.png\\\" alt=\\\"Hi Hat cymbal\\\"&gt;\\n      &lt;div data-key=\\\"74\\\" class=\\\"key snare\\\"&gt;\\n        &lt;kbd&gt;J&lt;/kbd&gt;\\n      &lt;/div&gt;\\n      &lt;div data-key=\\\"66\\\" class=\\\"key kick\\\"&gt;\\n        &lt;kbd&gt;B&lt;/kbd&gt;\\n      &lt;/div&gt;\\n      &lt;div data-key=\\\"86\\\" class=\\\"key kick2\\\"&gt;\\n        &lt;kbd&gt;V&lt;/kbd&gt;\\n      &lt;/div&gt;\\n      &lt;div data-key=\\\"72\\\" class=\\\"key tom-high\\\"&gt;\\n        &lt;kbd&gt;H&lt;/kbd&gt;\\n      &lt;/div&gt;\\n      &lt;div data-key=\\\"71\\\" class=\\\"key tom-mid\\\"&gt;\\n        &lt;kbd&gt;G&lt;/kbd&gt;\\n      &lt;/div&gt;\\n      &lt;div data-key=\\\"70\\\" class=\\\"key tom-low\\\"&gt;\\n        &lt;kbd&gt;F&lt;/kbd&gt;\\n      &lt;/div&gt;\\n      &lt;div data-key=\\\"69\\\" class=\\\"key crash\\\"&gt;\\n        &lt;kbd&gt;E&lt;/kbd&gt;\\n      &lt;/div&gt;\\n      &lt;div data-key=\\\"82\\\" class=\\\"key ride\\\"&gt;\\n        &lt;kbd&gt;R&lt;/kbd&gt;\\n      &lt;/div&gt;\\n      &lt;div data-key=\\\"73\\\" class=\\\"key hihat-open\\\"&gt;\\n        &lt;kbd&gt;I&lt;/kbd&gt;\\n      &lt;/div&gt;\\n      &lt;div data-key=\\\"75\\\" class=\\\"key hihat-close\\\"&gt;\\n        &lt;kbd&gt;K&lt;/kbd&gt;\\n      &lt;/div&gt;\\n      &lt;img class=\\\"drum-kit\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/img/drum-kit.png\\\" alt=\\\"Drum Kit\\\" /&gt;\\n    &lt;/div&gt;\\n  &lt;/section&gt;\\n&lt;/main&gt;\\n&lt;audio data-key=\\\"74\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav\\\"&gt;&lt;/audio&gt;\\n&lt;audio data-key=\\\"66\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav\\\"&gt;&lt;/audio&gt;\\n&lt;audio data-key=\\\"86\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav\\\"&gt;&lt;/audio&gt;\\n&lt;audio data-key=\\\"72\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav\\\"&gt;&lt;/audio&gt;\\n&lt;audio data-key=\\\"71\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav\\\"&gt;&lt;/audio&gt;\\n&lt;audio data-key=\\\"70\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav\\\"&gt;&lt;/audio&gt;\\n&lt;audio data-key=\\\"69\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav\\\"&gt;&lt;/audio&gt;\\n&lt;audio data-key=\\\"82\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav\\\"&gt;&lt;/audio&gt;\\n&lt;audio data-key=\\\"73\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav\\\"&gt;&lt;/audio&gt;\\n&lt;audio data-key=\\\"75\\\" src=\\\"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav\\\"&gt;&lt;/audio&gt;\",\"css\":\"@import url(https://fonts.googleapis.com/css?family=Handlee|Pacifico);\\n\\nhtml,\\nbody {\\n\\tpadding: 0;\\n\\tmargin: 0;\\n\\tbackground-color: #fff;\\n}\\n\\n.main-wrapper {\\n\\tmargin: 30px auto 0;\\n\\twidth: 1080px;\\n\\ttext-align: center;\\n}\\n\\n.main-title {\\n\\tfont-family: 'Pacifico', cursive;\\n\\ttext-align: center;\\n\\tfont-size: 3.2em;\\n\\tcolor: #cb2026;\\n\\ttext-shadow: 1px 1px 1px #5a0b0d;\\n}\\n\\n.drum-kit-wrapper {\\n\\tposition: relative;\\n\\twidth: 600px;\\n\\tmargin: -100px auto 0;\\n}\\n\\n.drum-kit {\\n\\twidth: 100%;\\n\\theight: 520px;\\n\\tposition: relative;\\n}\\n\\n.crash-cymbal {\\n\\tposition: absolute;\\n\\ttop: 114px;\\n    left: 80px;\\n    transform: rotate(-7.2deg) scale(1.5);\\n    transition: all ease-in-out .042s;\\n}\\n\\n.hihat-top-cymbal {\\n\\tposition: absolute;\\n    top: 166px;\\n    right: 71px;\\n    transform: scale(1.35);\\n    z-index: 0;\\n    transition: all ease-in-out .042s;\\n}\\n\\n.key {\\n\\tdisplay: inline-block;\\n\\ttransition: all ease-in-out .042s;\\n\\tposition: absolute;\\n\\tbackground: #eaeaea;\\n    font-size: 1.5em;\\n    height: 32px;\\n    width: 32px;\\n    text-align: center;\\n    border-radius: 4px;\\n    border: 3px solid #aaa;\\n    color: #444;\\n    box-shadow: 1px 1px 1px rgba(0,0,0,.65);\\n    z-index: 2;\\n}\\n\\n.key.kick {\\n\\ttop: 355px;\\n    right: 250px;\\n}\\n\\n.key.kick2 {\\n    top: 355px;\\n    right: 308px;\\n}\\n\\n.key.snare {\\n\\tright: 145px;\\n    top: 280px;\\n}\\n\\n.key.tom-high {\\n\\tright: 227px;\\n    top: 240px;\\n}\\n\\n.key.tom-mid {\\n\\tleft: 222px;\\n    top: 220px;\\n}\\n\\n.key.tom-low {\\n\\ttop: 320px;\\n    left: 133px;\\n}\\n\\n.key.crash {\\n\\ttop: 80px;\\n    left: 75px;\\n}\\n\\n.key.ride {\\n\\tleft: 165px;\\n    top: 87px;\\n}\\n\\n.key.hihat-open {\\n\\tright: 165px;\\n    top: 144px;\\n}\\n\\n.key.hihat-close {\\n\\tright: 60px;\\n    top: 150px;\\n}\\n\\n.playing {\\n\\ttransform: scale(1.12);\\n}\\n\\n.key-map-wrapper {\\n\\tposition: absolute;\\n    right: 0;\\n    top: 0;\\n    height: 700px;\\n    background: #111;\\n    width: 250px;\\n    z-index: 3;\\n}\\n\\n.key-map-wrapper &gt; h2 {\\n\\tcolor: #fff;\\n\\tfont-family: 'Handlee', cursive;\\n\\tmargin-bottom: 35px;\\n\\tborder-bottom: 1px solid #fff;\\n    padding-bottom: 20px;\\n}\\n\\n.key-map-list {\\n\\tlist-style: none;\\n\\tcolor: #fff;\\n\\ttext-align: left;\\n}\\n\\n.key-map-list &gt; li {\\n\\tmargin-bottom: 25px;\\n}\\n\\n.key-code {\\n\\tcolor: #444;\\n    background-color: #eaeaea;\\n    font-size: 1.25em;\\n    padding: 5px 10px;\\n    border-radius: 4px;\\n    border: 3px solid #aaa;\\n}\\n\\n.key-sound {\\n\\tfont-size: 1.2em;\\n\\tmargin-left: 10px;\\n\\tfont-family: 'Handlee', cursive;\\n\\tvertical-align: middle;\\n}\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\",\"js\":\"// JavaScript Drum Kit App\\n\\n{\\n\\tconst playingClass = 'playing',\\n\\t\\tcrashRide = document.getElementById('crash-ride'),\\n\\t\\thiHatTop = document.getElementById('hihat-top');\\n\\n\\tconst animateCrashOrRide = () =&gt; {\\n\\t\\tcrashRide.style.transform = 'rotate(0deg) scale(1.5)';\\n\\t};\\n\\n\\tconst animateHiHatClosed = () =&gt; {\\n\\t\\thiHatTop.style.top = '171px';\\n\\t};\\n\\n\\tconst playSound = e =&gt; {\\n\\t\\tconst keyCode = e.keyCode,\\n\\t\\t\\tkeyElement = document.querySelector(`div[data-key=\\\"${keyCode}\\\"]`);\\n\\n\\t\\tif(!keyElement) return;\\n\\n\\t\\tconst audioElement = document.querySelector(`audio[data-key=\\\"${keyCode}\\\"]`);\\n\\t\\taudioElement.currentTime = 0;\\n\\t\\taudioElement.play();\\n\\n\\t\\tswitch(keyCode) {\\n\\t\\t\\tcase 69:\\n\\t\\t\\tcase 82:\\n\\t\\t\\t\\tanimateCrashOrRide();\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\tcase 75:\\n\\t\\t\\t\\tanimateHiHatClosed();\\n\\t\\t\\t\\tbreak;\\n\\t\\t}\\n\\n\\t\\tkeyElement.classList.add(playingClass);\\n\\t};\\n\\n\\tconst removeCrashRideTransition = e =&gt; {\\n\\t\\tif(e.propertyName !== 'transform') return;\\n\\n\\t\\te.target.style.transform = 'rotate(-7.2deg) scale(1.5)';\\n\\t};\\n\\n\\tconst removeHiHatTopTransition = e =&gt; {\\n\\t\\tif(e.propertyName !== 'top') return;\\n\\n\\t\\te.target.style.top = '166px';\\n\\t};\\t\\n\\n\\tconst removeKeyTransition = e =&gt; {\\n\\t\\tif(e.propertyName !== 'transform') return;\\n\\n\\t\\te.target.classList.remove(playingClass)\\n\\t};\\n\\n\\tconst drumKeys = Array.from(document.querySelectorAll('.key'));\\n\\n\\tdrumKeys.forEach(key =&gt; {\\n\\t\\tkey.addEventListener('transitionend', removeKeyTransition);\\n\\t});\\n\\n\\tcrashRide.addEventListener('transitionend', removeCrashRideTransition);\\n\\thiHatTop.addEventListener('transitionend', removeHiHatTopTransition);\\n\\n\\twindow.addEventListener('keydown', playSound);\\n}\",\"html_pre_processor\":\"none\",\"css_pre_processor\":\"none\",\"js_pre_processor\":\"none\",\"html_classes\":\"\",\"css_starter\":\"neither\",\"js_library\":null,\"created_at\":\"2017-05-30T21:43:20.000Z\",\"updated_at\":\"2017-06-02T06:43:11.000Z\",\"title\":\"JavaScript Drum Kit\",\"description\":\"JavaScript Drum Kit - based off of the javascript30 course by WesBos.\",\"slug_hash\":\"xdooWa\",\"head\":\"\",\"private\":false,\"has_animation\":false,\"team_id\":0,\"css_prefix\":\"neither\",\"template\":false,\"parent_id\":0,\"comments_count\":0,\"custom_screenshot_filename\":null,\"loves_count\":0,\"pick\":false,\"popularity_score\":0,\"views_count\":0,\"pick_visible_at\":null,\"cpid\":\"015c5b50-2cc0-7206-8916-feb0391ca71d\",\"is_new_editor_pen\":false,\"protected\":false,\"access\":\"Public\",\"pen_hash\":null}","__layoutType":"top","__pageType":"pen","__profiled":{"base_url":"/amdsouza92","hashid":"ZQKRNR","id":320394,"name":"Arun Michael Dsouza","type":"user","username":"amdsouza92"},"__processorsMap":{"autoprefixer":"autoprefixer-10","babel":"babel-7","coffeescript":"coffeescript-2","format-1":"format-1","flutter":"flutter-1","haml":"haml-4","less":"less-3","lint-1":"lint-1","livescript":"livescript-1","markdown":"markdown-11","postcss":"postcss-7","pug":"pug-2","sass":"sass-1","scss":"sass-1","sass-ruby-3":"sass-ruby-3","sass-ruby-compass-3":"sass-ruby-compass-3","slim":"slim-3","stylus":"stylus-0","typescript":"typescript-4","vue":"vue-2","vue3":"vue-3"},"__rtData":"{\"maxMembers\":0,\"roomID\":\"xdooWa/live\",\"roomType\":\"live\",\"updatedAt\":1496385791,\"user\":{\"id\":\"VoDkNZ\",\"hashid\":\"VoDkNZ\",\"name\":\"Captain Anonymous\",\"username\":\"anon\",\"role\":\"editor\"}}","__eijs":"https://cpwebassets.codepen.io/assets/embed/ei.js","__favicon_mask_icon":"https://cpwebassets.codepen.io/assets/favicon/logo-pin-b4b4269c16397ad2f0f7a01bcdf513a1994f4c94b8af2f191c09eb0d601762b1.svg","__favicon_shortcut_icon":"https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico","__path_to_iframe_console_runner":"https://cpwebassets.codepen.io/assets/editor/iframe/iframeConsoleRunner-6d8bf8b4b479137260842506acbb12717dace0823c023e08b96360e60b0840d9.js","__path_to_iframe_refresh_css":"https://cpwebassets.codepen.io/assets/editor/iframe/iframeRefreshCSS-44fe83e49b63affec96918c9af88c0d80b209a862cf87ac46bc933074b8c557d.js","__path_to_iframe_runtime_errors":"https://cpwebassets.codepen.io/assets/editor/iframe/iframeRuntimeErrors-4f205f2c14e769b448bcf477de2938c681660d5038bc464e3700256713ebe261.js","__path_to_processor_worker":"https://cpwebassets.codepen.io/assets/packs/router.js","__path_to_stop_execution_on_timeout":"https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-2c7831bb44f98c1391d6a4ffda0e1fd302503391ca806e7fcc7b9b87197aec26.js","__pen_normalize_css_url":"https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css","__pen_prefix_free_url":"https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js","__pen_reset_css_url":"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css","__path_to_infinite_loop_detection":"https://cpwebassets.codepen.io/assets/packs/js/infiniteLoopDetection-f8e3911a88063c63a265.js","__theme_url_twilight":"https://cpwebassets.codepen.io/assets/editor/themes/twilight-123214b13ed2699670d09785cc8ac3cbc46ebf6eeb43e268f0bb1a1e07c69684.css","__theme_url_solarized_dark":"https://cpwebassets.codepen.io/assets/editor/themes/solarized-dark-d43a116b1f697a65388ccbce17fd043503fb4efbda637ec527c132e4922363df.css","__theme_url_tomorrow_night":"https://cpwebassets.codepen.io/assets/editor/themes/tomorrow-night-07d231df49bc3226643da553850ddb116a6c6a781e5df9722a72fe8f7502c9f4.css","__theme_url_oceanic_dark":"https://cpwebassets.codepen.io/assets/editor/themes/oceanic-dark-621a64702c156e621f5efe415854c7dd2677995ce33bea43f1316c579e7e590c.css","__theme_url_panda":"https://cpwebassets.codepen.io/assets/editor/themes/panda-acb5d69c037209e4931264f7b3c6634f63b85cc9034cef0263f9a3c3b01b3512.css","__theme_url_duotone_dark":"https://cpwebassets.codepen.io/assets/editor/themes/duotone-dark-d28dad13112942a864c88c32a5dd5f7a172c09288a2f653e0545721ad4a2ce24.css","__theme_url_highcontrast_dark":"https://cpwebassets.codepen.io/assets/editor/themes/highcontrast-dark-f425686592da923b79e7aaab67bb8c72ee517d989ff13dfb02586480a6810ad6.css","__theme_url_classic":"https://cpwebassets.codepen.io/assets/editor/themes/classic-11a07298fe68d05065b0fe718ba52b0a413be15b705ec0903f296411e9beb8fe.css","__theme_url_solarized_light":"https://cpwebassets.codepen.io/assets/editor/themes/solarized-light-b894508db12d2ed9758567103f228457508073371f43dac488147fdc2c6804f2.css","__theme_url_xq_light":"https://cpwebassets.codepen.io/assets/editor/themes/xq-light-b05afff3f6c870548f0deb59f86a9dab5d738cf1c08ed68cb3e5ddd4e6646f3c.css","__theme_url_oceanic_light":"https://cpwebassets.codepen.io/assets/editor/themes/oceanic-light-d5eadde5bf576f5d1f7f3ca77446bb42284795f0fa87921dbd873b4c15f87d9d.css","__theme_url_mdn_like":"https://cpwebassets.codepen.io/assets/editor/themes/mdn-like-0357a6822344eafdc6a2bb884faeb494100f01f78e0e1260fd82952013c5a5d7.css","__theme_url_duotone_light":"https://cpwebassets.codepen.io/assets/editor/themes/duotone-light-f180c6ba88fe2e1f3539d466fec1ff32cae230743b226b6bf2c4cd808a680418.css","__theme_url_highcontrast_light":"https://cpwebassets.codepen.io/assets/editor/themes/highcontrast-light-08e7c2d4f904da3e1c5a899d1308e5254ef342cd55f8c0d8cff3e03f3fe4805a.css","__theme_url_scoped_twilight":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/twilight-d85db5ce5557f08ce442656d7aa16b5974a72b21c8d2067bf9af0d1b01996c42.css","__theme_url_scoped_solarized_dark":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/solarized-dark-e86c249b6a8ff3435d0f6e2e3430c9e8144ba6f56a4a83cf7732bc709589f2fa.css","__theme_url_scoped_tomorrow_night":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/tomorrow-night-e8dca2482b7709ad653d8852a5aa807aa32520174dffde9bffcf67d9ffea1a48.css","__theme_url_scoped_oceanic_dark":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/oceanic-dark-dee887234c86981be0f9d0cd42372174b8993f6b0150677d70f8aee2ee1e25ba.css","__theme_url_scoped_panda":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/panda-001e5ede394495595d4a9fc877ca6ceaababd476a327643e4f23bfe0e56d95fc.css","__theme_url_scoped_duotone_dark":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/duotone-dark-23047c555fcecf45c64a2d5b2dc7de5d4d8f310e7f9ce3af2a652d00f42e8022.css","__theme_url_scoped_highcontrast_dark":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/highcontrast-dark-c6e2ab04bf9fabcb0dd621be735d4b9230742ab50a6f742319a40042cb4f2501.css","__theme_url_scoped_classic":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/classic-4a710412a88d3175ed1cb987322f267c63221f8930caa6cc734c4d4d011086e0.css","__theme_url_scoped_solarized_light":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/solarized-light-dbca780453a3986cc5f6ce1d48d2f9726cd90a3bba5ca2fb77e6f2990f18d04f.css","__theme_url_scoped_xq_light":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/xq-light-52249a3d39079ad0d7d8de0d53faec42a889e10de1e7c50680da236fee71d196.css","__theme_url_scoped_oceanic_light":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/oceanic-light-6d62c83deb8264fd49350ff90b276153cea8b07b0e0b96f8246d0463cff3758e.css","__theme_url_scoped_mdn_like":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/mdn-like-807bd2b59220dc87bc4cd255c75c65615e2d53e3b7323ec3b04a097b726323a7.css","__theme_url_scoped_duotone_light":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/duotone-light-010cf73ffe7cc2770ec4a8b71fbf4b841bfd7f4340fbff47367b29b82cbb4275.css","__theme_url_scoped_highcontrast_light":"https://cpwebassets.codepen.io/assets/editor/themes/scoped/highcontrast-light-069396bd84678a7eaf38d36390fe2f5c95144febb75616a2a069ad2a96c077d4.css"}</textarea>
    <script src="https://cpwebassets.codepen.io/assets/common/browser_support-2c1a3d31dbc6b5746fb7dacdbc81dd613906db219f13147c66864a6c3448246c.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/common/everypage-b1fe1ca71dab80c49b8e5ebed21506a80cb6fe64ecaa8c6dddae5aca7b1e34d7.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/packs/js/vendor-b946d0982be4d5cb3ae9.chunk.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/packs/js/1-998003a350e9f7c6fbea.chunk.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/packs/js/referrer-tracking-4f094cb055a2528b872a.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/packs/js/vendor-b946d0982be4d5cb3ae9.chunk.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/packs/js/1-998003a350e9f7c6fbea.chunk.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/packs/js/everypage-384aa01b51e9264eca8e.js"></script>
    <div id="react-messages">
        <div class="Messages-module_container-YzpcS" style="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;"></div>
    </div>
    <div></div>
    <script src="https://cpwebassets.codepen.io/assets/packs/js/vendor-b946d0982be4d5cb3ae9.chunk.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/packs/js/1-998003a350e9f7c6fbea.chunk.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/packs/js/processorRouter-fe76c809c1d71caa0244.js"></script>
    <script src="https://static.filestackapi.com/filestack-js/3.x.x/filestack.min.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/editor/global/commonLibs-18d595d95e5894ceae5661c7e40deeca7df254309b42f89edce76949b15a0f31.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/editor/global/codemirror-e628acccbc140ed80f9daa48b5e64c775855e64a41d7fad48e7583a7819aa9d6.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/libs/emmet-codemirror-plugin-f3955bea0403e8137caacd73a1e42bb551794f7ce15ae59103c64a2736b2757c.js"></script>
    <script src="https://cpwebassets.codepen.io/assets/editor/pen/index-e75ed99a0baee14b680c240829d4a2cc5af1f3dbc9bd7b55468398226f46c520.js"></script>
    
</body>

</html>