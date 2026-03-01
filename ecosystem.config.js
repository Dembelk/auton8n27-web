module.exports = {
  apps: [
    {
      name: 'auton8n27-web',
      script: '/usr/bin/npm',
      args: 'start -- -p 3001',
      cwd: '/home/dembelk/sites/auton8n27-web',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production'
      },
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
}
