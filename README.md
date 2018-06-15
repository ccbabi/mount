# mount
Mount HTMLElement to the DOM tree

## Install
```sh
$ npm install --save vm-mount
```

## API
### mount(refEle, pos)

Mount the specified location to the node tree.

The return value is a node element.

#### refEle
The parameter refEle representation is a reference node whose value is an element or an id string.

The default is the body element. 

#### pos
Pos represents the location of the insertion, with the following values:
- **repalce**: Replace the reference node directly.
- **prepend**: Insert at the front of the refEle container node.
- **append**: Insert at the end of the refEle container node.
- **before**: Insert in front of the refEle container node.
- **after**: Insert after the refEle container node.

The default is replace, but when refEle is the body element, the default value is prepend.

## License
MIT
