const USUARIOS = new Map()

USUARIOS.set('Carlos', 'Admin')
USUARIOS.set('Paloma', 'Admin')
USUARIOS.set('Julian', 'User')
USUARIOS.set('Evaristo', 'User')

console.log(getAdmins(USUARIOS))

function getAdmins(map) {
  let admins = []

  for ([key, value] of map) {
    if (value === 'User') {
      admins.push(key)
    }
  }
  return admins
}

console.log(getAdmins(USUARIOS))
