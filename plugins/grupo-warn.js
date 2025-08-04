import fs from 'fs';

const warnFile = './lib/warns.json';
if (!fs.existsSync(warnFile)) fs.writeFileSync(warnFile, '{}');

let handler = async (m, { conn }) => {
  let user = m.mentionedJid[0] || m.quoted?.sender;
  if (!user) return m.reply('⚠️ Menciona a un usuario para advertir.');

  let warns = JSON.parse(fs.readFileSync(warnFile));
  warns[m.chat] = warns[m.chat] || {};
  warns[m.chat][user] = warns[m.chat][user] || 0;
  warns[m.chat][user] += 1;

  fs.writeFileSync(warnFile, JSON.stringify(warns, null, 2));

  let count = warns[m.chat][user];
  if (count >= 3) {
    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
    warns[m.chat][user] = 0;
    m.reply('🚫 Usuario expulsado por acumular 3 advertencias.');
    fs.writeFileSync(warnFile, JSON.stringify(warns, null, 2));
  } else {
    m.reply(`⚠️ ${count}/3 advertencias. A la tercera será expulsado.`);
  }
};

handler.help = ['warn'];
handler.tags = ['grupo'];
handler.command = ['warn'];
handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;
