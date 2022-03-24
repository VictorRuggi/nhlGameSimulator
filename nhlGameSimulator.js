function addEvent (obj, type, fn)
{
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+type, fn);
	}
}

function init (){
	teamButtons = [ document.getElementById("ducks"), document.getElementById("coyotes"), document.getElementById("bruins"), document.getElementById("sabres"), 
					document.getElementById("flames"), document.getElementById("hurricanes"), document.getElementById("blackhawks"), document.getElementById("avalanche"), 
					document.getElementById("bluejackets"), document.getElementById("stars"), document.getElementById("redwings"), document.getElementById("oilers"),
					document.getElementById("panthers"), document.getElementById("kings"), document.getElementById("wild"), document.getElementById("canadiens"),
					document.getElementById("predators"), document.getElementById("devils"), document.getElementById("islanders"), document.getElementById("rangers"),
					document.getElementById("senators"), document.getElementById("flyers"), document.getElementById("penguins"), document.getElementById("sharks"), document.getElementById("kraken"),
					document.getElementById("blues"), document.getElementById("lightning"), document.getElementById("mapleleafs"), document.getElementById("canucks"),
					document.getElementById("goldenknights"), document.getElementById("capitals"), document.getElementById("jets") ];
					
	/*Initialize the rosters*/
	ducks = [ {name: "Buddy Robinson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jakob Silfverberg", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Troy Terry", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Max Comtois", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nicolas Deslauriers", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Max Jones", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Sonny Milano", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sam Carrick", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Ryan Getzlaf", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Derek Grant", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Benoit-Olivier Groulx", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Adam Henrique", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Vinni Lettieri", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Isac Lundestrom", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Sam Steel", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Trevor Zegras", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Zach Aston-Reese", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Dominik Simon", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Simon Benoit", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jamie Drysdale", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Cam Fowler", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brendan Guhle", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jacob Larsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Hampus Lindholm", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Josh Mahura", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Greg Pateryn", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Kevin Shattenkirk", goals: 0, assists: 0,  state: "active", line: "D"}];	
	
	coyotes = [ {name: "Loui Eriksson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Christian Fischer", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Phil Kessel", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Clayton Keller", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Lawson Crouse", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Ryan Dzingel", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Alex Galchenyuk", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Dmitrij Jaskin", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Andrew Ladd", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Liam O&#39;Brien", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Antoine Roussel", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jay Beagle", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Travis Boyd", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Barrett Hayton", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Nick Schmaltz", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Bryan Little", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Kyle Capobianco", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jakob Chychrun", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Cam Dineen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Shayne Gostisbehere", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Vladislav Kolyachonok", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ilya Lyubushkin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dysin Mayo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Janis Moser", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Victor Soderstrom", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Anton Stralman", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Conor Timmins", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	bruins = [ {name: "David Pastrnak", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Craig Smith", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Anton Blidh", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jake DeBrusk", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nick Foligno", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Taylor Hall", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Erik Haula", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brad Marchand", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Patrice Bergeron", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Charlie Coyle", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Trent Frederic", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Karson Kuhlman", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Curtis Lazar", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tomas Nosek", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Oskar Steen", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brandon Carlo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Connor Clifton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Derek Forbort", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Grzelcyk", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Tyler Lewington", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Charlie McAvoy", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "John Moore", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mike Reilly", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Urho Vaakanainen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Josh Brown", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jakub Zboril", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	sabres = [ {name: "Vinnie Hinostroza", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Kyle Okposo", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex Tuch", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Anders Bjork", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Drake Caggiula", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brett Murray", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Victor Olofsson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jeff Skinner", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Rasmus Asplund", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Dylan Cozens", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Cody Eakin", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Zemgus Girgensons", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "John Hayden", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mark Jankowski", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Peyton Krebs", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Casey Mittelstadt", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tage Thompson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jacob Bryson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Will Butcher", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Rasmus Dahlin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Henri Jokiharju", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Colin Miller", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mark Pysyk", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	flames = [ {name: "Brett Ritchie", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Johnny Gaudreau", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Milan Lucic", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Andrew Mangiapane", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Matthew Tkachuk", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Mikael Backlund", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Blake Coleman", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Dillon Dube", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Trevor Lewis", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tyler Toffoli", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Elias Lindholm", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Sean Monahan", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Calle Jarnkrok", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tyler Pitlick", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brad Richardson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Adam Ruzicka", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ryan Carpenter", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Rasmus Andersson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Gudbranson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Noah Hanifin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Oliver Kylington", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Michael Stone", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Christopher Tanev", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nikita Zadorov", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	hurricanes = [ {name: "Jesper Fast", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nino Niederreiter", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Andrei Svechnikov", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jordan Martinook", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Teuvo Teravainen", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sebastian Aho", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Seth Jarvis", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jesperi Kotkaniemi", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Steven Lorentz", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Martin Necas", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jordan Staal", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Derek Stepan", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Vincent Trocheck", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ethan Bear", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ian Cole", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Tony DeAngelo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake Gardiner", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Joey Keane", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brett Pesce", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brady Skjei", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jaccob Slavin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brendan Smith", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	blackhawks = [ {name: "Brett Connolly", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex DeBrincat", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "MacKenzie Entwistle", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Mike Hardman", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Reese Johnson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Patrick Kane", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jujhar Khaira", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Dominik Kubalik", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Josiah Slavin", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Henrik Borgstrom", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kirby Dach", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Tyler Johnson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Philipp Kurashev", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sam Lafferty", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Dylan Strome", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jonathan Toews", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Taylor Raddysh", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Boris Katchouk", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Nicolas Beaudin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Calvin de Haan", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jakub Galvas", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Gustafsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Caleb Jones", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Seth Jones", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake McCabe", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Connor Murphy", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Riley Stillman", goals: 0, assists: 0,  state: "active", line: "D"}];
				
	avalanche = [ {name: "Nicolas Aube-Kubel", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Valeri Nichushkin", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Logan O&#39;Connor", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mikko Rantanen", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Mikhail Maltsev", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Andre Burakovsky", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Gabriel Landeskog", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Stefan Matteau", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "J. T. Compher", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Darren Helm", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Tyson Jost", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nazem Kadri", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nathan MacKinnon", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex Newhook", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Andrew Cogliano", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Artturi Lehkonen", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Bowen Byram", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Sam Girard", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Johnson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jack Johnson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Kurtis MacDermid", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jacob MacDonald", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Cale Makar", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Murray", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Josh Manson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Devon Toews", goals: 0, assists: 0,  state: "active", line: "D"}];
				
	bluejackets = [ {name: "Emil Bemstrom", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Oliver Bjorkstrand", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Yegor Chinakhov", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Justin Danforth", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Patrik Laine", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jakub Voracek", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nathan Gerbe", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Gustav Nyquist", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Eric Robinson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Max Domi", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Josh Dunne", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Liam Foudy", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Boone Jenner", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Sean Kuraly", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jack Roslovic", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Cole Sillinger", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Alexandre Texier", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Adam Boqvist", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Gavin Bayreuther", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake Bean", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Gabriel Carlsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Vladislav Gavrikov", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dean Kukan", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Andrew Peeke", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Zach Werenski", goals: 0, assists: 0,  state: "active", line: "D"}];
	
	stars = [ {name: "Joe Pavelski", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alexander Radulov", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jamie Benn", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Denis Gurianov", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Joel Kiviranta", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Michael Raffl", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jason Robertson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Riley Tufte", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Roope Hintz", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Riley Damiani", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Radek Faksa", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Luke Glendening", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tanner Kero", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jacob Peterson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Vladislav Namestnikov", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tyler Seguin", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jani Hakanpaa", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Joel Hanley", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Thomas Harley", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Miro Heiskanen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "John Klingberg", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Esa Lindell", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Andrej Sekera", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Suter", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	redwings = [ {name: "Lucas Raymond", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Givani Smith", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Filip Zadina", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tyler Bertuzzi", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Adam Erne", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Taro Hirose", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jakub Vrana", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Robby Fabbri", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sam Gagner", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Dylan Larkin", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Michael Rasmussen", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Carter Rowney", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mitchell Stephens", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Pius Suter", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Joe Veleno", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Oskar Sundqvist", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Danny DeKeyser", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Filip Hronek", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Gustav Lindstrom", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jordan Oesterle", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Moritz Seider", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Marc Staal", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake Walman", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	oilers = [ {name: "Josh Archibald", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Zack Kassian", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jesse Puljujarvi", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Kailer Yamamoto", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tyler Benson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Warren Foegele", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Zach Hyman", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brendan Perlini", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Leon Draisaitl", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Connor McDavid", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ryan McLeod", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ryan Nugent-Hopkins", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Derek Ryan", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Colton Sceviour", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Devin Shore", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kyle Turris", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Derick Brassard", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tyson Barrie", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Evan Bouchard", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Cody Ceci", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Duncan Keith", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Oscar Klefbom", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Slater Koekkoek", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brett Kulak", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Darnell Nurse", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Kris Russell", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	panthers = [ {name: "Patric Hornqvist", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Anthony Duclair", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jonathan Huberdeau", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ryan Lomberg", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Mason Marchment", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Noel Acciari", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Aleksander Barkov", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Sam Bennett", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Aleksi Heponiemi", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Anton Lundell", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Eetu Luostarinen", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Maxim Mamin", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Sam Reinhart", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Joe Thornton", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Carter Verhaeghe", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Claude Giroux", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Connor Bunnaman", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Lucas Carlsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Aaron Ekblad", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Gustav Forsling", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Radko Gudas", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Olli Juolevi", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Kiersted", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brandon Montour", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Markus Nutivaara", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Chase Priskie", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ben Chiarot", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Robert Hagg", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "MacKenzie Weegar", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	kings = [ {name: "Viktor Arvidsson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Dustin Brown", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Samuel Fagemo", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Martin Frk", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Alex Iafallo", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Andreas Athanasiou", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Carl Grundstrom", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Arthur Kaliyev", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Adrian Kempe", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brendan Lemieux", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Trevor Moore", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Lias Andersson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Phillip Danault", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Anze Kopitar", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Rasmus Kupari", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Blake Lizotte", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex Turcotte", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mikey Anderson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Tobias Bjornfot", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Drew Doughty", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Sean Durzi", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alexander Edler", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Olli Maatta", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jacob Moverare", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Roy", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Sean Walker", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Troy Stecher", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Christian Wolanin", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	wild = [ {name: "Kevin Fiala", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ryan Hartman", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mats Zuccarello", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Matthew Boldy", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brandon Duhaime", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Marcus Foligno", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jordan Greenway", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kirill Kaprizov", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nick Bjugstad", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Connor Dewar", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Joel Eriksson Ek", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Frederick Gaudreau", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Marco Rossi", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nico Sturm", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Calen Addison", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jordie Benn", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jonas Brodin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Dumba", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alex Goligoski", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dmitry Kulikov", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dakota Mermis", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jon Merrill", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jared Spurgeon", goals: 0, assists: 0,  state: "active", line: "D"}];

	canadiens = [ {name: "Josh Anderson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Joel Armia", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Alex Belzile", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Cole Caufield", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brendan Gallagher", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jesse Ylonen", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Paul Byron", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jonathan Drouin", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Rafael Harvey-Pinard", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mike Hoffman", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mathieu Perreault", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Michael Pezzetta", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Laurent Dauphin", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Christian Dvorak", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jake Evans", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Cedric Paquette", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Rem Pitlick", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ryan Poehling", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Nick Suzuki", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Lukas Vejdemo", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kale Clague", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Joel Edmundson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "William Lagesson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Sami Niku", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jeff Petry", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alexander Romanov", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "David Savard", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Corey Schueneman", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Shea Weber", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Justin Barron", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Chris Wideman", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	predators = [ {name: "Mikael Granlund", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Matt Luff", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Eeli Tolvanen", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Filip Forsberg", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tanner Jeannot", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nick Cousins", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Matt Duchene", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Rocco Grimaldi", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ryan Johansen", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Luke Kunin", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Michael McCarron", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tommy Novak", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Colton Sissons", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Philip Tomasino", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Yakov Trenin", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Matt Benning", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mark Borowiecki", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alexandre Carrier", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mattias Ekholm", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dante Fabbro", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ben Harpur", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Roman Josi", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Philippe Myers", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alex Biega", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jeremy Lauzon", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Tennyson", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	devils = [ {name: "Nathan Bastian", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Marian Studenic", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jesper Boqvist", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jesper Bratt", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "A. J. Greer", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Andreas Johnsson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tomas Tatar", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jimmy Vesey", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Miles Wood", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Yegor Sharangovich", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Chase De Leo", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Nico Hischier", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jack Hughes", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Janne Kuokkanen", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Michael McLeod", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Dawson Mercer", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Tyce Thompson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Pavel Zacha", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mason Geertsen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Graves", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dougie Hamilton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Christian Jaros", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Damon Severson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jonas Siegenthaler", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ty Smith", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "P. K. Subban", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Colton White", goals: 0, assists: 0,  state: "active", line: "D"}];
	
	islanders = [ {name: "Josh Bailey", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Cal Clutterbuck", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Simon Holmstrom", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kyle Palmieri", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Oliver Wahlstrom", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Anthony Beauvillier", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Kieffer Bellows", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Ross Johnston", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Anders Lee", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Matt Martin", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brock Nelson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Zach Parise", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mathew Barzal", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Casey Cizikas", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Austin Czarnik", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jean-Gabriel Pageau", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sebastian Aho", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Zdeno Chara", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Noah Dobson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Andy Greene", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Grant Hutton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Scott Mayfield", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Adam Pelech", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Pulock", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Robin Salo", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	rangers = [ {name: "Julien Gauthier", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Anthony Greco", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kaapo Kakko", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ryan Reaves", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Samuel Blais", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tim Gettinger", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Dryden Hunt", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Chris Kreider", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alexis Lafreni&egrave;re", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Artemi Panarin", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Barclay Goodrow", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Andrew Copp", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jonny Brodzinski", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Filip Chytil", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Greg McKegg", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Kevin Rooney", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ryan Strome", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mika Zibanejad", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tyler Motte", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Nick Merkley", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Frank Vatrano", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Adam Fox", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Libor Hajek", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Lindgren", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "K&#39;Andre Miller", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Patrik Nemeth", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Braden Schneider", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jarred Tinordi", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Justin Braun", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jacob Trouba", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	senators = [ {name: "Drake Batherson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Connor Brown", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Scott Sabourin", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Logan Shaw", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Austin Watson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tyler Ennis", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Alex Formenton", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mathieu Joseph", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tim St&uuml;tzle", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brady Tkachuk", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Dylan Gambrell", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Clark Bishop", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Adam Gaudette", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Josh Norris", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Shane Pinto", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Chris Tierney", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Zach Senyshyn", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Colin White", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jacob Bernard-Docker", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Brannstrom", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Thomas Chabot", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Michael Del Zotto", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Max Guenette", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dillon Heatherington", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nick Holden", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Victor Mete", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Lassi Thomson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nikita Zaitsev", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Travis Hamonic", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Artyom Zub", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	flyers = [ {name: "Cam Atkinson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Travis Konecny", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Zack MacEwen", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Joel Farabee", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Oskar Lindblom", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "James van Riemsdyk", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Patrick Brown", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jackson Cates", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Sean Couturier", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Morgan Frost", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Kevin Hayes", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tanner Laczynski", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Scott Laughton", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nate Thompson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Max Willman", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Owen Tippett", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Samuel Morin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Kevin Connauton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Ellis", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ivan Provorov", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Rasmus Ristolainen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Travis Sanheim", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nick Seeler", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Keith Yandle", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Cameron York", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Egor Zamula", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	penguins = [ {name: "Anthony Angello", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Kasper Bjorkqvist", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kasperi Kapanen", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Evan Rodrigues", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Bryan Rust", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jake Guentzel", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Danton Heinen", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brock McGinn", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Drew O&#39;Connor", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jason Zucker", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jeff Carter", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Teddy Blueger", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brian Boyle", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sidney Crosby", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Evgeni Malkin", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Radim Zohorna", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Rickard Rakell", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Brian Dumoulin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mark Friedman", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Kris Letang", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "John Marino", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mike Matheson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Marcus Pettersson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Juuso Riikola", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nathan Beaulieu", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Chad Ruhwedel", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	sharks = [ {name: "Rudolfs Balcers", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Alexander Barabanov", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Kevin Labanc", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tomas Hertl", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jonathan Dahlen", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jonah Gadjovich", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Timo Meier", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Matt Nieto", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jeffrey Viel", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jayden Halbgewachs", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Nick Bonino", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Logan Couture", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Noah Gregor", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Lane Pederson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Scott Reedy", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jasper Weatherby", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brent Burns", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mario Ferraro", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Karlsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nicolas Meloche", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Merkley", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake Middleton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Radim Simek", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Anthony Bitetto", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Marc-Edouard Vlasic", goals: 0, assists: 0,  state: "active", line: "D"}];
	
	kraken = [ {name: "Joonas Donskoi", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jordan Eberle", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Max McCormick", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jaden Schwartz", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brandon Tanev", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ryan Donato", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Morgan Geekie", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Yanni Gourde", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Daniel Sprong", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jared McCann", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Victor Rask", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Riley Sheahan", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Alexander True", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Alexander Wennberg", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Victor Rask", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Will Borgen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Vince Dunn", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Haydn Fleury", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Adam Larsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jamie Oleksiak", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Carson Soucy", goals: 0, assists: 0,  state: "active", line: "D"}] ;
			
	blues = [ {name: "Vladimir Tarasenko", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Pavel Buchnevich", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "James Neal", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "David Perron", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brandon Saad", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Ivan Barbashev", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tyler Bozak", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Logan Brown", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Dakota Joshua", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Klim Kostin", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jordan Kyrou", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Ryan O&#39;Reilly", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brayden Schenn", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Robert Thomas", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Robert Bortuzzo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Justin Faulk", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Torey Krug", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Niko Mikkola", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Colton Parayko", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Scott Perunovich", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Calle Rosen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Marco Scandella", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nick Leddy", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	lightning = [ {name: "Nick Paul", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Nikita Kucherov", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Corey Perry", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Patrick Maroon", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Ondrej Palat", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Steven Stamkos", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex Barre-Boulet", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Pierre-Edouard Bellemare", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Anthony Cirelli", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Ross Colton", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Alex Killorn", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Brayden Point", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Gemel Smith", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Riley Nash", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brandon Hagel", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Zach Bogosian", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Cernak", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Callan Foote", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Victor Hedman", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan McDonagh", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jan Rutta", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mikhail Sergachev", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Andrej Sustr", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	mapleleafs = [ {name: "Ondrej Kase", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mitch Marner", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ilya Mikheyev", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "William Nylander", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Wayne Simmonds", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Michael Bunting", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kyle Clifford", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Pierre Engvall", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Nick Ritchie", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "David Kampf", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Alexander Kerfoot", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Auston Matthews", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brett Seney", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jason Spezza", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "John Tavares", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Colin Blackwell", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "T. J. Brodie", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Justin Holl", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Timothy Liljegren", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake Muzzin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Morgan Rielly", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mark Giordano", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Rasmus Sandin", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	canucks = [ {name: "Brock Boeser", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex Chiasson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Conor Garland", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Vasily Podkolzin", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Micheal Ferland", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nils Hoglander", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tanner Pearson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "J. T. Miller", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jason Dickinson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Justin Dowling", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Matthew Highmore", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Bo Horvat", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Juho Lammikko", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Elias Pettersson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brandon Sutter", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Kyle Burroughs", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Oliver Ekman-Larsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Quinn Hughes", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brad Hunt", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Noah Juulsen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brady Keeper", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Tyler Myers", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Tucker Poolman", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Travis Dermott", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Luke Schenn", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	goldenknights = [ {name: "Evgenii Dadonov", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Keegan Kolesar", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Nicolas Roy", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Reilly Smith", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mark Stone", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "William Carrier", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mattias Janmark", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Max Pacioretty", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Michael Amadio", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jack Eichel", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Brett Howden", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "William Karlsson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jonathan Marchessault", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nolan Patrick", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Chandler Stephenson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jake Bischoff", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dylan Coghlan", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nicolas Hague", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ben Hutton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alec Martinez", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brayden McNabb", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alex Pietrangelo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Shea Theodore", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Zach Whitecloud", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	capitals = [ {name: "Garnet Hathaway", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brett Leason", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Beck Malenstyn", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Anthony Mantha", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "T. J. Oshie", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tom Wilson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Carl Hagelin", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Alexander Ovechkin", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Conor Sheary", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nicklas Backstrom", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nic Dowd", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Lars Eller", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Evgeny Kuznetsov", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Connor McMichael", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Aliaksei Protas", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Marcus Johansson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Johan Larsson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "John Carlson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dennis Cholowski", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Martin Fehervary", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Irwin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nick Jensen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Michal Kempny", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dmitry Orlov", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Justin Schultz", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Trevor van Riemsdyk", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	jets = [ {name: "Evgeny Svechnikov", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Blake Wheeler", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Kyle Connor", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nikolaj Ehlers", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "C. J. Suess", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kristian Vesalainen", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Morgan Barron", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Pierre-Luc Dubois", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "David Gustafsson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jansen Harkins", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Adam Lowry", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Cole Perfetti", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Kristian Reichel", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Mark Scheifele", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Paul Stastny", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Dominic Toninato", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Zach Sanford", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mason Appleton", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Dylan DeMelo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brenden Dillon", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Josh Morrissey", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Neal Pionk", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dylan Samberg", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nate Schmidt", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Logan Stanley", goals: 0, assists: 0,  state: "active", line: "D"}];
	
	/*GOALIES*/
	ANAgoalies = [{name: "John Gibson", state: "inactive"}, {name: "Lukas Dostal", state: "inactive"}];
	ARIgoalies = [{name: "Josef Korenar", state: "inactive"}, {name: "Harri Sateri", state: "inactive"}];
	BOSgoalies = [{name: "Jeremy Swayman", state: "inactive"}, {name: "Linus Ullmark", state: "inactive"}];
	BUFgoalies = [{name: "Craig Anderson", state: "inactive"}, {name: "Dustin Tokarski", state: "inactive"}];
	CGYgoalies = [{name: "Jacob Markstrom", state: "inactive"}, {name: "Dan Vladar", state: "inactive"}];
	CARgoalies = [{name: "Frederik Andersen", state: "inactive"}, {name: "Antti Raanta", state: "inactive"}];
	CHIgoalies = [{name: "Kevin Lankinen", state: "inactive"}, {name: "Collin Delia", state: "inactive"}];
	COLgoalies = [{name: "Darcy Kuemper", state: "inactive"}, {name: "Pavel Francouz", state: "inactive"}];
	CBJgoalies = [{name: "Joonas Korpisalo", state: "inactive"}, {name: "Elvis Merzlikins", state: "inactive"}];
	DALgoalies = [{name: "Jake Oettinger", state: "inactive"}, {name: "Scott Wedgewood", state: "inactive"}];
	DETgoalies = [{name: "Alex Nedeljkovic", state: "inactive"}, {name: "Thomas Greiss", state: "inactive"}];
	EDMgoalies = [{name: "Mikko Koskinen", state: "inactive"}, {name: "Mike Smith", state: "inactive"}];
	FLAgoalies = [{name: "Sergei Bobrovsky", state: "inactive"}, {name: "Spencer Knight", state: "inactive"}];
	LAgoalies = [{name: "Jonathan Quick", state: "inactive"}, {name: "Cal Petersen", state: "inactive"}];
	MINgoalies = [{name: "Marc-Andr&eacute; Fleury", state: "inactive"}, {name: "Cam Talbot", state: "inactive"}];
	MTLgoalies = [{name: "Samuel Montembeault", state: "inactive"}, {name: "Jake Allen", state: "inactive"}];
	NSHgoalies = [{name: "Juuse Saros", state: "inactive"}, {name: "David Rittich", state: "inactive"}];
	NJgoalies = [{name: "Nico Daws", state: "inactive"}, {name: "Jon Gillies", state: "inactive"}];
	NYIgoalies = [{name: "Semyon Varlamov", state: "inactive"}, {name: "Ilya Sorokin", state: "inactive"}];
	NYRgoalies = [{name: "Igor Shesterkin", state: "inactive"}, {name: "Alexandar Georgiev", state: "inactive"}];
	OTTgoalies = [{name: "Anton Forsberg", state: "inactive"}, {name: "Filip Gustavsson", state: "inactive"}];
	PHIgoalies = [{name: "Carter Hart", state: "inactive"}, {name: "Martin Jones", state: "inactive"}];
	PITgoalies = [{name: "Tristan Jarry", state: "inactive"}, {name: "Casey DeSmith", state: "inactive"}];
	SJgoalies = [{name: "Kaapo Kahkonen", state: "inactive"}, {name: "Adin Hill", state: "inactive"}];
	SEAgoalies = [{name: "Philipp Grubauer", state: "inactive"}, {name: "Chris Driedger", state: "inactive"}];
	STLgoalies = [{name: "Jordan Binnington", state: "inactive"}, {name: "Ville Husso", state: "inactive"}];
	TBgoalies = [{name: "Andrei Vasilevskiy", state: "inactive"}, {name: "Brian Elliott", state: "inactive"}];
	TORgoalies = [{name: "Petr Mrazek", state: "inactive"}, {name: "Erik Kallgren", state: "inactive"}];
	VANgoalies = [{name: "Thatcher Demko", state: "inactive"}, {name: "Jaroslav Halak", state: "inactive"}];
	VGKgoalies = [{name: "Logan Thompson", state: "inactive"}, {name: "Laurent Brossoit", state: "inactive"}];
	WSHgoalies = [{name: "Ilya Samsonov", state: "inactive"}, {name: "Vitek Vanecek", state: "inactive"}];
	WPGgoalies = [{name: "Connor Hellebuyck", state: "inactive"}, {name: "Eric Comrie", state: "inactive"}];
	
	team1 = [null, 0, null, null, null, null, null];
	team2 = [null, 0, null, null, null, null, null];
	
	for(var i=0; i<teamButtons.length; i++){
		addEvent(teamButtons[i], "click", teamSelect);
	}
	
	addEvent(document.getElementById("reset-btn"), "click", resetAll);
	
	/*INITIALIZE THE PLAYLIST*/
	musicPlaylist = [ {song: "Strawberry Lipstick", artist: "Yungblud", src: "playlist/track01.mp3", songLength: 165.093878},
					  {song: "Hellogoodbye", artist: "HOKO", src: "playlist/track02.mp3", songLength: 215.745306},
					  {song: "According to You", artist: "Orianthi", src: "playlist/track03.mp3", songLength: 198.138776},
					  {song: "Party Hard", artist: "Andrew W.K.", src: "playlist/track04.mp3", songLength: 184.973061},
					  {song: "Crowd Chant", artist: "Joe Satriani", src: "playlist/track05.mp3", songLength: 195.056327},
					  {song: "Live it Up", artist: "Airbourne", src: "playlist/track06.mp3", songLength: 265.195102},
					  {song: "Seek & Destroy", artist: "Metallica", src: "playlist/track07.mp3", songLength: 414.746122},
					  {song: "Rolling 7s", artist: "Dirty Honey", src: "playlist/track08.mp3", songLength: 256.287347},
					  {song: "Johnny I Hardly Knew Ya", artist: "Dropkick Murphys", src: "playlist/track09.mp3", songLength: 234.736327},
					  {song: "Blood", artist: "Dropkick Murphys", src: "playlist/track10.mp3", songLength: 241.841633},
					  {song: "Smokin&#39;", artist: "Boston", src: "playlist/track11.mp3", songLength: 261.459592},
					  {song: "Roses (feat. ROZES)", artist: "The Chainsmokers", src: "playlist/track12.mp3", songLength: 228.205714},
					  {song: "Peace Sells", artist: "Megadeth", src: "playlist/track13.mp3", songLength: 245} ];
	
	/*CHOOSE A SONG TO PLAY*/
	songPicker = Math.floor(Math.random() * musicPlaylist.length);
	songTime = 0;
	
	document.getElementById("downVol").disabled = true;
	document.getElementById("upVol").disabled = true;
	
	document.getElementById("shuffleMusic").disabled = true;
}

function aboutMusic(){
	alert("Click on the Play Music button to listen to my custom music playlist for a truly unique experience. Or you could still use this app without listening to the music. It's your call!");
}

function playMusic(){
	document.getElementById("downVol").disabled = false;
	document.getElementById("upVol").disabled = true;
	document.getElementById("playMusic").disabled = true;
	document.getElementById("shuffleMusic").disabled = false;
	document.getElementById("trackDescription").innerHTML = "<p>NOW PLAYING: <b>"+musicPlaylist[songPicker].song+" - "+musicPlaylist[songPicker].artist+"</b><br/>"+"0 sec"+"</p>";
	document.getElementById("trackDescription").style.visibility = "visible";
	document.getElementById("volumeMeter").style.visibility = "visible";
	bgMusic = new Audio(musicPlaylist[songPicker].src);
	bgMusic.play();
	document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
	song = setInterval(songInProgress, 1000);
}

function songInProgress(){
	if(songTime != Math.floor(musicPlaylist[songPicker].songLength) + 1){
		songTime++;
		document.getElementById("trackDescription").innerHTML = "<p>NOW PLAYING: <b>"+musicPlaylist[songPicker].song+" - "+musicPlaylist[songPicker].artist+"</b><br/>"+songTime+" sec</p>";
		document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
	}
	else {
		clearInterval(song);
		songTime = 0;
		songPicker = Math.floor(Math.random() * musicPlaylist.length);
		document.getElementById("playMusic").disabled = true;
		document.getElementById("trackDescription").innerHTML = "<p>NOW PLAYING: <b>"+musicPlaylist[songPicker].song+" - "+musicPlaylist[songPicker].artist+"</b><br/>"+"0 sec"+"</p>";
		bgMusic = new Audio(musicPlaylist[songPicker].src);
		bgMusic.play();
		document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
		song = setInterval(songInProgress, 1000);
	}
	
	/*VOLUME CHECK*/
	switch (bgMusic.volume){
		case 0.0:
		{
			document.getElementById("downVol").disabled = true;
			document.getElementById("upVol").disabled = false;
			break;
		}
		case 1.0:
		{
			document.getElementById("upVol").disabled = true;
			document.getElementById("downVol").disabled = false;
			break;
		}
		default:
		{
			document.getElementById("upVol").disabled = false;
			document.getElementById("downVol").disabled = false;
			break;
		}
	}
}

function shuffleMusic(){
	bgMusic.pause();
	bgMusic.currentTime = 0;
	songTime = 0;
	songPicker = Math.floor(Math.random() * musicPlaylist.length);
	document.getElementById("playMusic").disabled = true;
	document.getElementById("trackDescription").innerHTML = "<p>NOW PLAYING: <b>"+musicPlaylist[songPicker].song+" - "+musicPlaylist[songPicker].artist+"</b><br/>"+"0 sec"+"</p>";
	bgMusic = new Audio(musicPlaylist[songPicker].src);
	bgMusic.play();
	document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
}

function showSongInfo(){
	document.getElementById("trackDescription").style.visibility = "visible";
}

function hideSongInfo(){
	document.getElementById("trackDescription").style.visibility = "hidden";
}

function downVol(){
	if(bgMusic.volume != 0.00){
		if(bgMusic.volume == 0.02){
			bgMusic.volume = 0.00;
			document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
		}
		else{
			bgMusic.volume = Number((bgMusic.volume - 0.02).toFixed(2));
			document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
		}
	}
	else {
		document.getElementById("downVol").disabled = true;
	}
}

function upVol(){
	if(bgMusic.volume != 1.00){
		if(bgMusic.volume == 0.98){
			bgMusic.volume = 1.00;
			document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
		}
		else {
			bgMusic.volume = Number((bgMusic.volume + 0.02).toFixed(2));
			document.getElementById("volumeMeter").innerHTML = "<p>Volume: "+bgMusic.volume.toFixed(2)+" out of 1.00</p>";
		}
	}
	else {
		document.getElementById("upVol").disabled = true;
	}
}

function resetAll(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("reset-btn").disabled = true;
	
	//HIDE THE BOX SCORE
	document.getElementById("box-score").innerHTML = "";
	document.getElementById("box-score").style.visibility = "hidden";
	
	//CLEAR SIMULATION AREA
	document.getElementById("simulation").innerHTML = "<p id=\"simulation\"></p>";
	document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Select Team 1 (Away)</p>";
	
	for(var i=0; i<teamButtons.length; i++){
		teamButtons[i].disabled = false;
	}
	
	//RESET THE INJURY REPORT
	document.getElementById("injury-report").innerHTML = "<p>Indicate which players will not be playing in this game. Left side is the away team, right side is the home team. Please put one player per line. Apostrophes: &amp;#39;</p><textarea id=\"team1\" name=\"team1\"></textarea><textarea id=\"team2\" name=\"team2\"></textarea><p id=\"welcome-to-the-game\" style=\"visibility: hidden\"></p><div id=\"awayNHLTeam\" style=\"visibility: hidden\"><p id=\"awayTeam\"></p><p id=\"team1qb1\"></p><input type=\"button\" id=\"awayqb1\" value=\" 1 \" disabled=\"true\"/><p id=\"team1qb2\"></p><input type=\"button\" id=\"awayqb2\" value=\" 2 \" disabled=\"true\"/></div><div id=\"homeNHLTeam\" style=\"visibility: hidden\"><p id=\"homeTeam\"></p><p id=\"team2qb1\"></p><input type=\"button\" id=\"homeqb1\" value=\" 1 \" disabled=\"true\"/><p id=\"team2qb2\"></p><input type=\"button\" id=\"homeqb2\" value=\" 2 \" disabled=\"true\"/></div><input id=\"injury-submit\" type=\"button\" value=\"Submit\" />";
	document.getElementById("injury-submit").disabled = true;
	
	//CLEAR ALL VALUES
	team1 = [null, 0, null, null, null, null, null];
	team2 = [null, 0, null, null, null, null, null];
	
	//EVERYONE GOES BACK TO 0 GOALS AND 0 ASSISTS
	ducks = [ {name: "Buddy Robinson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jakob Silfverberg", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Troy Terry", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Max Comtois", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nicolas Deslauriers", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Max Jones", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Sonny Milano", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sam Carrick", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Ryan Getzlaf", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Derek Grant", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Benoit-Olivier Groulx", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Adam Henrique", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Vinni Lettieri", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Isac Lundestrom", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Sam Steel", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Trevor Zegras", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Zach Aston-Reese", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Dominik Simon", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Simon Benoit", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jamie Drysdale", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Cam Fowler", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brendan Guhle", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jacob Larsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Hampus Lindholm", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Josh Mahura", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Greg Pateryn", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Kevin Shattenkirk", goals: 0, assists: 0,  state: "active", line: "D"}];	
	
	coyotes = [ {name: "Loui Eriksson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Christian Fischer", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Phil Kessel", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Clayton Keller", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Lawson Crouse", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Ryan Dzingel", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Alex Galchenyuk", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Dmitrij Jaskin", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Andrew Ladd", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Liam O&#39;Brien", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Antoine Roussel", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jay Beagle", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Travis Boyd", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Barrett Hayton", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Nick Schmaltz", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Bryan Little", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Kyle Capobianco", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jakob Chychrun", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Cam Dineen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Shayne Gostisbehere", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Vladislav Kolyachonok", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ilya Lyubushkin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dysin Mayo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Janis Moser", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Victor Soderstrom", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Anton Stralman", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Conor Timmins", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	bruins = [ {name: "David Pastrnak", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Craig Smith", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Anton Blidh", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jake DeBrusk", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nick Foligno", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Taylor Hall", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Erik Haula", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brad Marchand", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Patrice Bergeron", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Charlie Coyle", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Trent Frederic", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Karson Kuhlman", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Curtis Lazar", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tomas Nosek", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Oskar Steen", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brandon Carlo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Connor Clifton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Derek Forbort", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Grzelcyk", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Tyler Lewington", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Charlie McAvoy", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "John Moore", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mike Reilly", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Urho Vaakanainen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Josh Brown", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jakub Zboril", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	sabres = [ {name: "Vinnie Hinostroza", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Kyle Okposo", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex Tuch", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Anders Bjork", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Drake Caggiula", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brett Murray", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Victor Olofsson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jeff Skinner", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Rasmus Asplund", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Dylan Cozens", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Cody Eakin", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Zemgus Girgensons", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "John Hayden", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mark Jankowski", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Peyton Krebs", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Casey Mittelstadt", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tage Thompson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jacob Bryson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Will Butcher", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Rasmus Dahlin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Henri Jokiharju", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Colin Miller", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mark Pysyk", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	flames = [ {name: "Brett Ritchie", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Johnny Gaudreau", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Milan Lucic", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Andrew Mangiapane", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Matthew Tkachuk", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Mikael Backlund", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Blake Coleman", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Dillon Dube", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Trevor Lewis", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tyler Toffoli", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Elias Lindholm", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Sean Monahan", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Calle Jarnkrok", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tyler Pitlick", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brad Richardson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Adam Ruzicka", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ryan Carpenter", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Rasmus Andersson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Gudbranson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Noah Hanifin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Oliver Kylington", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Michael Stone", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Christopher Tanev", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nikita Zadorov", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	hurricanes = [ {name: "Jesper Fast", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nino Niederreiter", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Andrei Svechnikov", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jordan Martinook", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Teuvo Teravainen", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sebastian Aho", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Seth Jarvis", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jesperi Kotkaniemi", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Steven Lorentz", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Martin Necas", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jordan Staal", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Derek Stepan", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Vincent Trocheck", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ethan Bear", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ian Cole", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Tony DeAngelo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake Gardiner", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Joey Keane", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brett Pesce", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brady Skjei", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jaccob Slavin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brendan Smith", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	blackhawks = [ {name: "Brett Connolly", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex DeBrincat", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "MacKenzie Entwistle", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Mike Hardman", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Reese Johnson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Patrick Kane", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jujhar Khaira", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Dominik Kubalik", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Josiah Slavin", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Henrik Borgstrom", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kirby Dach", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Tyler Johnson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Philipp Kurashev", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sam Lafferty", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Dylan Strome", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jonathan Toews", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Taylor Raddysh", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Boris Katchouk", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Nicolas Beaudin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Calvin de Haan", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jakub Galvas", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Gustafsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Caleb Jones", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Seth Jones", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake McCabe", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Connor Murphy", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Riley Stillman", goals: 0, assists: 0,  state: "active", line: "D"}];
				
	avalanche = [ {name: "Nicolas Aube-Kubel", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Valeri Nichushkin", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Logan O&#39;Connor", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mikko Rantanen", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Mikhail Maltsev", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Andre Burakovsky", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Gabriel Landeskog", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Stefan Matteau", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "J. T. Compher", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Darren Helm", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Tyson Jost", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nazem Kadri", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nathan MacKinnon", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex Newhook", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Andrew Cogliano", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Artturi Lehkonen", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Bowen Byram", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Sam Girard", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Johnson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jack Johnson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Kurtis MacDermid", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jacob MacDonald", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Cale Makar", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Murray", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Josh Manson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Devon Toews", goals: 0, assists: 0,  state: "active", line: "D"}];
				
	bluejackets = [ {name: "Emil Bemstrom", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Oliver Bjorkstrand", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Yegor Chinakhov", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Justin Danforth", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Patrik Laine", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jakub Voracek", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nathan Gerbe", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Gustav Nyquist", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Eric Robinson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Max Domi", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Josh Dunne", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Liam Foudy", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Boone Jenner", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Sean Kuraly", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jack Roslovic", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Cole Sillinger", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Alexandre Texier", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Adam Boqvist", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Gavin Bayreuther", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake Bean", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Gabriel Carlsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Vladislav Gavrikov", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dean Kukan", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Andrew Peeke", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Zach Werenski", goals: 0, assists: 0,  state: "active", line: "D"}];
	
	stars = [ {name: "Joe Pavelski", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alexander Radulov", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jamie Benn", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Denis Gurianov", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Joel Kiviranta", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Michael Raffl", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jason Robertson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Riley Tufte", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Roope Hintz", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Riley Damiani", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Radek Faksa", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Luke Glendening", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tanner Kero", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jacob Peterson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Vladislav Namestnikov", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tyler Seguin", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jani Hakanpaa", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Joel Hanley", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Thomas Harley", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Miro Heiskanen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "John Klingberg", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Esa Lindell", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Andrej Sekera", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Suter", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	redwings = [ {name: "Lucas Raymond", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Givani Smith", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Filip Zadina", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tyler Bertuzzi", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Adam Erne", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Taro Hirose", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jakub Vrana", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Robby Fabbri", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sam Gagner", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Dylan Larkin", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Michael Rasmussen", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Carter Rowney", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mitchell Stephens", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Pius Suter", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Joe Veleno", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Oskar Sundqvist", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Danny DeKeyser", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Filip Hronek", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Gustav Lindstrom", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jordan Oesterle", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Moritz Seider", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Marc Staal", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake Walman", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	oilers = [ {name: "Josh Archibald", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Zack Kassian", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jesse Puljujarvi", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Kailer Yamamoto", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tyler Benson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Warren Foegele", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Zach Hyman", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brendan Perlini", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Leon Draisaitl", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Connor McDavid", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ryan McLeod", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ryan Nugent-Hopkins", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Derek Ryan", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Colton Sceviour", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Devin Shore", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kyle Turris", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Derick Brassard", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tyson Barrie", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Evan Bouchard", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Cody Ceci", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Duncan Keith", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Oscar Klefbom", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Slater Koekkoek", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brett Kulak", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Darnell Nurse", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Kris Russell", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	panthers = [ {name: "Patric Hornqvist", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Anthony Duclair", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jonathan Huberdeau", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ryan Lomberg", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Mason Marchment", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Noel Acciari", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Aleksander Barkov", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Sam Bennett", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Aleksi Heponiemi", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Anton Lundell", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Eetu Luostarinen", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Maxim Mamin", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Sam Reinhart", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Joe Thornton", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Carter Verhaeghe", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Claude Giroux", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Connor Bunnaman", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Lucas Carlsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Aaron Ekblad", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Gustav Forsling", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Radko Gudas", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Olli Juolevi", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Kiersted", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brandon Montour", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Markus Nutivaara", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Chase Priskie", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ben Chiarot", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Robert Hagg", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "MacKenzie Weegar", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	kings = [ {name: "Viktor Arvidsson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Dustin Brown", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Samuel Fagemo", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Martin Frk", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Alex Iafallo", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Andreas Athanasiou", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Carl Grundstrom", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Arthur Kaliyev", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Adrian Kempe", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brendan Lemieux", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Trevor Moore", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Lias Andersson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Phillip Danault", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Anze Kopitar", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Rasmus Kupari", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Blake Lizotte", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex Turcotte", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mikey Anderson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Tobias Bjornfot", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Drew Doughty", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Sean Durzi", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alexander Edler", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Olli Maatta", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jacob Moverare", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Roy", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Sean Walker", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Troy Stecher", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Christian Wolanin", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	wild = [ {name: "Kevin Fiala", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ryan Hartman", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mats Zuccarello", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Matthew Boldy", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brandon Duhaime", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Marcus Foligno", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jordan Greenway", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kirill Kaprizov", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nick Bjugstad", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Connor Dewar", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Joel Eriksson Ek", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Frederick Gaudreau", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Marco Rossi", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nico Sturm", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Calen Addison", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jordie Benn", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jonas Brodin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Dumba", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alex Goligoski", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dmitry Kulikov", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dakota Mermis", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jon Merrill", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jared Spurgeon", goals: 0, assists: 0,  state: "active", line: "D"}];

	canadiens = [ {name: "Josh Anderson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Joel Armia", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Alex Belzile", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Cole Caufield", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brendan Gallagher", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jesse Ylonen", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Paul Byron", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jonathan Drouin", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Rafael Harvey-Pinard", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mike Hoffman", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mathieu Perreault", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Michael Pezzetta", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Laurent Dauphin", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Christian Dvorak", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jake Evans", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Cedric Paquette", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Rem Pitlick", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ryan Poehling", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Nick Suzuki", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Lukas Vejdemo", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kale Clague", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Joel Edmundson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "William Lagesson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Sami Niku", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jeff Petry", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alexander Romanov", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "David Savard", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Corey Schueneman", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Shea Weber", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Justin Barron", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Chris Wideman", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	predators = [ {name: "Mikael Granlund", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Matt Luff", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Eeli Tolvanen", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Filip Forsberg", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tanner Jeannot", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nick Cousins", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Matt Duchene", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Rocco Grimaldi", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ryan Johansen", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Luke Kunin", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Michael McCarron", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tommy Novak", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Colton Sissons", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Philip Tomasino", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Yakov Trenin", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Matt Benning", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mark Borowiecki", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alexandre Carrier", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mattias Ekholm", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dante Fabbro", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ben Harpur", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Roman Josi", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Philippe Myers", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alex Biega", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jeremy Lauzon", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Tennyson", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	devils = [ {name: "Nathan Bastian", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Marian Studenic", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jesper Boqvist", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jesper Bratt", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "A. J. Greer", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Andreas Johnsson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tomas Tatar", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jimmy Vesey", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Miles Wood", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Yegor Sharangovich", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Chase De Leo", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Nico Hischier", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jack Hughes", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Janne Kuokkanen", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Michael McLeod", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Dawson Mercer", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Tyce Thompson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Pavel Zacha", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mason Geertsen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Graves", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dougie Hamilton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Christian Jaros", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Damon Severson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jonas Siegenthaler", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ty Smith", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "P. K. Subban", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Colton White", goals: 0, assists: 0,  state: "active", line: "D"}];
	
	islanders = [ {name: "Josh Bailey", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Cal Clutterbuck", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Simon Holmstrom", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kyle Palmieri", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Oliver Wahlstrom", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Anthony Beauvillier", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Kieffer Bellows", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Ross Johnston", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Anders Lee", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Matt Martin", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brock Nelson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Zach Parise", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mathew Barzal", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Casey Cizikas", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Austin Czarnik", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jean-Gabriel Pageau", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sebastian Aho", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Zdeno Chara", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Noah Dobson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Andy Greene", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Grant Hutton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Scott Mayfield", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Adam Pelech", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Pulock", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Robin Salo", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	rangers = [ {name: "Julien Gauthier", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Anthony Greco", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kaapo Kakko", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ryan Reaves", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Samuel Blais", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tim Gettinger", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Dryden Hunt", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Chris Kreider", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alexis Lafreni&egrave;re", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Artemi Panarin", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Barclay Goodrow", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Andrew Copp", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jonny Brodzinski", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Filip Chytil", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Greg McKegg", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Kevin Rooney", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ryan Strome", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mika Zibanejad", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tyler Motte", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Nick Merkley", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Frank Vatrano", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Adam Fox", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Libor Hajek", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Lindgren", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "K&#39;Andre Miller", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Patrik Nemeth", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Braden Schneider", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jarred Tinordi", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Justin Braun", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jacob Trouba", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	senators = [ {name: "Drake Batherson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Connor Brown", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Scott Sabourin", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Logan Shaw", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Austin Watson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tyler Ennis", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Alex Formenton", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mathieu Joseph", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tim St&uuml;tzle", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brady Tkachuk", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Dylan Gambrell", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Clark Bishop", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Adam Gaudette", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Josh Norris", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Shane Pinto", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Chris Tierney", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Zach Senyshyn", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Colin White", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jacob Bernard-Docker", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Brannstrom", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Thomas Chabot", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Michael Del Zotto", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Max Guenette", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dillon Heatherington", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nick Holden", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Victor Mete", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Lassi Thomson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nikita Zaitsev", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Travis Hamonic", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Artyom Zub", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	flyers = [ {name: "Cam Atkinson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Travis Konecny", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Zack MacEwen", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Joel Farabee", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Oskar Lindblom", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "James van Riemsdyk", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Patrick Brown", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jackson Cates", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Sean Couturier", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Morgan Frost", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Kevin Hayes", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Tanner Laczynski", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Scott Laughton", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nate Thompson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Max Willman", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Owen Tippett", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Samuel Morin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Kevin Connauton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Ellis", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ivan Provorov", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Rasmus Ristolainen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Travis Sanheim", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nick Seeler", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Keith Yandle", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Cameron York", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Egor Zamula", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	penguins = [ {name: "Anthony Angello", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Kasper Bjorkqvist", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kasperi Kapanen", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Evan Rodrigues", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Bryan Rust", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jake Guentzel", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Danton Heinen", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brock McGinn", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Drew O&#39;Connor", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jason Zucker", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jeff Carter", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Teddy Blueger", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brian Boyle", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Sidney Crosby", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Evgeni Malkin", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Radim Zohorna", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Rickard Rakell", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Brian Dumoulin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mark Friedman", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Kris Letang", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "John Marino", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mike Matheson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Marcus Pettersson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Juuso Riikola", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nathan Beaulieu", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Chad Ruhwedel", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	sharks = [ {name: "Rudolfs Balcers", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Alexander Barabanov", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Kevin Labanc", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tomas Hertl", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jonathan Dahlen", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jonah Gadjovich", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Timo Meier", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Matt Nieto", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jeffrey Viel", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jayden Halbgewachs", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Nick Bonino", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Logan Couture", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Noah Gregor", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Lane Pederson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Scott Reedy", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jasper Weatherby", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brent Burns", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mario Ferraro", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Karlsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nicolas Meloche", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan Merkley", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake Middleton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Radim Simek", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Anthony Bitetto", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Marc-Edouard Vlasic", goals: 0, assists: 0,  state: "active", line: "D"}];
	
	kraken = [ {name: "Joonas Donskoi", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jordan Eberle", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Max McCormick", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jaden Schwartz", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brandon Tanev", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Ryan Donato", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Morgan Geekie", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Yanni Gourde", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Daniel Sprong", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jared McCann", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Victor Rask", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Riley Sheahan", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Alexander True", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Alexander Wennberg", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Victor Rask", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Will Borgen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Vince Dunn", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Haydn Fleury", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Adam Larsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jamie Oleksiak", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Carson Soucy", goals: 0, assists: 0,  state: "active", line: "D"}] ;
			
	blues = [ {name: "Vladimir Tarasenko", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Pavel Buchnevich", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "James Neal", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "David Perron", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brandon Saad", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Ivan Barbashev", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tyler Bozak", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Logan Brown", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Dakota Joshua", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Klim Kostin", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jordan Kyrou", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Ryan O&#39;Reilly", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brayden Schenn", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Robert Thomas", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Robert Bortuzzo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Justin Faulk", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Torey Krug", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Niko Mikkola", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Colton Parayko", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Scott Perunovich", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Calle Rosen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Marco Scandella", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nick Leddy", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	lightning = [ {name: "Nick Paul", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Nikita Kucherov", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Corey Perry", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Patrick Maroon", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Ondrej Palat", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Steven Stamkos", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex Barre-Boulet", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Pierre-Edouard Bellemare", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Anthony Cirelli", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Ross Colton", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Alex Killorn", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Brayden Point", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Gemel Smith", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Riley Nash", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Brandon Hagel", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Zach Bogosian", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Erik Cernak", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Callan Foote", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Victor Hedman", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ryan McDonagh", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jan Rutta", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mikhail Sergachev", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Andrej Sustr", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	mapleleafs = [ {name: "Ondrej Kase", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mitch Marner", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Ilya Mikheyev", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "William Nylander", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Wayne Simmonds", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Michael Bunting", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kyle Clifford", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Pierre Engvall", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Nick Ritchie", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "David Kampf", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Alexander Kerfoot", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Auston Matthews", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brett Seney", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Jason Spezza", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "John Tavares", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Colin Blackwell", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "T. J. Brodie", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Justin Holl", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Timothy Liljegren", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Jake Muzzin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Morgan Rielly", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Mark Giordano", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Rasmus Sandin", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	canucks = [ {name: "Brock Boeser", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Alex Chiasson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Conor Garland", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Vasily Podkolzin", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Micheal Ferland", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nils Hoglander", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Tanner Pearson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "J. T. Miller", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jason Dickinson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Justin Dowling", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Matthew Highmore", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Bo Horvat", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Juho Lammikko", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Elias Pettersson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Brandon Sutter", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Kyle Burroughs", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Oliver Ekman-Larsson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Quinn Hughes", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brad Hunt", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Noah Juulsen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brady Keeper", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Tyler Myers", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Tucker Poolman", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Travis Dermott", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Luke Schenn", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	goldenknights = [ {name: "Evgenii Dadonov", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Keegan Kolesar", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Nicolas Roy", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Reilly Smith", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Mark Stone", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "William Carrier", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mattias Janmark", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Max Pacioretty", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Michael Amadio", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jack Eichel", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Brett Howden", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "William Karlsson", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Jonathan Marchessault", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nolan Patrick", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Chandler Stephenson", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Jake Bischoff", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dylan Coghlan", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nicolas Hague", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Ben Hutton", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alec Martinez", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brayden McNabb", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Alex Pietrangelo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Shea Theodore", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Zach Whitecloud", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	capitals = [ {name: "Garnet Hathaway", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Brett Leason", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Beck Malenstyn", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Anthony Mantha", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "T. J. Oshie", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Tom Wilson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Carl Hagelin", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Alexander Ovechkin", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Conor Sheary", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Nicklas Backstrom", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nic Dowd", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Lars Eller", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Evgeny Kuznetsov", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Connor McMichael", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Aliaksei Protas", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Marcus Johansson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Johan Larsson", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "John Carlson", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dennis Cholowski", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Martin Fehervary", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Matt Irwin", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nick Jensen", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Michal Kempny", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dmitry Orlov", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Justin Schultz", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Trevor van Riemsdyk", goals: 0, assists: 0,  state: "active", line: "D"}];
			
	jets = [ {name: "Evgeny Svechnikov", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Blake Wheeler", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Kyle Connor", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Nikolaj Ehlers", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "C. J. Suess", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Kristian Vesalainen", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Morgan Barron", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Pierre-Luc Dubois", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "David Gustafsson", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Jansen Harkins", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Adam Lowry", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Cole Perfetti", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Kristian Reichel", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Mark Scheifele", goals: 0, assists: 0,  state: "active", line: "1"},
	{name: "Paul Stastny", goals: 0, assists: 0,  state: "active", line: "2"},
	{name: "Dominic Toninato", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Zach Sanford", goals: 0, assists: 0,  state: "active", line: "3"},
	{name: "Mason Appleton", goals: 0, assists: 0,  state: "active", line: "4"},
	{name: "Dylan DeMelo", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Brenden Dillon", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Josh Morrissey", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Neal Pionk", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Dylan Samberg", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Nate Schmidt", goals: 0, assists: 0,  state: "active", line: "D"},
	{name: "Logan Stanley", goals: 0, assists: 0,  state: "active", line: "D"}];
	
	/*RESET THE GOALIES*/
	ANAgoalies = [{name: "John Gibson", state: "inactive"}, {name: "Lukas Dostal", state: "inactive"}];
	ARIgoalies = [{name: "Josef Korenar", state: "inactive"}, {name: "Harri Sateri", state: "inactive"}];
	BOSgoalies = [{name: "Jeremy Swayman", state: "inactive"}, {name: "Linus Ullmark", state: "inactive"}];
	BUFgoalies = [{name: "Craig Anderson", state: "inactive"}, {name: "Dustin Tokarski", state: "inactive"}];
	CGYgoalies = [{name: "Jacob Markstrom", state: "inactive"}, {name: "Dan Vladar", state: "inactive"}];
	CARgoalies = [{name: "Frederik Andersen", state: "inactive"}, {name: "Antti Raanta", state: "inactive"}];
	CHIgoalies = [{name: "Kevin Lankinen", state: "inactive"}, {name: "Collin Delia", state: "inactive"}];
	COLgoalies = [{name: "Darcy Kuemper", state: "inactive"}, {name: "Pavel Francouz", state: "inactive"}];
	CBJgoalies = [{name: "Joonas Korpisalo", state: "inactive"}, {name: "Elvis Merzlikins", state: "inactive"}];
	DALgoalies = [{name: "Jake Oettinger", state: "inactive"}, {name: "Scott Wedgewood", state: "inactive"}];
	DETgoalies = [{name: "Alex Nedeljkovic", state: "inactive"}, {name: "Thomas Greiss", state: "inactive"}];
	EDMgoalies = [{name: "Mikko Koskinen", state: "inactive"}, {name: "Mike Smith", state: "inactive"}];
	FLAgoalies = [{name: "Sergei Bobrovsky", state: "inactive"}, {name: "Spencer Knight", state: "inactive"}];
	LAgoalies = [{name: "Jonathan Quick", state: "inactive"}, {name: "Cal Petersen", state: "inactive"}];
	MINgoalies = [{name: "Marc-Andr&eacute; Fleury", state: "inactive"}, {name: "Cam Talbot", state: "inactive"}];
	MTLgoalies = [{name: "Samuel Montembeault", state: "inactive"}, {name: "Jake Allen", state: "inactive"}];
	NSHgoalies = [{name: "Juuse Saros", state: "inactive"}, {name: "David Rittich", state: "inactive"}];
	NJgoalies = [{name: "Nico Daws", state: "inactive"}, {name: "Jon Gillies", state: "inactive"}];
	NYIgoalies = [{name: "Semyon Varlamov", state: "inactive"}, {name: "Ilya Sorokin", state: "inactive"}];
	NYRgoalies = [{name: "Igor Shesterkin", state: "inactive"}, {name: "Alexandar Georgiev", state: "inactive"}];
	OTTgoalies = [{name: "Anton Forsberg", state: "inactive"}, {name: "Filip Gustavsson", state: "inactive"}];
	PHIgoalies = [{name: "Carter Hart", state: "inactive"}, {name: "Martin Jones", state: "inactive"}];
	PITgoalies = [{name: "Tristan Jarry", state: "inactive"}, {name: "Casey DeSmith", state: "inactive"}];
	SJgoalies = [{name: "Kaapo Kahkonen", state: "inactive"}, {name: "Adin Hill", state: "inactive"}];
	SEAgoalies = [{name: "Philipp Grubauer", state: "inactive"}, {name: "Chris Driedger", state: "inactive"}];
	STLgoalies = [{name: "Jordan Binnington", state: "inactive"}, {name: "Ville Husso", state: "inactive"}];
	TBgoalies = [{name: "Andrei Vasilevskiy", state: "inactive"}, {name: "Brian Elliott", state: "inactive"}];
	TORgoalies = [{name: "Petr Mrazek", state: "inactive"}, {name: "Erik Kallgren", state: "inactive"}];
	VANgoalies = [{name: "Thatcher Demko", state: "inactive"}, {name: "Jaroslav Halak", state: "inactive"}];
	VGKgoalies = [{name: "Logan Thompson", state: "inactive"}, {name: "Laurent Brossoit", state: "inactive"}];
	WSHgoalies = [{name: "Ilya Samsonov", state: "inactive"}, {name: "Vitek Vanecek", state: "inactive"}];
	WPGgoalies = [{name: "Connor Hellebuyck", state: "inactive"}, {name: "Eric Comrie", state: "inactive"}];
}

function teamSelect(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	var buttonCounter = 0;
	
	/*for(var i=0; i<teamButtons.length; i++){
		if(teamButtons[i].clicked == true){
			teamButtons[i].disabled = true;
		}
	}*/
	
	/*Get the teams ready! Team 1 is away and Team 2 is home*/
	/*Check how many buttons are still open*/
	for(var i=0; i<teamButtons.length; i++){
		if(teamButtons[i].disabled == false)
		{
			buttonCounter++;
		}
	}
	
	/*One team is ready*/
	if (buttonCounter == teamButtons.length)
	{
		team1[0] = t.id;
		team1[1] = 0;
		
		/*Team 1 Roster*/
		switch (team1[0])
		{
			case "ducks":
			{
				team1[2] = ducks;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "ANA";
				team1[5] = "Anaheim".toUpperCase();
				team1[6] = ANAgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "coyotes":
			{
				team1[2] = coyotes;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "ARI";
				team1[5] = "Arizona".toUpperCase();
				team1[6] = ARIgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "bruins":
			{
				team1[2] = bruins;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "BOS";
				team1[5] = "Boston".toUpperCase();
				team1[6] = BOSgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "sabres":
			{
				team1[2] = sabres;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "BUF";
				team1[5] = "Buffalo".toUpperCase();
				team1[6] = BUFgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "flames":
			{
				team1[2] = flames;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "CGY";
				team1[5] = "Calgary".toUpperCase();
				team1[6] = CGYgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "hurricanes":
			{
				team1[2] = hurricanes;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "CAR";
				team1[5] = "Carolina".toUpperCase();
				team1[6] = CARgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "blackhawks":
			{
				team1[2] = blackhawks;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "CHI";
				team1[5] = "Chicago".toUpperCase();
				team1[6] = CHIgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "avalanche":
			{
				team1[2] = avalanche;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "COL";
				team1[5] = "Colorado".toUpperCase();
				team1[6] = COLgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "bluejackets":
			{
				team1[2] = bluejackets;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "CBJ";
				team1[5] = "Columbus".toUpperCase();
				team1[6] = CBJgoalies;
				team1[0] = "blue jackets";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "stars":
			{
				team1[2] = stars;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "DAL";
				team1[5] = "Dallas".toUpperCase();
				team1[6] = DALgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "redwings":
			{
				team1[2] = redwings;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "DET";
				team1[5] = "Detroit".toUpperCase();
				team1[6] = DETgoalies;
				team1[0] = "red wings";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "oilers":
			{
				team1[2] = oilers;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "EDM";
				team1[5] = "Edmonton".toUpperCase();
				team1[6] = EDMgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "panthers":
			{
				team1[2] = panthers;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "FLA";
				team1[5] = "Florida".toUpperCase();
				team1[6] = FLAgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "kings":
			{
				team1[2] = kings;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "LA";
				team1[5] = "Los Angeles".toUpperCase();
				team1[6] = LAgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "wild":
			{
				team1[2] = wild;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "MIN";
				team1[5] = "Minnesota".toUpperCase();
				team1[6] = MINgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "canadiens":
			{
				team1[2] = canadiens;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "MTL";
				team1[5] = "Montreal".toUpperCase();
				team1[6] = MTLgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "predators":
			{
				team1[2] = predators;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "NSH";
				team1[5] = "Nashville".toUpperCase();
				team1[6] = NSHgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "devils":
			{
				team1[2] = devils;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "NJ";
				team1[5] = "New Jersey".toUpperCase();
				team1[6] = NJgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "islanders":
			{
				team1[2] = islanders;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "NYI";
				team1[5] = "New York".toUpperCase();
				team1[6] = NYIgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "rangers":
			{
				team1[2] = rangers;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "NYR";
				team1[5] = "New York".toUpperCase();
				team1[6] = NYRgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "senators":
			{
				team1[2] = senators;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "OTT";
				team1[5] = "Ottawa".toUpperCase();
				team1[6] = OTTgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "flyers":
			{
				team1[2] = flyers;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "PHI";
				team1[5] = "Philadelphia".toUpperCase();
				team1[6] = PHIgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "penguins":
			{
				team1[2] = penguins;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "PIT";
				team1[5] = "Pittsburgh".toUpperCase();
				team1[6] = PITgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "sharks":
			{
				team1[2] = sharks;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "SJ";
				team1[5] = "San Jose".toUpperCase();
				team1[6] = SJgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "kraken":
			{
				team1[2] = kraken;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "SEA";
				team1[5] = "Seattle".toUpperCase();
				team1[6] = SEAgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "blues":
			{
				team1[2] = blues;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "STL";
				team1[5] = "St. Louis".toUpperCase();
				team1[6] = STLgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "lightning":
			{
				team1[2] = lightning;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "TB";
				team1[5] = "Tampa Bay".toUpperCase();
				team1[6] = TBgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "mapleleafs":
			{
				team1[2] = mapleleafs;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "TOR";
				team1[5] = "Toronto".toUpperCase();
				team1[6] = TORgoalies;
				team1[0] = "maple leafs";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "canucks":
			{
				team1[2] = canucks;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "VAN";
				team1[5] = "Vancouver".toUpperCase();
				team1[6] = VANgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "goldenknights":
			{
				team1[2] = goldenknights;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "VGK";
				team1[5] = "Vegas".toUpperCase();
				team1[6] = VGKgoalies;
				team1[0] = "golden knights";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "capitals":
			{
				team1[2] = capitals;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "WSH";
				team1[5] = "Washington".toUpperCase();
				team1[6] = WSHgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			default:
			{
				team1[2] = jets;
				team1[3] = "logos/"+team1[0]+".png";
				team1[4] = "WPG";
				team1[5] = "Winnipeg".toUpperCase();
				team1[6] = WPGgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
		}
		
		t.disabled = true;
		//document.getElementById("header-text").innerHTML = "<p>Select Team 2 (Home)</p>";
	}
	/*Both teams are ready! Game On!*/
	else
	{
		team2[0] = t.id;
		team2[1] = 0;
		
		/*Team 2 Roster*/
		switch (team2[0])
		{
			case "ducks":
			{
				team2[2] = ducks;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "ANA";
				team2[5] = "Anaheim".toUpperCase();
				team2[6] = ANAgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "coyotes":
			{
				team2[2] = coyotes;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "ARI";
				team2[5] = "Arizona".toUpperCase();
				team2[6] = ARIgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "bruins":
			{
				team2[2] = bruins;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "BOS";
				team2[5] = "Boston".toUpperCase();
				team2[6] = BOSgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "sabres":
			{
				team2[2] = sabres;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "BUF";
				team2[5] = "Buffalo".toUpperCase();
				team2[6] = BUFgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "flames":
			{
				team2[2] = flames;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "CGY";
				team2[5] = "Calgary".toUpperCase();
				team2[6] = CGYgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "hurricanes":
			{
				team2[2] = hurricanes;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "CAR";
				team2[5] = "Carolina".toUpperCase();
				team2[6] = CARgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "blackhawks":
			{
				team2[2] = blackhawks;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "CHI";
				team2[5] = "Chicago".toUpperCase();
				team2[6] = CHIgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "avalanche":
			{
				team2[2] = avalanche;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "COL";
				team2[5] = "Colorado".toUpperCase();
				team2[6] = COLgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "bluejackets":
			{
				team2[2] = bluejackets;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "CBJ";
				team2[5] = "Columbus".toUpperCase();
				team2[6] = CBJgoalies;
				team2[0] = "blue jackets";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "stars":
			{
				team2[2] = stars;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "DAL";
				team2[5] = "Dallas".toUpperCase();
				team2[6] = DALgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "redwings":
			{
				team2[2] = redwings;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "DET";
				team2[5] = "Detroit".toUpperCase();
				team2[6] = DETgoalies;
				team2[0] = "red wings";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "oilers":
			{
				team2[2] = oilers;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "EDM";
				team2[5] = "Edmonton".toUpperCase();
				team2[6] = EDMgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "panthers":
			{
				team2[2] = panthers;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "FLA";
				team2[5] = "Florida".toUpperCase();
				team2[6] = FLAgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "kings":
			{
				team2[2] = kings;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "LA";
				team2[5] = "Los Angeles".toUpperCase();
				team2[6] = LAgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "wild":
			{
				team2[2] = wild;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "MIN";
				team2[5] = "Minnesota".toUpperCase();
				team2[6] = MINgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "canadiens":
			{
				team2[2] = canadiens;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "MTL";
				team2[5] = "Montreal".toUpperCase();
				team2[6] = MTLgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "predators":
			{
				team2[2] = predators;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "NSH";
				team2[5] = "Nashville".toUpperCase();
				team2[6] = NSHgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "devils":
			{
				team2[2] = devils;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "NJ";
				team2[5] = "New Jersey".toUpperCase();
				team2[6] = NJgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "islanders":
			{
				team2[2] = islanders;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "NYI";
				team2[5] = "New York".toUpperCase();
				team2[6] = NYIgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "rangers":
			{
				team2[2] = rangers;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "NYR";
				team2[5] = "New York".toUpperCase();
				team2[6] = NYRgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "senators":
			{
				team2[2] = senators;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "OTT";
				team2[5] = "Ottawa".toUpperCase();
				team2[6] = OTTgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "flyers":
			{
				team2[2] = flyers;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "PHI";
				team2[5] = "Philadelphia".toUpperCase();
				team2[6] = PHIgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "penguins":
			{
				team2[2] = penguins;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "PIT";
				team2[5] = "Pittsburgh".toUpperCase();
				team2[6] = PITgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "sharks":
			{
				team2[2] = sharks;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "SJ";
				team2[5] = "San Jose".toUpperCase();
				team2[6] = SJgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "kraken":
			{
				team2[2] = kraken;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "SEA";
				team2[5] = "Seattle".toUpperCase();
				team2[6] = SEAgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "blues":
			{
				team2[2] = blues;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "STL";
				team2[5] = "St. Louis".toUpperCase();
				team2[6] = STLgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "lightning":
			{
				team2[2] = lightning;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "TB";
				team2[5] = "Tampa Bay".toUpperCase();
				team2[6] = TBgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "mapleleafs":
			{
				team2[2] = mapleleafs;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "TOR";
				team2[5] = "Toronto".toUpperCase();
				team2[6] = TORgoalies;
				team2[0] = "maple leafs";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "canucks":
			{
				team2[2] = canucks;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "VAN";
				team2[5] = "Vancouver".toUpperCase();
				team2[6] = VANgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "goldenknights":
			{
				team2[2] = goldenknights;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "VGK";
				team2[5] = "Vegas".toUpperCase();
				team2[6] = VGKgoalies;
				team2[0] = "golden knights";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "capitals":
			{
				team2[2] = capitals;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "WSH";
				team2[5] = "Washington".toUpperCase();
				team2[6] = WSHgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			default:
			{
				team2[2] = jets;
				team2[3] = "logos/"+team2[0]+".png";
				team2[4] = "WPG";
				team2[5] = "Winnipeg".toUpperCase();
				team2[6] = WPGgoalies;
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
		}
		
		t.disabled = true;
		/*document.getElementById("header-text").innerHTML = "<p>Select Team 2 (Home)</p>";*/
		
		/*DISABLE EVERYTHING ELSE*/
		for(var i=0; i<teamButtons.length; i++){
			teamButtons[i].disabled = true;
		}
		
		/*document.getElementById("header-text").innerHTML = "<p>Game On! Read the Simulation Below</p>" + "<ul><li>" + "<img src=\"" + team1[3] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[3] + "\"></img>" + "</li></ul></div>";*/
		//firstPeriod(team1, team2);
	}
}

function firstPeriod(team1, team2)
{	
	document.getElementById("simulation").innerHTML += "<p><b><span style=\"color: dodgerblue\">GOALS WITHIN REGULATION AND/OR OVERTIME</span></b><br/><b>FIRST PERIOD</b></p>";

		for (var i = 0; i <= Math.floor(Math.random() * 7 + 1); i++)
		{
			var away = 0;
			var home = 0;
			var assistedBy = Math.floor(Math.random() * 3);
			var randomNumber = Math.floor(Math.random() * 3);

			if(randomNumber == 1) //Away Goal
			{
				random1to20 = Math.floor((Math.random() * 20)+1);
				var randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
				
				switch (random1to20){
					case 1:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 2:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 3:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 4:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 5:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 6:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 7:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 8:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 9:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 10:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 11:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 12:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 13:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 14:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 15:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 16:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 17:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 18:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 19:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 20:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "D"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
				}
				team1[2][randomPlayerIndex].goals++;
				var playerName = team1[2][randomPlayerIndex];
				away++;
				team1[1]++;
				document.getElementById("simulation").innerHTML += "<p>"+team1[4]+"- "+playerName.name+" ("+playerName.goals+")</p>";
				
				var index = team1[2].indexOf(playerName);
				team1[2].splice(index, 1);

				if(assistedBy == 1)
				{
					var randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];	
					while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
						randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex1)){
							team1[2][i].assists++;
						}
					}
					
					var playerName1 = randomPlayerIndex1;
					playerName1.assists++;
					document.getElementById("simulation").innerHTML += "<p>Assisted by: " + playerName1.name + " ("+playerName1.assists+")</p>";

					/*1 assist means 1 push (the goal scorer)*/
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice((team1[2].length - 1), 0, playerName);
					}
				}
				else if(assistedBy == 2)
				{
					var randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					
					while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
						randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex1)){
							team1[2][i].assists++;
						}
					}
					
					var playerName1 = randomPlayerIndex1;
					playerName1.assists++;
					document.getElementById("simulation").innerHTML += "<p style=\"display: inline-block\">Assisted by: " + playerName1.name + " (" + playerName1.assists + ")";
					
					var indexA = team1[2].indexOf(playerName1);
					team1[2].splice(indexA, 1);
					
					var randomPlayerIndex2 = team1[2][Math.floor(Math.random() * team1[2].length)];
					
					while (!(randomPlayerIndex2.line.valueOf() == playerName.line || randomPlayerIndex2.line.valueOf() == "D")){
						randomPlayerIndex2 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex2)){
							team1[2][i].assists++;
						}
					}
					
					var playerName2 = randomPlayerIndex2;
					playerName2.assists++;
					document.getElementById("simulation").innerHTML += ", " + playerName2.name + " (" + playerName2.assists + ")</p>";

					/*2 assists mean 2 pushes (goal scorer and primary assist)*/
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice(randomPlayerIndex, 0, playerName);
					}
					if(randomPlayerIndex1 > team1[2].length)
					{
						team1[2].push(playerName1);
					}
					else
					{
						team1[2].splice(randomPlayerIndex1, 0, playerName1);
					}
				}
				else //UNASSISTED GOAL
				{
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice((team1[2].length - 1), 0, playerName);
					}
				}
			}

			else if(randomNumber == 0)
			{
				random1to20 = Math.floor((Math.random() * 20)+1);
				var randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
				
				switch (random1to20){
					case 1:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 2:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 3:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 4:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 5:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 6:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 7:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 8:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 9:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 10:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 11:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 12:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 13:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 14:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 15:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 16:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 17:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 18:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 19:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 20:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "D"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
				}

				team2[2][randomPlayerIndex].goals++;
				var playerName = team2[2][randomPlayerIndex];
				home++;
				team2[1]++;
				document.getElementById("simulation").innerHTML += "<p>"+team2[4]+"- "+playerName.name+" ("+playerName.goals+")</p>";
				
				var index = team2[2].indexOf(playerName);
				team2[2].splice(index, 1);

								if(assistedBy == 1)
								{
									var randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									
									while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
										randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									}
									
									/*add an assist*/
									for(var i=0; i<team2[2].length; i++){
										if(team2[2][i] == team2[2].indexOf(randomPlayerIndex1)){
											team2[2][i].assists++;
										}
									}
									
									var playerName1 = randomPlayerIndex1;
									playerName1.assists++;
									document.getElementById("simulation").innerHTML += "<p>Assisted by: " + playerName1.name + " ("+playerName1.assists+")</p>";

									if(randomPlayerIndex > team2[2].length)
									{
										team2[2].push(playerName);
									}
									else
									{
										team2[2].splice((team2[2].length - 1), 0, playerName);
									}
								}
								else if(assistedBy == 2)
								{
									var randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									
									while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
										randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									}
									
									/*add an assist*/
									for(var i=0; i<team2[2].length; i++){
										if(team2[2][i] == team2[2].indexOf(randomPlayerIndex1)){
											team2[2][i].assists++;
										}
									}
									
									var playerName1 = randomPlayerIndex1;
									playerName1.assists++;
									document.getElementById("simulation").innerHTML += "<p style=\"display: inline-block\">Assisted by: " + playerName1.name + " (" + playerName1.assists +")";
									
									var indexA = team2[2].indexOf(playerName1);
									team2[2].splice(indexA, 1);
									
									var randomPlayerIndex2 = team2[2][Math.floor(Math.random() * team2[2].length)];
									
									while (!(randomPlayerIndex2.line.valueOf() == playerName.line || randomPlayerIndex2.line.valueOf() == "D")){
										randomPlayerIndex2 = team2[2][Math.floor(Math.random() * team2[2].length)];
									}
									
									/*add an assist*/
									for(var i=0; i<team2[2].length; i++){
										if(team2[2][i] == team2[2].indexOf(randomPlayerIndex2)){
											team2[2][i].assists++;
										}
									}
									
									var playerName2 = randomPlayerIndex2;
									playerName2.assists++;
									document.getElementById("simulation").innerHTML += ", " + playerName2.name + " (" + playerName2.assists + ")</p>";

									if(randomPlayerIndex > team2[2].length)
									{
										team2[2].push(playerName);
									}
									else
									{
										team2[2].splice(randomPlayerIndex, 0, playerName);
									}
									if(randomPlayerIndex1 > team2[2].length)
									{
										team2[2].push(playerName1);
									}
									else
									{
										team2[2].splice(randomPlayerIndex1, 0, playerName1);
									}
								}
								else //UNASSISTED GOAL
								{
									if(randomPlayerIndex > team2[2].length)
									{
										team2[2].push(playerName);
									}
									else
									{
										team2[2].splice((team2[2].length - 1), 0, playerName);
									}
								}
			}
			else
			{
				team1[1] = team1[1];
				team2[1] = team2[1];
			}
		}

		secondPeriod(team1, team2);
}

function secondPeriod(team1, team2)
{
	document.getElementById("simulation").innerHTML += "<p><br/><b>SECOND PERIOD</b></p>";
	
	for (var i = 0; i <= Math.floor(Math.random() * 7 + 1); i++)
		{
			var away = 0;
			var home = 0;
			var assistedBy = Math.floor(Math.random() * 3);
			var randomNumber = Math.floor(Math.random() * 3);

			if(randomNumber == 1) //Away Goal
			{
				random1to20 = Math.floor((Math.random() * 20)+1);
				var randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
				
				switch (random1to20){
					case 1:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 2:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 3:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 4:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 5:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 6:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 7:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 8:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 9:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 10:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 11:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 12:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 13:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 14:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 15:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 16:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 17:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 18:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 19:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 20:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "D"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
				}
				team1[2][randomPlayerIndex].goals++;
				var playerName = team1[2][randomPlayerIndex];
				away++;
				team1[1]++;
				document.getElementById("simulation").innerHTML += "<p>"+team1[4]+"- "+playerName.name+" ("+playerName.goals+")</p>";
				
				var index = team1[2].indexOf(playerName);
				team1[2].splice(index, 1);

				if(assistedBy == 1)
				{
					var randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];	
					
					while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
						randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex1)){
							team1[2][i].assists++;
						}
					}
					
					var playerName1 = randomPlayerIndex1;
					playerName1.assists++;
					document.getElementById("simulation").innerHTML += "<p>Assisted by: " + playerName1.name + " ("+playerName1.assists+")</p>";

					/*1 assist means 1 push (the goal scorer)*/
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice((team1[2].length - 1), 0, playerName);
					}
				}
				else if(assistedBy == 2)
				{
					var randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					
					while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
						randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex1)){
							team1[2][i].assists++;
						}
					}
					
					var playerName1 = randomPlayerIndex1;
					playerName1.assists++;
					document.getElementById("simulation").innerHTML += "<p style=\"display: inline-block\">Assisted by: " + playerName1.name + " (" + playerName1.assists + ")";
					
					var indexA = team1[2].indexOf(playerName1);
					team1[2].splice(indexA, 1);
					
					var randomPlayerIndex2 = team1[2][Math.floor(Math.random() * team1[2].length)];
					
					while (!(randomPlayerIndex2.line.valueOf() == playerName.line || randomPlayerIndex2.line.valueOf() == "D")){
						randomPlayerIndex2 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex2)){
							team1[2][i].assists++;
						}
					}
					
					var playerName2 = randomPlayerIndex2;
					playerName2.assists++;
					document.getElementById("simulation").innerHTML += ", " + playerName2.name + " (" + playerName2.assists + ")</p>";

					/*2 assists mean 2 pushes (goal scorer and primary assist)*/
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice(randomPlayerIndex, 0, playerName);
					}
					if(randomPlayerIndex1 > team1[2].length)
					{
						team1[2].push(playerName1);
					}
					else
					{
						team1[2].splice(randomPlayerIndex1, 0, playerName1);
					}
				}
				else //UNASSISTED GOAL
				{
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice((team1[2].length - 1), 0, playerName);
					}
				}
			}

			else if(randomNumber == 0)
			{
				random1to20 = Math.floor((Math.random() * 20)+1);
				var randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
				
				switch (random1to20){
					case 1:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 2:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 3:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 4:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 5:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 6:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 7:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 8:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 9:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 10:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 11:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 12:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 13:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 14:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 15:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 16:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 17:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 18:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 19:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 20:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "D"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
				}

				team2[2][randomPlayerIndex].goals++;
				var playerName = team2[2][randomPlayerIndex];
				home++;
				team2[1]++;
				document.getElementById("simulation").innerHTML += "<p>"+team2[4]+"- "+playerName.name+" ("+playerName.goals+")</p>";
				
				var index = team2[2].indexOf(playerName);
				team2[2].splice(index, 1);

								if(assistedBy == 1)
								{
									var randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									
									while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
										randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									}
									
									/*add an assist*/
									for(var i=0; i<team2[2].length; i++){
										if(team2[2][i] == team2[2].indexOf(randomPlayerIndex1)){
											team2[2][i].assists++;
										}
									}
									
									var playerName1 = randomPlayerIndex1;
									playerName1.assists++;
									document.getElementById("simulation").innerHTML += "<p>Assisted by: " + playerName1.name + " ("+playerName1.assists+")</p>";

									if(randomPlayerIndex > team2[2].length)
									{
										team2[2].push(playerName);
									}
									else
									{
										team2[2].splice((team2[2].length - 1), 0, playerName);
									}
								}
								else if(assistedBy == 2)
								{
									var randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									
									while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
										randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									}
									
									/*add an assist*/
									for(var i=0; i<team2[2].length; i++){
										if(team2[2][i] == team2[2].indexOf(randomPlayerIndex1)){
											team2[2][i].assists++;
										}
									}
									
									var playerName1 = randomPlayerIndex1;
									playerName1.assists++;
									document.getElementById("simulation").innerHTML += "<p style=\"display: inline-block\">Assisted by: " + playerName1.name + " (" + playerName1.assists +")";
									
									var indexA = team2[2].indexOf(playerName1);
									team2[2].splice(indexA, 1);
									
									var randomPlayerIndex2 = team2[2][Math.floor(Math.random() * team2[2].length)];
									
									while (!(randomPlayerIndex2.line.valueOf() == playerName.line || randomPlayerIndex2.line.valueOf() == "D")){
										randomPlayerIndex2 = team2[2][Math.floor(Math.random() * team2[2].length)];
									}
									
									/*add an assist*/
									for(var i=0; i<team2[2].length; i++){
										if(team2[2][i] == team2[2].indexOf(randomPlayerIndex2)){
											team2[2][i].assists++;
										}
									}
									
									var playerName2 = randomPlayerIndex2;
									playerName2.assists++;
									document.getElementById("simulation").innerHTML += ", " + playerName2.name + " (" + playerName2.assists + ")</p>";

									if(randomPlayerIndex > team2[2].length)
									{
										team2[2].push(playerName);
									}
									else
									{
										team2[2].splice(randomPlayerIndex, 0, playerName);
									}
									if(randomPlayerIndex1 > team2[2].length)
									{
										team2[2].push(playerName1);
									}
									else
									{
										team2[2].splice(randomPlayerIndex1, 0, playerName1);
									}
								}
								else //UNASSISTED GOAL
								{
									if(randomPlayerIndex > team2[2].length)
									{
										team2[2].push(playerName);
									}
									else
									{
										team2[2].splice((team2[2].length - 1), 0, playerName);
									}
								}
			}
			else
			{
				team1[1] = team1[1];
				team2[1] = team2[1];
			}
		}
	
	thirdPeriod(team1, team2);
}

function thirdPeriod(team1, team2)
{
	document.getElementById("simulation").innerHTML += "<p><br/><b>THIRD PERIOD</b></p>";

	for (var i = 0; i <= Math.floor(Math.random() * 7 + 1); i++)
		{
			var away = 0;
			var home = 0;
			var assistedBy = Math.floor(Math.random() * 3);
			var randomNumber = Math.floor(Math.random() * 3);

			if(randomNumber == 1) //Away Goal
			{
				random1to20 = Math.floor((Math.random() * 20)+1);
				var randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
				
				switch (random1to20){
					case 1:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 2:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 3:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 4:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 5:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 6:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 7:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 8:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 9:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 10:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 11:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 12:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 13:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 14:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 15:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 16:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 17:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 18:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 19:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 20:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "D"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
				}
				team1[2][randomPlayerIndex].goals++;
				var playerName = team1[2][randomPlayerIndex];
				away++;
				team1[1]++;
				document.getElementById("simulation").innerHTML += "<p>"+team1[4]+"- "+playerName.name+" ("+playerName.goals+")</p>";
				
				var index = team1[2].indexOf(playerName);
				team1[2].splice(index, 1);

				if(assistedBy == 1)
				{
					var randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];	
					
					while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
						randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex1)){
							team1[2][i].assists++;
						}
					}
					
					var playerName1 = randomPlayerIndex1;
					playerName1.assists++;
					document.getElementById("simulation").innerHTML += "<p>Assisted by: " + playerName1.name + " ("+playerName1.assists+")</p>";

					/*1 assist means 1 push (the goal scorer)*/
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice((team1[2].length - 1), 0, playerName);
					}
				}
				else if(assistedBy == 2)
				{
					var randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					
					while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
						randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex1)){
							team1[2][i].assists++;
						}
					}
					
					var playerName1 = randomPlayerIndex1;
					playerName1.assists++;
					document.getElementById("simulation").innerHTML += "<p style=\"display: inline-block\">Assisted by: " + playerName1.name + " (" + playerName1.assists + ")";
					
					var indexA = team1[2].indexOf(playerName1);
					team1[2].splice(indexA, 1);
					
					var randomPlayerIndex2 = team1[2][Math.floor(Math.random() * team1[2].length)];
					
					while (!(randomPlayerIndex2.line.valueOf() == playerName.line || randomPlayerIndex2.line.valueOf() == "D")){
						randomPlayerIndex2 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex2)){
							team1[2][i].assists++;
						}
					}
					
					var playerName2 = randomPlayerIndex2;
					playerName2.assists++;
					document.getElementById("simulation").innerHTML += ", " + playerName2.name + " (" + playerName2.assists + ")</p>";

					/*2 assists mean 2 pushes (goal scorer and primary assist)*/
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice(randomPlayerIndex, 0, playerName);
					}
					if(randomPlayerIndex1 > team1[2].length)
					{
						team1[2].push(playerName1);
					}
					else
					{
						team1[2].splice(randomPlayerIndex1, 0, playerName1);
					}
				}
				else //UNASSISTED GOAL
				{
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice((team1[2].length - 1), 0, playerName);
					}
				}
			}

			else if(randomNumber == 0)
			{
				random1to20 = Math.floor((Math.random() * 20)+1);
				var randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
				
				switch (random1to20){
					case 1:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 2:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 3:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 4:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 5:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 6:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 7:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 8:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 9:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 10:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 11:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 12:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 13:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 14:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 15:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 16:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 17:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 18:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 19:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 20:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "D"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
				}

				team2[2][randomPlayerIndex].goals++;
				var playerName = team2[2][randomPlayerIndex];
				home++;
				team2[1]++;
				document.getElementById("simulation").innerHTML += "<p>"+team2[4]+"- "+playerName.name+" ("+playerName.goals+")</p>";
				
				var index = team2[2].indexOf(playerName);
				team2[2].splice(index, 1);

								if(assistedBy == 1)
								{
									var randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									
									while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
										randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									}
									
									/*add an assist*/
									for(var i=0; i<team2[2].length; i++){
										if(team2[2][i] == team2[2].indexOf(randomPlayerIndex1)){
											team2[2][i].assists++;
										}
									}
									
									var playerName1 = randomPlayerIndex1;
									playerName1.assists++;
									document.getElementById("simulation").innerHTML += "<p>Assisted by: " + playerName1.name + " ("+playerName1.assists+")</p>";

									if(randomPlayerIndex > team2[2].length)
									{
										team2[2].push(playerName);
									}
									else
									{
										team2[2].splice((team2[2].length - 1), 0, playerName);
									}
								}
								else if(assistedBy == 2)
								{
									var randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									
									while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
										randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
									}
									
									/*add an assist*/
									for(var i=0; i<team2[2].length; i++){
										if(team2[2][i] == team2[2].indexOf(randomPlayerIndex1)){
											team2[2][i].assists++;
										}
									}
									
									var playerName1 = randomPlayerIndex1;
									playerName1.assists++;
									document.getElementById("simulation").innerHTML += "<p style=\"display: inline-block\">Assisted by: " + playerName1.name + " (" + playerName1.assists +")";
									
									var indexA = team2[2].indexOf(playerName1);
									team2[2].splice(indexA, 1);
									
									var randomPlayerIndex2 = team2[2][Math.floor(Math.random() * team2[2].length)];
									
									while (!(randomPlayerIndex2.line.valueOf() == playerName.line || randomPlayerIndex2.line.valueOf() == "D")){
										randomPlayerIndex2 = team2[2][Math.floor(Math.random() * team2[2].length)];
									}
									
									/*add an assist*/
									for(var i=0; i<team2[2].length; i++){
										if(team2[2][i] == team2[2].indexOf(randomPlayerIndex2)){
											team2[2][i].assists++;
										}
									}
									
									var playerName2 = randomPlayerIndex2;
									playerName2.assists++;
									document.getElementById("simulation").innerHTML += ", " + playerName2.name + " (" + playerName2.assists + ")</p>";

									if(randomPlayerIndex > team2[2].length)
									{
										team2[2].push(playerName);
									}
									else
									{
										team2[2].splice(randomPlayerIndex, 0, playerName);
									}
									if(randomPlayerIndex1 > team2[2].length)
									{
										team2[2].push(playerName1);
									}
									else
									{
										team2[2].splice(randomPlayerIndex1, 0, playerName1);
									}
								}
								else //UNASSISTED GOAL
								{
									if(randomPlayerIndex > team2[2].length)
									{
										team2[2].push(playerName);
									}
									else
									{
										team2[2].splice((team2[2].length - 1), 0, playerName);
									}
								}
			}
			else
			{
				team1[1] = team1[1];
				team2[1] = team2[1];
			}
		}
		
		if (team1[1] == team2[1])
		{
			overtime(team1, team2);
		}
		else
		{
			document.getElementById("header-text").innerHTML = "<p>Projected Result</p>";
			document.getElementById("header-text").innerHTML += "<p>Non-participating players</p>";
			document.getElementById("header-text").innerHTML += "<p><b>"+team1[0].toUpperCase()+"</b></p>";
			if(team1injuries.length > 0) {
				document.getElementById("header-text").innerHTML += "<p>";
				for(var i=0; i<team1injuries.length; i++){
					document.getElementById("header-text").innerHTML += team1injuries[i]+"&nbsp;&nbsp;&nbsp;";
				}
				document.getElementById("header-text").innerHTML += "</p>";
			}
			else {
				document.getElementById("header-text").innerHTML += "<p>NONE</p>";
			}
			
			document.getElementById("header-text").innerHTML += "<p><b>"+team2[0].toUpperCase()+"</b></p>";
			if(team2injuries.length > 0) {
				document.getElementById("header-text").innerHTML += "<p>";
				for(var i=0; i<team2injuries.length; i++){
					document.getElementById("header-text").innerHTML += team2injuries[i]+"&nbsp;&nbsp;&nbsp;";
				}
				document.getElementById("header-text").innerHTML += "</p>";
			}
			else {
				document.getElementById("header-text").innerHTML += "<p>NONE</p>";
			}
			
			document.getElementById("header-text").innerHTML += "<ul><li>" + "<img src=\"" + team1[3] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[3] + "\"></img>" + "</li></ul></div>";
			
			document.getElementById("box-score").style.visibility = "visible";
			document.getElementById("box-score").innerHTML += "<h2>BOX SCORE</h2>";
			document.getElementById("box-score").innerHTML += "<h3>"+team1[5]+" "+team1[0].toUpperCase()+"</h3>";
			document.getElementById("box-score").innerHTML += "<table>";
			document.getElementById("box-score").innerHTML += "<br/>";
			for(var i=0; i<team1[2].length; i++){
				document.getElementById("box-score").innerHTML += "<tr><td>"+team1[2][i].name+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[2][i].goals+"</b> G</td>&emsp;&emsp;&emsp;<td><b>"+team1[2][i].assists+"</b> A &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+( team1[2][i].goals + team1[2][i].assists )+"</b> P</td></tr><br/>";
			}
			document.getElementById("box-score").innerHTML += "</table>";
			document.getElementById("box-score").innerHTML += "<br/><br/>";
			document.getElementById("box-score").innerHTML += "<h3>"+team2[5]+" "+team2[0].toUpperCase()+"</h3>";
			document.getElementById("box-score").innerHTML += "<table>";
			document.getElementById("box-score").innerHTML += "<br/>";
			for(var i=0; i<team2[2].length; i++){
				document.getElementById("box-score").innerHTML += "<tr><td>"+team2[2][i].name+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[2][i].goals+"</b> G</td>&emsp;&emsp;&emsp;<td><b>"+team2[2][i].assists+"</b> A &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+( team2[2][i].goals + team2[2][i].assists )+"</b> P</td></tr><br/>";
			}
			document.getElementById("box-score").innerHTML += "</table>";
			
			if(team1[1] > team2[1]){
				if(team1[6][0].state.valueOf() == "active"){
					winningGoalie = team1[6][0].name;
				}
				else{
					winningGoalie = team1[6][1].name;
				}
				if(team2[6][0].state.valueOf() == "active"){
					losingGoalie = team2[6][0].name;
				}
				else{
					losingGoalie = team2[6][1].name;
				}
				winner = team1[4];
				loser = team2[4];
			}
			else{
				if(team1[6][0].state.valueOf() == "active"){
					losingGoalie = team1[6][0].name;
				}
				else{
					losingGoalie = team1[6][1].name;
				}
				if(team2[6][0].state.valueOf() == "active"){
					winningGoalie = team2[6][0].name;
				}
				else{
					winningGoalie = team2[6][1].name;
				}
				winner = team2[4];
				loser = team1[4];
			}
			document.getElementById("box-score").innerHTML += "<br/><p><b>WINNING GOALIE</b>&nbsp;"+winningGoalie+" ("+winner+")&nbsp;&nbsp;&nbsp;&nbsp;<b>LOSING GOALIE</b>&nbsp;"+losingGoalie+" ("+loser+")</p>";
			
			document.getElementById("reset-btn").disabled = false;
		}
}

function overtime(team1, team2)
{
	document.getElementById("simulation").innerHTML += "<p><br/><b>OVERTIME</b></p>";
	var decisionMaker = Math.floor(Math.random() * 3);
	var assistedBy = Math.floor(Math.random() * 3);
	
	/*SHOOTOUT*/
	if (decisionMaker == 0){
		shootout(team1, team2);
	}
	/*AWAY TEAM WINS*/
	else if (decisionMaker == 1){
				random1to20 = Math.floor((Math.random() * 20)+1);
				var randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
				
				switch (random1to20){
					case 1:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 2:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 3:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 4:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 5:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 6:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 7:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 8:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 9:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 10:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 11:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 12:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 13:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 14:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 15:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 16:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 17:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 18:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 19:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
					case 20:{
						while(!team1[2][randomPlayerIndex].line.valueOf() == "D"){
							randomPlayerIndex = Math.floor(Math.random() * team1[2].length);
						}
						break;
					}
				}
				team1[2][randomPlayerIndex].goals++;
				var playerName = team1[2][randomPlayerIndex];
				//away++;
				team1[1]++;
				document.getElementById("simulation").innerHTML += "<p>"+team1[4]+"- "+playerName.name+" ("+playerName.goals+")</p>";

				var index = team1[2].indexOf(playerName);
				team1[2].splice(index, 1);

				if(assistedBy == 1)
				{
					var randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];	
					
					while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
						randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex1)){
							team1[2][i].assists++;
						}
					}
					var playerName1 = randomPlayerIndex1;
					playerName1.assists++;
					document.getElementById("simulation").innerHTML += "<p>Assisted by: " + playerName1.name + " ("+playerName1.assists+")</p>";
					
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice((team1[2].length - 1), 0, playerName);
					}
				}
				else if(assistedBy == 2)
				{
					var randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];	
					
					while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
						randomPlayerIndex1 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex1)){
							team1[2][i].assists++;
						}
					}
					var playerName1 = randomPlayerIndex1;
					playerName1.assists++;
					document.getElementById("simulation").innerHTML += "<p style=\"display: inline-block\">Assisted by: " + playerName1.name + " (" + playerName1.assists + ")";
					
					var indexA = team1[2].indexOf(playerName1);
					team1[2].splice(indexA, 1);
					
					var randomPlayerIndex2 = team1[2][Math.floor(Math.random() * team1[2].length)];	
					
					while (!(randomPlayerIndex2.line.valueOf() == playerName.line || randomPlayerIndex2.line.valueOf() == "D")){
						randomPlayerIndex2 = team1[2][Math.floor(Math.random() * team1[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team1[2].length; i++){
						if(team1[2][i] == team1[2].indexOf(randomPlayerIndex2)){
							team1[2][i].assists++;
						}
					}
					var playerName2 = randomPlayerIndex2;
					playerName2.assists++;
					document.getElementById("simulation").innerHTML += ", " + playerName2.name + " (" + playerName2.assists + ")</p>";

					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice(randomPlayerIndex, 0, playerName);
					}
					if(randomPlayerIndex1 > team1[2].length)
					{
						team1[2].push(playerName1);
					}
					else
					{
						team1[2].splice(randomPlayerIndex1, 0, playerName1);
					}
				}
				else
				{
					if(randomPlayerIndex > team1[2].length)
					{
						team1[2].push(playerName);
					}
					else
					{
						team1[2].splice((team1[2].length - 1), 0, playerName);
					}
				}
			document.getElementById("header-text").innerHTML = "<p>Projected Result (OT)</p>";
			document.getElementById("header-text").innerHTML += "<p>Non-participating players</p>";
			document.getElementById("header-text").innerHTML += "<p><b>"+team1[0].toUpperCase()+"</b></p>";
			if(team1injuries.length > 0) {
				document.getElementById("header-text").innerHTML += "<p>";
				for(var i=0; i<team1injuries.length; i++){
					document.getElementById("header-text").innerHTML += team1injuries[i]+"&nbsp;&nbsp;&nbsp;";
				}
				document.getElementById("header-text").innerHTML += "</p>";
			}
			else {
				document.getElementById("header-text").innerHTML += "<p>NONE</p>";
			}
			
			document.getElementById("header-text").innerHTML += "<p><b>"+team2[0].toUpperCase()+"</b></p>";
			if(team2injuries.length > 0) {
				document.getElementById("header-text").innerHTML += "<p>";
				for(var i=0; i<team2injuries.length; i++){
					document.getElementById("header-text").innerHTML += team2injuries[i]+"&nbsp;&nbsp;&nbsp;";
				}
				document.getElementById("header-text").innerHTML += "</p>";
			}
			else {
				document.getElementById("header-text").innerHTML += "<p>NONE</p>";
			}
			
			document.getElementById("header-text").innerHTML += "<ul><li>" + "<img src=\"" + team1[3] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[3] + "\"></img>" + "</li></ul></div>";
			document.getElementById("box-score").style.visibility = "visible";
			document.getElementById("box-score").innerHTML += "<h2>BOX SCORE</h2>";
			document.getElementById("box-score").innerHTML += "<h3>"+team1[5]+" "+team1[0].toUpperCase()+"</h3>";
			document.getElementById("box-score").innerHTML += "<table>";
			document.getElementById("box-score").innerHTML += "<br/>";
			for(var i=0; i<team1[2].length; i++){
				document.getElementById("box-score").innerHTML += "<tr><td>"+team1[2][i].name+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[2][i].goals+"</b> G</td>&emsp;&emsp;&emsp;<td><b>"+team1[2][i].assists+"</b> A &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+( team1[2][i].goals + team1[2][i].assists )+"</b> P</td></tr><br/>";
			}
			document.getElementById("box-score").innerHTML += "</table>";
			document.getElementById("box-score").innerHTML += "<br/><br/>";
			document.getElementById("box-score").innerHTML += "<h3>"+team2[5]+" "+team2[0].toUpperCase()+"</h3>";
			document.getElementById("box-score").innerHTML += "<table>";
			document.getElementById("box-score").innerHTML += "<br/>";
			for(var i=0; i<team2[2].length; i++){
				document.getElementById("box-score").innerHTML += "<tr><td>"+team2[2][i].name+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[2][i].goals+"</b> G</td>&emsp;&emsp;&emsp;<td><b>"+team2[2][i].assists+"</b> A &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+( team2[2][i].goals + team2[2][i].assists )+"</b> P</td></tr><br/>";
			}
			document.getElementById("box-score").innerHTML += "</table>";
			
			if(team1[1] > team2[1]){
				if(team1[6][0].state.valueOf() == "active"){
					winningGoalie = team1[6][0].name;
				}
				else{
					winningGoalie = team1[6][1].name;
				}
				if(team2[6][0].state.valueOf() == "active"){
					losingGoalie = team2[6][0].name;
				}
				else{
					losingGoalie = team2[6][1].name;
				}
				winner = team1[4];
				loser = team2[4];
			}
			else{
				if(team1[6][0].state.valueOf() == "active"){
					losingGoalie = team1[6][0].name;
				}
				else{
					losingGoalie = team1[6][1].name;
				}
				if(team2[6][0].state.valueOf() == "active"){
					winningGoalie = team2[6][0].name;
				}
				else{
					winningGoalie = team2[6][1].name;
				}
				winner = team2[4];
				loser = team1[4];
			}
			document.getElementById("box-score").innerHTML += "<br/><p><b>WINNING GOALIE</b>&nbsp;"+winningGoalie+" ("+winner+")&nbsp;&nbsp;&nbsp;&nbsp;<b>LOSING GOALIE</b>&nbsp;"+losingGoalie+" ("+loser+")</p>";
			
			document.getElementById("reset-btn").disabled = false;
	}
	/*HOME TEAM WINS*/
	else{
				random1to20 = Math.floor((Math.random() * 20)+1);
				var randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
				
				switch (random1to20){
					case 1:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 2:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 3:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 4:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 5:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 6:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 7:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 8:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 9:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 10:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 11:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 12:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 13:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "1"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 14:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 15:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "2"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 16:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 17:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "3"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 18:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 19:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "4"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
					case 20:{
						while(!team2[2][randomPlayerIndex].line.valueOf() == "D"){
							randomPlayerIndex = Math.floor(Math.random() * team2[2].length);
						}
						break;
					}
				}

				team2[2][randomPlayerIndex].goals++;
				var playerName = team2[2][randomPlayerIndex];
				//home++;
				team2[1]++;
				document.getElementById("simulation").innerHTML += "<p>"+team2[4]+"- "+playerName.name+" ("+playerName.goals+")</p>";

				var index = team2[2].indexOf(playerName);
				team2[2].splice(index, 1);

				if(assistedBy == 1)
				{
					var randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
					
					while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
						randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team2[2].length; i++){
						if(team2[2][i] == team2[2].indexOf(randomPlayerIndex1)){
							team2[2][i].assists++;
						}
					}
					
					var playerName1 = randomPlayerIndex1;
					playerName1.assists++;
					document.getElementById("simulation").innerHTML += "<p>Assisted by: " + playerName1.name + " ("+playerName1.assists+")</p>";

					if(randomPlayerIndex > team2[2].length)
					{
						team2[2].push(playerName);
					}
					else
					{
						team2[2].splice((team2[2].length - 1), 0, playerName);
					}
				}
				else if(assistedBy == 2)
				{
					var randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
					
					while (!(randomPlayerIndex1.line.valueOf() == playerName.line || randomPlayerIndex1.line.valueOf() == "D")){
						randomPlayerIndex1 = team2[2][Math.floor(Math.random() * team2[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team2[2].length; i++){
						if(team2[2][i] == team2[2].indexOf(randomPlayerIndex1)){
							team2[2][i].assists++;
						}
					}
					
					var playerName1 = randomPlayerIndex1;
					playerName1.assists++;
					document.getElementById("simulation").innerHTML += "<p style=\"display: inline-block\">Assisted by: " + playerName1.name + " (" + playerName1.assists + ")";
					
					var indexA = team2[2].indexOf(playerName1);
					team2[2].splice(indexA, 1);
					
					var randomPlayerIndex2 = team2[2][Math.floor(Math.random() * team2[2].length)];
					
					while (!(randomPlayerIndex2.line.valueOf() == playerName.line || randomPlayerIndex2.line.valueOf() == "D")){
						randomPlayerIndex2 = team2[2][Math.floor(Math.random() * team2[2].length)];
					}
					
					/*add an assist*/
					for(var i=0; i<team2[2].length; i++){
						if(team2[2][i] == team2[2].indexOf(randomPlayerIndex2)){
							team2[2][i].assists++;
						}
					}
					
					var playerName2 = randomPlayerIndex2;
					playerName2.assists++;
					document.getElementById("simulation").innerHTML += ", " + playerName2.name + " (" + playerName2.assists + ")</p>";

					if(randomPlayerIndex > team2[2].length)
					{
						team2[2].push(playerName);
					}
					else
					{
						team2[2].splice(randomPlayerIndex, 0, playerName);
					}
					if(randomPlayerIndex1 > team2[2].length)
					{
						team2[2].push(playerName1);
					}
					else
					{
						team2[2].splice(randomPlayerIndex1, 0, playerName1);
					}
				}
				else
				{
					if(randomPlayerIndex > team2[2].length)
					{
						team2[2].push(playerName);
					}
					else
					{
						team2[2].splice((team2[2].length - 1), 0, playerName);
					}
				}
			document.getElementById("header-text").innerHTML = "<p>Projected Result (OT)</p>";
			document.getElementById("header-text").innerHTML += "<p>Non-participating players</p>";
			document.getElementById("header-text").innerHTML += "<p><b>"+team1[0].toUpperCase()+"</b></p>";
			if(team1injuries.length > 0) {
				document.getElementById("header-text").innerHTML += "<p>";
				for(var i=0; i<team1injuries.length; i++){
					document.getElementById("header-text").innerHTML += team1injuries[i]+"&nbsp;&nbsp;&nbsp;";
				}
				document.getElementById("header-text").innerHTML += "</p>";
			}
			else {
				document.getElementById("header-text").innerHTML += "<p>NONE</p>";
			}
			
			document.getElementById("header-text").innerHTML += "<p><b>"+team2[0].toUpperCase()+"</b></p>";
			if(team2injuries.length > 0) {
				document.getElementById("header-text").innerHTML += "<p>";
				for(var i=0; i<team2injuries.length; i++){
					document.getElementById("header-text").innerHTML += team2injuries[i]+"&nbsp;&nbsp;&nbsp;";
				}
				document.getElementById("header-text").innerHTML += "</p>";
			}
			else {
				document.getElementById("header-text").innerHTML += "<p>NONE</p>";
			}
			
			document.getElementById("header-text").innerHTML += "<ul><li>" + "<img src=\"" + team1[3] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[3] + "\"></img>" + "</li></ul></div>";
			document.getElementById("box-score").style.visibility = "visible";
			document.getElementById("box-score").innerHTML += "<h2>BOX SCORE</h2>";
			document.getElementById("box-score").innerHTML += "<h3>"+team1[5]+" "+team1[0].toUpperCase()+"</h3>";
			document.getElementById("box-score").innerHTML += "<table>";
			document.getElementById("box-score").innerHTML += "<br/>";
			for(var i=0; i<team1[2].length; i++){
				document.getElementById("box-score").innerHTML += "<tr><td>"+team1[2][i].name+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[2][i].goals+"</b> G</td>&emsp;&emsp;&emsp;<td><b>"+team1[2][i].assists+"</b> A &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+( team1[2][i].goals + team1[2][i].assists )+"</b> P</td></tr><br/>";
			}
			document.getElementById("box-score").innerHTML += "</table>";
			document.getElementById("box-score").innerHTML += "<br/><br/>";
			document.getElementById("box-score").innerHTML += "<h3>"+team2[5]+" "+team2[0].toUpperCase()+"</h3>";
			document.getElementById("box-score").innerHTML += "<table>";
			document.getElementById("box-score").innerHTML += "<br/>";
			for(var i=0; i<team2[2].length; i++){
				document.getElementById("box-score").innerHTML += "<tr><td>"+team2[2][i].name+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[2][i].goals+"</b> G</td>&emsp;&emsp;&emsp;<td><b>"+team2[2][i].assists+"</b> A &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+( team2[2][i].goals + team2[2][i].assists )+"</b> P</td></tr><br/>";
			}
			document.getElementById("box-score").innerHTML += "</table>";
			
			if(team1[1] > team2[1]){
				if(team1[6][0].state.valueOf() == "active"){
					winningGoalie = team1[6][0].name;
				}
				else{
					winningGoalie = team1[6][1].name;
				}
				if(team2[6][0].state.valueOf() == "active"){
					losingGoalie = team2[6][0].name;
				}
				else{
					losingGoalie = team2[6][1].name;
				}
				winner = team1[4];
				loser = team2[4];
			}
			else{
				if(team1[6][0].state.valueOf() == "active"){
					losingGoalie = team1[6][0].name;
				}
				else{
					losingGoalie = team1[6][1].name;
				}
				if(team2[6][0].state.valueOf() == "active"){
					winningGoalie = team2[6][0].name;
				}
				else{
					winningGoalie = team2[6][1].name;
				}
				winner = team2[4];
				loser = team1[4];
			}
			document.getElementById("box-score").innerHTML += "<br/><p><b>WINNING GOALIE</b>&nbsp;"+winningGoalie+" ("+winner+")&nbsp;&nbsp;&nbsp;&nbsp;<b>LOSING GOALIE</b>&nbsp;"+losingGoalie+" ("+loser+")</p>";
			
			document.getElementById("reset-btn").disabled = false;
	}
}

function shootout(team1, team2)
{
	document.getElementById("simulation").innerHTML += "<p><br/><b>SHOOTOUT</b></p>";
	var decisionMaker = Math.floor(Math.random() * 2);
	
	/*SHOOTOUT GOALS DO NOT COUNT TOWARDS OFFICIAL NHL STATISTICS*/
	if(decisionMaker == 0)
	{
		team1[1]++;
		document.getElementById("simulation").innerHTML += "<p>"+team1[4]+" wins the shootout</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result (Shootout)</p>";
			document.getElementById("header-text").innerHTML += "<p>Non-participating players</p>";
			document.getElementById("header-text").innerHTML += "<p><b>"+team1[0].toUpperCase()+"</b></p>";
			if(team1injuries.length > 0) {
				document.getElementById("header-text").innerHTML += "<p>";
				for(var i=0; i<team1injuries.length; i++){
					document.getElementById("header-text").innerHTML += team1injuries[i]+"&nbsp;&nbsp;&nbsp;";
				}
				document.getElementById("header-text").innerHTML += "</p>";
			}
			else {
				document.getElementById("header-text").innerHTML += "<p>NONE</p>";
			}
			
			document.getElementById("header-text").innerHTML += "<p><b>"+team2[0].toUpperCase()+"</b></p>";
			if(team2injuries.length > 0) {
				document.getElementById("header-text").innerHTML += "<p>";
				for(var i=0; i<team2injuries.length; i++){
					document.getElementById("header-text").innerHTML += team2injuries[i]+"&nbsp;&nbsp;&nbsp;";
				}
				document.getElementById("header-text").innerHTML += "</p>";
			}
			else {
				document.getElementById("header-text").innerHTML += "<p>NONE</p>";
			}
			
			document.getElementById("header-text").innerHTML += "<ul><li>" + "<img src=\"" + team1[3] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[3] + "\"></img>" + "</li></ul></div>";
			document.getElementById("box-score").style.visibility = "visible";
			document.getElementById("box-score").innerHTML += "<h2>BOX SCORE</h2>";
			document.getElementById("box-score").innerHTML += "<h3>"+team1[5]+" "+team1[0].toUpperCase()+"</h3>";
			document.getElementById("box-score").innerHTML += "<table>";
			document.getElementById("box-score").innerHTML += "<br/>";
			for(var i=0; i<team1[2].length; i++){
				document.getElementById("box-score").innerHTML += "<tr><td>"+team1[2][i].name+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[2][i].goals+"</b> G</td>&emsp;&emsp;&emsp;<td><b>"+team1[2][i].assists+"</b> A &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+( team1[2][i].goals + team1[2][i].assists )+"</b> P</td></tr><br/>";
			}
			document.getElementById("box-score").innerHTML += "</table>";
			document.getElementById("box-score").innerHTML += "<br/><br/>";
			document.getElementById("box-score").innerHTML += "<h3>"+team2[5]+" "+team2[0].toUpperCase()+"</h3>";
			document.getElementById("box-score").innerHTML += "<table>";
			document.getElementById("box-score").innerHTML += "<br/>";
			for(var i=0; i<team2[2].length; i++){
				document.getElementById("box-score").innerHTML += "<tr><td>"+team2[2][i].name+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[2][i].goals+"</b> G</td>&emsp;&emsp;&emsp;<td><b>"+team2[2][i].assists+"</b> A &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+( team2[2][i].goals + team2[2][i].assists )+"</b> P</td></tr><br/>";
			}
			document.getElementById("box-score").innerHTML += "</table>";
			
			if(team1[1] > team2[1]){
				if(team1[6][0].state.valueOf() == "active"){
					winningGoalie = team1[6][0].name;
				}
				else{
					winningGoalie = team1[6][1].name;
				}
				if(team2[6][0].state.valueOf() == "active"){
					losingGoalie = team2[6][0].name;
				}
				else{
					losingGoalie = team2[6][1].name;
				}
				winner = team1[4];
				loser = team2[4];
			}
			else{
				if(team1[6][0].state.valueOf() == "active"){
					losingGoalie = team1[6][0].name;
				}
				else{
					losingGoalie = team1[6][1].name;
				}
				if(team2[6][0].state.valueOf() == "active"){
					winningGoalie = team2[6][0].name;
				}
				else{
					winningGoalie = team2[6][1].name;
				}
				winner = team2[4];
				loser = team1[4];
			}
			document.getElementById("box-score").innerHTML += "<br/><p><b>WINNING GOALIE</b>&nbsp;"+winningGoalie+" ("+winner+")&nbsp;&nbsp;&nbsp;&nbsp;<b>LOSING GOALIE</b>&nbsp;"+losingGoalie+" ("+loser+")</p>";
			
			document.getElementById("reset-btn").disabled = false;
	}
	else
	{
		team2[1]++;
		document.getElementById("simulation").innerHTML += "<p>"+team2[4]+" wins the shootout</p>";
		document.getElementById("header-text").innerHTML = "<p>Projected Result (Shootout)</p>";
			document.getElementById("header-text").innerHTML += "<p>Non-participating players</p>";
			document.getElementById("header-text").innerHTML += "<p><b>"+team1[0].toUpperCase()+"</b></p>";
			if(team1injuries.length > 0) {
				document.getElementById("header-text").innerHTML += "<p>";
				for(var i=0; i<team1injuries.length; i++){
					document.getElementById("header-text").innerHTML += team1injuries[i]+"&nbsp;&nbsp;&nbsp;";
				}
				document.getElementById("header-text").innerHTML += "</p>";
			}
			else {
				document.getElementById("header-text").innerHTML += "<p>NONE</p>";
			}
			
			document.getElementById("header-text").innerHTML += "<p><b>"+team2[0].toUpperCase()+"</b></p>";
			if(team2injuries.length > 0) {
				document.getElementById("header-text").innerHTML += "<p>";
				for(var i=0; i<team2injuries.length; i++){
					document.getElementById("header-text").innerHTML += team2injuries[i]+"&nbsp;&nbsp;&nbsp;";
				}
				document.getElementById("header-text").innerHTML += "</p>";
			}
			else {
				document.getElementById("header-text").innerHTML += "<p>NONE</p>";
			}
			
			document.getElementById("header-text").innerHTML += "<ul><li>" + "<img src=\"" + team1[3] + "\"></img>" + "</li><li>" + team1[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
															"<li>" + team2[0].toUpperCase() + "<h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[3] + "\"></img>" + "</li></ul></div>";
			document.getElementById("box-score").style.visibility = "visible";
			document.getElementById("box-score").innerHTML += "<h2>BOX SCORE</h2>";
			document.getElementById("box-score").innerHTML += "<h3>"+team1[5]+" "+team1[0].toUpperCase()+"</h3>";
			document.getElementById("box-score").innerHTML += "<table>";
			document.getElementById("box-score").innerHTML += "<br/>";
			for(var i=0; i<team1[2].length; i++){
				document.getElementById("box-score").innerHTML += "<tr><td>"+team1[2][i].name+"</td>&emsp;&emsp;&emsp;<td><b>"+team1[2][i].goals+"</b> G</td>&emsp;&emsp;&emsp;<td><b>"+team1[2][i].assists+"</b> A &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+( team1[2][i].goals + team1[2][i].assists )+"</b> P</td></tr><br/>";
			}
			document.getElementById("box-score").innerHTML += "</table>";
			document.getElementById("box-score").innerHTML += "<br/><br/>";
			document.getElementById("box-score").innerHTML += "<h3>"+team2[5]+" "+team2[0].toUpperCase()+"</h3>";
			document.getElementById("box-score").innerHTML += "<table>";
			document.getElementById("box-score").innerHTML += "<br/>";
			for(var i=0; i<team2[2].length; i++){
				document.getElementById("box-score").innerHTML += "<tr><td>"+team2[2][i].name+"</td>&emsp;&emsp;&emsp;<td><b>"+team2[2][i].goals+"</b> G</td>&emsp;&emsp;&emsp;<td><b>"+team2[2][i].assists+"</b> A &#9654;</td>&emsp;&emsp;&emsp;<td><b>"+( team2[2][i].goals + team2[2][i].assists )+"</b> P</td></tr><br/>";
			}
			document.getElementById("box-score").innerHTML += "</table>";
			
			if(team1[1] > team2[1]){
				if(team1[6][0].state.valueOf() == "active"){
					winningGoalie = team1[6][0].name;
				}
				else{
					winningGoalie = team1[6][1].name;
				}
				if(team2[6][0].state.valueOf() == "active"){
					losingGoalie = team2[6][0].name;
				}
				else{
					losingGoalie = team2[6][1].name;
				}
				winner = team1[4];
				loser = team2[4];
			}
			else{
				if(team1[6][0].state.valueOf() == "active"){
					losingGoalie = team1[6][0].name;
				}
				else{
					losingGoalie = team1[6][1].name;
				}
				if(team2[6][0].state.valueOf() == "active"){
					winningGoalie = team2[6][0].name;
				}
				else{
					winningGoalie = team2[6][1].name;
				}
				winner = team2[4];
				loser = team1[4];
			}
			document.getElementById("box-score").innerHTML += "<br/><p><b>WINNING GOALIE</b>&nbsp;"+winningGoalie+" ("+winner+")&nbsp;&nbsp;&nbsp;&nbsp;<b>LOSING GOALIE</b>&nbsp;"+losingGoalie+" ("+loser+")</p>";
			
			document.getElementById("reset-btn").disabled = false;
	}
}

function resume1(){
	document.getElementById("header-text").innerHTML = "<p>Select Team 2 (Home)</p>";
}

function resume2(){
	injuryReport(team1, team2);
}

function injuryReport(team1, team2){
	document.getElementById("injury-report").style.visibility = "visible";
	document.getElementById("team1").placeholder = "Away team: " + team1[0].toUpperCase();
	document.getElementById("team2").placeholder = "Home team: " + team2[0].toUpperCase();
	
	document.getElementById("welcome-to-the-game").style.visibility = "visible";
	document.getElementById("awayNHLTeam").style.visibility = "visible";
	document.getElementById("homeNHLTeam").style.visibility = "visible";
	document.getElementById("injury-submit").style.visibility = "visible";
	
	document.getElementById("welcome-to-the-game").innerHTML = "<p></p>";
	document.getElementById("awayTeam").innerHTML = "<p>"+team1[5].toUpperCase()+" "+team1[0].toUpperCase()+"</p>";
	document.getElementById("homeTeam").innerHTML = "<p>"+team2[5].toUpperCase()+" "+team2[0].toUpperCase()+"</p>";
	
	document.getElementById("team1qb1").innerHTML = "<p>Click <b>1</b> to name <b>"+team1[6][0].name+"</b> your starting goalie. &nbsp;&nbsp;</p>";
	document.getElementById("team1qb2").innerHTML = "<p>Click <b>2</b> to name <b>"+team1[6][1].name+"</b> your starting goalie. &nbsp;&nbsp;</p>";
	document.getElementById("team2qb1").innerHTML = "<p>Click <b>1</b> to name <b>"+team2[6][0].name+"</b> your starting goalie. &nbsp;&nbsp;</p>";
	document.getElementById("team2qb2").innerHTML = "<p>Click <b>2</b> to name <b>"+team2[6][1].name+"</b> your starting goalie. &nbsp;&nbsp;</p>";
	
	document.getElementById("awayqb1").disabled = false;
	document.getElementById("awayqb2").disabled = false;
	document.getElementById("homeqb1").disabled = false;
	document.getElementById("homeqb2").disabled = false;
	
	addEvent(document.getElementById("awayqb1"), "click", awayqb1);
	addEvent(document.getElementById("awayqb2"), "click", awayqb2);
	addEvent(document.getElementById("homeqb1"), "click", homeqb1);
	addEvent(document.getElementById("homeqb2"), "click", homeqb2);
	
	addEvent(document.getElementById("injury-submit"), "click", injurySubmit);
}

function injurySubmit(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	if(document.getElementById("team1").value.valueOf() == ""){
		team1injuries = [];
	}
	else {
		team1injuries = document.getElementById("team1").value.split("\n");
	}
	if(document.getElementById("team2").value.valueOf() == ""){
		team2injuries = [];
	}
	else {
		team2injuries = document.getElementById("team2").value.split("\n");
	}
	
	for(var i=0; i<team1injuries.length; i++){
		for(var j=0; j<team1[2].length; j++){
			if(team1injuries[i].valueOf().toLowerCase() == team1[2][j].name.toLowerCase()){
				team1[2][j].state = "out";
				team1[2].splice(j, 1);
			}
		}
	}
	for(var i=0; i<team2injuries.length; i++){
		for(var j=0; j<team2[2].length; j++){
			if(team2injuries[i].valueOf().toLowerCase() == team2[2][j].name.toLowerCase()){
				team2[2][j].state = "out";
				team2[2].splice(j, 1);
			}
		}
	}
	
	document.getElementById("injury-report").style.visibility = "hidden";
	document.getElementById("welcome-to-the-game").style.visibility = "hidden";
	document.getElementById("awayNHLTeam").style.visibility = "hidden";
	document.getElementById("homeNHLTeam").style.visibility = "hidden";
	document.getElementById("injury-submit").disabled = true;
	firstPeriod(team1, team2);
}

function awayqb1(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("header-text").innerHTML = "<p>"+team1[4]+" has named "+team1[6][0].name+" their starting goalie</p>";
	team1[6][0].state = "active";
	
	document.getElementById("awayqb1").disabled = true;
	document.getElementById("awayqb2").disabled = true;
	
	if((team1[6][0].state.valueOf() == "active" || team1[6][1].state.valueOf() == "active") && (team2[6][0].state.valueOf() == "active" || team2[6][1].state.valueOf() == "active")){
		document.getElementById("injury-submit").disabled = false;
	}
}

function awayqb2(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("header-text").innerHTML = "<p>"+team1[4]+" has named "+team1[6][1].name+" their starting goalie</p>";
	team1[6][1].state = "active";
	
	document.getElementById("awayqb1").disabled = true;
	document.getElementById("awayqb2").disabled = true;
	
	if((team1[6][0].state.valueOf() == "active" || team1[6][1].state.valueOf() == "active") && (team2[6][0].state.valueOf() == "active" || team2[6][1].state.valueOf() == "active")){
		document.getElementById("injury-submit").disabled = false;
	}
}

function homeqb1(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("header-text").innerHTML = "<p>"+team2[4]+" has named "+team2[6][0].name+" their starting goalie</p>";
	team2[6][0].state = "active";
	
	document.getElementById("homeqb1").disabled = true;
	document.getElementById("homeqb2").disabled = true;
	
	if((team1[6][0].state.valueOf() == "active" || team1[6][1].state.valueOf() == "active") && (team2[6][0].state.valueOf() == "active" || team2[6][1].state.valueOf() == "active")){
		document.getElementById("injury-submit").disabled = false;
	}
}

function homeqb2(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("header-text").innerHTML = "<p>"+team2[4]+" has named "+team2[6][1].name+" their starting goalie</p>";
	team2[6][1].state = "active";
	
	document.getElementById("homeqb1").disabled = true;
	document.getElementById("homeqb2").disabled = true;
	
	if((team1[6][0].state.valueOf() == "active" || team1[6][1].state.valueOf() == "active") && (team2[6][0].state.valueOf() == "active" || team2[6][1].state.valueOf() == "active")){
		document.getElementById("injury-submit").disabled = false;
	}
}

window.onload = init;

/*SCORING VARIABLES*/
/*DO NOT DECLARE VALUES DOWN HERE*/
var team1;
var team2;
var teamButtons;
var ducks, coyotes, bruins, sabres, flames, hurricanes, 
	blackhawks, avalanche, bluejackets, stars, redwings, 
	oilers, panthers, kings, wild, canadiens, predators, 
	devils, islanders, rangers, senators, flyers, 
	penguins, sharks, kraken, blues, lightning, mapleleafs, 
	canucks, goldenknights, capitals, jets;
var ANAgoalies, ARIgoalies, BOSgoalies, BUFgoalies, CGYgoalies, CARgoalies, CHIgoalies, COLgoalies, CBJgoalies, DALgoalies, DETgoalies,
	EDMgoalies, FLAgoalies, LAgoalies, MINgoalies, MTLgoalies, NSHgoalies, NJgoalies, NYIgoalies, NYRgoalies, OTTgoalies, PHIgoalies,
	PITgoalies, SJgoalies, SEAgoalies, STLgoalies, TBgoalies, TORgoalies, VANgoalies, VGKgoalies, WSHgoalies, WPGgoalies;
var team1injuries, team2injuries;

/*PLAYERS ON THE FIRST LINE ARE MOST LIKELY TO SCORE GOALS. 1-5: LINE 1, 6-7: LINE 2, 8: LINE 3, 9: LINE 4, 10: DEFENSE*/
var random1to20;

/*MUSIC PLAYLIST*/
var bgMusic;
var musicPlaylist;
var song;
var songTime;
var songPicker;

var winningGoalie, losingGoalie;
var winner, loser;
