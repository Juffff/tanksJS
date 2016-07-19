window.onload = game;

var scaleFactor = 2;

var brick = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
var steel = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
var grass = [new Image()];
var road = [new Image()];
var water = [new Image()];
var bg = [new Image()];
var st = [new Image()];
var tank = [new Image()];
//var huy = [new Image()];

brick[0].src = "img/brick0.png";
brick[1].src = "img/brick1.png";
brick[2].src = "img/brick2.png";
brick[3].src = "img/brick3.png";
brick[4].src = "img/brick4.png";
brick[5].src = "img/brick5.png";
brick[6].src = "img/brick6.png";
brick[7].src = "img/brick7.png";
brick[8].src = "img/brick8.png";

steel[0].src = "img/steel0.png";
steel[1].src = "img/steel1.png";
steel[2].src = "img/steel2.png";
steel[3].src = "img/steel3.png";
steel[4].src = "img/steel4.png";

grass[0].src = "img/grass0.png";

road[0].src = "img/road0.png";

water[0].src = "img/water0.png";

bg[0].src = "img/bg0.png";

st[0].src = "img/st0.png";


tank[0].src = "img/tank0.png";

//huy[0].src = "img/huy0.png";


function game() {

    var gameWidth = 832*scaleFactor;
    var gameHeight = 832*scaleFactor;


    var level = [
        ["00", "00", "g0", "s1", "g0","00", "00", "00", "g0", "s1","g0","00","00"],
        ["b4", "00", "s0", "s4", "s2","g0", "s1", "g0", "s0", "s4","s2","00","b4"],
        ["00", "00", "00", "s3", "00","s0", "s4", "s2", "00", "s3","00","00","00"],
        ["00", "00", "00", "00", "00","w0", "s3", "w0", "00", "00","00","00","00"],
        ["00", "00", "00", "00", "00","00", "r0", "00", "00", "00","00","00","00"],
        ["00", "00", "00", "g0", "s1","g0", "r0", "g0", "s1", "g0","00","00","00"],
        ["s4", "b4", "00", "s0", "s4","s2", "r0", "s0", "s4", "s2","00","b4","s4"],
        ["00", "00", "00", "g0", "s3","g0", "r0", "g0", "s3", "g0","00","00","00"],
        ["00", "00", "00", "00", "00","00", "r0", "00", "00", "00","00","00","00"],
        ["b4", "00", "00", "00", "00","00", "r0", "00", "00", "00","00","00","b4"],
        ["b4", "00", "00", "00", "00","00", "r0", "00", "00", "00","00","00","b4"],
        ["00", "00", "b1", "00", "00","b8", "b1", "b7", "00", "00","b1","00","00"],
        ["00", "00", "b4", "b4", "t0","b0", "st", "b2", "00", "b4","b4","00","00"]
    ];
    //Material


    //MAP
    var map = document.createElement("canvas");
    var ctxMap = map.getContext("2d");
    map.width = gameWidth;
    map.height = gameHeight;
    document.body.appendChild(map);


    //ctxMap.fillStyle = "black";
    // ctxMap.fillRect(0,0,gameHeight,gameWidth);
    //ctxMap.drawImage(brick,0,0,8,8,0,0,80,80);
    // ctxMap.drawImage(brick,0,0,8,8,80,0,80,80);

    /*   ctxMap.drawImage(brick,0,0,8,8,0,0,80,80);
     ctxMap.drawImage(brick,0,0,8,8,0,80,80,80);
     ctxMap.drawImage(brick,0,0,8,8,0,160,80,80);

     ctxMap.drawImage(brick,0,0,8,8,0,0,80,80);
     ctxMap.drawImage(brick,0,0,8,8,80,80,80,80);
     ctxMap.drawImage(brick,0,0,8,8,160,160,80,80);*/

   // ctxMap.drawImage(brick[0],0,0,64,64,0,0,64,64);

    function selectMaterialSource(option) {

        switch (option) {
            case "b2":
            {
                return brick[2];
            }
        }
    }
    ctxMap.fillStyle = "black";
    ctxMap.fillRect(0,0,gameWidth, gameHeight);
    function fillMap() {

        ctxMap.fillStyle = "black";

        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                console.log(i + " " + j);

                //bg
                if (level[i][j] == "00")ctxMap.drawImage(bg[0], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);


                //bricks
                if (level[i][j] == "b0")ctxMap.drawImage(brick[0], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "b1")ctxMap.drawImage(brick[1], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "b2")ctxMap.drawImage(brick[2], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "b3")ctxMap.drawImage(brick[3], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "b4")ctxMap.drawImage(brick[4], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "b5")ctxMap.drawImage(brick[5], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "b6")ctxMap.drawImage(brick[6], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "b7")ctxMap.drawImage(brick[7], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "b8")ctxMap.drawImage(brick[8], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);

                if (level[i][j] == "s0")ctxMap.drawImage(steel[0], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "s1")ctxMap.drawImage(steel[1], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "s2")ctxMap.drawImage(steel[2], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "s3")ctxMap.drawImage(steel[3], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "s4")ctxMap.drawImage(steel[4], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "s5")ctxMap.drawImage(steel[5], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "s6")ctxMap.drawImage(steel[6], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "s7")ctxMap.drawImage(steel[7], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);
                if (level[i][j] == "s8")ctxMap.drawImage(steel[8], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);

                if (level[i][j] == "g0")ctxMap.drawImage(grass[0], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);

                if (level[i][j] == "w0")ctxMap.drawImage(water[0], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);

                if (level[i][j] == "r0")ctxMap.drawImage(road[0], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);

                if (level[i][j] == "st")ctxMap.drawImage(st[0], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);

                if (level[i][j] == "t0")ctxMap.drawImage(tank[0], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);

              //  if (level[i][j] == "h0")ctxMap.drawImage(huy[0], 0, 0, 64, 64, j * 64 * scaleFactor, i * 64 * scaleFactor, 64 * scaleFactor, 64 * scaleFactor);

            }
        }
    }

    fillMap();


}