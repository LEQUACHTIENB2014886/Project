var double_sharp=function(color){return('<svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 1px" height="8" width="8" viewBox="0 0 15 15">'+
'<path fill="'+
color+
'" d="M 15.1800003051758, 15.0600051879883 C 15.1800003051758, 15.0600051879883, 15.1800003051758, 10.6800003051758, 15.1800003051758, 10.6800003051758 C 15.1800003051758, 10.6800003051758, 14.6999998092651, 10.6800003051758, 14.6999998092651, 10.6800003051758 C 12.6599998474121, 10.6800003051758, 10.5600004196167, 9.60000610351562, 8.52000045776367, 7.56000518798828 C 10.5, 5.58000183105469, 12.7200002670288, 4.5, 15.1800003051758, 4.3800048828125 C 15.1800003051758, 4.3800048828125, 15.1800003051758, 0, 15.1800003051758, 0 C 15.1800003051758, 0, 10.8000001907349, 0, 10.8000001907349, 0 C 10.8000001907349, 2.28000640869141, 9.72000026702881, 4.5, 7.55999994277954, 6.66000366210937 C 5.46000003814697, 4.56000518798828, 4.38000011444092, 2.34000396728516, 4.38000011444092, 0 C 4.38000011444092, 0, 0, 0, 0, 0 C 0, 0, 0, 4.3800048828125, 0, 4.3800048828125 C 2.33999991416931, 4.3800048828125, 4.55999994277954, 5.46000671386719, 6.65999984741211, 7.56000518798828 C 4.55999994277954, 9.66000366210937, 2.33999991416931, 10.6800003051758, 0, 10.6800003051758 C 0, 10.6800003051758, 0, 15.0600051879883, 0, 15.0600051879883 C 0, 15.0600051879883, 4.38000011444092, 15.0600051879883, 4.38000011444092, 15.0600051879883 C 4.38000011444092, 12.7200012207031, 5.46000003814697, 10.5, 7.55999994277954, 8.40000152587891 C 9.72000026702881, 10.5600051879883, 10.8000001907349, 12.7800064086914, 10.8000001907349, 15.0600051879883 C 15.1800003051758, 15.0600051879883, 15.1800003051758, 15.0600051879883, 15.1800003051758, 15.0600051879883"/>'+
"</svg>");};window.translation={finder_name:"interval finder",button_names:{instrument:{default_name:"Инструмент",names:["Пианино","Гитара","Запись"],},play:"Играть интервал",clef:{default_name:"Ключ",names:["Скрипичный ключ","Басовый ключ","Альтовый ключ","Теноровый ключ"],},},notes_text:"Ноты в интервале:",root_note_accidentals:{Cb:"до-бемоль",C:"до","C#":"до-диез",Db:"ре-бемоль",D:"ре","D#":"ре-диез",Eb:"ми-бемоль",E:"ми","E#":"ми-диез",Fb:"фа-бемоль",F:"фа","F#":"фа-диез",Gb:"соль-бемоль",G:"соль","G#":"соль-диез",Ab:"ля-бемоль",A:"ля","A#":"ля-диез",Bb:"си-бемоль",B:"си","B#":"си-диез",},root_note_green_circle:{Cbb:"до<i class='--accidentals-circle'>¨¨</i>",Cb:"до<i class='--accidentals-circle'>¨</i>",C:"до","C#":"до<i class='--accidentals-circle'>©</i>","C##":"до"+double_sharp("#fff"),Dbb:"ре<i class='--accidentals-circle'>¨¨</i>",Db:"ре<i class='--accidentals-circle'>¨</i>",D:"ре","D#":"ре<i class='--accidentals-circle'>©</i>","D##":"ре"+double_sharp("#fff"),Ebb:"ми<i class='--accidentals-circle'>¨¨</i>",Eb:"ми<i class='--accidentals-circle'>¨</i>",E:"ми","E#":"ми<i class='--accidentals-circle'>©</i>","E##":"ми"+double_sharp("#fff"),Fbb:"фа<i class='--accidentals-circle'>¨¨</i>",Fb:"фа<i class='--accidentals-circle'>¨</i>",F:"фа","F#":"фа<i class='--accidentals-circle'>©</i>","F##":"фа"+double_sharp("#fff"),Gbb:"<span style='font-size:11px'>соль<i class='--accidentals-circle'>¨¨</i></span>",Gb:"<span style='font-size:11px'>соль<i class='--accidentals-circle'>¨</i></span>",G:"<span style='font-size:12px'>соль</span>","G#":"<span style='font-size:11px'>соль<i class='--accidentals-circle'>©</i></span>","G##":"<span style='font-size:11px'>соль</span>"+double_sharp("#fff"),Abb:"ля<i class='--accidentals-circle'>¨¨</i>",Ab:"ля<i class='--accidentals-circle'>¨</i>",A:"ля","A#":"ля<i class='--accidentals-circle'>©</i>","A##":"ля"+double_sharp("#fff"),Bbb:"си<i class='--accidentals-circle'>¨¨</i>",Bb:"си<i class='--accidentals-circle'>¨</i>",B:"си","B#":"си<i class='--accidentals-circle'>©</i>","B##":"си"+double_sharp("#fff"),},guitarSettings:{open_string_fret_width:"100%",open_string_notes_guitar:["ми","ля","ре","соль","си","ми"],},text_before_root_note:"",text_after_root_note:" ",root_note_dropdown:{C:"до",D:"ре",E:"ми",F:"фа",G:"соль",A:"ля",B:"си",},element_dropdown:{unison:"прима",minor_second:"малая секунда",major_second:"большая секунда",minor_third:"малая терция",major_third:"большая терция",perfect_fourth:"чистая кварта",augmented_fourth:"увеличенная кварта",diminished_fifth:"уменьшенная квинта",perfect_fifth:"чистая квинта",minor_sixth:"малая секста",major_sixth:"большая секста",minor_seventh:"малая септима",major_seventh:"большая септима",octave:"октава",minor_ninth:"малая нона",major_ninth:"большая нона",minor_tenth:"малая децима",major_tenth:"большая децима",},};