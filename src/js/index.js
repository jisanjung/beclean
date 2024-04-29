// view
$("#menuBtn").on("click", function() {
    $("#navMobile").slideToggle();
});

$(".down-chevron").on("click", function() {
    const clickedParent = $(this).closest('.pricing-each');
    const priceDetails = clickedParent.find(".price-details");
    priceDetails.slideToggle();
});