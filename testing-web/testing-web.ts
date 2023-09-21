import {example} from '../javascript-web/dist';
import {initJSDom} from './jsdom';

// Because the Momento Web SDK is intended for use in a browser, we use the JSDom library to set up an environment
// that will allow us to use it in a node.js program.
initJSDom();

const exampleElementId = BigInt(123456789);
console.log("\nexampleElementId:", exampleElementId, typeof exampleElementId);

const elementIdAsString = String(exampleElementId);
console.log("\elementIdAsString:", elementIdAsString, typeof elementIdAsString);

const elementAsProto = new example.Example();
elementAsProto.setBigint(elementIdAsString);
console.log("\nelementAsProto:", elementAsProto, typeof elementAsProto);
console.log("elementAsProto.bigInt:", elementAsProto.getBigint(), typeof elementAsProto.getBigint());

const serializedProto = elementAsProto.serializeBinary();
console.log("\nserializedProto:", serializedProto, typeof serializedProto);

const deserializedProto = example.Example.deserializeBinary(serializedProto);
console.log("\ndeserializedProto:", deserializedProto, typeof deserializedProto);

const expectingString = deserializedProto.getBigint();
console.log("\nexpectingString:", expectingString, typeof expectingString);

const expectingBigInt = BigInt(expectingString);
console.log("\nexpectingBigInt:", expectingBigInt, typeof expectingBigInt);