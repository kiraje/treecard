/*
 * Copyright 2011-2020 TreeCardGames 
 * All rights reserved.
 * http://www.treecardgames.com
 *
*/

function tcgEmlSupp() {
   var s1 = "support_team";
   var s2 = Math.pow(2,6);
   var s3 = String.fromCharCode(s2);
   var s4 = "treecardgames.com";
   var sEmail = s1 + String.fromCharCode(s2) + s4 + ">" + s1 + s3 + s4;
   return "<a href=" + "mai" + "lto" + ":" + sEmail + "</a>"
}                     

function tcgReadLanguageQueryString(queryString) {
    const urlParams = new URLSearchParams(queryString);
    var language = urlParams.get('lang')
    if (!language) {
       language = 'en';
    }
    return language;
}

function tcgLoadPrivacyContent(platform, gfc) {

    var paths = window.location.pathname.split("/");
    language = paths[2];

    tcgAddItemsSelectLanguage("privacyLang");    
    document.getElementById("privacyLang").value = language;    

    $("#privacy_content_top").load("/privacy/" + language + "/content/privacy_content_top.htm");
    $("#privacy_content_adv").load("/privacy/" + language + "/content/privacy_content_adv_" + platform + ".htm");

    //if (gfc =! '') {
    //  $("#privacy_content_gfc_" + platform).load("/privacy/" + language + "/content/privacy_content_gfc_"  + platform + ".htm");
    //}    

    jQuery.ajax({
        url: "/privacy/" + language + "/content/privacy_content_bot.htm",
        success: function(data) {
            var em = tcgEmlSupp();
            data = data.replace(new RegExp("-contactEmail-", "gi"), em);
            jQuery("#privacy_content_bot").html(data);
        }
        });
}


function replaceContactEmail() {
    var em = tcgEmlSupp();    
    document.body.innerHTML = document.body.innerHTML.replace('-contactEmail-',em);
}


function tcgAddItemsSelectLanguage(elementId) {
    var i;

    var items = [
    ['en','English'],
    ['cs','Čeština'],
    ['da','Dansk'],
    ['de','Deutsch'],
    ['es','Español'],
    ['fr','Français'],
    ['it','Italiano'],
    ['hu','Magyar'],
    ['nl','Nederlands'],
    ['nb','Norsk'],
    ['pl','Polski'],
    ['pt','Português'],
    ['fi','Suomi'],
    ['sv','Svenska'],
    ['tr','Türkçe'],
    ['el','Ελληνικά'],
    ['ru','Русски'],
    ['uk','Українська'],    
    ['he','עברית'],
    ['hi','हिंदी'],
    ['th','ไทย'],
    ['ja','日本の'],
    ['zh-hans','简体中文'],
    ['zh-hant','繁體中文']
    ];

    for (i = 0; i < items.length; i++)
    { 
         $('#' + elementId).append($('<option>',
         {
            value: items[i][0],
            text : items[i][1] 
        }));
    }
    
}


function tcgOpenPrivacyLangPage() {
    var lang = document.getElementById("privacyLang").value;
    window.open("/privacy/" + lang + "/privacy.htm","_self"); 
}