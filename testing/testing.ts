import { example } from "../javascript/dist";
import testProto = example.example;

// For nodejs protos, seems possible to convert from element ID given as BigInt
// to string, then pass string into the proto, which takes it as uint64.
// Serialized to binary and back and received a string from the proto,
// which can be converted back into BigInt.

const exampleElementId = BigInt(123456789);
console.log("\nexampleElementId:", exampleElementId, typeof exampleElementId);

const elementIdAsString = String(exampleElementId);
console.log("\elementIdAsString:", elementIdAsString, typeof elementIdAsString);

const elementAsProto = new testProto.Example([elementIdAsString]);
console.log("\nelementAsProto:", elementAsProto, typeof elementAsProto);
console.log("elementAsProto.bigInt:", elementAsProto.bigInt, typeof elementAsProto.bigInt);

const serializedProto = elementAsProto.serializeBinary();
console.log("\nserializedProto:", serializedProto, typeof serializedProto);

const deserializedProto = testProto.Example.deserializeBinary(serializedProto);
console.log("\ndeserializedProto:", deserializedProto, typeof deserializedProto);

const expectingString = deserializedProto.bigInt;
console.log("\nexpectingString:", expectingString, typeof expectingString);

const expectingBigInt = BigInt(expectingString);
console.log("\nexpectingBigInt:", expectingBigInt, typeof expectingBigInt);
