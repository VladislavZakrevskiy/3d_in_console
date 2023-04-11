const vec2 = require("../classes/vec_2d")
const vec3 = require("../classes/vec_3d")



const sphere = (ro,rd,r) => {
    let b = vec3.dot(ro,rd)
    let c = vec3.dot(ro,ro) - r ** 2
    let h = b ** 2 - c
    if (h < 0) {
        return new vec2(-1,-1)
    }
    h = Math.sqrt(h)
    return new vec2(-b - h, -b + h)
}


module.exports = sphere