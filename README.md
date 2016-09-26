# obi-config

Print configuration for Kimono projects

From within a Kimono project, running `obi config` will print out the
configuration for the current environment.

### Installation

```bash
$ npm install -g @kimonolabs/obi-config
```

### Usage

```bash
$ cd /path/to/project
$ obi config                        # print out current environment
$ NODE_ENV=production obi config    # print out production environment
```
