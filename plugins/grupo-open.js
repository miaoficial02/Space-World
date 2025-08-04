var handler = async (m, { conn }) => {
  await conn.groupSettingUpdate(m.chat, 'not_announcement');
  m.reply('✅ Grupo abierto para que todos puedan escribir.');
};
handler.help = ['opengc'];
handler.tags = ['grupo'];
handler.command = ['opengc', 'abrirgrupo', 'open'];
handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;
