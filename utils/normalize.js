const {length3d} = require('./length')

const norm = (_vec3) => {
    return _vec3.divisionNum(length3d(_vec3))
}




module.exports = norm