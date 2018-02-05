let currentDivParentId = ''
let observer = null

function emitChange() {
  observer(currentDivParentId);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveImg(toNewDivParentId) {
  currentDivParentId = toNewDivParentId
  emitChange();
}

export function canMoveImg(toNewDivParentId) {
  return toNewDivParentId.indexOf('dayN') !== -1
}
