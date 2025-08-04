//Código creado por Mía, Github: https://github.com/miaoficial02

var handler = async (m, { conn }) => {
  const group = await conn.groupMetadata(m.chat);
  const info = `
🏷️ Nombre: ${group.subject}
📝 Descripción: ${group.desc || 'Sin descripción'}
🧑‍💼 Owner: ${group.owner ? '@' + group.owner.split('@')[0] : 'No disponible'}
👥 Participantes: ${group.participants.length}
🆔 ID: ${m.chat}
  `.trim();

  m.reply(info, null, {
    mentions: group.owner ? [group.owner] : []
  });
};
handler.help = ['infogrupo'];
handler.tags = ['grupo'];
handler.command = ['infogrupo', 'groupinfo'];
handler.group = true;

export default handler;
