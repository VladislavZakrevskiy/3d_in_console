const express = require('express')
const range = require('./utils/range')
const vec2 = require('./classes/vec_2d')
const vec3 = require('./classes/vec_3d')
const norm = require('./utils/normalize')
const sphere = require('./figures/sphere')
const cube = require('./figures/cube')
const plane = require('./figures/plane')
const app = express()
const PORT = process.env.PORT || 5000

const width = +process.env.CMD_WIDTH || 150
const height = +process.env.CMD_HEIGHT || 40
const resolution = width * height
const screen = new Array(resolution).fill(' ')
const ratioScreen = width / height
const ratioLetters = 11 / 24 
const colors = ' .:!/r(l1Z4H9W8$@'
const colorsSize = colors.length - 2



function main () {
    for ( let frame = 0;frame < 2000; frame++) {
        const light = norm(new vec3(Math.sin(frame * 0.05), Math.cos(frame * 0.05), -1.5))
        for(let i = 0; i < width; i++) {
            for(let j = 0; j < height; j++) {
                const dot1 = new vec2(i,j)
                const dot2 = new vec2(width, height)
                const uv = vec2.division(dot1, dot2).multiplyNum(2).minus(new vec2(1,1))
                uv.x *= ratioScreen * ratioLetters
                // uv.x += Math.sin(frame * 0.003) 
                let ro = new vec3(-2,0,0)
                let rd = norm(new vec3(2, uv.x, uv.y))
                let dist = Math.sqrt(uv.x**2 + uv.y**2)
                let color  = Math.floor(1 / dist)
                let minIt = 99999
                let intersection = sphere(ro, rd, 1)
                let n
                if(intersection.x > 0) {
                    let point = vec3.plus(ro, vec3.multiply(rd, intersection.x))
                    n = norm(point)
                    const diff = vec3.dot(n, light)
                    color = Math.floor(diff* 20 )
                }
                // let boxN = new vec3(0,0,0)
                // let cubeIntersection = cube(ro,rd,1)
                // if(cubeIntersection.x > 0 && cubeIntersection.x < minIt) {
                //     minIt = cubeIntersection.x
                //     n = boxN
                // }
                // let planeIntersection = plane(ro, rd, new vec3(0,0,-1), 1)
                // if( planeIntersection.x > 0 && planeIntersection.x < minIt ) {
                //     minIt = planeIntersection.x
                //     n = new vec3(0,0,1)
                //     albedo = 0.5
                // }
                color = range(color, 0, colorsSize)
                screen[i + j * width] = colors[color]
            } // j
        } // i
        process.stdout.write(screen.join(''))
    } // frame
}




app.listen(PORT, () => main() )