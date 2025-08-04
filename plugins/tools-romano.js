//Código creado por Mía, Github: https://github.com/miaoficial02

var handler = async (m, { text }) => {
  let num = parseInt(text);
  if (isNaN(num) || num < 1 || num > 3999) return m.reply('✿︎ Ingresa un número entre 1 y 3999');
  
  const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let resultado = "";

  for (let i = 0; i < valores.length; i++) {
    while (num >= valores[i]) {
      resultado += romanos[i];
      num -= valores[i];
    }
  }

  m.reply(`🔢 Número romano: ${resultado}`);
};

handler.help = ['romano'].map(v => v + ' <número>');
handler.tags = ['tools'];
handler.command = /^romano$/i;

export default handler;
