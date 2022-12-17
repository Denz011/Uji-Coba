import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `Denn Disini (｡>_<｡)`



let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'


conn.reply(m.chat, info, m, { quoted: fakes },{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://youtube.com/@DenzCreator",
      mediaType: 2,
      description: "https://youtube.com/@DenzCreator", 
      title: global.titlebot,
      body: wm,
      thumbnail: thumb,
      sourceUrl: syt  }}})

}

handler.customPrefix = /^(tes|bot|denn|den|uy|p|hoi|test)$/i

handler.command = new RegExp



export default handler
