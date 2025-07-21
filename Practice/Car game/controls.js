 class Controls{
    constructor(type){
        this.forward=false;
        this.reverse=false;
        this.left=false;
        this.right=false;

        switch(type){
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward=true;
                break;
        }

    } 
    #addKeyboardListeners(){
        //we r using the # bcz these r the private method and we cant use it outside the controls class
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                case "a":
                case "A":
                    this.left=true;
                    break;
                case "ArrowRight":
                case "d":
                case "D":
                    this.right=true;
                    break;
                case "ArrowUp":
                case "w":
                case "W":
                    this.forward=true;
                    break;
                case "ArrowDown":
                case "s":
                case "S":
                    this.reverse=true;
                    break;
            }
            //console.table(this);
            console.log(event.key);
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                case "a":
                case "A":
                    this.left=false;
                    break;
                case "ArrowRight":
                case "d":
                case "D":
                    this.right=false;
                    break;
                case "ArrowUp":
                case "w":
                case "W":
                    this.forward=false;
                    break;
                case "ArrowDown":
                case "S":
                case "s":
                    this.reverse=false;
                    break;
            }
            //console.table(this);
        }
        
    }
}