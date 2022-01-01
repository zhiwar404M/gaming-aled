const discord = require("discord.js");
const fs = require("fs");
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
const http = require("http");
const db = require("quick.db");
const moment = require("moment");
const express = require("express");
const ayarlar = require("./ayarlar.json");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login("OTI2OTMzMzQ0MTAzNTc5NzI5.YdC38g.86PdJscLo89YS0uWEOQZdENO1jc");
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

//===============================================================================\\
client.on("ready", async () => {
  client.user.setActivity(`Rhelp | Servers ${client.guilds.cache.size}`, {
    type: "PLAYING"
  });
});
//===============================================================================\\
client.on("message", message => {
  if (message.content === "Rinvite") {
    const embed = new Discord.MessageEmbed()
      .setImage(`https://media.discordapp.net/attachments/867897161373843499/878760858090631229/image0.jpg`)
      .setThumbnail(client.user.avatarURL())
      .setColor("c6df00")
      .setAuthor("🟡 Random Bot").setDescription(`
**Radnom Bot invite**
[invite](https://discord.com/api/oauth2/authorize?client_id=860481024731774976&permissions=285761&scope=bot)
`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", emprator => {
  if (emprator.content === "SuPorT") {
    emprator.channel.send("https://discord.gg/K8SSqweuSH");
  }
});
//===============================================================================\\

//===============================================================================\\
client.on("guildCreate", guild => {
  client.channels.cache.get("880946199476183100").send(`
⭐️ **Join Server**: ${client.guilds.cache.size}
🔠 **Server Name**: ${guild.name}
👑 **Server Owner**: ${guild.owner}
🆔 **Server Id**: ${guild.id}
👥 **Member Count**: ${guild.memberCount}**`);
});
/////////////////////////////////////////
client.on("guildDelete", guild => {
  client.channels.cache.get("880946199476183100").send(`
🥲 **left Server**: ${client.guilds.cache.size}
🔠 **Server Name**: ${guild.name}
👑 **Server Owner**: ${guild.owner}
🆔 **Server Id**: ${guild.id}
👥 **Member Count**: ${guild.memberCount}**`);
});
//===============================================================================\\
client.on("message", message => {
  if (message.content === "Rhelp") {
    const embed = new Discord.MessageEmbed()
      .setImage(`https://media.discordapp.net/attachments/867897161373843499/878766850698280970/image0.jpg`)
      .setThumbnail(client.user.avatarURL())
      .setColor("c6df00")
      .setAuthor("Random Bot Help please type Rrules").setDescription(`
[Invite](https://discord.com/api/oauth2/authorize?client_id=860481024731774976&permissions=285761&scope=bot)
[Support](https://discord.gg/K8SSqweuSH)
[Website](https://www.randombot.cf/)

<a:emoji_180:878693769619324938> **User Commands**
**__about - avatar - server invite - support - lock - unlock - kick - role  clear__**

<a:emoji_1:873254118548967464>  **Economy Commands**
**__daily[d] - cash[c] - work[w] - send - steal - shop__**

<a:astersa:873253425729642587> **Game Commands**
**__coinflip[cf] - slots[s] - fish[f]__**

<a:emoji_16:845102603468800011> **Gifs Command**
**__boy - girl - baby - couple - sad - neon - smoking - emoji - anime__**

<a:emoji_19:845102659626860554>  **Photos Command**
**__pboy - pgirl - pemoji - panime - pcouple__**
`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", msg => {
  if (msg.content.startsWith("Rclear")) {
    let args = msg.content.split(" ").slice(1);

    if (!msg.member.hasPermission("MANAGE_MESSAGES"))
      return msg.channel.send("You can't use this command!");

    if (!args[0])
      return msg.channel.send("Specify how many messages you want to delete.");

    msg.delete();

    msg.channel.bulkDelete(args[0]).catch(e => {
      msg.channel.send("You can only delete 100 messages at once.");
    });

    msg.channel.send(`Delete Message`).then(m => m.delete({ timeout: 5000 }));
  }
});
//===============================================================================\\
client.on("message", russi => {
  if (russi.content === "Rserver") {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${russi.guild.name}`) ///Russi
      .setThumbnail(client.user.avatarURL())
      .setColor("#ffff00") ///Russi
      .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
      .addField("> 🆔 ID Server :", `${russi.guild.id}`)
      .addField("> :crown: Owner Server :", `${russi.guild.owner}`)
      .addField(
        "> :calendar: Created : ",
        `${russi.guild.createdAt.toLocaleString()}`
      )
      .addField(
        "> :busts_in_silhouette: Members : ",
        `${russi.guild.memberCount}`
      )
      .addField(
        "> :speech_balloon: Channels : ",
        `${russi.guild.channels.cache.size}`
      )
      .addField("> :earth_americas: Region : ", `${russi.guild.region}`)
      .setTimestamp(); ///Russi
    russi.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", habdo => {
  if (habdo.content.startsWith("hsjdhdhshwi")) {
    if (!habdo.guild) return;
    if (!habdo.member.hasPermission("KICK_MEMBERS"))
      return habdo.reply("**You don t have a ram**");
    let user = habdo.mentions.users.first();
    if (!user) return habdo.reply("**Kick A Member User**");
    habdo.guild.member(user).kick();
    habdo.channel.send(`**✈ \`${user}\` Kicked from the server.**`);
  }
});
//===============================================================================\\
client.on("message", message => {
  if (message.content.startsWith("hajshdhhdhd")) {
    var roles = message.guild.roles.cache
      .map(roles => `${roles.name}, `)
      .join(" ");
    let embed = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .addField("**Roles Server:**", `**[${roles}]**`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", habdo => {
  if (habdo.content.startsWith("Ravatar")) {
    var embed = new Discord.MessageEmbed()
      .setAuthor(
        `${habdo.author.username}`,
        habdo.author.avatarURL({ dynamic: true })
      )
      .setColor("#ffff00")
      .setDescription(
        `**[Avatar Link](${habdo.author.avatarURL({
          dynamic: true,
          format: "png",
          size: 1024
        })})**`
      )
      .setImage(
        habdo.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
      )
      .setFooter(
        `Requsted by ${habdo.author.tag}`,
        habdo.author.avatarURL({ dynamic: true })
      );
    habdo.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", message => {
  if (message.content === "Rabout") {
    const embed = new Discord.MessageEmbed().setColor("#ffff00")
      .setDescription(`
<a:devv:871813217897316353> **Owner Bot** <@792754963759235074>

<a:devv:871813217897316353> **Owner Bot2** <@!790265200770809857>
<:emoji_7:872907905052078100> **My Prefix [ R ]**
`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", message => {
  if (message.content === "owhdhdhdhhshw") {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    message.delete();

    if (!message.channel.guild) return;

    let bwan = new Discord.MessageEmbed()

      .setFooter("Has Been Channel Lock")
      .setColor("#ffff00");
    message.channel.send(bwan);

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
  }
});
////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////client.on("message", message => { if (message.content === prefix + "lockall") 
client.on("message", message => {
  if (message.content === "Runlockoqooqoqq") {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    message.delete();

    if (!message.channel.guild) return message.reply("SORRY IM IN SERVER");
    let bwan = new Discord.MessageEmbed()
      .setFooter("Has Been Channel unlock")
      .setColor("#ffff00");
    message.channel.send(bwan);

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    });
  }
});
//===============================================================================\\
client.on("message", async message => {
  if (message.content.startsWith(`<@${client.user.id}>`)) {
    let help = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setThumbnail(
        `https://media.discordapp.net/attachments/867897161373843499/878698465448820736/image0.png`
      )
   .setAuthor(client.user.username, client.user.avatarURL()).setDescription(`
🟡 [invite](https://discord.com/api/oauth2/authorize?client_id=860481024731774976&permissions=285761&scope=bot)
🟡 [support](https://discord.gg/AkYA68Z2gG)
🟡 [website](https://www.randombot.cf/)
🟡 [sponsored](https://discord.gg/K8SSqweuSH)
🟡 **__My Prefix [ R ]__**`);

    message.channel.send(help);
  }
});
//===============================================================================\\
//===============================================================================\\
//===============================================================================\\
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Destek/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Installing support command...`);
  files.forEach(f => {
    //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

    let props = require(`./Destek/${f}`);
    log(`Support Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Destek/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Ekonomi/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Economy command Loading ...`);
  files.forEach(f => {
    //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

    let props = require(`./Ekonomi/${f}`);
    log(`Economy Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Ekonomi/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Oyunlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Game command Loading ...`);
  files.forEach(f => {
    let props = require(`./Oyunlar/${f}`);
    log(`Game Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Oyunlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}; //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//====================================================//
var aaaa = [
  "https://cdn.discordapp.com/attachments/733640065200160768/737280791993779206/tenor_3.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280895995740210/tenor_7.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280900022140938/tenor_2.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280920800722984/tenor_9.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280921689915411/tenor_10.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280924563275776/tenor.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280929311096842/tenor_5.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280944016457748/tenor_1.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280945195057193/tenor_6.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737281583412805712/tenor_8.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737281572826382336/tenor_4.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282276320084118/tenor_2.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282249422143488/tenor_3.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282243113910292/tenor_4.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282207579635722/tenor.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282195185467473/tenor_5.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282604176506910/tenor.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282625747681410/tenor_1.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282660250157122/tenor_4.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282929633525851/tenor_11.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282757188911174/tenor_7.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282947119579216/tenor_9.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282750385487932/tenor_5.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282940760883210/tenor_10.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282991348252683/tenor_13.gif"
];
client.on("message", async message => {
  if (message.content === "hehehehdhhdqoii") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Animel`,
          color: `#ffff00`,
          image: {
            url: aaaa[Math.floor(Math.random() * aaaa.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////
var anime = [
  "https://cdn.discordapp.com/attachments/608711485849337856/859344238235484200/yawn.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859342453106933790/a_5d8475b046a3fd132344711f6acf630d.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859342351993143356/e93851d998b194d7eb4c76ab43230beb.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859336683245142016/508fe7a0908b87ea1de36391094a1049.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859334746529202229/tumblr_7568b179761b5faf3ef747e8edfa2498_3ac41c2d_540.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859348646637731870/cdb7eea53a7c7b61057a2ea8e3adfcaf.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859356709512413204/a_1197f188a370971d9af99102d14b92b9.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859357342293426176/image0-1.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859357441360003092/Snaptik_6950750097328098561_kpa-tm.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859357619361808414/image5.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859360421634244628/krmz.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/737311070364106844/image0.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/737296516774887505/bc500ed43e3593fcb9b10331ae644586.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/737286213723226182/a_4a728888f25331995f9c61df26ffffdb.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/737113186280538152/image0.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/737052176106520687/image1.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/737078026923409439/9190dc1cb39fa98fd9e12bb135aac545.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/737052175754199070/image0.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/736898906633273364/64.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/737004415197904916/a_3bfd1dff4faab26f7a612a34cb2eb049.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735948576739426385/1.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736928294414450718/ROF8OQvDmxytW.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735948476520857650/5.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736757429450309673/image0.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735948187487174747/48.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736588684270239774/ezgif-6-e83305d159d6.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735948178855034955/anime_24.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736388428761137193/14Nqi9PD8H.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735948036202561677/previewfile_1877013475.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736388213421244477/Yblikw9Rj1.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735947565966688306/a_d6e522c9e10db64260eccb3c3455733c.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736388155229339708/zyJgqrsAUg.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735621470969135217/sasuke_al_moj.gif"
];
client.on("message", async message => {
  if (message.content === "Jdhdhehjwjs") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Anime`,
          color: `#ffff00`,
          image: {
            url: anime[Math.floor(Math.random() * anime.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////
var baby = [
  "https://cdn.discordapp.com/attachments/699339066029768796/736983333254332456/1.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/737156529278550046/10.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736983248021749775/6.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736983242271359067/5.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736983236260921455/8.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736983217856315483/3.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736983211619516447/2-2.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736978634031759400/40.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736978111043731476/a_204c3f0f05cbef57c6297ee3f230f22a.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736978069038039050/f5a91c2c25a6a082f8ecafc826c13760.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736977973688795237/2.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736977934375583926/a_bf8ac566a856ad839d310e919ba15791.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736977911831330886/image0-7.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736977867811979324/a_c21ae57fdd3ad6ac99cd038b6a5aa1e4.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736148143678291968/15.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/735864299024810155/20200723_142037.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/735910966792945764/image0.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/735910962762350642/image0.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/735194170230308904/a_0690a3032ce9908e230d7f71dd9a6988_1.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/734965436663464076/a_4f5d107e5160642113337218f63a6441.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/734965350357008384/a_8f2bce5f3a3312e7e95236a39ea70efe.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/734965015739629599/image0-6.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/732175141567725639/image0.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/730498782265081876/bab3.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/730499512602329198/14.gif"
];
client.on("message", async message => {
  if (message.content === "Rbaby") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Baby`,
          color: `#ffff00`,
          image: {
            url: baby[Math.floor(Math.random() * baby.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
////////////
var yyyy = [
  "https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737219065977765888/a_cb483fd9bfa2068e5b57aa6cf973986e.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106443932532796/gif_200.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106458080051330/gif_201.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737050698293968976/a_a873a018a2751ecaf654d116ae15c261.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737105973155463259/gif_180.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106004977647726/gif_182.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106176541589544/gif_187.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106247643562004/gif_191.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106368158367804/gif_196.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737013649058824252/a_ee0eab432a8d1eb6521c1a932dd04e22.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737038327672340541/a_2df0464c0f0e4dabf60385103b18addd.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737038499043213332/a_b4cad593a04df36fae504536a7971825.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737039041022787624/image0.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737039232065077269/image0-70.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737039292832153640/kaan.gif.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif"
];
client.on("message", async message => {
  if (message.content === "Rboy") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Boy`,
          color: `#ffff00`,
          image: {
            url: yyyy[Math.floor(Math.random() * yyyy.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////
var coulpe = [
  "https://cdn.discordapp.com/attachments/694694675679936585/737306643355664384/image02.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737306628528930816/a_1b0b9e83a11f0e8280c5409e85dc6ecf.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737306606068564108/image0_7.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737306593485651979/image01.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737306585470074890/20.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305042096488478/image03.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305094038749224/a_788eee9ad77c81e7406d1c06c75de1a1.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305150607327255/larissa56.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305158668517486/image0.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305302352789554/image0-4.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737306359330111548/gif_dc_dc_dc.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736981583474589777/a_48d8e6c6b3ab9bdc3d27e9dc7bfbee53.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305354270015628/a_b77c51a4aa5bc3460d375f415dec1507.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737304729444679730/a_73dea0b44c5e1f57bdbbfc036b7cf3dc.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737304802501066862/image0-2.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737109543263404132/image0.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737066393694109718/a_d8f145cc1f4ad05bf97a118f64d673ff.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737066415877652490/image0_8.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737013297336942603/a_37397898637eca6eae7458899b12826c.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736898861913604156/image0-10.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736898644808040538/a_e4931ce8b4c41a2f4bb15c51dfd0b898.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736898505427386378/f6bd4fa420a9d8ce58c6519a90bc8bc0.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736898257925570600/a_1e816625dd242018b144b924043a7933.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736897942342074428/a_8634244b88f7dc8eebbf416640489ef2.gif"
];
client.on("message", async message => {
  if (message.content === "hdhdhdhdh") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Coulpe`,
          color: `#ffff00`,
          image: {
            url: coulpe[Math.floor(Math.random() * coulpe.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////
var emoji = [
  "https://media.discordapp.net/attachments/762954136744099842/799811562427777063/Enes_Acar_15.gif",
  "https://media.discordapp.net/attachments/762954136744099842/800835842422734898/4270_Panda.gif",
  "https://media.discordapp.net/attachments/699520919328129055/803613686656401418/Haraketli_Emoji_261.gif"
];
client.on("message", async message => {
  if (message.content === "Remoji") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Emoji`,
          color: `#ffff00`,
          image: {
            url: emoji[Math.floor(Math.random() * emoji.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////
var girl = [
  "https://cdn.discordapp.com/attachments/820811352087330828/820954968793284658/image0.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/821516515391045642/image1.gif",
  "https://media.discordapp.net/attachments/687763784902770691/802939838793908244/a_b4686f704471be16d09d1cc6506cb4ce.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/770320501204713472/image0-12.gif",
  "https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif",
  "https://cdn.discordapp.com/attachments/737803232600129608/799869130014064681/g7.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800850948078698566/000_1-2.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/766092295949910056/image2.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/818627992007344158/image0.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/821167015322320916/image4.gif",
  "https://media.discordapp.net/attachments/659108278969696256/802937736675852318/image1.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/818627981580566568/image4.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/818630968776065064/image0.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800849143341514772/a_16743dfad984f574da0b7bc2f9a0b07f.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/818633362616614912/image2.gif",
  "https://media.discordapp.net/attachments/694695166895849562/797086937068077106/20210106_210640.gif",
  "https://cdn.discordapp.com/attachments/737803232600129608/799869125601918996/g5.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800850872401657886/dfdc034aab34632039e45f23a089278f.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800848548798791680/image8-1.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800859020608405514/gif1460.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800852701335912498/image3-1.gif"
];
client.on("message", async message => {
  if (message.content === "Rgirl") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Girl`,
          color: `#ffff00`,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////
var mmmm = [
"https://media.discordapp.net/attachments/738277612039962688/775017819980431360/image0.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820161179648/image1.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820445868032/image2.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820643262465/image3.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820853239808/image4.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017821129932860/image5.gif",       
"https://media.discordapp.net/attachments/738277612039962688/775017821611753472/image7.gif",
"https://media.discordapp.net/attachments/725046590242291763/775020613109678090/image0.gif",];
client.on("message", async message => {
  if (message.content === "Rkiss") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Kiss 💋`,
          color: `RANDOM`,
          image: {
            url: mmmm[Math.floor(Math.random() * mmmm.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////
var gggg = [
"https://media.discordapp.net/attachments/738277612039962688/775010008437096508/image0.gif"
  ,"https://media.discordapp.net/attachments/738277612039962688/775010008676433945/image1.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010008823103508/image2.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010008982224896/image3.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009151045692/image4.gif",
  "https://images-ext-1.discordapp.net/external/4enFwioluJ2wUTxGTx3YhHg_hcVxZcSnVDiJk9-48Ps/http/i.imgur.com/cLHRyeB.gif",
  "https://images-ext-2.discordapp.net/external/dI8V6HMg-HD1jC6QuJLrBJe9S5z3uXwXD8epc3lg_m4/http/i.imgur.com/FOdbhav.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009322094602/image5.gif",
  "https://images-ext-2.discordapp.net/external/l2UT2UeLq1KeBWae7c33nm9aKVvnI07iimUxeSkpyL0/http/i.imgur.com/K52NZ36.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009578340382/image6.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009796575262/image7.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009972867082/image8.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010010152566804/image9.gif"];
client.on("message", async message => {
  if (message.content === "Rhug") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Hug`,
          color: `RANDOM`,
          image: {
            url: gggg[Math.floor(Math.random() * gggg.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////

client.on("guildCreate" , Monty => {

  if(Monty.memberCount < 78 ){

    console.log(`  name ( ${Monty.name} ) zhmaray memberakan ( ${Monty.memberCount}) created by Monty`)//by Monty

    Monty.leave();

  }

})
