import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6281322088702', 'Adoyyy', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6281322088702'
global.packname = 'Koyyy - MD by'
global.author = '© Adoyyy'
global.namebot = '​Koyyy - MD'
global.wm = '© anu By Adoyyy'
global.stickpack = 'Koyyy - MD by'
global.stickauth = '© Adoyyy'
global.fotonya = 'https://telegra.ph/file/83b522fd80b660705d1cd.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/ad0yyy_'
global.sgh = 'https://github.com/AchmdFadly25'
global.sgc = 'https://chat.whatsapp.com/'
// Donasi
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '0896-1075-0607'
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'uw8iyCyaga'
global.rose = 'uw8iyCyaga'
global.xyro = 'uw8iyCyaga'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "uw8iyCyaga",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

