const {Layer, Network} = require ('synaptic');

const inputLayer = new Layer(6);
const hiddenLayer = new Layer(4);
const outputLayer = new Layer(3);

inputLayer.project(hiddenLayer, Layer.connectionType.ALL_TO_ALL);
hiddenLayer.project(outputLayer, Layer.connectionType.ALL_TO_ALL);

let neuralNetwork = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer,
});

const learningRate = 0.2;

// neuralNetwork.activate([input])
// neuralNetwork.propagate(learningRate, [desiredOutput])
