/*eslint-disable no-var, vars-on-top, no-console */
const { promisify } = require('util');
const { exec } = require('child_process');
const chalk = require('chalk');
const Rsync = require('rsync');
const yargs = require('yargs');

const paths = require('../config/paths');

const run = promisify(exec);

function publish() {
  const rsync = new Rsync()
    .shell('ssh')
    .exclude('.DS_Store')
    .flags('az')
    .source(`${paths.destination}/`)
    .destination('reactboilerplate@react-boilerplate.com:/home/reactboilerplate/public_html/redux-saga');

  rsync.execute((error, code, cmd) => {
    if (error) {
      process.exit(1);
    }

  });
}

function deploy() {
  const start = Date.now();

  return exec('npm run build', errBuild => {
    if (errBuild) {
      process.exit(1);
    }

    publish();
  });
}

function updateDependencies() {
  return run('git rev-parse --is-inside-work-tree')
    .then(() =>
      run('git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD')
        .then(({ stdout }) => {
          if (stdout.match('package.json')) {
            exec('npm update').stdout.pipe(process.stdout);
          }
          else {
          }
        })
        .catch(err => {
          throw new Error(err);
        })
    )
    .catch(() => {
    });
}

function checkUpstream() {
  return run('git rev-parse --is-inside-work-tree')
    .then(() =>
      run('git remote -v update')
        .then(() => {
          Promise.all([
            run('git rev-parse @'),
            run('git rev-parse @{u}'),
            run('git merge-base @ @{u}'),
          ])
            .then(([
              { stdout: $local },
              { stdout: $remote },
              { stdout: $base },
            ]) => {
              if ($local === $remote) {
              }
              else if ($local === $base) {
                process.exit(1);
              }
            })
            .catch(err => {
              if (err.message.includes('no upstream configured ')) {
                return;
              }

            });
        })
        .catch(err => {
          throw new Error(err);
        })
    )
    .catch(() => {
    });
}

module.exports = yargs
  .command({
    command: 'publish',
    desc: 'publish last build',
    handler: publish,
  })
  .command({
    command: 'deploy',
    desc: 'build and publish',
    handler: deploy,
  })
  .command({
    command: 'upstream',
    desc: 'has new remote commits',
    handler: checkUpstream,
  })
  .command({
    command: 'update',
    desc: 'run `npm update` if package.json has changed',
    handler: updateDependencies,
  })
  .demandCommand()
  .help()
  .wrap(72)
  .version(false)
  .strict()
  .fail((msg, err, instance) => {
    if (err) {
      throw new Error(err);
    }

    console.error(`${chalk.red(msg)}
    `);
    process.exit(1);
  })
  .argv;
