import fs from 'fs';

const warnFile = './lib/warns.json';
if (!fs.existsSync(warnFile)) fs.writeFileSync(warnFile, '{}');

let handler = async (m, { conn }) => {
  let user = m.mentionedJid[0] || m.quoted?.sender;
  if (!user) return m.reply('❌ Menciona al usuario para quitarle una advertencia.');

  let warns = JSON.parse(fs.readFileSync(warnFile));
  warns[m.chat] = warns[m.chat] || {};
  warns[m.chat][user] = warns[m.chat][user] || 0;

  if (warns[m.chat][user] === 0) {
    return m.reply('✅ Ese usuario no tiene advertencias.');
  }

  warns[m.chat][user] -= 1;
  fs.writeFileSync(warnFile, JSON.stringify(warns, null, 2));

  m.reply(`✔️ Se quitó una advertencia. Ahora tiene ${warns[m.chat][user]}/3.`);
};

handler.help = ['unwarn'];
handler.tags = ['grupo'];
handler.command = ['unwarn'];
handler.admin = true;
handler.botAdmin = false;
handler.group = true;

export default handler;
