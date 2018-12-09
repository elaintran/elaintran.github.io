$(document).ready(function() {
	$(".all-tag").click(function() {
		$(".code-tag").removeClass("active");
		$(".all-tag").addClass("active");
		$(".design-tag").removeClass("active");
		$(".design").show();
		$(".code").show();
	})
	$(".code-tag").click(function() {
		$(".code").show();
		$(".design").hide();
		$(".code-tag").addClass("active");
		$(".all-tag").removeClass("active");
		$(".design-tag").removeClass("active");
	})
	$(".design-tag").click(function() {
		$(".design").show();
		$(".code").hide();
		$(".design-tag").addClass("active");
		$(".all-tag").removeClass("active");
		$(".code-tag").removeClass("active");
	})
}) 