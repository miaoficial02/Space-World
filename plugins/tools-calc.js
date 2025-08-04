//Código creado por Mía, Github: https://github.com/miaoficial02

var handler = async (m, { text }) => {
  if (!text) throw '✿︎ Ingresa una operación matemática. Ej: #calc 5+5';
  try {
    let result = eval(text);
    m.reply(`✿︎ Resultado: ${result}`);
  } catch (e) {
    m.reply('✿︎ Operación inválida.');
  }
};

handler.help = ['calc'].map(v => v + ' <operación>');
handler.tags = ['tools'];
handler.command = /^calc$/i;

export default handler;
