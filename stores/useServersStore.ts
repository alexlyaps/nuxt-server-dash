import { defineStore } from "pinia";
import serversData from "~/public/servers.json";

interface Server {
  id: string;
  name: string;
  cpu: number;
  ram: number;
}

let subscribed = false;

export const useServersStore = defineStore("servers", () => {
  const servers = ref<Server[]>([]);

  const fetchServers = () => {
    if (subscribed) return;
    subscribed = true;
    const { $channel } = useNuxtApp();
    $channel.bind("server-update", (data: Server[]) => {
      if (data) {
        servers.value = data;
      }
    });
  };

  return {
    servers,
    fetchServers,
  };
});
