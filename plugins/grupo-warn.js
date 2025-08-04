import fs from 'fs';
const warnFile = './database/warns.json';

if (!fs.existsSync(warnFile)) fs.writeFileSync(warnFile, '{}');

let handler = async (m, { conn, usedPrefix, command }) => {
  let user = m.mentionedJid[0] || m.quoted?.sender;
  if (!user) return m.reply(`⚠️ Menciona a un usuario para advertir.`);

  let warns = JSON.parse(fs.readFileSync(warnFile));
  warns[m.chat] = warns[m.chat] || {};
  warns[m.chat][user] = (warns[m.chat][user] || 0) + 1;

  let count = warns[m.chat][user];
  fs.writeFileSync(warnFile, JSON.stringify(warns, null, 2));

  if (count >= 3) {
    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
    m.reply(`❌ El usuario fue expulsado por acumular ${count} advertencias.`);
    warns[m.chat][user] = 0;
    fs.writeFileSync(warnFile, JSON.stringify(warns, null, 2));
  } else {
    m.reply(`⚠️ Usuario advertido. Total de advertencias: ${count}/3`);
  }
};

handler.help = ['warn'];
handler.tags = ['grupo'];
handler.command = ['warn', 'advertir'];
handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;
