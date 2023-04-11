
const length2d = (vec2) => {
    return Math.sqrt(vec2.x ** 2 + vec2.y ** 2)
}

const length3d = (vec3) => {
    return Math.sqrt(vec3.x ** 2 + vec3.y ** 2 + vec3.z ** 2 )
}


module.exports = {
    length2d, length3d
}