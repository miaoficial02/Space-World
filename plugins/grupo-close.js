//Código creado por Mía, Github: https://github.com/miaoficial02

var handler = async (m, { conn }) => {
  await conn.groupSettingUpdate(m.chat, 'announcement');
  m.reply('🔒 Grupo cerrado. Solo los admins pueden escribir.');
};
handler.help = ['closegc'];
handler.tags = ['grupo'];
handler.command = ['closegc', 'cerrargrupo', 'close'];
handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;
