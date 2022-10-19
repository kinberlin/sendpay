export function phoneValidator(phone) {
    const re = /\S+@\S+\.\S+/
    if (!phone) return "Hmm!, Le téléphone."
    if (phone.length < 9 || phone.length > 9) return 'Ooops! Nous avons besoin de votre contact .'
    return ''
  }