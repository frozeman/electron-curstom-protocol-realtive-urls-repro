# electron-curstom-protocol-realtive-urls-repro
Test repro for https://github.com/atom/electron/issues/1747#issuecomment-174792471


To run the repro, you need to have Meteor.js installed. If not install meteor as follows:

     curl https://install.meteor.com/ | sh

Then start the test app by running:

    $ cd repro/myapp
    $ meteor --production

In another terminal start the electron app:

    $ cd repro/
    $ electron .

**To test the difference, run then the meteor app without the `--production` flag and then restart electron.**

You may need to increase the number after the `?` in line 77 of the `main.js`, to prevent caching.