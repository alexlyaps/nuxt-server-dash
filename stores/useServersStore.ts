import { defineStore } from "pinia";
import servers from "~/public/servers.json";

export const useServersStore = defineStore("servers", {
  state: () => ({
    servers: [] as Server[],
  }),
  actions: {
    async fetchServers() {
      // Замените на ваш API
      // const { data } = await useFetch("~/public/servers.json");
      const data = servers;
      console.log(data);
      if (data) {
        this.servers = data as Server[];
      }
    },
  },
});

interface Server {
  id: string;
  name: string;
  cpu: number;
  ram: number;
}
