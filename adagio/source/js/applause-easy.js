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
        let key = window.location.pathname + '#' + id;
        let browserCounter = 0;
        if (!AV) { alert('AV module is not registered.')}
        try {
            AV.init(appId, appKey);
        }
        catch(err) {
            console.log(err);
        }
        document.getElementById(id).innerHTML = `<div style="margin: 0 auto; text-align: center;"><span id="${id+'-num'}">0</span></div>
            <div style="margin: 0 auto; text-align: center;"><img id="${id+'-btn'}" src="${img_src}" style="width: ${img_width}; height: ${img_height}; border-style: solid; border-width: 1px; border-radius: 50%; cursor: pointer;"/></div>`;
        document.getElementById(id+'-btn').addEventListener('click', function(){
            let numDOM = document.getElementById(id + '-num');
            numDOM.innerHTML = parseInt(numDOM.innerHTML) + 1;
            animateCSS(('#'+id+'-btn'), 'heartBeat');
            browserCounter += 1;
            if (browserCounter > trigger_every) {
                trigger_fun();
            }
        });
        document.getElementById(id+'-btn').addEventListener('mouseout', function(){
            updateRemote(key, browserCounter);
            browserCounter = 0;
        })

        let fetchRemote = function(key, id) {
            let Applause = AV.Object.extend('Applause');
            let query = new AV.Query('Applause');
            query.equalTo('key', key);
            query.first().then(
                function (applause) {
                    if (applause) {
                        console.log(applause);
                        let dom = document.getElementById(id + '-num');
                            let fastIncrease = setInterval(function(){
                            dom.innerHTML = parseInt(dom.innerHTML) + 1;
                            if (dom.innerHTML >= applause.attributes.counter) {
                                clearInterval(fastIncrease)
                            }
                        }, 3)
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


        let animateCSS = function (element, animationName, callback) {
            const node = document.querySelector(element)
            node.classList.add('animated', animationName, 'faster')

            function handleAnimationEnd() {
                node.classList.remove('animated', animationName, 'faster')
                node.removeEventListener('animationend', handleAnimationEnd)
                if (typeof callback === 'function') callback()
            }
            node.addEventListener('animationend', handleAnimationEnd)
        }
    }
}
