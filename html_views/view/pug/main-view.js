function mainTemplate(locals) { var pug_html = "",
        pug_mixins = {},
        pug_interp;
    pug_html = pug_html + "\u003Cdiv id=\"main-view\"\u003E\u003Cinput id=\"toggle\" type=\"checkbox\" name=\"toggle\"\u002F\u003E\u003Clabel for=\"toggle\"\u003E\u003C\u002Flabel\u003E\u003Cdiv class=\"container\"\u003E\u003Cdiv id=\"main\"\u003E\u003Cp id=\"title\"\u003EDISCOVER NEW TASTES\u003C\u002Fp\u003E\u003Cdiv id=\"icon-carousel\"\u003E\u003Cimg class=\"icon\" src=\".\u002Fimages\u002Ficons\u002Fchineese.png\"\u002F\u003E\u003Cimg class=\"icon\" src=\".\u002Fimages\u002Ficons\u002Fbread.png\"\u002F\u003E\u003Cimg class=\"icon\" src=\".\u002Fimages\u002Ficons\u002Fred_vine.png\"\u002F\u003E\u003Cimg class=\"icon\" src=\".\u002Fimages\u002Ficons\u002Fmuffin.png\"\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cvideo id=\"bgvid\" playsinline=\"\" autoplay=\"\" muted=\"\" loop=\"\"\u003E\u003Csource src=\".\u002Fimages\u002FfoodPreparing.mp4\" type=\"video\u002Fmp4\"\u002F\u003E\u003C\u002Fvideo\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"message\" id=\"mainPageSearch\"\u003E\u003Cinput id=\"food\" type=\"text\" name=\"food\" placeholder=\"SEARCH FOOD\"\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";; return pug_html; }