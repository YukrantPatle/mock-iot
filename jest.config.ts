import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
		'@/auth': '<rootDir>/__test__/mocks/auth.ts',
		'next-auth/providers/credentials':
			'<rootDir>/__test__/mocks/next-auth-providers-credentials.ts',
		'next-auth': '<rootDir>/__test__/mocks/next-auth.ts',
	},
 
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)