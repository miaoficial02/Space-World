//Código creado por Mía, Github: https://github.com/miaoficial02

var handler = async (m, { conn, participants }) => {
  const groupInfo = await conn.groupMetadata(m.chat);
  const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
  const isOwner = m.sender === ownerGroup || global.owner.map(([v]) => v + '@s.whatsapp.net').includes(m.sender);

  if (!isOwner) return m.reply('🚫 Este comando solo lo puede usar el dueño del grupo o el owner del bot.');

  const usersToRemove = participants
    .filter(p => p.id !== conn.user.jid && p.id !== ownerGroup)
    .map(p => p.id);

  await conn.groupParticipantsUpdate(m.chat, usersToRemove, 'remove');
  m.reply('👥 Todos los miembros fueron eliminados del grupo (excepto el owner y el bot).');
};
handler.help = ['kickall'];
handler.tags = ['grupo'];
handler.command = ['kickall', 'banall', 'eliminarall'];
handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;
