var handler = async (m, { conn, participants }) => {
  const admins = participants.filter(p => p.admin).map(p => `@${p.id.split('@')[0]}`);
  m.reply(`👑 *Admins del grupo:*\n\n${admins.join('\n')}`, null, { mentions: participants.map(p => p.id) });
};
handler.help = ['admins'];
handler.tags = ['grupo'];
handler.command = ['admins', 'listadmins'];
handler.group = true;

export default handler;
