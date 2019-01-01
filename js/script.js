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

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 50);
  }
}

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash; // Stores hash as target
    var $target = $(target); // Turns target dest. into a jQuery object

    $('html, body').animate({
      'scrollTop': $target.offset().top - 50
    }, 500, 'swing', function() { 
    	offsetAnchor();
      window.location.hash = target;
    });
  });
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);
