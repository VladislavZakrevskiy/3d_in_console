

function range(value, min, max) {
    return Math.max( Math.min( value, max ), min )
}


module.exports = range