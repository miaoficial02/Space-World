//Código creado por Mía, Github: https://github.com/miaoficial02

var handler = async (m, { conn, text }) => {
  if (!text) return m.reply('✏️ Escribe la nueva descripción del grupo.');
  await conn.groupUpdateDescription(m.chat, text);
  m.reply('✅ Descripción del grupo actualizada.');
};
handler.help = ['setdesc'];
handler.tags = ['grupo'];
handler.command = ['groupdesc', 'descripcion', 'cambiardesc'];
handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;
