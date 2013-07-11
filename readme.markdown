[![Build Status](https://travis-ci.org/lushvino/vinoipsum.png?branch=master)](https://travis-ci.org/lushvino/vinoipsum)


### Vino Ipsum

Vino Ipsum is a module/for the node.js platform that can generate passages of lorem ipsum text that is based around wine related words

This module was inspired and derived from the [node-lorem-ipsum](https://raw.github.com/knicklabs/node-lorem-ipsum) module fron [kicklabs](https://github.com/knicklabs)


## Demo App

See [Vino Ipsum API Server](http://ipsum.lushvino.com/about)

### Using the Binary

Install the Vino Ipsum module globally so that you can access the binary from anywhere.


```bash
npm install vinoipsum -g
```

Execute the statement `vinoipsum` on the command line to generate a passage of vino ipsum. You can pass arguments to the program to fine-tune the output. See below.

```bash
vinoipsum
```

Description of the arguments.

<table>
  <tr>
    <th>Argument</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-s</td>
    <td>Generate a sentance</td>
  </tr>
  <tr>
    <td>-p</td>
    <td>Generate a paragraph of vino ipum</td>
  </tr>
  <tr>
    <td>--count</td>
    <td>Specifies the number of (sentance or paragraph) to generate. <i>Defaults to 1</i></td>
  </tr>  
  
  <tr>
    <td>--html</td>
    <td>Wrap the output in HTML tags</td>
  </tr>  
  <tr>
    <td>--copy</td>
    <td><strong>Copy</strong> the output to the system clipboard</td>
  </tr>
</table>


### License

This software is licensed under the MIT license.

Copyright (c) 2013 Mark Lussier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.