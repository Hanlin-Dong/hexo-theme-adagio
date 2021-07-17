$(document).ready(function() {
    new ApplauseEasy({
        id: 'applause-easy',
        appId: "<%- theme.applause_easy_appId %>",
        appKey: "<%- theme.applause_easy_appKey %>",
        img_src: "<%- url_for(theme.clap_button) %>",
        img_width: "50px",
        img_height: "50px",
        trigger_every: 20,
        trigger_fun: () => {alert("Thanks!");}
    })
})