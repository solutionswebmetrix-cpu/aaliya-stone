export const CONTACT_INFO = {
  phone: "+919828010456",
  email: "info@aaliyastones.com",
  whatsapp: "https://wa.me/919828010456"
};

export const formatWhatsAppMessage = (name, email, phone, message, productName = null) => {
  let text = "Hello Aaliya Stones,%0A%0A";
  if (productName) {
    text += `Product: ${productName}%0A`;
  }
  text += `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`;
  return text;
};

export const formatEmailSubject = (productName = null) => {
  return productName ? `Quote Request: ${productName}` : "New Inquiry from Website";
};

export const formatEmailBody = (name, email, phone, message, productName = null) => {
  let body = "Hello Aaliya Stones,%0D%0A%0D%0A";
  if (productName) {
    body += `Product: ${productName}%0D%0A`;
  }
  body += `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0A${message}`;
  return body;
};
