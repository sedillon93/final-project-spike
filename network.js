const {Layer, Network} = require ('synaptic');

const inputLayer = new Layer(5);
const firstHiddenLayer = new Layer(4);
const secondHiddenLayer = new Layer(3);
const thirdHiddenLayer = new Layer(2);
const outputLayer = new Layer(1);

let testArray = [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20, 0.21, 0.22, 0.23, 0.24, 0.25];

inputLayer.project(firstHiddenLayer, Layer.connectionType.ALL_TO_ALL);
firstHiddenLayer.project(secondHiddenLayer, Layer.connectionType.ALL_TO_ALL);
secondHiddenLayer.project(thirdHiddenLayer, Layer.connectionType.ALL_TO_ALL);
thirdHiddenLayer.project(outputLayer, Layer.connectionType.ALL_TO_ALL);

let neuralNetwork = new Network({
  input: inputLayer,
  hidden: [firstHiddenLayer, secondHiddenLayer, thirdHiddenLayer],
  output: outputLayer,
});

const LEARNING_RATE = 0.2;

for(let i = 0; i < 200000; i++){
  for(let j = 0; j < testArray.length - 6; j++){
    neuralNetwork.activate(testArray.slice(j, j + 5));
    neuralNetwork.propagate(LEARNING_RATE, [testArray[j + 6]]);
  }
}

neuralNetwork.activate(testArray.slice(testArray.length - 5, testArray.length));
console.log(neuralNetwork.activate(testArray.slice(testArray.length - 5, testArray.length)));
