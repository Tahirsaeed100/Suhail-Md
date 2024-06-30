const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923002849779" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923002849779";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_54_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFZaWpDbEowczRKc09PVVNMQkFuWWM5RTZuemNjTGR1aWVyVmpHMnErRlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDAyODQ5Nzc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQ0I3RUFGRDkyQzVFODgyM0I2RjMxOTUzRjhFMEQzN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3MzQwNDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMDI4NDk3NzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ1RTIxREU2MTU1QTEyQ0RGQjg4ODExREY1ODVBN0IxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTczNDA0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvd0JzMlIzc1RYMlotT0FCSUZ6VE9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQxY2ZhNGE1LWZiZjAtNDZiNi1hNzg3LTIxOWIzMzU5ZWI0YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAxNTMsXG4gICAgICAxOTAsXG4gICAgICAzNyxcbiAgICAgIDEwMixcbiAgICAgIDIyMCxcbiAgICAgIDIxNSxcbiAgICAgIDIxMixcbiAgICAgIDE2NyxcbiAgICAgIDE0OCxcbiAgICAgIDEzNCxcbiAgICAgIDE3MixcbiAgICAgIDU5LFxuICAgICAgMTQ3LFxuICAgICAgNzQsXG4gICAgICAyMzUsXG4gICAgICA2MyxcbiAgICAgIDIyMSxcbiAgICAgIDE3LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDE3MixcbiAgICAgIDI0NSxcbiAgICAgIDExOSxcbiAgICAgIDEyNixcbiAgICAgIDMxLFxuICAgICAgMTcwLFxuICAgICAgNSxcbiAgICAgIDYzLFxuICAgICAgMjQ4LFxuICAgICAgMTYyLFxuICAgICAgMTI5LFxuICAgICAgODQsXG4gICAgICAyMTEsXG4gICAgICAyNTEsXG4gICAgICAxNTEsXG4gICAgICAyNDgsXG4gICAgICAxMTYsXG4gICAgICAyNDcsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlRGU0Y3M1hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAwMjg0OTc3OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzYyOTk5NDM4NTUzNDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2QjYrWUhFSm1laExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRmhLb01mbWg3eUtQZUtPY3dxVmdMZ0o5VzhMYndYVVpQRVU4VkdCNFh3az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRMjkvUEpmV2pRSUIrMm1ZekpTZ2hOczRwRVdkZGlDakdyVWVySXg4RWREWDNtOEpVaGkzYzVETFRvUzR1ajJUMEtqZE41RVpPbDJuLzYybEZGUUREZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwWXF6VGMxN1BUYTl0eDJUamVJV3FWVEd5VkgxK3ZBb052ZlpHcjZOYklXQld3Z240OXVWSmlMbEUwRHBqVWtHZkZsdVVJZVJWT1piUUtmOWEzeUdCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMDI4NDk3Nzk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTczNDA0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUM5bFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzlsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWDFkbDRFb1poVUlZbDZXWE5ZUis5c1UwQURlemJ3TWFKbzFuc2NHYkR3cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDk0NzE5MTMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3MzQwNDg0MDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
