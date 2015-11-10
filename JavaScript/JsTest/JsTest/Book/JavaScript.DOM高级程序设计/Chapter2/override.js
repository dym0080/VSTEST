function override() {
    var alert = function (message) {
        window.alert('overriden:' + message);
    };
    alert('alertt');
    window.alert('window.alertt');
}
override();

alert('alert from outside');