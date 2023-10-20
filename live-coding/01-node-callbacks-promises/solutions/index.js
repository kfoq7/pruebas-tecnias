import fs from 'node:fs'
import net from 'node:net'
import { resolve } from 'node:path'

// export const ping = (ip, callback) => {
//   const startTime = process.hrtime()

//   const client = net.connect({ port: 80, host: ip }, () => {
//     client.end()
//     callback(null, { time: process.hrtime(startTime), ip })
//   })

//   client.on('error', err => {
//     client.end()
//     callback(err)
//   })
// }

// export function obtenerDatosPromise() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ data: 'datos importantes' })
//     }, 2000)
//   })
// }

// export function procesarArchivo(callback) {
//   const handleReadFile = (error, contenido) => {
//     if (error) {
//       console.error('Error leyendo archivo:', error.message)
//       callback(err)
//     }

//     const textoProcesado = contenido.toUpperCase()

//     fs.writeFile('output.txt', textoProcesado, handleWriteFile)
//   }

//   const handleWriteFile = error => {
//     if (error) {
//       console.error('Error guardando archivo:', error.message)
//       callback(err)
//     }

//     console.log('Archivo procesado y guardado con éxito')
//     callback(null)
//   }

//   fs.readFile('input.txt', 'utf8', handleReadFile)
// }

// export async function procesarArchivoPromise() {
//   try {
//     const file = await fs.promises.readFile('input.txt', 'utf8')
//     const textProcesado = file.toUpperCase()
//     await fs.promises.writeFile('output.txt', textProcesado)
//   } catch (err) {
//     console.log(`Error al procesar el archivo: ${err}`)
//     throw err
//   }
// }

// export async function leerArchivos() {
//   console.time('leerArchivos')
//   const [archivo1, archivo2, archivo3] = await Promise.all([
//     fs.promises.readFile('archivo1.txt', 'utf8'),
//     fs.promises.readFile('archivo2.txt', 'utf8'),
//     fs.promises.readFile('archivo3.txt', 'utf8')
//   ])
//   console.timeEnd('leerArchivos')

//   return `${archivo1} ${archivo2} ${archivo3}`
// }

// leerArchivos().then(result => console.log(result))

export async function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
