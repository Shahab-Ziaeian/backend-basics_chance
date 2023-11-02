import { server } from "./server.js";

const port = 9000;
server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
