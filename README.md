#Bug Replication Steps:

1.  Use Sveltekit with the Cloudflare Adapter
2.  Try to build it
3.  It will fail with the error `Error: > Using @sveltejs/adapter-cloudflare
    X [ERROR] Could not resolve "fs"

        node_modules/@neon-rs/load/dist/index.js:28:32:
          28 │ const fs = __importStar(require("fs"));
             ╵                                 ~~~~

Cannot use "fs" when deploying to Cloudflare.

X [ERROR] Could not resolve "child_process"

    node_modules/detect-libc/lib/detect-libc.js:6:29:
      6 │ const childProcess = require('child_process');
        ╵                              ~~~~~~~~~~~~~~~

Cannot use "child_process" when deploying to Cloudflare.

X [ERROR] Could not resolve "fs"

    node_modules/detect-libc/lib/filesystem.js:6:19:
      6 │ const fs = require('fs');
        ╵                    ~~~~

Cannot use "fs" when deploying to Cloudflare.'`
