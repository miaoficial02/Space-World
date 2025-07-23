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
      'https://files.catbox.moe/1cbd0f.mp4',
      'https://files.catbox.moe/1cbd0f.mp4',
      'https://files.catbox.moe/1cbd0f.mp4'
    ]
    let videoUrl = vids[Math.floor(Math.random() * vids.length)]


    const user = global.db.data.users[m.sender] || {}

      const header = [
      ``,
      `𝑩𝒚 𝑷𝒓𝒐𝒚𝒆𝒄𝒕 𝑭𝒆𝒏𝒓𝒚𝒔 ꨄ︎`,
      ``
    ].join('\n')


    const body = `
╭━━━〔 🌟 𝙁𝙀𝙉𝙍𝙔𝙎-𝘽𝙊𝙏 〕━━━╮
┃ 👤 𝗨𝗦𝗨𝗔𝗥𝗜𝗢:${taguser}
┃ ⏱️ 𝗔𝗖𝗧𝗜𝗩𝗢:${uptime}
┃ 👥 𝗚𝗥𝗨𝗣𝗢𝗦:${groupUserCount} miembros
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 📜 𝗠𝗘𝗡𝗨 𝗙𝗘𝗡𝗥𝗬𝗦 〕━━━╮
┃ ✦ ${usedPrefix}reg <nombre edad>
┃ ✦ ${usedPrefix}unreg
┃ ✦ ${usedPrefix}menu
┃ ✦ ${usedPrefix}ping
┃ ✦ ${usedPrefix}grupos
┃ ✦ ${usedPrefix}owner
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🤡 𝗗𝗜𝗩𝗘𝗥𝗦𝗜𝗢𝗡 〕━━━╮
┃ ✦ ${usedPrefix}gay
┃ ✦ ${usedPrefix}pajeame
┃ ✦ ${usedPrefix}doxeo @usuario
┃ ✦ ${usedPrefix}doxuer @usuario
┃ ✦ ${usedPrefix}formarpareja
┃ ✦ ${usedPrefix}formarpareja5
┃ ✦ ${usedPrefix}huevo
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🎌 𝗔𝗡𝗜𝗠𝗘 / 𝗥𝗢𝗟𝗘 〕━━━╮
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

╭━━━〔 📥 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 〕━━━╮
┃ ✦ ${usedPrefix}tiktok
┃ ✦ ${usedPrefix}play
┃ ✦ ${usedPrefix}pindl <link>
┃ ✦ ${usedPrefix}instagram <link>
┃ ✦ ${usedPrefix}facebook <link>
┃ ✦ ${usedPrefix}Pinterest <busca img> 
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 👥 𝗚𝗥𝗨𝗣𝗢𝗦 〕━━━╮
┃ ✦ ${usedPrefix}invocar
┃ ✦ ${usedPrefix}setppgrupo
┃ ✦ ${usedPrefix}kick <@tag>
┃ ✦ ${usedPrefix}tag
┃ ✦ ${usedPrefix}del
╰━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🤖 𝗜𝗔 & 𝗔𝗥𝗧𝗘 〕━━━╮
┃ ✦ ${usedPrefix}magicstudio <texto>
┃ ✦ ${usedPrefix}ai <texto>
┃ ✦ ${usedPrefix}editfoto <desc>
┃ ✦ ${usedPrefix}wpw
┃ ✦ ${usedPrefix}pollinations <texto>
┃ ✦ ${usedPrefix}gemini
┃ ✦ ${usedPrefix}bgremover <imagen>
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 👑 𝗢𝗪𝗡𝗘𝗥 〕━━━╮
┃ ✦ ${usedPrefix}setpp <img>
┃ ✦ ${usedPrefix}restart
┃ ✦ ${usedPrefix}update
┃ ✦ ${usedPrefix}staff
┃ ✦ ${usedPrefix}creador
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🖼️ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 〕━━━╮
┃ ✦ ${usedPrefix}sticker <img>
┃ ✦ ${usedPrefix}brat <texto>
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🧰 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 〕━━━╮
┃ ✦ ${usedPrefix}iqc <texto>
┃ ✦ ${usedPrefix}rvocal <audio>
┃ ✦ ${usedPrefix}tourl2
┃ ✦ ${usedPrefix}hd
┃ ✦ ${usedPrefix}tourl <imagen>
╰━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🔰 𝗦𝗨𝗕-𝗕𝗢𝗧 〕━━━╮
┃ ✦ ${usedPrefix}code
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🔞 𝗡𝗦𝗙𝗪 〕━━━╮
┃ ✦ ${usedPrefix}hentai
╰━━━━━━━━━━━━━━━━╯
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