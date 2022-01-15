import app from './app';

const DEFAULT_PORT = 3000;

try {
  app.listen(DEFAULT_PORT);
  console.log(`Server is running on port ${DEFAULT_PORT}`);
} catch (e) {
  console.log(e);
}
