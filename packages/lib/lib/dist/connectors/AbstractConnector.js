var AbstractConnector = /** @class */ (function () {
    function AbstractConnector(env) {
        this.env = env;
    }
    AbstractConnector.prototype.create = function (options) {
        throw new Error("Method not implemented at " + this.constructor.name + ".");
    };
    AbstractConnector.prototype.dispose = function () {
        throw new Error("Method not implemented at " + this.constructor.name + ".");
    };
    return AbstractConnector;
}());
export { AbstractConnector };
//# sourceMappingURL=AbstractConnector.js.map