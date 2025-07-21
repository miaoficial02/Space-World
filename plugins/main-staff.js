let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `𝑷𝑹𝑶𝒀𝑬𝑪𝑻𝑶 𝑭𝑬𝑵𝑹𝒀𝑺-𝑺𝑻𝑨𝑭𝑭 🌟
🤖 *Bot:* ${global.botname}
🔰 *Versión:* 1.0

👑 𝑷𝑹𝑶𝑷𝑰𝑬𝑻𝑨𝑹𝑰𝑶𝑺 𝑫𝑬𝑳 𝑩𝑶𝑻𝑺 👑

• 𝑬𝑹𝑬𝑵𝑿𝑺𝒁𝒀-𝑴𝑫𝑭 
✦ *Rol:* 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐𝒔 𝑫𝒆 𝑭𝒆𝒏𝒓𝒚𝒔𝑩𝒐𝒕 
➤ *Número:* wa.me/18493907272
✦ *GitHub:* https://github.com/erenxzy

🤍  *Colaboradores:*

• 𝑬𝑳 𝑩𝑹𝒀𝑨𝑵 
✦ *Rol:* 𝑪𝒐𝒍𝒐𝒃𝒐𝒓𝒂𝒅𝒐𝒓 𝒙 𝑨𝒚𝒖𝒅𝒂𝒏𝒕𝒆 
➤ *Número:* Wa.me/573001533523
✦ *Github:* https://github.com/El-brayan502

• 𝑪𝑯𝑶𝑳𝑰𝑻𝑶-𝑿𝒁𝒀
✦ *Rol:* 𝑪𝒐𝒍𝒐𝒃𝒐𝒓𝒂𝒅𝒐𝒓 𝒙 𝑨𝒚𝒖𝒅𝒂𝒏𝒕𝒆 
➤ *Número:* Wa.me/50489513153
✦ *Github:* ...

• .....
✦ *Rol:* Soporte 
➤ *Número:* Wa.me/18493907272
`
await conn.sendFile(m.chat, icons, 'https://files.catbox.moe/90u9mx.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🌸𝑷𝑹𝑶𝒀𝑬𝑪𝑻𝑶 𝑭𝑬𝑵𝑹𝒀𝑺-𝑩𝑶𝑻🌸`,
body: `👑𝑺𝑻𝑨𝑭𝑭-𝑶𝑭𝑰𝑪𝑰𝑨𝑳👑`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler