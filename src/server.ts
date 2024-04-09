import app from "./app";

async function main() {
  const server = app.listen(4000, () => {
    console.log("App is listening on port ", 4000);
  });
}

main();
