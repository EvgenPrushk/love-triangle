/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  /* need 3 lover for LoveTriangle */
  if (preferences.length < 3) {
  return 0;
};

var  counter = preferences.length - 2;
var LoveTriangles = 0;
/* block fariables */
for(i = 0; i < counter; i++) {
firstLoverCount = preferences[i];
secondLoverCount = preferences[firstLoverCount-1];
thidLoverCount = preferences[secondLoverCount-1];

/* basic checker */
if (firstLoverCount > i+1 && secondLoverCount > i+1 && thidLoverCount == i+1) {
   LoveTriangles++;
}

}
return LoveTriangles;

};
