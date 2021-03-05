import {compose, pipe} from 'lodash/fp'


let input = "  Javascript   "

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
const wrap = (type, str) => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()

// const transform = compose(wrapInDiv,toLowerCase, trim)
const transform = pipe(trim, toLowerCase, wrap)

const result = transform(input)

console.log(result)