import Matter from "matter-js";

let tick = 0;
let pose = 0;

const Physics = (entities, { touches, time }) => {
    let engine = entities.physics.engine;
    let bird = entities.bird.body;

    let hadTouches = false;
    touches.filter(t => t.type === "press").forEach(t => {
        console.log(bird.position);
        hadTouches = true;
        // Matter.Body.applyForce( bird, bird.position, {x: 0.00, y: -1});
        Matter.Body.setVelocity( bird, {
            x: bird.velocity.x,
            y: -10
        });
    });

    for(let i=1; i<=4; i++){
        if (entities["pipe" + i].body.position.x <= -1 * (Constants.PIPE_WIDTH / 2)){
            Matter.Body.setPosition( entities["pipe" + i].body, {x: Constants.MAX_WIDTH * 2 - (Constants.PIPE_WIDTH / 2), y: entities["pipe" + i].body.position.y});
        } else {
            Matter.Body.translate( entities["pipe" + i].body, {x: -1, y: 0});
        }
    }

    Matter.Engine.update(engine, time.delta);

    tick++;
    if (tick % 10 === 0) {
        pose++;
        if (pose > 3) {
            pose = 1;
        }
        entities.bird.pose = pose;
    }

    return entities;
};

export default Physics;