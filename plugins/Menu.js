const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let tex = `
*👋 Hello ${pushname}*
╭───────────◉◉►
│Hey, I'm 𝐌𝐀𝐃𝐔𝐒𝐇𝐀𝐍-𝐌𝐃, Created By
│𝐉𝐀𝐋𝐈𝐘𝐀 𝐌𝐀𝐃𝐔𝐒𝐇𝐀𝐍✨🍂
│
│I'm always here for help you.😇 Love │you forever ♥
╰───────────◉◉►

╭───────────◎◎►
> ☟𝐃𝐎𝐖𝐍𝐋𝐎𝐃𝐄 𝐂𝐎𝐌𝐌𝐀𝐍𝐃☟
> ─────────*
> ►.song*
> ►.video*
> ►.fb*
> ►.tt*
> ►.movie*
> ►.mediafire*
> ►.twitter*
> ►.gdrive*
> ►.apk*
> ►.img*
> ►.rvideo* 
> ─────────
> ☟𝐒𝐄𝐀𝐑𝐂𝐇 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒☟
> ─────────*
> ►.yts*
> ►.news*
> ►.githubstalk*
> ►.srepo*
> ►.weather*
> ─────────
> ☟𝐀𝐈 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒☟
> ─────────*
> ►.ai*
> ─────────
> ☟𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒☟
> ─────────*
> ►.convert*
> ►.trt*
> ─────────
> ☯𝐎𝐖𝐄𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒☯
> ─────────*
> ►.restart*
> ─────────
> ☟𝐌𝐀𝐈𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒☟
> ─────────*
> ►.menu*
> ►.alive*
> ►.ping*
> ►.repo*
> ►.owner*
> ►.about*
> ►.support*
> ─────────
> ☟𝐎𝐓𝐇𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒☟
> ─────────*
> ►.kylie*
> ►.hack*
> ►.define*
> ►.gpass*
> ─────────
> ☟𝐅𝐔𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒☟
> ─────────*
> ►.animegirl*
> ►.dog*
> ►.fact*
> ►.joke*
> ►.quote*
> ─────────
> ☟𝐆𝐑𝐎𝐔𝐏 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒☟
> ─────────
> ►.promote
> ►.demote
> ►.remove
> ►.setpic
> ►.del*
> ►.add*
> ►.setwelcome*
> ►.setgoodbye*
╰───────────◎◎►
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙼𝙰𝙳𝚄𝚂𝙷𝙰𝙽 𝙼𝙳
`

return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/jWbPWSR/Whats-App-Image-2024-09-16-at-21-05-11-d95b643c.jpg`},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
