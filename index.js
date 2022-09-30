const { IDGen, IDDecode } = require("id-tool");

const output = IDGen("User: John Doe\nPassword: potato123\nSecret Token: 3848fj38fj38fj39fj3kkk8h65y7sh3", 0);

console.log(output);

const output2 = IDDecode("VXNlcjogSm9obiBEb2UKUGFzc3dvcmQ6IHBvdGF0bzEyMwpTZWNyZXQgVG9rZW46IDM4NDhmajM4ZmozOGZqMzlmajNra2s4aDY1eTdzaDM=");

console.log(output2);