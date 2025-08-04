var handler = async (m, { participants }) => {
  const total = participants.length;
  const admins = participants.filter(p => p.admin).length;
  const normales = total - admins;

  m.reply(`👥 *Miembros del grupo:*\n- Total: ${total}\n- Admins: ${admins}\n- Miembros normales: ${normales}`);
};
handler.help = ['contar'];
handler.tags = ['grupo'];
handler.command = ['contar', 'miembros'];
handler.group = true;

export default handler;
