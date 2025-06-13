import Pusher from "pusher";

export default () => {
  const config = useRuntimeConfig();

  const pusher = new Pusher({
    appId: config.PUSHER_APP_ID,
    key: config.PUSHER_KEY,
    secret: config.PUSHER_SECRET,
    cluster: config.PUSHER_CLUSTER,
    useTLS: true,
  });

  const generateFakeData = () => [
    {
      id: "1",
      name: "Server A",
      cpu: Math.floor(Math.random() * 16),
      ram: Math.floor(Math.random() * 64),
    },
    {
      id: "2",
      name: "Server B",
      cpu: Math.floor(Math.random() * 16),
      ram: Math.floor(Math.random() * 64),
    },
  ];

  const sendUpdate = () => {
    const data = generateFakeData();
    pusher
      .trigger("server-dash", "server-update", data)
      .then(() => console.log("Sent fake data to clients"))
      .catch((err) => console.error("Pusher error:", err));
  };

  sendUpdate();
  setInterval(sendUpdate, 2000);
};
