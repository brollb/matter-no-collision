/*globals Car*/
var engine;
var replay = function() {
    var shiftX = 500,
        shiftY = 400,
        replayer = new Replayer(),
        actions = ACTIONS;

    // Create the netsblox env
    engine = Matter.Engine.create({
        render: {
            element: document.body,
            options: {
                width: 1800,
                height: 900,
                hasBounds: true  // FIXME: I shouldn't have to say this..
            },
            bounds: {
                min: {
                    x: -720,
                    y: -540
                },
                max: {
                    x: 720,
                    y: 540
                }
            }
        }
    });
    Matter.Engine.run(engine);

    // convert engine create command to my own
    replayer.engine = engine;
    replayer.world = engine.world;

    replayer.play(actions, {
        speed: 10,
        count: 13
    });
};

var main = replay;
