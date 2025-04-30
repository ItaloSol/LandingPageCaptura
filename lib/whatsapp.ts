export function generateWhatsAppLink(message = "Olá! Vim pelo seu site e gostaria de saber mais sobre suas landing pages de alta conversão.") {
  const phoneNumber = "556199315616"; // Updated phone number
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}