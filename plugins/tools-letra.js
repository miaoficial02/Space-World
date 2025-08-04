//Código creado por Mía, Github: https://github.com/miaoficial02

var handler = async (m, { text }) => {
  if (!text) throw '✿︎ Escribe el texto. Ej: #letra hola mundo';

  const estilos = {
    negrita: text => text.replace(/./g, c => String.fromCodePoint(c.charCodeAt(0) + 0x1D400 - 65)),
    cursiva: text => text.replace(/./g, c => String.fromCodePoint(c.charCodeAt(0) + 0x1D434 - 65)),
    doble: text => text.replace(/./g, c => String.fromCodePoint(c.charCodeAt(0) + 0x1D538 - 65))
  };

  let normal = text;
  let negrita = text.replace(/[a-zA-Z]/g, c => {
    const base = c === c.toUpperCase() ? 0x1D400 : 0x1D41A;
    return String.fromCodePoint(c.charCodeAt(0) - (c === c.toUpperCase() ? 65 : 97) + base);
  });

  let resultado = `🔠 Estilos para:\n"${text}"\n\n🅑 Negrita: ${negrita}\n🅝 Normal: ${normal}`;

  m.reply(resultado);
};

handler.help = ['letra'].map(v => v + ' <texto>');
handler.tags = ['tools'];
handler.command = /^letra$/i;

export default handler;
