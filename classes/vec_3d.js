
class vec3 {
    x = 0
    y = 0
    z = 0

    constructor(x,y,z) {
        this.x = x
        this.y = y
        this.z = z
    }

    negative(){
      return new vec3(-this.x, -this.y, -this.z )
    }

    divisionNum(num) {
        return new vec3(this.x / num, this.y / num, this.z / num)
    }

    divide (other) {
        return new vec3(this.x / other.x, this.y / other.y, this.z / other.z) 
    }

    abs () {
        return new vec3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z))
      }

      set (x, y, z) {
        this.x = x
        this.y = y
        this.z = z
        return this
      }
    
      update (other) {
        this.x = other.x
        this.y = other.y
        this.z = other.z
        return this
      }
    
      rounded () {
        return new vec3(Math.round(this.x), Math.round(this.y), Math.round(this.z))
      }
    
      round () {
        this.x = Math.round(this.x)
        this.y = Math.round(this.y)
        this.z = Math.round(this.z)
        return this
      }
    
      floored () {
        return new vec3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
      }
    
      floor () {
        this.x = Math.floor(this.x)
        this.y = Math.floor(this.y)
        this.z = Math.floor(this.z)
        return this
      }
    
      offset (dx, dy, dz) {
        return new vec3(this.x + dx, this.y + dy, this.z + dz)
      }
    
      translate (dx, dy, dz) {
        this.x += dx
        this.y += dy
        this.z += dz
        return this
      }
    
      add (other) {
        this.x += other.x
        this.y += other.y
        this.z += other.z
        return this
      }
    
      subtract (other) {
        this.x -= other.x
        this.y -= other.y
        this.z -= other.z
        return this
      }
    
      multiply (other) {
        this.x *= other.x
        this.y *= other.y
        this.z *= other.z
        return this
      }
    
      divide (other) {
        this.x /= other.x
        this.y /= other.y
        this.z /= other.z
        return this
      }
    
      plus (other) {
        return this.offset(other.x, other.y, other.z)
      }
    
      minus (other) {
        return this.offset(-other.x, -other.y, -other.z)
      }
    
      scaled (scalar) {
        return new vec3(this.x * scalar, this.y * scalar, this.z * scalar)
      }
    
      abs () {
        return new vec3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z))
      }
    
      volume () {
        return this.x * this.y * this.z
      }
    
      modulus (other) {
        return new vec3(
          euclideanMod(this.x, other.x),
          euclideanMod(this.y, other.y),
          euclideanMod(this.z, other.z))
      }
    
      distanceTo (other) {
        const dx = other.x - this.x
        const dy = other.y - this.y
        const dz = other.z - this.z
        return Math.sqrt(dx * dx + dy * dy + dz * dz)
      }
    
      distanceSquared (other) {
        const dx = other.x - this.x
        const dy = other.y - this.y
        const dz = other.z - this.z
        return dx * dx + dy * dy + dz * dz
      }
    
      equals (other) {
        return this.x === other.x && this.y === other.y && this.z === other.z
      }
    
      toString () {
        return '(' + this.x + ', ' + this.y + ', ' + this.z + ')'
      }
    
      clone () {
        return this.offset(0, 0, 0)
      }
    
      min (other) {
        return new vec3(Math.min(this.x, other.x), Math.min(this.y, other.y), Math.min(this.z, other.z))
      }
    
      max (other) {
        return new vec3(Math.max(this.x, other.x), Math.max(this.y, other.y), Math.max(this.z, other.z))
      }
    
      norm () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
      }
    
      dot (other) {
        return this.x * other.x + this.y * other.y + this.z * other.z
      }
    
      cross (other) {
        return new vec3(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x)
      }
    
      unit () {
        const norm = this.norm()
        if (norm === 0) {
          return this.clone()
        } else {
          return this.scaled(1 / norm)
        }
      }
    
      normalize () {
        const norm = this.norm()
        if (norm !== 0) {
          this.x /= norm
          this.y /= norm
          this.z /= norm
        }
        return this
      }
    
      scale (scalar) {
        this.x *= scalar
        this.y *= scalar
        this.z *= scalar
        return this
      }
    
      xyDistanceTo (other) {
        const dx = other.x - this.x
        const dy = other.y - this.y
        return Math.sqrt(dx * dx + dy * dy)
      }
    
      xzDistanceTo (other) {
        const dx = other.x - this.x
        const dz = other.z - this.z
        return Math.sqrt(dx * dx + dz * dz)
      }
    
      yzDistanceTo (other) {
        const dy = other.y - this.y
        const dz = other.z - this.z
        return Math.sqrt(dy * dy + dz * dz)
      }
    
      innerProduct (other) {
        return this.x * other.x + this.y * other.y + this.z * other.z
      }
    
      manhattanDistanceTo (other) {
        return Math.abs(other.x - this.x) + Math.abs(other.y - this.y) + Math.abs(other.z - this.z)
      }
    
      toArray () {
        return [this.x, this.y, this.z]
      }

      sign () {
        if(this.x > 0 && this.y > 0 && this.z > 0) {
          return 1
        } else 
        if (this.x < 0 || this.y < 0 || this.z < 0) {
          return -1
        }
        else return 0
      }

      step (edge) {
        return new vec3(this.x > edge.x, this.y > edge.y, this.z > edge.z)
      }

    }
    
    function v (x, y, z) {
      if (x == null) {
        return new vec3(0, 0, 0)
      } else if (Array.isArray(x)) {
        return new vec3(parseFloat(x[0]), parseFloat(x[1]), parseFloat(x[2]))
      } else if (typeof x === 'object') {
        return new vec3(parseFloat(x.x), parseFloat(x.y), parseFloat(x.z))
      } else if (typeof x === 'string' && y == null) {
        const match = x.match(re)
        if (match) {
          return new vec3(
            parseFloat(match[1]),
            parseFloat(match[2]),
            parseFloat(match[3]))
        } else {
          throw new Error('vec3: cannot parse: ' + x)
        }
      } else {
        return new vec3(parseFloat(x), parseFloat(y), parseFloat(z))
      }

}


function euclideanMod (numerator, denominator) {
    const result = numerator % denominator
    return result < 0 ? result + denominator : result
  }


module.exports = vec3