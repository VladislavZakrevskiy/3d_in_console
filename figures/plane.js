const vec3 = require("../classes/vec_3d")


const plane = (ro,rd,p,w) => {
    return -(vec3.dot(ro, p) + w)/ vec3.dot(rd, p)
}


module.exports = plane