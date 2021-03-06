(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(t){function n(n){return"boolean"==typeof n&&(n={add:n,update:n}),"object"!=typeof n&&(n={}),n=t.extend(!0,{},t[i].defaults[c],n),n.count&&(t[i].deprecated('the option "count" for counters','the option "update"'),n.update=n.count),n}function e(t){return t}function o(){d=!0,s=t[i]._c,a=t[i]._d,u=t[i]._e,s.add("counter search noresultsmsg"),r=t[i].glbl}var s,a,u,r,i="mmenu",c="counters",d=!1;t[i].prototype["_addon_"+c]=function(){d||o(),this.opts[c]=n(this.opts[c]),this.conf[c]=e(this.conf[c]);var u=this,r=this.opts[c];if(this.conf[c],this.__refactorClass(t("em",this.$menu),this.conf.classNames[c].counter,"counter"),r.add&&t("."+s.panel,this.$menu).each(function(){var n=t(this),e=n.data(a.parent);if(e){var o=t('<em class="'+s.counter+'" />'),u=e.find("> a."+s.subopen);u.parent().find("em."+s.counter).length||u.before(o)}}),r.update){var i=t("em."+s.counter,this.$menu);i.each(function(){var n=t(this),e=t(n.next().attr("href"),u.$menu);if(e.is("."+s.list)||(e=e.find("> ."+s.list)),e.length){var o=function(){var t=e.children().not("."+s.label).not("."+s.subtitle).not("."+s.hidden).not("."+s.search).not("."+s.noresultsmsg);n.html(t.length)};o(),u._update(o)}})}},t[i].addons=t[i].addons||[],t[i].addons.push(c),t[i].defaults[c]={add:!1,update:!1},t[i].configuration.classNames[c]={counter:"Counter"}}(jQuery);
}));