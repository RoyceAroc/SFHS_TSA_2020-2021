 AOS.init();
 window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    /*
	id = elem
	 <polyline points="0,0 0,200 220,200 300, 90 12241,150 12241,0"
  style="fill: #485D71;stroke:white;stroke-width:4" />
  */
  if((200 -scroll) > 85) {
  	document.getElementById("elem_fix").innerHTML = ("<polyline points=\"0,0 0," + (200-scroll) + " " + (200-scroll) + "," + (200-scroll) + " 300,90 12241,150 12241,0\" style=\"fill: #485D71;stroke:white;stroke-width:4\"/>");
	  document.getElementById("elem_fix").style.height = "250";
  } else {
	document.getElementById("elem_fix").innerHTML = ("<polyline points=\"0,0 0,90  300, 90 12241,150 12241,0\" style=\"fill: #485D71;stroke:white;stroke-width:4\" />");
	 document.getElementById("elem_fix").style.height = "100";
  }
  if(scroll > 270) {
	 $( "#searchBar" ).fadeIn(800);
  } else {
	 $( "#searchBar" ).fadeOut(100);
  }

})

function resize() {
	//Screen Resize Function
	const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
	//alert(width);
	console.log("Screen Width: " + width + " | Height: " + height);
	document.getElementById("create").innerHTML = "<polygon points=\"0,0 " + width + ",0 " + width + ",250 0,170\" style=\"fill:#0E355F;\" />";	

	//Linear Regression Formulas for Building SVG Change
	document.getElementById("intern").style.zoom = ((width * 0.0450463) + 70.67075) + "%";
	document.getElementById("intro_b").style.zoom = ((width * 0.100316) - 12.93772394) + "%";
	document.getElementById("size").style.height = ((width * 0.434965) - 278.0782412) + 140 + "px";
	//alert(document.getElementById("size").style.height);
	//document.getElementById("navbar3").style.top = ((((width * 0.434965) - 278.0782412) * -1) + 18) + "px";
	if(width < 1919) {
		document.getElementById("building").style.zoom = ((width * 0.076969) - 41.373) + "%";
		document.getElementById("building").style.top = ((width * -0.04678) + 90.432845) + "%";
	} else {
		document.getElementById("building").style.zoom = ((width * 0.0043) + 93) + "%";
		document.getElementById("building").style.top = "";
	}
	document.getElementById("building").style.left = ((width * 0.034788152) - 66.96783007) + "%";
}
$(window).on("resize", resize);
resize();

(function(root) {
EasingFunctions = {
	linear: function(t) {
	return t
	},
	easeInQuad: function(t) {
	return t * t
	},
	easeOutQuad: function(t) {
	return t * (2 - t)
	},
	easeInOutQuad: function(t) {
	return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
	},
	easeInCubic: function(t) {
	return t * t * t
	},
	easeOutCubic: function(t) {
	return (--t) * t * t + 1
	},
	easeInOutCubic: function(t) {
	return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
	},
	easeInQuart: function(t) {
	return t * t * t * t
	},
	easeOutQuart: function(t) {
	return 1 - (--t) * t * t * t
	},
	easeInOutQuart: function(t) {
	return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
	},
	easeInQuint: function(t) {
	return t * t * t * t * t
	},
	easeOutQuint: function(t) {
	return 1 + (--t) * t * t * t * t
	},
	easeInOutQuint: function(t) {
	return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
	}
};

var requestAnimationFrame =
	window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback) {
	return window.setTimeout.call(window, callback, 40);
	};

function animatePath(path, opts) {

	function draw() {
	var progress = (new Date()) - start;
	if (progress <= opts.duration) {
		var t = opts.easing(progress / opts.duration);
		path.setAttribute('stroke-dasharray', (len * t) + ',' + (len * (1 - t)));
		requestAnimationFrame(draw);
	}
	}

	var len = path.getTotalLength(),
	start = new Date();

	requestAnimationFrame(draw);
}

root.animatePaths = function(opts) {
	opts = opts || {};

	// default values
	var order = opts.order || 'parallel',
	paths = opts.paths || [],
	duration = opts.duration || 3000,
	easing = opts.easing || 'linear';

	switch (order) {
	case 'parallel':
		for (var i = 0; i < paths.length; i++) {
		animatePath(paths[i], {
			duration: duration,
			easing: EasingFunctions[easing]
		});
		}
		break;
	case 'sequential':
		break;
	default:
		console.error('Invalid order: ' + order);
	}
};
})(window);

window.onload = function() {
	animatePaths({
	paths: document.querySelectorAll('path'),
	duration: 4000
	});
	$("#title").slideUp();
	$("#title").slideDown(1500);
};
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; ++i) {

  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
	let id = $(this).attr("id");
	let list = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
	for(let m=0; m<list.length; m++) {
		if(id==list[m]) {
			let cons = [0, 4, 8, 16, 21, 26, 35];
			document.getElementById(cons[m]).click();
		}
	}
	document.getElementById("content").click();
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 300 + "px";
    } 
  });
}

let index = [49, 103,111,265,87,127,163,241,97,0,0,249,257,275,309,317,75,169,201,233,285,119,145,183,301,0,155,295,41,67,137,175,209,217,223,59,193]
	function open1(numA) {
		//var browse = document.getElementById("opened");
		$("#opened").fadeIn();
		document.getElementById('guidelines');
		document.getElementById('guidelines').src = "https://tsa.roydero.com/media/CompGuidelines.pdf#page=" + index[numA];

		
	}

$(document).ready(function () {
  $('li').click(function () {
	let choose = $(this).attr('id');
    if ($(this).hasClass('expand')) {
      $(this).removeClass('expand');
      $(this).find('div').text('');
    } else {
      // Remove all expand classes from list items
      $('li').removeClass('expand');
      $('li').find('div').text('');
      // Add to the newly clicked list item
      $(this).addClass('expand');
      $(this).find('div').html(function () {
        list = "https://tsa.roydero.com/images/slides/" + choose + ".jpg";
        return "<ol class=\"clean\"><img src=\"" + list + "\"/><br><br><button onclick=\"open1(" + choose + ")\"> Read More </button></ol>";
      });
    }
  });

  $('.expand').click(function () {
    // Remove all expand classes from list items
    $('li').removeClass('expand');
  });
});

function join() {
    $("#modalA").fadeIn();
}
function popClose() {
	$("#modalA").fadeOut();
}
function closePop() {
	$("#opened").fadeOut();
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}
