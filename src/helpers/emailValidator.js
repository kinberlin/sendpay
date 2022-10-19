export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "l'Email ne doit pas être vide."
  if (!re.test(email)) return 'Ooops! Nous avons besoin d\'une adresse valide .'
  return ''
}
