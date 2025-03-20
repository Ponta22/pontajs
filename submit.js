export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nama, umur } = req.body;
    const message = `.daftar ${nama}.${umur}`;
    const waLink = `https://wa.me/+447424417961?text=${encodeURIComponent(message)}`;

    res.status(200).json({
      message: 'Berhasil dikirim, Senpai! Cek WhatsApp ya!',
      waLink,
    });
  } else {
    res.status(405).json({ message: 'Method not allowed, Senpai!' });
  }
}
