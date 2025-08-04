var handler = async (m, { conn, text }) => {
  if (!text) return m.reply('✳️ Ingresa el número sin + ni espacios para agregar.\nEjemplo: #add 5490000000000');

  const user = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await conn.groupParticipantsUpdate(m.chat, [user], 'add')
    .then(() => m.reply(`✅ Usuario @${text} invitado al grupo.`))
    .catch(() => m.reply('❌ No se pudo agregar. Puede que tenga privacidad activada.'));

};
handler.help = ['add'];
handler.tags = ['grupo'];
handler.command = ['add', 'agregar'];
handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;
