Yell = {
    // @return void
    mine : function(a, b, c) {
        alert(a + ':' + b + ':' + c);
    },
    zoom : 0,
    bool : false,
    some : '',
    v : []
};

var y = new Yell();

y.mine(1,2,3);
y.some = 1;
y.v[1] = 1;

var d = new Date();