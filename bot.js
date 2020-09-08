const chat = {
	1: {
	  text: 'Welcome to SFHS TSA! What topic do you need help with?',
	  options: [
	  {
		text: 'About TSA',
		next: 2
	  }, 
	  {
		text: "Events",
		next: 6 }, {
			text: "Meetings",
			next: 8
		}, {
			text: "Point Program",
			next: 9
		}, {
			text: "Registration",
			next: 13
		}
		] },
  
  
  
	2: {
	  text: 'TSA - <i>Technology Student Assosciation</i> - is a national organization led by students. ',
	  next: 3 },
  
	3: {
	  text: 'Our growing chapter, winning <b>3rd</b> at GA TSA SLC Conference, is proud of its members, coaches, and officers. Learn more about our ',
	  options: [
	  {
		text: "Officers",
		next: 4},
  
	  {
		text: "Members",
		next: 5 }] },
  
  
  
	4: {
	  text: 'Our 12 Officers work hard to make the TSA Chapter grow bigger. ',
	  options: [
	  {
		text: "Our Officers",
		url : "../Chapter/Officers.html" }] },
  
		5: {
	  text: 'Members compete in events, get a chance to run as officers, and help make our SFHS TSA Chapter grow bigger.',
	  options: [
	  {
		text: "Our Members",
		url : "../Chapter/Members.html" }] },
		6: {
	  text: 'There are <u>39</u> Competitive Events in TSA, including Design, Engineering, and Computer Science. ',
	  next: 7 },
	7: {
	  text: 'Learn more about which events are best for you!',
	  options: [
	  {
		text: "Event Descriptions",
		url: "../Competition/EventInformation.html" }, 
		{
		text: "Event Themes",
		url: "../Competition/EventThemes.html" },
		/*{
		text: "Guidelines Booklet",
		url: "../media/CompGuidelines.pdf" }*/] },
  
		8: {
	  text: 'The meetings will be hosted on Thursdays after-school (Dates TBA). The meetings will start at 4:00 PM in Mr. Hodges and Mrs. Zhou\'s rooms in the Engineering Hallway in West Hall. These meetings will accommodate both in-school and virtual students. Virtual students can simply join a Microsoft Teams meeting posted on the ItsLearning page, and in-school students will sit in the classrooms. All state restrictions apply, so masks and social distancing will be mandated. ',
	  },
	  9: {
	  text: 'To keep our members actively participated, the point system was introduced in our SFHS TSA Chapter.',
	  next: 10
	  },
	  10: {
	  text: 'Points are gained by completing activities that benefit our local chapter, and are necessary to gain access to special events.',
	  options: [
	  {
		text: "Learn More",
		next: 11},
  
	  {
		text: "What can I do with my points?",
		next: 12 }] },
		11: {
	  text: 'Points can be earned by <ul><li> 2 Points per Meeting</li><li>Varying points per fundraiser</li><li>10 Points per Conference</li><li>5 Points for winning T-Shirt Design</li><li>Points for following on Instagram</li><li>Points for getting your friends to join</li><li>7 points for proposal for chapter event or group project</li><li>1st Place = 8 Points </li><li>2nd Place = 4 Points</li><li>3rd Place = 2 Points</li><li>More options TBA Soon </li></ul>',
	   },
	   12: {
	  text: 'Points can be used for <ul><li>Attending the Banquet</li><li>Person with the highest points earns a prize</li> <li> More TBA</li></ul>',
	   },
	   13: {
	  text: 'Registration for the 2020-2021 TSA is pretty simple. First complete the Google Forms Questionnaire. Then pay the dues. Next, join us on Social Media.',
	  options: [
	  {
		text: "Questionnaire",
		url: "https://forms.gle/1idUPFj6g75AyS2w7"},
  
	  {
		text: "Pay Dues",
		url: "https://www.mypaymentsplus.com/welcome" },
		{
		   text: "Social Media",
		   next: 14
	   }
  
		]
	   },
	   14: {
	  text: 'Join us on GroupMe and Social Media for updates on TSA',
	  options: [
	  {
		text: "GroupMe",
		url: "https://groupme.com/join_group/61087657/3akL7jbm"},
  
	  {
		text: "Instagram",
		url: "https://www.instagram.com/sfhs.tsa/" }
		]
	   }
	   };
		
  
  
  
  
  const bot = function () {
  
	const peekobot = document.getElementById('peekobot');
	const container = document.getElementById('peekobot-container');
	const inner = document.getElementById('peekobot-inner');
	let restartButton = null;
  
	const sleep = function (ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	};
  
	const scrollContainer = function () {
	  inner.scrollTop = inner.scrollHeight;
	};
  
	const insertNewChatItem = function (elem) {
	  //container.insertBefore(elem, peekobot);
	  peekobot.appendChild(elem);
	  scrollContainer();
	  //debugger;
	  elem.classList.add('activated');
	};
  
	const printResponse = async function (step) {
	  const response = document.createElement('div');
	  response.classList.add('chat-response');
	  response.innerHTML = step.text;
	  insertNewChatItem(response);
  
	  await sleep(1500);
  
	  if (step.options) {
		const choices = document.createElement('div');
		choices.classList.add('choices');
		step.options.forEach(function (option) {
		  const button = document.createElement(option.url ? 'a' : 'button');
		  button.classList.add('choice');
		  button.innerHTML = option.text;
		  if (option.url) {
			button.href = option.url;
		  } else {
			button.dataset.next = option.next;
          }
          button.id= "clown";
		  choices.appendChild(button);
		});
		insertNewChatItem(choices);
	  } else if (step.next) {
		printResponse(chat[step.next]);
	  }
	};
  
	const printChoice = function (choice) {
	  const choiceElem = document.createElement('div');
	  choiceElem.classList.add('chat-ask');
	  choiceElem.innerHTML = choice.innerHTML;
	  insertNewChatItem(choiceElem);
	};
  
	const disableAllChoices = function () {
	  const choices = document.querySelectorAll('.choice');
	  choices.forEach(function (choice) {
		choice.disabled = 'disabled';
	  });
	  return;
	};
  
	const handleChoice = async function (e) {
  
	  if (!e.target.classList.contains('choice') || 'A' === e.target.tagName) {
		// Target isn't a button, but could be a child of a button.
		var button = e.target.closest('#peekobot-container .choice');
  
		if (button !== null) {
		  button.click();
		}
  
		return;
	  }
  
	  e.preventDefault();
	  const choice = e.target;
  
	  disableAllChoices();
  
	  printChoice(choice);
	  scrollContainer();
  
	  await sleep(1500);
  
	  if (choice.dataset.next) {
		printResponse(chat[choice.dataset.next]);
	  }
	  // Need to disable buttons here to prevent multiple choices
	};
  
	
  
	const startConversation = function () {
	  printResponse(chat[1]);
	};
	const handleRestart = function () {
	  startConversation();
	};
	const init = function () {
	  container.addEventListener('click', handleChoice);
	  
	  restartButton = document.createElement('button');
	  restartButton.innerText = "Restart";
	  restartButton.classList.add('restart');
	  restartButton.addEventListener('click', handleRestart);
  
	  container.appendChild(restartButton);
  
  
	  startConversation();
	};
  
	init();
  };
  
  bot();