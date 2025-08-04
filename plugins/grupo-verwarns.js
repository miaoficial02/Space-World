import fs from 'fs';

const warnFile = './lib/warns.json';
if (!fs.existsSync(warnFile)) fs.writeFileSync(warnFile, '{}');

let handler = async (m, { conn }) => {
  let user = m.mentionedJid[0] || m.quoted?.sender || m.sender;

  let warns = JSON.parse(fs.readFileSync(warnFile));
  warns[m.chat] = warns[m.chat] || {};
  warns[m.chat][user] = warns[m.chat][user] || 0;

  m.reply(`⚠️ El usuario @${user.split('@')[0]} tiene ${warns[m.chat][user]}/3 advertencias.`, null, {
    mentions: [user],
  });
};

handler.help = ['warns'];
handler.tags = ['grupo'];
handler.command = ['verwarns'];
handler.admin = true;
handler.group = true;

export default handler;
