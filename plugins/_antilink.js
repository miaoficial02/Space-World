let handler = async (m, { conn, args, command, usedPrefix }) => {
  let chat = db.data.chats[m.chat] || (db.data.chats[m.chat] = {});
  if (!args[0]) {
    return m.reply(`📛 *Uso correcto:*\n\n${usedPrefix + command} on\n${usedPrefix + command} off`);
  }

  if (args[0] === 'on') {
    chat.antilink = true;
    m.reply('✅ *AntiLink activado correctamente.*');
  } else if (args[0] === 'off') {
    chat.antilink = false;
    m.reply('❌ *AntiLink desactivado correctamente.*');
  } else {
    m.reply(`❗Opción inválida. Usa:\n\n${usedPrefix + command} on\n${usedPrefix + command} off`);
  }
};
handler.help = ['antilink on/off'];
handler.tags = ['grupo'];
handler.command = /^antilink$/i;
handler.admin = true;
handler.group = true;

export default handler;

// 🛡 Función que detecta los links antes de ejecutar comandos
export async function before(m, { conn, isAdmin, isBotAdmin, participants }) {
  const chat = db.data.chats[m.chat];
  if (!chat?.antilink) return;

  const regexWaLink = /https?:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]+|https?:\/\/whatsapp\.com\/channel\/[A-Za-z0-9]+/gi;
  if (!m.isGroup || m.isBaileys || !regexWaLink.test(m.text)) return;

  const sender = m.sender;
  const groupAdmins = participants.filter(p => p.admin).map(p => p.id);
  if (!isBotAdmin) return;

  if (groupAdmins.includes(sender)) {
    return conn.sendMessage(m.chat, {
      text: `⚠️ *AntiLink está activado*\n\n🔒 No se sanciona porque @${sender.split('@')[0]} es administrador.`,
      mentions: [sender]
    }, { quoted: m });
  }

  try {
    await conn.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant || sender
      }
    });

    await conn.sendMessage(m.chat, {
      text: `🚫 *AntiLink Activo*\n\n@${sender.split("@")[0]} fue eliminado por compartir enlaces no permitidos.`,
      mentions: [sender]
    });

    await conn.groupParticipantsUpdate(m.chat, [sender], 'remove');
  } catch (e) {
    console.error('❌ Error al aplicar AntiLink:', e);
  }
}