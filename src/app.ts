import server from './presentation/server';
import routes from './presentation/routes';

(async () => {
  await main();
})();


async function main() {


  const Server = server(
    routes(),
    3000
  );

}