//Código creado por Mía, Github: https://github.com/miaoficial02

var handler = async (m) => {
  m.reply(`🆔 ID del grupo:\n\n${m.chat}`);
};
handler.help = ['idgrupo'];
handler.tags = ['grupo'];
handler.command = ['idgrupo', 'groupid'];
handler.group = true;

export default handler;
