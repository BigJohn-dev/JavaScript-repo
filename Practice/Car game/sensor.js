class Sensor{
    constructor(car){
        this.car=car;
        this.raycount=5;
        this.raylength=100;
        this.rayspread=Math.PI/3;
        this.rays=[];
        this.readings=[];
    }
    update(roadborders,traffic){
        this.#castrays();
        this.readings=[];
        for(let i=0;i<this.rays.length;i++){
            this.readings.push(
                this.#getreading(this.rays[i],roadborders,traffic)
            );
        }
    };

    #getreading(ray,roadborders,traffic){
        let touches=[];

        for(let i=0;i<roadborders.length;i++){
            const touch=getIntersection(
                //the getintersection method gives us 3 value return x,y,offset;
                ray[0],ray[1],
                roadborders[i][0],
                roadborders[i][1],
            );
            if(touch){
                touches.push(touch);
            }
        }

        for(let i=0;i<traffic.length;i++){
            const poly=traffic[i].polygon;
            for(let j=0;j<poly.length;j++){
                const value=getIntersection(
                    ray[0],ray[1],poly[j],
                    poly[(j+1)%poly.length]
                );
                if(value){
                    touches.push(value);
                }
            }
        }

        if(touches.length==0){
            return null;
        }else{
            const offsets=touches.map(e=>e.offset); //basically offsets gets the length to where it intersects
            const minoffset=Math.min(...offsets);
            return touches.find(e=>e.offset==minoffset);
        }
    }

    #castrays(){
        this.rays=[];
        for(let i=0;i<this.raycount;i++){
            const rayangle=lerp(
                this.rayspread/2,
                -this.rayspread/2,
                this.raycount==1?0.5:i/(this.raycount-1)
            )+this.car.angle;

            const start={x:this.car.x,y:this.car.y};
            const end={
                x:this.car.x-Math.sin(rayangle)*this.raylength,
                y:this.car.y-Math.cos(rayangle)*this.raylength
            };
            this.rays.push([start,end]);
        }
    };

    draw(ctx){
        for(let i=0;i<this.raycount;i++){

            let end=this.rays[i][1];
            if(this.readings[i]){
                end=this.readings[i];
            }

            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="yellow";
            ctx.moveTo(
                this.rays[i][0].x,
                this.rays[i][0].y
            );
            ctx.lineTo(
                end.x,
                end.y
                // this.rays[i][1].x,
                // this.rays[i][1].y
            );
            ctx.stroke();
            
            
            if(this.readings[i]){
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = "black";
                ctx.moveTo(
                    this.readings[i].x,
                    this.readings[i].y
                );
                ctx.lineTo(
                    this.rays[i][1].x,
                    this.rays[i][1].y
                );
                ctx.stroke();
            }
        }
    };
}; 