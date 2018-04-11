module.exports = function (refEle, pos) {
  var doc = document
  var posMenu = ['replace', 'prepend', 'append', 'before', 'after']
  var id = Math.random().toString(36).slice(2)
  var mount = doc.createElement('div')
  var postion

  if (refEle) {
    if (typeof refEle === 'string') {
      if (refEle[0] !== '#') throw Error('When refEle is a string, it must start with a # and indicate an ID query.')
      refEle = doc.getElementById(refEle.slice(1))
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
      return refEle.insertBefore(mount, refEle.childNodes[0])
    }
    case 'append': {
      return refEle.appendChild(mount)
    }
    case 'before':
    case 'after': {
      postion = pos === 'before' ? 'beforebegin' : 'afterend'
      refEle.insertAdjacentHTML(postion, '<div id="' + id + '"></div>')
      return document.getElementById(id)
    }
  }
}
