function duplicationCheck() {
    var  cachingData  =  [1,2];
    return function(a) {
        if (cachingData.map(a)) {
            alert('Already cached');
        }  else {
            cachingData.push(a);
        }
    }
}
var dups = duplicationCheck();
