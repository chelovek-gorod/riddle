'use strict';

const CONTAINER = document.getElementById('container');
const CANVAS = document.getElementById('canvas');
const FULL_SCREEN_POPUP = document.getElementById('fullScreenPopup');

const CTX = CANVAS.getContext('2d');

const CANVAS_MAX_WIDTH = 1408;
const CANVAS_MAX_HEIGHT = 768;
const CANVAS_STEP_SIZE = 128;
const SCROLL_LINE_SIZE = 10;
let canvasK = 1;

FULL_SCREEN_POPUP.addEventListener('click', toggleFullScreen);

addEventListener('fullscreenchange', showFullScreenPopup);

function showFullScreenPopup () {
    if (!document.fullscreenElement) {
        CONTAINER.style.display = 'none';
        FULL_SCREEN_POPUP.style.display = 'block';
    }
    console.log('Full screen is set!');
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        FULL_SCREEN_POPUP.style.display = 'none';
        CONTAINER.style.display = 'block';
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
    if (room.frame) room.frame = 0;
}

function setCanvasSize() {
    if (window.screen.height < (CANVAS_MAX_HEIGHT + SCROLL_LINE_SIZE))
        canvasK = (window.screen.height - SCROLL_LINE_SIZE) / CANVAS_MAX_HEIGHT;
    else
        canvasK = 1;

    CANVAS.width = canvasK * CANVAS_MAX_WIDTH;
    CANVAS.height = canvasK * CANVAS_MAX_HEIGHT;
    console.log('canvasK =', canvasK);
    if (room.frame) room.frame = 0;
}

setCanvasSize();

window.addEventListener('resize', setCanvasSize, false);

const room = new Image();
room.src = './src/images/room0_16_frames.png';
room.frame = 0; // frame numbers [0...15]

room.objects = [
    {
        name : 'ladder', frame : 1,
        points : [{x: 0, y: 3}, {x: 0, y: 4}, {x: 1, y: 3}, {x: 1, y: 4}, {x: 2, y: 3}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 3, y: 1}, {x: 4, y: 1}]
    },
    {
        name : 'pillow', frame : 2,
        points : [{x: 1, y: 5}]
    },
    {
        name : 'note1', frame : 3,
        points : [{x: 2, y: 5}]
    },
    {
        name : 'note2', frame : 4,
        points : [{x: 3, y: 5}]
    },
    {
        name : 'note3', frame : 5,
        points : [{x: 4, y: 5}, {x: 5, y: 5}]
    },
    {
        name : 'bottle', frame : 6,
        points : [{x: 2, y: 4}]
    },
    {
        name : 'sofa', frame : 7,
        points : [{x: 3, y: 3}, {x: 3, y: 4}, {x: 4, y: 3}, {x: 4, y: 4}]
    },
    {
        name : 'stick', frame : 8,
        points : [{x: 5, y: 2}, {x: 5, y: 3}]
    },
    {
        name : 'locker', frame : 9,
        points : [{x: 6, y: 2}]
    },
    {
        name : 'box1', frame : 10,
        points : [{x: 6, y: 3}]
    },
    {
        name : 'box2', frame : 11,
        points : [{x: 7, y: 3}]
    },
    {
        name : 'board', frame : 12,
        points : [{x: 7, y: 1}, {x: 7, y: 2}]
    },
    {
        name : 'bucket', frame : 13,
        points : [{x: 8, y: 4}]
    },
    {
        name : 'paper', frame : 14,
        points : [{x: 7, y: 4}]
    },
    {
        name : 'rag', frame : 15,
        points : [{x: 9, y: 3}]
    }
];

room.objects.forEach(object => {
    object.points.forEach(point => {
        point.x *= CANVAS_STEP_SIZE;
        point.y *= CANVAS_STEP_SIZE;
    })
});

let objectsSize = room.objects.length;

function onObject(points) {
    let onPointIs = false;
    points.forEach(point => {
        if (cursorX > (point.x) && cursorX < (point.x + CANVAS_STEP_SIZE)) {
            if (cursorY > (point.y) && cursorY < (point.y + CANVAS_STEP_SIZE)) {
                onPointIs =true;
            }
        }
    });
    return onPointIs;
}

/***************
    CURSOR
*/

let cursorX = CANVAS.width / 2;
let cursorY = CANVAS.height / 2;

CANVAS.addEventListener('click', function(event) {
    const rect = CANVAS.getBoundingClientRect()
    cursorX = (event.clientX - rect.left) / canvasK;
    cursorY = (event.clientY - rect.top) / canvasK;

    console.log('cursorX =', cursorX, '; cursorY =', cursorY);

    let findIs = false;
    let iteration = 0;
    while(iteration < objectsSize) {
        findIs = onObject(room.objects[iteration].points);
        if (findIs) {
            room.frame = room.objects[iteration].frame;
            console.log(room.objects[iteration].name);
            break;
        }
        iteration++;
    }
    if (!findIs) room.frame = 0;
}, false);

/***************
    ANIMATION
*/

let frame = 0;

function animate() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    CTX.drawImage(
        room,
        room.frame * CANVAS_MAX_WIDTH, 0, CANVAS_MAX_WIDTH, CANVAS_MAX_HEIGHT,
        0, 0, CANVAS.width, CANVAS.height
    );

    frame++;
    window.requestAnimationFrame(animate);
}

animate();