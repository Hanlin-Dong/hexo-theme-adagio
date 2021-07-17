class ApplauseEasy {
    constructor(app) {
        let id = app.id;
        let appId = app.appId;
        let appKey = app.appKey;
        let img_src = app.img_src;
        let img_width = app.img_width;
        let img_height = app.img_height;
        let trigger_every = app.trigger_every;
        let trigger_fun = app.trigger_fun;
        let counter = 0;
        let key = window.location.pathname + '#' + id;
        let browserCounter = 0;
        if (!AV) { console.log('AV module is not registered.')}
        try {
            AV.init(appId, appKey);
        }
        catch(err) {
            console.log(err);
        }

        document.getElementById(id).innerHTML = `<div class="applause-number"><span id="${id+'-num'}">0</span></div>
            <div class="applause-container">
                <div class="applause-wrapper">
                <img id="${id+'-btn'}" src="${img_src}" style="width: ${img_width}; height: ${img_height}; "/>
                </div>
            </div>`;
        
        document.getElementById(id+'-btn').addEventListener('click', function(){
            let numDOM = document.getElementById(id + '-num');
            numDOM.innerHTML = parseInt(numDOM.innerHTML) + 1;
            browserCounter += 1;
            if (browserCounter > trigger_every) {
                trigger_fun();
            }
        });
        document.getElementById(id+'-btn').addEventListener('mouseout', function(){
            updateRemote(key, browserCounter);
            counter += browserCounter;
            browserCounter = 0;
        })

        let fetchRemote = function(key, id) {
            let Applause = AV.Object.extend('Applause');
            let query = new AV.Query('Applause');
            query.equalTo('key', key);
            query.first().then(
                function (applause) {
                    if (applause) {
                        let target = applause.attributes.counter;
                        let targetStr = target.toString();
                        let dom = document.getElementById(id + '-num');
                        let digits = targetStr.length;
                        dom.innerHTML = Array(digits).fill("0").join("");
                        let i = 0;
                        let fastIncrease = setInterval(function(){
                            let currentHTML = dom.innerHTML;
                            if (currentHTML[i] < targetStr[i]) {
                                let newNum = parseInt(currentHTML[i]) + 1;
                                dom.innerHTML = currentHTML.substring(0, i) + newNum.toString() + currentHTML.substring(i+1, digits);
                            } else {
                                i += 1;
                                if (i >= digits) {
                                    clearInterval(fastIncrease);
                                }
                            }
                        }, 50)
                    } else {
                        let applause = new Applause();
                        applause.set('key', key);
                        applause.set('counter', 0);
                        applause.save().then(
                            function () {
                                console.log('Creation successful.' + key);
                            },
                            function (err) {
                                console.log(err);
                            }
                        )
                    }
                },
                function (err) {
                    console.log(err);
                }
            )
        }

        fetchRemote(key, id);

        let updateRemote = function(key, step) {
            let query = new AV.Query('Applause');
            query.equalTo('key', key);
            query.first().then(
                function(applause) {
                    if (applause) {
                        applause.increment('counter', step);
                        applause.save().then(
                            function() {
                                console.log(`Applause at key ${key} increased by ${step} successfully.`);
                            },
                            function(err) {
                                console.log(err);
                            }
                        )
                    }
                },
                function(err) {
                    console.log(err);
                }
            )
        }
    }
}
