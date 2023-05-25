var MyParameters = /** @class */ (function () {
    function MyParameters() {
        var _this = this;
        this.getParameter = function () { return _this.parameter; };
        this.parameter = [];
    }
    MyParameters.prototype.addParameter = function (parameter) {
        this.parameter.push(parameter);
    };
    return MyParameters;
}());
var myParam = new MyParameters();
myParam.addParameter("abc");
console.log(myParam.getParameter());
