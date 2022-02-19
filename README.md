# quadratic-equations-solver
Quadratic Equation Solver with CLI interface.

## Installation

### Installation requirements

* OS with Bash script interpretator (Linux, macOS, WSL)
* Node.js with version 12.18.4 or higher

### Installation process

1. Clone the repository to your local drive
2. Move in terminal to the cloned repository
3. `chmod +x equation.sh`
4. Done!

## Usage

### Interactive mode

In order to load interactive mode, launch the following command:

```bash
$ ./equation.sh
```

You will see the prompt:

```
a = 
```

Enter a non-zero number for `a`:

```
a = 7
b =
```

Enter any numbers for `b` and `c` and you will see calculation results:

```
a = 7
b = 21
c = -14
Equation is: (7)*x^2 + (21)*x + (-14) = 0
There are 2 roots
x1 = 0.5615528128088302
x2 = -3.5615528128088303
```

In order to check the results, substitute x1 and x2 into the equation.

### Non-interactive mode (file reading)

Firstly, you should create a text file with contents like this:

```
1 -3    5.2

```

Let it be named `test.txt`.

Then, load the following command:

```bash
$ ./equation.sh test.txt
```

Calculation results:

```
Equation is: (1)*x^2 + (-3)*x + (5.2) = 0
There are 0 roots
```

_I've got no roots, but my home was never under ground..._

## Contributors

Liubov Kvasova ([GitHub profile](https://github.com/LiubovKvasova))

## Revert commit

It's here: [1921273](https://github.com/LiubovKvasova/quadratic-equations-solver/commit/1921273e054768626837083bababe0e3a457ee6f)