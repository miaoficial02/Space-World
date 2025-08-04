var handler = async (m, { conn, participants, usedPrefix, command }) => {
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender;
  if (!user) return conn.reply(m.chat, '✿︎ Menciona a alguien para quitarle el admin.', m);

  await conn.groupParticipantsUpdate(m.chat, [user], 'demote');
  conn.reply(m.chat, `✿︎ ${user.split('@')[0]} ya no es admin 💤`, m);
};

handler.help = ['demote'];
handler.tags = ['grupo'];
handler.command = ['demote', 'bajaradmin'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
