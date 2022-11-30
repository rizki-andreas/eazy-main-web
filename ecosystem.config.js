module.exports = {
    apps: [
    {
       name: "eazyweb", // ubah sesuai nama aplikasi yang dibuat
       script: "npx",
       // sesuaikan port yang telah diubah
       args: "npm run start",
       interpreter: "none",
       watch: true,
       merge_logs: true,
       env: {
         "NODE_ENV": "production",
       }
      }
    ]
   }   