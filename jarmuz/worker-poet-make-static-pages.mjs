import { spawner } from "jarmuz/job-types";

spawner(function ({ baseDirectory, command }) {
  return command(`
      poet make static-pages ${baseDirectory}
        --public-path https://malzag.github.io/urban-octo-fortnight/
        --output-directory public
    `);
});
