function recipeTemplate(locals) { var pug_html = "",
        pug_mixins = {},
        pug_interp;
    pug_html = pug_html + "\u003Cdiv id=\"recipe-view\"\u003E\u003Cdiv id=\"recipe-title\"\u003ESASHIMI\u003C\u002Fdiv\u003E\u003Cdiv id=\"recipe-subtitle\"\u003EYokuro Tanaka\u003C\u002Fdiv\u003E\u003Cdiv id=\"recipes-swipe\"\u003E\u003Cimg class=\"arrow\" id=\"arrow-back\" src=\"images\u002Fleft_arrow.png\" alt=\"Food\"\u002F\u003E\u003Cdiv class=\"recipe-preview\" id=\"image-back\"\u003E\u003Cimg class=\"recipe-picture\" src=\"images\u002F1.jpg\" alt=\"Food\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"recipe-preview\" id=\"image-actual\"\u003E\u003Cimg class=\"recipe-picture\" src=\"images\u002F2.jpg\" alt=\"Food\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"recipe-preview\" id=\"image-next\"\u003E\u003Cimg class=\"recipe-picture\" src=\"images\u002F3.jpg\" alt=\"Food\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cimg class=\"arrow\" id=\"arrow-next\" src=\"images\u002Fright_arrow.png\" alt=\"Food\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"recipe-text\"\u003E\u003Cdiv id=\"recipe-ingredients\"\u003E\u003Cb\u003EIngredients\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003E- Salt 50g\u003Cbr\u002F\u003E- Fresh Tuna, Salmon\u003Cbr\u002F\u003E- Soy Sauce\u003Cbr\u002F\u003E- Wasabi\u003C\u002Fdiv\u003E\u003Cdiv id=\"recipe-preparation\"\u003E\u003Cb\u003EPreparation\u003C\u002Fb\u003E\u003Cbr\u002F\u003E\u003Cbr\u002F\u003ELorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n                  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"recipe-comments\"\u003E\u003Cdiv class=\"recipe-comments-element\"\u003E\u003Cspan class=\"comment-name\"\u003ESamuele\u003C\u002Fspan\u003E\u003Cspan class=\"comment-text\"\u003ERicetta molto buona, aggiungerei del pepe\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"my-comment\"\u003E\u003Ctextarea rows=\"4\" cols=\"50\"\u003E\u003C\u002Ftextarea\u003E\u003Cbutton type=\"button\"\u003ESubmit\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";; return pug_html; }