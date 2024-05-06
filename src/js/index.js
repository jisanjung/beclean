// view
$("#menuBtn").on("click", function() {
    $("#navMobile").slideToggle();
});

$(".down-chevron").on("click", function() {
    const clickedParent = $(this).closest('.pricing-each');
    const priceDetails = clickedParent.find(".price-details");
    priceDetails.slideToggle();
});

const contactPreference = document.getElementById('contactPreference');
contactPreference.addEventListener('change', () => {
    const textboxEmail = document.getElementById('textboxEmail');
    const textboxPhone = document.getElementById('textboxPhone');
    if (contactPreference.value && contactPreference.value === 'Email') {
        textboxEmail.style.display = 'block';
        textboxPhone.style.display = 'none';
    }
    if (contactPreference.value && contactPreference.value === 'Phone') {
        textboxEmail.style.display = 'none';
        textboxPhone.style.display = 'block';
    }
});