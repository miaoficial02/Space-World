let soloAdmin = {};

let handler = async (m, { command, args }) => {
  let groupId = m.chat;

  if (!args[0] || !['on', 'off'].includes(args[0]))
    return m.reply('✧ Usa:\n#soloadmin on\n#soloadmin off');

  soloAdmin[groupId] = args[0] === 'on';
  m.reply(`✧ Modo solo admins: ${args[0] === 'on' ? 'activado' : 'desactivado'}`);
};

handler.help = ['soloadmin on/off'];
handler.tags = ['grupo'];
handler.command = ['soloadmin'];
handler.group = true;
handler.admin = true;

export default handler;

// Middleware opcional para bloquear comandos a no-admins si soloadmin está activo
export function before(m) {
  if (!m.isGroup) return true;
  if (!soloAdmin[m.chat]) return true;
  if (m.isGroup && !m.isAdmin) return false;
  return true;
}
