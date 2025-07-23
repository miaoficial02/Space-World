let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  let user = global.db.data.users[userId]
  let name = conn.getName(userId)
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length
  let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length

  const videoUrl = 'https://files.cloudkuimages.guru/videos/sbnxpL7v.mp4' // CAMBIA ESTE LINK SI QUIERES OTRO VIDEO

const body = `
╭━━━〔 🌟 𝙁𝙀𝙉𝙍𝙔𝙎-𝙈𝘿 🌟 〕━━━╮
┃ 👤 Usuario: *${taguser}*
┃ ⏱️ Activo: *${uptime}*
┃ 👥 Grupo: *${groupUserCount}* miembros
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
`.trim()

  await conn.sendMessage(m.chat, {
    video: { url: videoUrl },
    caption: txt,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: botname,
        body: textbot,
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
  let seconds = Math.floor((ms / 1000) % 60)
  let minutes = Math.floor((ms / (1000 * 60)) % 60)
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
  return `${hours}h ${minutes}m ${seconds}s`
}