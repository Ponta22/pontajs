module.exports = {
  async rewrites() {
    return [
      {
        source: '/main',
        destination: '/main.js', // Redirect ke file di root
      },
      {
        source: '/api/submit',
        destination: '/submit.js', // Redirect API ke file di root
      },
    ];
  },
};
