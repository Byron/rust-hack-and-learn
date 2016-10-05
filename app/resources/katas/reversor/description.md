This Kata will help you to setup a tiny project, exhibiting all traits you would
expect from a an actual project used in production.

It will make you create:

* a command-line program to reverse strings
* a library to allow others to use the functionality without requiring the command-line program
* a proof that both the command-line program and the library are working

# Goal

Make the following program invocations succeed.

```bash
$ reversor foo
oof
$ reversor bar foo
oof rab
$ reversor hello™
™olleh
$ reversor || echo $?
Please provide at least one argument to reverse
1
```

An external program uses your functionality.

```bash
$ library-client
hello world -> dlrow olleh
```

* a unit-test proves that the functionality is correct (*e.g. show that `hello™` results in `™olleh`*)
* a functional test proves that the command-line tool works
