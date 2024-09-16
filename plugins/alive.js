const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `╭──────────────◎◎▷
👋 Hello ${pushname}🔰
╰──────────────◎◎▷
╔                                        ╕
   🔰I ᗩᗰ ᗩᒪIᐯᗴ ᑎOᗯ🔰
╘                                        ╜
╭───────────┈⊷>
⚕𝐖𝐄 𝐖𝐄𝐋𝐂𝐎𝐌 𝐓𝐇𝐄 𝐍𝐄𝐖 𝐀𝐑𝐑𝐈𝐕𝐀𝐋𝐒 𝐎𝐅 𝐓𝐇𝐄 𝐃𝐈𝐆𝐈𝐓𝐀𝐋 𝐖𝐎𝐑𝐋𝐃⚕
* ❯ Welcome madushan md whats app bot you can download video songs and various videos through this bot.

> ➣ ᴏᴡɴᴇʀ : jaliya madushan

> ➣ ᴜᴘ ᴛɪᴍᴇ : 2 ʜᴏᴜʀꜱ 1 ᴍɪɴɪᴛꜱ

> ➣ ʀᴀᴍ ᴜꜱᴇɢᴇ : 167/1024ᴍʙ

> ➣ ᴠᴇʀꜱɪᴏɴ : 1.0.0

* ¤Always smile and life will be beautiful💗¤

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ jaliya madushan rathnayaka  
 ╰───────────┈⊷>`

return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/LrYZ21H/Whats-App-Image-2024-09-16-at-21-05-10-3cb8cded.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
