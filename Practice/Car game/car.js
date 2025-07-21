class Car{
    constructor(x,y,width,height,controltype,maxspeed=3,color="blue"){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.speed=0;
        this.acceleration=0.2;
        this.maxspeed=maxspeed;
        this.friction=0.05;
        this.angle=0;
        this.damaged=false;

        this.usebrain=controltype=="AI";

        if(controltype!="DUMMY"){
            this.sensor=new Sensor(this);
            this.brain=new NeuralNetwork(
                [this.sensor.raycount,6,4]
            );
        }
        this.controls=new Controls(controltype);

        this.img=new Image();
        this.imgLoaded = false;
        this.img.onload = () => {
            this.imgLoaded = true;
            maskctx.fillStyle=color;
            maskctx.rect(0,0,this.width,this.height);
            maskctx.fill();

            maskctx.globalCompositeOperation="destination-atop";
            maskctx.drawImage(this.img,0,0,this.width,this.height);
        };
        this.img.src="car.png";

        this.mask=document.createElement("canvas");
        this.mask.width=width;
        this.mask.height=height;

        const maskctx=this.mask.getContext("2d");
    }

    // ...existing code...

    draw(ctx,drawsensor=false){
        if(this.sensor && drawsensor){
            this.sensor.draw(ctx);
        }
        
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);
        if(!this.damaged && this.imgLoaded){
            ctx.drawImage(this.mask,
                -this.width/2,
                -this.height/2,
                this.width,
                this.height
            );
            ctx.globalCompositeOperation="multiply";
        }
        if(this.imgLoaded){
            ctx.drawImage(this.img,
                -this.width/2,
                -this.height/2,
                this.width,
                this.height
            );
        }
        ctx.restore();
    }
};