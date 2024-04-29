var double_sharp=function(color){return('<svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 1px" height="8" width="8" viewBox="0 0 15 15">'+
'<path fill="'+
color+
'" d="M 15.1800003051758, 15.0600051879883 C 15.1800003051758, 15.0600051879883, 15.1800003051758, 10.6800003051758, 15.1800003051758, 10.6800003051758 C 15.1800003051758, 10.6800003051758, 14.6999998092651, 10.6800003051758, 14.6999998092651, 10.6800003051758 C 12.6599998474121, 10.6800003051758, 10.5600004196167, 9.60000610351562, 8.52000045776367, 7.56000518798828 C 10.5, 5.58000183105469, 12.7200002670288, 4.5, 15.1800003051758, 4.3800048828125 C 15.1800003051758, 4.3800048828125, 15.1800003051758, 0, 15.1800003051758, 0 C 15.1800003051758, 0, 10.8000001907349, 0, 10.8000001907349, 0 C 10.8000001907349, 2.28000640869141, 9.72000026702881, 4.5, 7.55999994277954, 6.66000366210937 C 5.46000003814697, 4.56000518798828, 4.38000011444092, 2.34000396728516, 4.38000011444092, 0 C 4.38000011444092, 0, 0, 0, 0, 0 C 0, 0, 0, 4.3800048828125, 0, 4.3800048828125 C 2.33999991416931, 4.3800048828125, 4.55999994277954, 5.46000671386719, 6.65999984741211, 7.56000518798828 C 4.55999994277954, 9.66000366210937, 2.33999991416931, 10.6800003051758, 0, 10.6800003051758 C 0, 10.6800003051758, 0, 15.0600051879883, 0, 15.0600051879883 C 0, 15.0600051879883, 4.38000011444092, 15.0600051879883, 4.38000011444092, 15.0600051879883 C 4.38000011444092, 12.7200012207031, 5.46000003814697, 10.5, 7.55999994277954, 8.40000152587891 C 9.72000026702881, 10.5600051879883, 10.8000001907349, 12.7800064086914, 10.8000001907349, 15.0600051879883 C 15.1800003051758, 15.0600051879883, 15.1800003051758, 15.0600051879883, 15.1800003051758, 15.0600051879883"/>'+
"</svg>");};window.translation={finder_name:"chord finder",button_names:{instrument:{default_name:"楽器",names:["ピアノ","ギター","ウクレレ","楽譜"],},play:"和音を再生",show_note_names:"音名を表示",show_fingering:"指使いを表示",clef:{default_name:"音部記号",names:["ト音記号","ヘ音記号","アルト記号","テノール記号"],},},notes_text:"和音の構成音:",root_note_accidentals:{Cb:"C<span class='--accidentals'>¨</span>",C:"C","C#":"C<span class='--accidentals'>©</span>",Db:"D<span class='--accidentals'>¨</span>",D:"D","D#":"D<span class='--accidentals'>©</span>",Eb:"E<span class='--accidentals'>¨</span>",E:"E","E#":"E<span class='--accidentals'>©</span>",Fb:"F<span class='--accidentals'>¨</span>",F:"F","F#":"F<span class='--accidentals'>©</span>",Gb:"G<span class='--accidentals'>¨</span>",G:"G","G#":"G<span class='--accidentals'>©</span>",Ab:"A<span class='--accidentals'>¨</span>",A:"A","A#":"A<span class='--accidentals'>©</span>",Bb:"B<span class='--accidentals'>¨</span>",B:"B","B#":"B<span class='--accidentals'>©</span>",},root_note_green_circle:{Cbb:"C<i class='--accidentals-circle'>¨¨</i>",Cb:"C<i class='--accidentals-circle'>¨</i>",C:"C","C#":"C<i class='--accidentals-circle'>©</i>","C##":"C"+double_sharp("#fff"),"C###":"C<i style='color:#db4437;' class='--accidentals-circle'>©</i>"+double_sharp("#db4437"),Dbb:"D<i class='--accidentals-circle'>¨¨</i>",Db:"D<i class='--accidentals-circle'>¨</i>",D:"D","D#":"D<i class='--accidentals-circle'>©</i>","D##":"D"+double_sharp("#fff"),Ebbb:"E<i class='--accidentals-circle' style='color: #db4437;'>¨¨¨</i>",Ebb:"E<i class='--accidentals-circle'>¨¨</i>",Eb:"E<i class='--accidentals-circle'>¨</i>",E:"E","E#":"E<i class='--accidentals-circle'>©</i>","E##":"E"+double_sharp("#fff"),Fbb:"F<i class='--accidentals-circle'>¨¨</i>",Fb:"F<i class='--accidentals-circle'>¨</i>",F:"F","F#":"F<i class='--accidentals-circle'>©</i>","F##":"F"+double_sharp("#fff"),"F###":"F<i style='color:#db4437;' class='--accidentals-circle'>©</i>"+double_sharp("#db4437"),Gbb:"G<i class='--accidentals-circle'>¨¨</i>",Gb:"G<i class='--accidentals-circle'>¨</i>",G:"G","G#":"G<i class='--accidentals-circle'>©</i>","G##":"G"+double_sharp("#fff"),Abb:"A<i class='--accidentals-circle'>¨¨</i>",Ab:"A<i class='--accidentals-circle'>¨</i>",A:"A","A#":"A<i class='--accidentals-circle'>©</i>","A##":"A"+double_sharp("#fff"),Bbbb:"B<i class='--accidentals-circle' style='color: #db4437;'>¨¨¨</i>",Bbb:"B<i class='--accidentals-circle'>¨¨</i>",Bb:"B<i class='--accidentals-circle'>¨</i>",B:"B","B#":"B<i class='--accidentals-circle'>©</i>","B##":"B"+double_sharp("#fff"),},guitarSettings:{open_string_fret_width:"80%",open_string_notes_guitar:["E","A","D","G","B","E"],open_string_notes_ukulele:["G","C","E","A"],},root_note_dropdown:{C:"C",D:"D",E:"E",F:"F",G:"G",A:"A",B:"B",},element_dropdown:{major:"メジャー",minor:"マイナー",diminished:"ディミニッシュ",augmented:"オーグメンテッド",7:"7",m7:"m7",maj7:"maj7",dim7:"dim7","m7(♭5)":"m7(♭5)",sus4:"sus4",sus2:"sus2","7sus4":"7sus4",6:"6",m6:"m6",9:"9",m9:"m9",maj9:"maj9",11:"11",m11:"m11",maj11:"maj11",13:"13",m13:"m13",maj13:"maj13",add9:"add9","6/9":"6/9",5:"5","7(♭5)":"7(♭5)","7(♭9)":"7(♭9)","7(♯9)":"7(♯9)",},};