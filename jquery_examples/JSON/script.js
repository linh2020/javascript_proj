let json =
  '{"fn":"Joe", "ln":"Jones", "age": 25, "social_media": ["facebook","twitter","instagram"], "online": true,"phone_numbers":{"home":"123-123-4567","work":"456-456-7890","mobile":"234-234-6789"}, "status":"active"}';

let user = JSON.parse(json);

console.log(json);
console.log(typeof json);

console.log(user);
console.log(typeof user);

let jsonToStr = JSON.stringify(user);
console.log(jsonToStr);
console.log(typeof jsonToStr);
