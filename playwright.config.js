import {devices} from '@playwright/test'

export default {
  timeout: 20000,
  use: {
    ignoreHTTPSErrors: true,
    headless: true,
    launchOptions: {
      args: [
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        '--disable-setuid-sandbox',
        '--no-sandbox'
      ],
      firefoxUserPrefs: {
        'media.navigator.permission.disabled': true,
        'media.navigator.streams.fake': true
      }
    }
  },
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']}
    },
    {
      name: 'firefox',
      use: {...devices['Desktop Firefox']}
    },
    {
      name: 'webkit',
      use: {...devices['Desktop Safari']}
    }
  ],
  webServer: {
    command: 'http-server -S -C ./test/certs/cert.pem -K ./test/certs/key.pem',
    url: 'https://localhost:8080/test',
    ignoreHTTPSErrors: true
  }
}
