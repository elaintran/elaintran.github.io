$(document).ready(function() {
	//tag toggle
	$(".all-tag").on("click", function() {
		activeTags(".all-tag", ".code-tag", ".design-tag", ".code", ".design");
		$(".design").fadeIn(500);
	})

	$(".code-tag").on("click", function() {
		activeTags(".code-tag", ".all-tag", ".design-tag", ".code", ".design");
	})

	$(".design-tag").on("click", function() {
		activeTags(".design-tag", ".all-tag", ".code-tag", ".design", ".code");
	})

	function activeTags(activeTag, inactiveTagOne, inactiveTagTwo, hiddenTagOne, hiddenTagTwo) {
		$(activeTag).addClass("active");
		$(inactiveTagOne).removeClass("active");
		$(inactiveTagTwo).removeClass("active");
		$(hiddenTagOne).hide();
		$(hiddenTagTwo).hide();
		$(hiddenTagOne).fadeIn(500);
	}

	//smooth scrolling
	$(".fa-angle-down").on("click", function() {
		$("html, body").animate({
			"scrollTop": $(this).offset().top
		})
	})
})