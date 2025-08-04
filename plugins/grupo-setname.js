//Código creado por Mía, Github: https://github.com/miaoficial02

var handler = async (m, { conn, text }) => {
  if (!text) return m.reply('✏️ Escribe el nuevo nombre del grupo.');
  await conn.groupUpdateSubject(m.chat, text);
  m.reply('✅ Nombre del grupo actualizado.');
};
handler.help = ['setname'];
handler.tags = ['grupo'];
handler.command = ['groupname', 'setnombre', 'cambiarnombre'];
handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;
