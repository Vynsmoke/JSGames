PingPongGame();


function PingPongGame()
{

    var ball;
    var screen; 
    var XWALL, YWALL; 

    Setup();
    Render();

//Mains
    function Setup()
    {
        screen = document.getElementById("MyCanvas").getContext("2d");

        XWALL = 500;
        YWALL = 300;

        ball = new Ball();
        ball.x = 50;
        ball.y = 50;
        ball.directionx = 1;
        ball.directiony = 1;
        ball.speed = 1;

        p1 = new Paddle();
        p1.x = 35;
        p1.y = 50;
        p1.height = 50;

        p2 = new Paddle();
        p2.x = 465;
        p2.y = 50;
        p2.height = 50;

        window.requestAnimationFrame(Render);

    }
    

    function Render()
    {
        
        screen.clearRect(0, 0, 800, 500);
        HandleBall();
        window.requestAnimationFrame(Render);
        
    }

//Handlers
    function HandleBall()
    {
        Collision();

        ball.x += ball.directionx*ball.speed;
        ball.y += ball.directiony*ball.speed;

        screen.beginPath();
        screen.arc(ball.x,ball.y,5,0,2*Math.PI);
        screen.stroke();
    }

    function HandlePlayers()
    {
        
    }

//Collision
    function Collision()
    {
        if ( ball.x > XWALL - 5 || ball.x < 5 )
            ball.directionx *= -1;

        if ( ball.y > YWALL - 5 || ball.y < 5)
            ball.directiony *= -1;

    }


//Classes
    function Ball()
    {
        this.x;
        this.y;
        this.directionx;
        this.directiony;
        this.speed;
    }

    function Paddle()
    {
        this.y;
        this.x;
        this.height;
    }


}