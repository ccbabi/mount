var doc = document
var posMenu = ['replace', 'prepend', 'append', 'before', 'after']

module.exports = function (refEle, pos) {
  var id, postion

  if (refEle) {
    switch (typeof refEle) {
      case 'string': {
        if (refEle[0] !== '#') throw Error('When refEle is a string, it must start with a # and indicate an ID query.')
        refEle = doc.getElementById(refEle.slice(1))
        break
      }
      case 'object': {
        if (refEle.nodeType !== 1) throw TypeError('RefEle can only be element nodes.')
        break
      }
      default:
        throw TypeError('RefEle can only be the element node or element node ID string.')
    }
  }

  if (!refEle) {
    refEle = doc.body
  }

  if (!refEle) {
    if (doc.querySelector) {
      refEle = doc.querySelector('body')
    }
  }

  if (!refEle) {
    refEle = doc.getElementsByTagName('body')[0]
  }

  if (pos || typeof pos === 'string') {
    if (!~posMenu.join(id).indexOf(pos)) {
      throw RangeError('The value of pos can only be ' + posMenu.join(',') + '.')
    }
  }

  if (!pos) {
    pos = refEle.nodeName === 'BODY' ? 'prepend' : posMenu[0]
  }

  switch (pos) {
    case 'replace': {
      return refEle
    }
    case 'prepend': {
      return refEle.insertBefore(doc.createElement('div'), refEle.childNodes[0])
    }
    case 'append': {
      return refEle.appendChild(doc.createElement('div'))
    }
    case 'before':
    case 'after': {
      id = Math.random().toString(36).slice(2)
      postion = pos === 'before' ? 'beforebegin' : 'afterend'
      refEle.insertAdjacentHTML(postion, '<div data-vm-mount="1" id="' + id + '"></div>')
      return document.getElementById(id)
    }
  }
}
