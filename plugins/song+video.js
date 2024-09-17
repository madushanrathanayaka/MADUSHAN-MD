const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    react: "🎵",
    desc: "downlod song",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("❌Please give me url or titel")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
*•.¸♡ 💃MADUSHAN-MD 🤍 AUDIO-DOWNLOADER🎶 ♡¸.•*
|__________________________
| 🎠title : ${deta.title}
| 🎠description : ${deta.description}
| 🎠time : ${deta.timestamp}
| 🎠ago : ${deta.ago}
| 🎠views : ${deta.views}
|__________________________

POWERED by *⚡ JALIYA MADUSHAN RATHNAYAKA 🤍*

`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod audio+ document

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message 
await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg",caption :"white alfa md"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"audio/mpeg",fileName:deta.title + ".mp3" ,caption :"white alfa by owner"},{quoted:mek})

  

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//========video dl=======

cmd({
    pattern: "video",
    react: "🎬",
    desc: "downlod video",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("❌Please give me url or title")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
*•.¸♡ 💃MADUSHAN MD 🤍 VIDEO-DOWNLOADER📽️ ♡¸.•*
|__________________________
| 🎠title : ${deta.title}
| 🎠description : ${deta.description}
| 🎠time : ${deta.timestamp}
| 🎠ago : ${deta.ago}
| 🎠views : ${deta.views}
|__________________________

POWERED by *⚡ JALIYA MADUSHAN RATHNAYKA 🤍*

`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod video + document 

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video  message 
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4",caption :"white alfa md"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"video/mp4",fileName:deta.title + ".mp4",caption :"white alfa mede owner"},{quoted:mek})

  

}catch(e){
console.log(e)
reply(`${e}`)
}
})
