import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import { promises as fsPromises } from 'fs'
import { join } from 'path'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, __dirname, participants }) => {
  try {
    await m.react('🤍')

    let { exp, bank, registered } = global.db.data.users[m.sender]
    let name = await conn.getName(m.sender)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let groupUserCount = m.isGroup ? participants.length : '-'

    let perfil = await conn.profilePictureUrl(conn.user.jid, 'image')
      .catch(() => 'https://files.catbox.moe/9i5o9z.jpg')

    const userId = m.sender.split('@')[0]
    let taguser = `@${userId}`
    let phone = PhoneNumber('+' + userId)
    let pais = phone.getRegionCode() || 'Desconocido 🌐'

    const vids = [
      'https://files.catbox.moe/w5t38u.mp4',
      'https://files.catbox.moe/w5t38u.mp4',
      'https://files.catbox.moe/w5t38u.mp4'
    ]
    let videoUrl = vids[Math.floor(Math.random() * vids.length)]

    const header = [
      `╔═━★•°*"'*°•★━═╗`,
      `    ✦ ꧁𝐖𝐞𝐥𝐜𝐨𝐦𝐞꧂ ✦`,
      `╚═━★•°*"'*°•★━═╝`
    ].join('\n')

    const user = global.db.data.users[m.sender] || {}

    const body = `
╭━━━〔 🌟 𝑹𝑶𝑿𝒀 𝑴𝑫 𝑴𝑬𝑵Ú 🌟 〕━━━╮
┃ 👤 Usuario: *${taguser}*
┃ ⏱️ Activo: *${uptime}*
┃ 👥 Grupo: *${groupUserCount}* miembros
┃ 📋 Registro: ${registered ? '✅ COMPLETADO' : '❌ INCOMPLETO'}
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🔰 MENÚ PRINCIPAL 〕━━━╮
┃ ✦ ${usedPrefix}reg <nombre edad>
┃ ✦ ${usedPrefix}unreg
┃ ✦ ${usedPrefix}menu
┃ ✦ ${usedPrefix}ping
┃ ✦ ${usedPrefix}grupos
┃ ✦ ${usedPrefix}owner
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🎉 DIVERSIÓN 〕━━━╮
┃ ✦ ${usedPrefix}gay
┃ ✦ ${usedPrefix}pajeame
┃ ✦ ${usedPrefix}doxeo @usuario
┃ ✦ ${usedPrefix}doxuer @usuario
┃ ✦ ${usedPrefix}formarpareja
┃ ✦ ${usedPrefix}formarpareja5
┃ ✦ ${usedPrefix}huevo
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🎌 ANIME / ROLE 〕━━━╮
┃ ✦ ${usedPrefix}angry
┃ ✦ ${usedPrefix}bite
┃ ✦ ${usedPrefix}buenasnoches
┃ ✦ ${usedPrefix}buenosdias
┃ ✦ ${usedPrefix}cafe
┃ ✦ ${usedPrefix}cry
┃ ✦ ${usedPrefix}cuddle
┃ ✦ ${usedPrefix}happy
┃ ✦ ${usedPrefix}hello
┃ ✦ ${usedPrefix}loli
┃ ✦ ${usedPrefix}rw / w
┃ ✦ ${usedPrefix}reclamawaifu
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 📥 DESCARGAS 〕━━━╮
┃ ✦ ${usedPrefix}tiktok
┃ ✦ ${usedPrefix}play
┃ ✦ ${usedPrefix}pindl <link>
┃ ✦ ${usedPrefix}instagram <link>
┃ ✦ ${usedPrefix}facebook <link>
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 👥 GRUPO 〕━━━╮
┃ ✦ ${usedPrefix}invocar
┃ ✦ ${usedPrefix}setppgrupo
┃ ✦ ${usedPrefix}kick <@tag>
┃ ✦ ${usedPrefix}tag
┃ ✦ ${usedPrefix}del
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🧠 IA & ARTE 〕━━━╮
┃ ✦ ${usedPrefix}magicstudio <texto>
┃ ✦ ${usedPrefix}ai <texto>
┃ ✦ ${usedPrefix}editfoto <desc>
┃ ✦ ${usedPrefix}wpw
┃ ✦ ${usedPrefix}pollinations <texto>
┃ ✦ ${usedPrefix}gemini
┃ ✦ ${usedPrefix}bgremover <imagen>
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 👑 OWNER 〕━━━╮
┃ ✦ ${usedPrefix}setpp <img>
┃ ✦ ${usedPrefix}restart
┃ ✦ ${usedPrefix}update
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 ✨ STICKERS 〕━━━╮
┃ ✦ ${usedPrefix}sticker <img>
┃ ✦ ${usedPrefix}brat <texto>
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🧰 HERRAMIENTAS 〕━━━╮
┃ ✦ ${usedPrefix}iqc <texto>
┃ ✦ ${usedPrefix}rvocal <audio>
┃ ✦ ${usedPrefix}tourl2
┃ ✦ ${usedPrefix}hd
┃ ✦ ${usedPrefix}tourl <imagen>
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 💖 FINAL 〕━━━╮
┃ ✦ Gracias por usar *Roxy MD Bot*
╰━━━━━━━━━━━━━━━━━━━━━━╯
`.trim()

    const menu = `${header}\n${body}`

    await conn.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: menu,
      gifPlayback: true,
      mentions: [m.sender]
    })

  } catch (e) {
    console.error(e)
    await conn.sendMessage(m.chat, {
      text: `✘ Error al enviar el menú: ${e.message}`,
      mentions: [m.sender]
    })
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú', 'allmenu', 'menucompleto']
handler.register = true
export default handler

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}