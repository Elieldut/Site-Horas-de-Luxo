let creditCardBtn = document.getElementById('credit-card-btn');
let pixBtn = document.getElementById('pix-btn');
let paymentDetails = document.getElementById('payment-details');
let confirmPaymentBtn = document.getElementById('confirm-payment');

creditCardBtn.addEventListener('click', () => {
    paymentDetails.innerHTML = `
        <h2>Detalhes do Cartão</h2>
        <input type="text" placeholder="Número do Cartão">
        <input type="text" placeholder="Nome no Cartão">
        <div style="display: flex; gap: 10px;">
            <input type="text" placeholder="Validade" style="flex-grow: 1;">
            <input type="text" placeholder="CVV" style="flex-grow: 1;">
        </div>
    `;
});

pixBtn.addEventListener('click', () => {
    paymentDetails.innerHTML =`
        <h2>PIX</h2>
        <p>Chave PIX: sua_chave_pix</p>
        <p>Ou utilize o QR Code:</p>
        <img src="../QRCode.png" style="max-width: 100%; border-radius: 8px;">
        
    `;
});

  
confirmPaymentBtn.addEventListener('click', () => {
    alert('Pagamento confirmado!');
});