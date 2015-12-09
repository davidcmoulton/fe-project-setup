# Frontend project setup
This repo contains tools to help me get a front end project up and running quickly. In constant development as my requirements evolve. YMMV. If you like it and want to improve it, just ping me a pull request.

Where available, linting files should enforce coding standards documented at https://github.com/davidcmoulton/front-end-coding-standards.

N.B. \*nix only atm as uses bash script.

## Setup

```
$ git clone https://github.com/davidcmoulton/fe-project-setup 
$ cd fe-project-setup 
$ ./setup.sh
```

This will download and build patternlab and install a grunt workflow.

## Building
### Patternlab
In a sepatate terminal, run `php ./core/builder.php -gw`

### Grunt  
In a separate terminal, run `grunt watch` to build-on-change.

## Viewing output
// TODO.
 
