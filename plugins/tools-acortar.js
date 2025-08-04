//Código creado por Mía, Github: https://github.com/miaoficial02

import fetch from 'node-fetch';

var handler = async (m, { text }) => {
  if (!text) throw '✿︎ Ingresa un enlace. Ej: #short https://youtube.com';
  let res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(text)}`);
  let short = await res.text();
  m.reply(`✿︎ Enlace acortado:\n${short}`);
};

handler.help = ['short'].map(v => v + ' <url>');
handler.tags = ['tools'];
handler.command = /^short$/i;

export default handler;
