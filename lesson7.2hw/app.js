function createOtpElements() {
    const otpCodesContainer = document.getElementById('otp-codes');

    for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div');
        circle.classList.add('otp-circle');
        otpCodesContainer.appendChild(circle);
    }
}

function generateOTP() {
    const otpCircles = document.querySelectorAll('.otp-circle');

    otpCircles.forEach(circle => {
        const randomNumber = Math.floor(Math.random() * 10);
        circle.textContent = randomNumber;
    });
}

window.onload = () => {
    createOtpElements();
    generateOTP();
};
