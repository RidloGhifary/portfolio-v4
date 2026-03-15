export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  await fetch(process.env.DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `📩 Halo, ada yg ngechat nih dari Portfolio-v2

Name: ${name}
Email: ${email}
Message: ${message}`,
    }),
  });

  res.status(200).json({ success: true });
}
