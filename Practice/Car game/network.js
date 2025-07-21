//this class will create a neuron tree to make decision. the class level creates the levels of logical thinking process of a machine in this project we need 2 levels. the first one created in Level class its task is to take inputs process to some possible values of sum and establish connections. the neuralnetwork callbacks the level class again an again to get a desired output, to make the final decision in the preseted or defined work to perform like for this project in second stage the final decision is forword,reverse,left and right.
class NeuralNetwork{
    constructor(neuroncounts){
        this.levels=[];
        for(let i=0;i<neuroncounts.length-1;i++){
            this.levels.push(new Level(
                neuroncounts[i],neuroncounts[i+1]
            ));
        }
    }

    static feedforward(giveninputs,network){
        let outputs=Level.feedforward(giveninputs,network.levels[0]);//takes the 1st stage o/p as i/p
        for(let i=1;i<network.levels.length;i++){
            outputs=Level.feedforward(outputs,network.levels[i]);// processes and give final o/p
        }
        return outputs;
    }

    static mutate(network,amount=1){
        network.levels.forEach(level => {
            for(let i=0;i<level.biases.length;i++){
                level.biases[i]=lerp(
                    level.biases[i],
                    Math.random()*2-1,
                    amount
                )
            }
            for(let i=0;i<level.weights.length;i++){
                for(let j=0;j<level.weights[i].length;j++){
                    level.weights[i][j]=lerp(
                        level.weights[i][j],
                        Math.random()*2-1,
                        amount
                    )
                }
            }
        });
    }
};

// now this is the main file where the neural logic and decision making takes place and the sensors data is processed to take a decision for the self driving purpose
class Level{
    //constructor to initialize the basics to setup the logic like the input processed to output, the biases is the threshold for links in between the inputs and outputs to connect and the weights is the data weightage or decision strength to be taken to fullfill the threshold
    constructor(inputcount,outputcount){
        this.inputs=new Array(inputcount);
        this.outputs=new Array(outputcount);
        this.biases=new Array(outputcount);

        this.weights=[];
        for(let i=0;i<inputcount;i++){
            this.weights[i]=new Array(outputcount);
        }
        Level.#randomize(this);
    }

    //right now the weights in the biases is random we just know the input offsets coming from the sensor then randomize gives the priority decision in this case which turn to take if negative no ie. dont turn there or its the road boundary
    static #randomize(level){
        for(let i=0;i<level.inputs.length;i++){
            for(let j=0;j<level.outputs.length;j++){
                level.weights[i][j]=Math.random()*2-1;
            }
        }
        for(let i=0;i<level.biases.length;i++){
            level.biases[i]=Math.random()*2-1;
        }
    }

    //till now everything is random now we will right the real code for these decision makings

    static feedforward(giveninputs,level){
        for(let i=0;i<level.inputs.length;i++){
            level.inputs[i]=giveninputs[i];//inputs from the sensor
        }
        //decision maker
        for(let i=0;i<level.outputs.length;i++){
            let sum=0;
            for(let j=0;j<level.inputs.length;j++){
                sum+=level.inputs[j]*level.weights[j][i];
                //the sum is the product of the jth input level with the diff of weight at j,i level of every input neuron into sum                
            }
            if(sum>level.biases[i]){
                level.outputs[i]=1;// basically if the sum is greater than the weight to that input-output neuron, then make the connection true and take that decision.
            }else{
                level.outputs[i]=0;//else no connection
            }
        }
        return level.outputs;
    }
};