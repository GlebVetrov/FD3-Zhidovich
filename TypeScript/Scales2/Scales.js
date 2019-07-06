var Scales = /** @class */ (function () {
    function Scales() {
        var _products = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _products[_i] = arguments[_i];
        }
        this.products = [];
        this.products = _products;
    }
    Scales.prototype.add = function (_product) {
        this.products.push(_product);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        this.products.forEach(function (element) {
            sum = sum + element.getScale();
        });
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var names = [];
        this.products.forEach(function (element) {
            names.push(element.getName());
        });
        return names;
    };
    return Scales;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_scale) {
        this.name = 'tomato';
        this.scale = _scale;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var Apple = /** @class */ (function () {
    function Apple(_scale) {
        this.name = 'apple';
        this.scale = _scale;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Orange = /** @class */ (function () {
    function Orange(_scale) {
        this.name = 'orange';
        this.scale = _scale;
    }
    Orange.prototype.getScale = function () {
        return this.scale;
    };
    Orange.prototype.getName = function () {
        return this.name;
    };
    return Orange;
}());
var tomato = new Tomato(50);
var apple = new Apple(70);
var orange = new Orange(100);
var scales = new Scales(tomato, apple, apple, tomato);
scales.add(orange);
console.log(scales.getNameList());
console.log(scales.getSumScale());
//# sourceMappingURL=Scales.js.map