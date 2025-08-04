//Código creado por Mía, Github: https://github.com/miaoficial02

import fetch from 'node-fetch';

var handler = async (m, { text }) => {
  if (!text) throw '✿︎ Ingresa el texto a traducir. Ej: #translate Hello world';
  let res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|es`);
  let json = await res.json();
  m.reply(`✿︎ Traducción: ${json.responseData.translatedText}`);
};

handler.help = ['translate'].map(v => v + ' <texto>');
handler.tags = ['tools'];
handler.command = /^translate$/i;

export default handler;
