
class vec2 {
    x = 0
    y = 0

    constructor(x,y) {
        this.x = x
        this.y = y
    }

    static plus (_vec, _vec2) {
        return new vec2(_vec.x + _vec2.x, _vec.y + _vec2.y)
    }

    static minus (_vec, _vec2) {
        return new vec2(_vec.x - _vec2.x, _vec.y - _vec2.y)
    }

    static multiply (_vec, _vec2) {
        return new vec2(_vec.x * _vec2.x, _vec.y * _vec2.y)
    }

    static division (_vec, _vec2) {
        return new vec2(_vec.x / _vec2.x, _vec.y / _vec2.y)
    }


    plus (_vec2) {
        return new vec2(this.x + _vec2.x, this.y + _vec2.y)
    }

    minus (_vec2) {
        return new vec2(this.x - _vec2.x, this.y - _vec2.y)
    }

    multiply (_vec2) {
        return new vec2(this.x * _vec2.x, this.y * _vec2.y)
    }

    division (_vec2) {
        return new vec2(this.x / _vec2.x, this.y / _vec2.y)
    } 

    static multiplyNum (_vec2, num) {
        return new vec2(num * _vec2.x, num * _vec2.y)
    }

    static divisionNum (_vec2, num) {
        return new vec2( _vec2.x * (1 / num ), _vec2.y * (1 / num ))
    } 

    multiplyNum (num) {
        return new vec2(num * this.x, num * this.y)
    }

    divisionNum (num) {
        return new vec2( this.x * (1 / num ), this.y * (1 / num ))
    } 

}




module.exports = vec2