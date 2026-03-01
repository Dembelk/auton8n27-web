module.exports = {
  apps: [
    {
      name: 'auton8n27-web',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/auton8n27-web',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: '/var/log/pm2/auton8n27-web-error.log',
      out_file: '/var/log/pm2/auton8n27-web-out.log',
      log_file: '/var/log/pm2/auton8n27-web-combined.log',
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
}
