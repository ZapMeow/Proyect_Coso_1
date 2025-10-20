export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx'],
<<<<<<< HEAD
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  }
=======
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
>>>>>>> 845d17b81f7c48dc6d03e966000eed9352c16308
};