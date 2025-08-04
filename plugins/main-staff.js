let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `𝑷𝑹𝑶𝒀𝑬𝑪𝑻𝑶 𝑪𝑨𝑻-𝑩𝑶𝑻-𝑺𝑻𝑨𝑭𝑭 🐈
🤖 *Bot:* ${global.botname}
🔰 *Versión:* 1.0

👑 𝑷𝑹𝑶𝑷𝑰𝑬𝑻𝑨𝑹𝑰𝑶𝑺 𝑫𝑬𝑳 𝑩𝑶𝑻𝑺 👑

• 𝑴𝑰𝑨
👑 *Rol:* 𝖯𝗋𝗈𝗉𝗂𝖾𝗍𝖺𝗋𝗂𝖺 𝖽𝖾 𝑪𝑨𝑻-𝑩𝑶𝑻 🐱
⚠️ *Número:* ...
🌐 *GitHub:* https://github.com/miaoficial02

👑  *Colaboradores:* 👑

• 𝑼𝑺𝑼𝑨𝑹𝑰𝑶 𝟏
👑 *Rol:* 𝑪𝒐𝒍𝒐𝒃𝒐𝒓𝒂𝒅𝒐𝒓 𝒙 𝑨𝒚𝒖𝒅𝒂𝒏𝒕𝒆 
⚠️ *Número:* 
🌐 *Github:*

• 𝑼𝑺𝑼𝑨𝑹𝑰𝑶 𝟐
👑 *Rol:* 𝑪𝒐𝒍𝒐𝒃𝒐𝒓𝒂𝒅𝒐𝒓 𝒙 𝑨𝒚𝒖𝒅𝒂𝒏𝒕𝒆 
⚠️ *Número:* 
🌐 *Github:* 
`

await conn.sendMessage(m.chat, {
  image: { url: 'https://cdn.russellxz.click/5d1db8f0.jpeg' }, // tu imagen desde URL
  caption: staff.trim(),
  contextInfo: {
    forwardingScore: 200,
    isForwarded: false,
    externalAdReply: {
      showAdAttribution: true,
      renderLargerThumbnail: false,
      title: `🐱 𝑷𝑹𝑶𝒀𝑬𝑪𝑻𝑶 𝑪𝑨𝑻-𝑩𝑶𝑻 🐱`,
      body: `👑𝑺𝑻𝑨𝑭𝑭-𝑶𝑭𝑰𝑪𝑰𝑨𝑳👑`,
      mediaType: 1,
      sourceUrl: redes,
      thumbnailUrl: icono
    }
  }
}, { quoted: fkontak, mentions: [m.sender] })

m.react(emoji)
}

handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
