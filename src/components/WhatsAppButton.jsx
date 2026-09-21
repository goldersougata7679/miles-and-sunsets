const WHATSAPP_NUMBER = "918900236308"; 

function WhatsAppButton() {
  const message = "Hi Miles & Sunsets! I am looking for some trekking information.";
  
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        // If your PNG already has a green background, you can change this to 'transparent'
        backgroundColor: '#25D366', 
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        zIndex: 1000,
        textDecoration: 'none',
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {/* Replaced the emoji with an img tag pointing to your downloaded PNG */}
      <img 
        src="/images/whatsapp.png" 
        alt="WhatsApp" 
        style={{ width: '35px', height: '35px', objectFit: 'contain' }} 
      />
    </a>
  );
}

export default WhatsAppButton;