import ws from 'ws'
import fetch from 'node-fetch'

async function handler(m, { conn: _envio, usedPrefix }) {
  const uniqueUsers = new Map()

  global.conns.forEach((conn) => {
    if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
      uniqueUsers.set(conn.user.jid.replace(/[^0-9]/g, ''), conn.user)
    }
  })

  const message = Array.from(uniqueUsers.values()).map((user, index) => `
╭───➤ BOT #${index + 1}
│ ✦ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤: @${user.jid.replace(/[^0-9]/g, '')}
│ ✦ 𝙇𝙞𝙣𝙠: wa.me/${user.jid.replace(/[^0-9]/g, '')}
│ ✦ 𝙉𝙤𝙢𝙗𝙧𝙚: ${user.name || 'ᰔᩚ𝙁𝙚𝙣𝙧𝙮𝙎𝙪𝙗𝘽𝙤𝙩ᰔᩚ'}
╰───────────────`).join('\n')

  const replyMessage = message.length === 0
    ? '🌸 No hay bots activos en este momento...'
    : message

  const responseMessage = `🎀 𝑭𝒆𝒏𝒓𝒚𝒔 𝑱𝒂𝒅𝒊𝑩𝒐𝒕 𝑨𝒄𝒕𝒊𝒗𝒐𝒔 🤍\n\n${replyMessage}`

  let img = await (await fetch(`https://files.catbox.moe/g80cfk.jpg`)).buffer()

  await _envio.sendFile(m.chat, img, 'roxy-jadibots.jpg', responseMessage, m, false, {
    mentions: _envio.parseMention(responseMessage)
  })
}

handler.command = ['listjadibot', 'bots']
handler.help = ['bots']
handler.tags = ['serbot']
export default handler