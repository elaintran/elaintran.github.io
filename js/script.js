$(document).ready(function() {
	//display project information onto page
	var projects = [
		{
			title: "Burger",
			category: "Web Development",
			type: "code",
			image: "images/burger.png",
			link: "burger.html"
		},
		{
			title: "EventBite",
			category: "Web Development",
			type: "code",
			image: "images/eventbite.png",
			link: "eventbite.html"
		},
		{
			title: "Train Scheduler",
			category: "Web Development",
			type: "code",
			image: "images/train-scheduler.png",
			link: "train-scheduler.html"
		},
		// {
		// 	title: "Wikipedia Viewer",
		// 	category: "Web Development",
		// 	type: "code",
		// 	image: "images/wikipedia-viewer3.png",
		// 	link: "wikipedia-viewer.html"
		// },
		{
			title: "Daily UI Challenge",
			category: "Visual Design",
			type: "design",
			image: "images/daily-ui-day-one2.png",
			link: "daily-ui-challenge.html"
		},
	];

	function projectDisplay() {
		for (var i = 0; i < projects.length; i++) {
			var col = $("<div>").addClass("col-sm-6 " + projects[i].type);
			var projectContent = $("<div>").addClass("project project-item");
			var img = $("<img>").attr("src", projects[i].image).addClass("category__image");
			var link = $("<a>").attr("href", projects[i].link);
			var projectName = $("<h3>").text(projects[i].title);
			var projectCategory = $("<h5>").text(projects[i].category);
			var figcaption = $("<figcaption>").append(projectName).append(projectCategory);
			link.append(figcaption);
			projectContent.append(img).append(link);
			col.append(projectContent);
			$("#portfolio .row").append(col);
		}
		//scroll down to portfolio section
		setTimeout(function() {
			$("html, body").animate({
				"scrollTop": $(location.hash).offset().top - 100
			});
		}, 1)
	}
	projectDisplay();

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

	//smooth scrolling on index page
	$("a[href^='#']").on("click", function() {
		var target = $(this).attr("href");
		$("html, body").animate({
			"scrollTop": $(target).offset().top - 100
		});
	});
})

//prevent from jumping to the hash immediately on load
if (location.hash) {
	setTimeout(function() {
	  window.scrollTo(0, 0);
	}, 1);
}