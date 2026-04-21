// يجب عليك عدم تعديل اي شئ من بدايه السطر ال13 لعدم تخريب اللبوت #

// 𝑷𝒐𝒘𝒆𝒓 𝑬𝑳-𝑯𝒂𝒄𝒌 𝑩𝑶𝑻-𝑴𝑫

import { watchFile, unwatchFile } from 'fs' 

import chalk from 'chalk'

import { fileURLToPath } from 'url'

global.owner = [

  ['201286015658', '𝑷𝒐𝒘𝒆𝒓', true],
  ['212687178460', '𝑷𝑶𝑾𝑬𝑹-𝑷𝑶𝑾𝑬𝑹 𝑩𝑶𝑻', true],
  ['201129790960', '𝑷𝑶𝑾𝑬𝑹-𝑷𝑶𝑾𝑬𝑹 𝑩𝑶𝑻', true],
  ['249126831190', '𝑷𝑶𝑾𝑬𝑹-𝑷𝑶𝑾𝑬𝑹 𝑩𝑶𝑻', true],
  ['201103473939', '𝑷𝑶𝑾𝑬𝑹-𝑷𝑶𝑾𝑬𝑹 𝑩𝑶𝑻', true],
  ['201551191178', '𝑷𝑶𝑾𝑬𝑹-𝑷𝑶𝑾𝑬𝑹 𝑩𝑶𝑻', true],

]

global.mods = []

global.prems = []

global.libreria = 'Baileys'

global.baileys = 'V 6.7.16' 

global.vs = '2.2.0'

global.nameqr = '𝑸𝑹'

global.namebot = '𝑷𝒐𝒘𝒆𝒓'

global.sessions = 'Taibsessions'

global.jadi = 'JadiBots' 

global.yukiJadibts = true

global.packname = '𝑷𝑶𝑾𝑬𝑹 𝙈𝘿'

global.namebot = 'ⓅⓄⓌⒺⓇ ⒷⓄⓉ'

global.author = 'ℙ𝕆𝕎𝔼ℝ 𝔹𝕆𝕋'

global.moneda = 'Dolar'

global.canalreg = '120363402816865265@newsletter'

global.namecanal = '𝑷𝑶𝑾𝑬𝑹 𝙈𝘿'

global.canal = 'https://whatsapp.com/channel/0029Vb6egqd2ZjCluWCGxB21'

global.idcanal = '120363402816865265@newsletter'

global.ch = {

ch1: '120363402816865265@newsletter',

}

global.multiplier = 69 

global.maxwarn = '2'

let file = fileURLToPath(import.meta.url)

watchFile(file, () => {

  unwatchFile(file)

  console.log(chalk.redBright("Update 'config.js'"))

  import(`${file}?update=${Date.now()}`)

})