//Código creado por Mía, Github: https://github.com/miaoficial02

var handler = async (m, { conn }) => {
  const link = await conn.groupInviteCode(m.chat);
  m.reply(`✿︎ Enlace del grupo:\nhttps://chat.whatsapp.com/${link}`);
};

handler.help = ['link'];
handler.tags = ['grupo'];
handler.command = ['link', 'linkgp', 'grupolink'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
