import Pusher from "pusher-js";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const pusher = new Pusher(config.public.PUSHER_KEY as string, {
    cluster: config.public.PUSHER_CLUSTER as string,
    forceTLS: true,
  });

  const channel = pusher.subscribe("server-dash");

  // Логирование событий подключения
  pusher.connection.bind("state_change", (states: any) => {
    console.log("Pusher state:", states.current);
  });

  // Тестовое событие из консоли Pusher
  channel.bind("test-event", (data: any) => {
    console.log("Получены данные из Pusher:", data);
  });

  return {
    provide: {
      pusher,
      channel,
    },
  };
});
