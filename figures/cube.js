const vec2 = require("../classes/vec_2d")
const vec3 = require("../classes/vec_3d")



const cube = (ro,rd,size) => {
    let m = new vec3(1,1,1).divide(rd)
    let n = vec3.multiply(m, ro)
    let k =  vec3.multiply(n.abs(), size)
    const t1 = n.negative().minus(k)
    const t2 = n.negative().plus(k)
    const tN = Math.max(Math.max(t1.x, t1.y), t1.z)
    const tF = Math.min(Math.min(t2.x, t2.y), t2.z)
    if(tN > tF || tF < 0) {
        return new vec2(-1,-1)
    }
    const yzx = new vec3(t1.y, t1.z, t1.x)
    const zxy = new vec3(t1.z, t1.x, t1.y)
    return new vec2(tN, tF)
}

module.exports = cube