import { GuildMember, TextChannel } from "discord.js";

/**
 * This handler searches for a Role, if it is found it will add it to the new GuildMember.
 * If it is not found, it will throw an error and find a Channel to send
 * the log message to. If it is not found it returns null.
 * iwant sdb
 * @param member The GuildMember that joined the Guild
 */
export const guildMemberAddHandler = async (member: GuildMember) => {
    try {
      const role = member.guild.roles.cache.get("some role id");
      if (!role) throw "Role not found.";
      member.roles.add(role);
    } catch (err) {
      const channel = <TextChannel>(
        member.guild.channels.cache.get("some channel id")
      );
      if (!channel) return null;
      channel.send("Role was not added to the member because it was not found");
    }
  };