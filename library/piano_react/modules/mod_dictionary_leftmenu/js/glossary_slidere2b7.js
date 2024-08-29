jQuery(document).ready(function(){var leftMenu=Joomla.getOptions('mod_dictionary_leftmenu');var uri=leftMenu.uri;var slider=jQuery('.alfabetiskList');var items=[];var qnt;var l;var l_half;var lv=15;var lv_half=parseInt(lv/2);var step;var block=false;var h=22;function getListItemTpl(item,itemClass)
{var classAttr=(itemClass)?' class = "'+itemClass+'"':'';return '<li'+classAttr+'><a  href="'+uri+item.alias+'" title="'+item.title+'">'+item.title+'</a></li>';};function addListItemToEnd(item,itemClass)
{slider.append(getListItemTpl(item,itemClass));};function addListItemToBegin(item)
{slider.prepend(getListItemTpl(item));};function goToPosition(position)
{slider.animate({top:position},500,function(){block=false;});};function sliderInit(sliderItems)
{items=sliderItems;qnt=items.length;l=(qnt>100)?100:qnt;l_half=Math.round(l/2)-1;step=(qnt>7)?7:0;if(!leftMenu.searchWord&&leftMenu.closWord)
leftMenu.searchWord=leftMenu.closWord;if(leftMenu.searchWord!="")
{var index=0;var add_class='closest';for(var i=0;i<items.length;i++)
{if(items[i].title==leftMenu.searchWord)
{index=i;add_class='active';break;};};for(var i=index-l_half;i<index;i++)
{var newItemIndex=(i>=0)?i:(items.length+i);addListItemToEnd(items[newItemIndex]);};addListItemToEnd(items[index],add_class);for(var i=index+1,j=0;i<index+l_half;i++){if(i<items.length)
{addListItemToEnd(items[i]);}
else
{addListItemToEnd(items[j]);j++;};};}
else
for(var i=0;i<l;i++)
addListItemToEnd(items[i]);var ii=slider.find("li.active").index();if(ii<0)return;scrollTo(ii);};jQuery.get(leftMenu.dataSource,function(data,status){sliderInit(data);},'json');jQuery('.slick-down').click(function(){if(block)return;block=true;var top=slider.position().top;var new_top=top-step*h;var bottom=new_top+slider.height()-lv*h;if(bottom<=0)
{var li=slider.find('li');var fix=step*h;for(var i=0;i<step;i++)
slider.append(li[i]);slider.css('top',top+fix+'px');goToPosition(top);return;};if(qnt>l&&bottom-step*2*h<=0)
{var word=slider.find('li:last-child a').html();var index=0;var li=slider.find('li');for(var i=0;i<items.length;i++)
{if(items[i].title==word){index=i+1;break;}};for(var i=0,j=0;i<step*2;i++)
{if(index+i<items.length)
addListItemToEnd(items[index+1]);else
{addListItemToEnd(items[j]);j++;};li[i].remove();};slider.css('top',top+step*2*h+'px');new_top=new_top+step*2*h;goToPosition(new_top);return;};goToPosition(new_top);});jQuery('.slick-up').click(function(){if(block)return;block=true;var top=slider.position().top;var new_top=top+step*h;if(new_top<0)
{goToPosition(new_top);return;};if(qnt>l)
{var word=slider.find('li:first-child a').html();var li=slider.find('li');var index=0;for(var i=0;i<items.length;i++)
{if(items[i].title==word){index=i-1;break;};};for(var i=l-1;i>=l-step*2;i--,index--)
{var newItemIndex=(index>=0)?index:(items.length+index);addListItemToBegin(items[newItemIndex]);li[i].remove();};slider.css('top',top-step*2*h+'px');new_top=new_top-step*2*h;goToPosition(new_top);}
else
{var li=slider.find('li');var fix=step*h;for(var i=l-1;i>l-step-1;i--)
addListItemToBegin(li[i]);slider.css('top',top-fix+'px');goToPosition(top);};});function scrollTo(index)
{var top=(index-lv_half)*h;if(index<=lv_half)return;var bottom=-top+slider.height()-lv*h;if(bottom>0)
{goToPosition(-top);return;};var li=slider.find('li');var fix=step*h;for(var i=0;i<step;i++)
slider.append(li[i]);goToPosition(-top+fix);};});