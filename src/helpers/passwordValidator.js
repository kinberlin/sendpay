export function passwordValidator(password) {
  if (!password) return "Password can't be empty."
  if (password.length < 4) return 'Le mot de passe doit avoir aumoins 04 caractères.'
  return ''
}
