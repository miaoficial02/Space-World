var handler = async (m, { conn, participants, usedPrefix, command }) => {
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted?.sender;
  if (!user) return conn.reply(m.chat, '✿︎ Menciona a alguien para hacerlo admin.', m);

  await conn.groupParticipantsUpdate(m.chat, [user], 'promote');
  conn.reply(m.chat, `✿︎ ${user.split('@')[0]} ahora es admin 🌟`, m);
};

handler.help = ['promote'];
handler.tags = ['grupo'];
handler.command = ['promote', 'subiradmin'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
