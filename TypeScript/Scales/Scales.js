var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Product = /** @class */ (function () {
    function Product(_scale, _name) {
        this.scale = _scale;
        this.name = _name;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_scale, _name) {
        return _super.call(this, _scale, _name) || this;
    }
    return Tomato;
}(Product));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_scale, _name) {
        return _super.call(this, _scale, _name) || this;
    }
    return Apple;
}(Product));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(_scale, _name) {
        return _super.call(this, _scale, _name) || this;
    }
    return Orange;
}(Product));
var tomato = new Tomato(50, 'tomato');
var apple = new Apple(70, 'apple');
var orange = new Orange(100, 'orange');
var scales = new Scales(tomato, apple, apple, tomato);
scales.add(orange);
console.log(scales.getNameList());
console.log(scales.getSumScale());
//# sourceMappingURL=Scales.js.map