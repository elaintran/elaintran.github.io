//tag toggle
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

// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 50);
  }
}

// Captures click events of all a elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);
