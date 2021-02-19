function init(){
	ducks = [ {name: "Andrew Agozzino", goals: 0, assists: 0,  state: "active"},  
	{name: "David Backes", goals: 0, assists: 0,  state: "active"},  
	{name: "Michael Del Zotto", goals: 0, assists: 0,  state: "active"},  
	{name: "Nicolas Deslauriers", goals: 0, assists: 0,  state: "active"},  
	{name: "Christian Djoos", goals: 0, assists: 0,  state: "active"},  
	{name: "Patrick Eaves", goals: 0, assists: 0,  state: "active"},  
	{name: "Cam Fowler", goals: 0, assists: 0,  state: "active"},  
	{name: "Ryan Getzlaf", goals: 0, assists: 0,  state: "active"},  
	{name: "Erik Gudbranson", goals: 0, assists: 0,  state: "active"}, 
	{name: "Danton Heinen", goals: 0, assists: 0,  state: "active"},  
	{name: "Adam Henrique", goals: 0, assists: 0,  state: "active"},  
	{name: "Matt Irwin", goals: 0, assists: 0,  state: "active"},  
	{name: "Max Jones", goals: 0, assists: 0,  state: "active"},  
	{name: "Ryan Kesler", goals: 0, assists: 0,  state: "active"},  
	{name: "Jacob Larsson", goals: 0, assists: 0,  state: "active"},  
	{name: "Hampus Lindholm", goals: 0, assists: 0,  state: "active"},  
	{name: "Josh Manson", goals: 0, assists: 0,  state: "active"},  
	{name: "Sonny Milano", goals: 0, assists: 0,  state: "active"},  
	{name: "Rickard Rakell", goals: 0, assists: 0,  state: "active"}, 
	{name: "Carter Rowney", goals: 0, assists: 0,  state: "active"},  
	{name: "Jakob Silfverberg", goals: 0, assists: 0,  state: "active"},  
	{name: "Sam Steel", goals: 0, assists: 0,  state: "active"} ];	
	
	coyotes = [ {name: "Kyle Capobianco", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Jakob Chychrun", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Jason Demers", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Oliver Ekman-Larsson", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Alex Goligoski", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Jordan Gross", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Niklas Hjalmarsson", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Ilya Lyubushkin", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Aaron Ness", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Jordan Oesterle", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Michael Chaput", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Christian Dvorak", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Barrett Hayton", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Brad Richardson", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Nick Schmaltz", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Carl Soderberg", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Derek Stepan", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Vinnie Hinostroza", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Brayden Burke", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Lawson Crouse", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Taylor Hall", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Clayton Keller", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Hudson Fasching", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Christian Fischer", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Conor Garland", goals: 0, assists: 0,  state: "active"}, 
	{name:  
	"Michael Grabner", goals: 0, assists: 0,  state: "active"}, 
	{name: 
	"Phil Kessel", goals: 0, assists: 0,  state: "active"} ];
			
	bruins = [ {name: "Brandon Carlo", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zdeno Chara", goals: 0, assists: 0,  state: "active"}, {name:  
	"Connor Clifton", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matt Grzelcyk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Torey Krug", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jeremy Lauzon", goals: 0, assists: 0,  state: "active"}, {name:  
	"Charlie McAvoy", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kevan Miller", goals: 0, assists: 0,  state: "active"}, {name:  
	"John Moore", goals: 0, assists: 0,  state: "active"}, {name:  
	"Urho Vaakanainen", goals: 0, assists: 0,  state: "active"}, {name: 
	"Patrice Bergeron", goals: 0, assists: 0,  state: "active"}, {name:  
	"Charlie Coyle", goals: 0, assists: 0,  state: "active"}, {name:  
	"Trent Frederic", goals: 0, assists: 0,  state: "active"}, {name:  
	"David Krejci", goals: 0, assists: 0,  state: "active"}, {name:  
	"Karson Kuhlman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sean Kuraly", goals: 0, assists: 0,  state: "active"}, {name:  
	"Par Lindholm", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joakim Nordstrom", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jack Studnicka", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anders Bjork", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jake DeBrusk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brad Marchand", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Ritchie", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ondrej Kase", goals: 0, assists: 0,  state: "active"}, {name:  
	"David Pastrnak", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zachary Senyshyn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Chris Wagner", goals: 0, assists: 0,  state: "active"} ];
			
	sabres = [ {name: "Rasmus Dahlin", goals: 0, assists: 0,  state: "active"}, {name:  
	"John Gilmour", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matt Hunwick", goals: 0, assists: 0,  state: "active"}, {name:  
	"Henri Jokiharju", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jake McCabe", goals: 0, assists: 0,  state: "active"}, {name:  
	"Colin Miller", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brandon Montour", goals: 0, assists: 0,  state: "active"}, {name:  
	"Rasmus Ristolainen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jack Eichel", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zemgus Girgensons", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dominik Kahun", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sam Reinhart", goals: 0, assists: 0,  state: "active"}, {name:  
	"Vladimir Sobotka", goals: 0, assists: 0,  state: "active"}, {name:  
	"Eric Staal", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tage Thompson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Johan Larsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Victor Olofsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jeff Skinner", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jimmy Vesey", goals: 0, assists: 0,  state: "active"}, {name:  
	"Michael Frolik", goals: 0, assists: 0,  state: "active"}, {name:  
	"Curtis Lazar", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kyle Okposo", goals: 0, assists: 0,  state: "active"}, {name:  
	"Wayne Simmonds", goals: 0, assists: 0,  state: "active"} ];
			
	flames = [ {name: "Rasmus Andersson", goals: 0, assists: 0,  state: "active"}, {name:  
	"T. J. Brodie", goals: 0, assists: 0,  state: "active"}, {name:  
	"Derek Forbort", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mark Giordano", goals: 0, assists: 0,  state: "active"}, {name:  
	"Erik Gustafsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Travis Hamonic", goals: 0, assists: 0,  state: "active"}, {name:  
	"Noah Hanifin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Oliver Kylington", goals: 0, assists: 0,  state: "active"}, {name:  
	"Michael Stone", goals: 0, assists: 0,  state: "active"}, {name:  
	"Juuso Valimaki", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexander Yelesin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mikael Backlund", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sam Bennett", goals: 0, assists: 0,  state: "active"}, {name:  
	"Austin Czarnik", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dillon Dube", goals: 0, assists: 0,  state: "active"}, {name:  
	"Byron Froese", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mark Jankowski", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sean Monahan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alan Quine", goals: 0, assists: 0,  state: "active"}, {name:  
	"Derek Ryan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Johnny Gaudreau", goals: 0, assists: 0,  state: "active"}, {name:  
	"Milan Lucic", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andrew Mangiapane", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tobias Rieder", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zac Rinaldo", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matthew Tkachuk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Elias Lindholm", goals: 0, assists: 0,  state: "active"}, {name:  
	"Buddy Robinson", goals: 0, assists: 0,  state: "active"} ];
			
	hurricanes = [ {name: "Jake Bean", goals: 0, assists: 0,  state: "active"}, {name:  
	"Haydn Fleury", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jake Gardiner", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dougie Hamilton", goals: 0, assists: 0,  state: "active"}, {name:  
	"Roland McKeown", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brett Pesce", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brady Skjei", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jaccob Slavin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Trevor van Riemsdyk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sami Vatanen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sebastian Aho", goals: 0, assists: 0,  state: "active"}, {name:  
	"Morgan Geekie", goals: 0, assists: 0,  state: "active"}, {name:  
	"Steven Lorentz", goals: 0, assists: 0,  state: "active"}, {name:  
	"Martin Necas", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jordan Staal", goals: 0, assists: 0,  state: "active"}, {name:  
	"Vincent Trocheck", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Dzingel", goals: 0, assists: 0,  state: "active"}, {name:  
	"Warren Foegele", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jordan Martinook", goals: 0, assists: 0,  state: "active"}, {name:  
	"Max McCormick", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brock McGinn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Teuvo Teravainen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nino Niederreiter", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andrei Svechnikov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Justin Williams", goals: 0, assists: 0,  state: "active"} ];
			
	blackhawks = [ {name: "Nicolas Beaudin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Adam Boqvist", goals: 0, assists: 0,  state: "active"}, {name:  
	"Lucas Carlsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Calvin de Haan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Duncan Keith", goals: 0, assists: 0,  state: "active"}, {name:  
	"Slater Koekkoek", goals: 0, assists: 0,  state: "active"}, {name:  
	"Olli Maatta", goals: 0, assists: 0,  state: "active"}, {name:  
	"Connor Murphy", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alec Regula", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brent Seabrook", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Seeler", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kirby Dach", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matthew Highmore", goals: 0, assists: 0,  state: "active"}, {name:  
	"David Kampf", goals: 0, assists: 0,  state: "active"}, {name:  
	"Philipp Kurashev", goals: 0, assists: 0,  state: "active"}, {name:  
	"John Quenneville", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dylan Sikura", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dylan Strome", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jonathan Toews", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zack Smith", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Carpenter", goals: 0, assists: 0,  state: "active"}, {name:  
	"Drake Caggiula", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brandon Hagel", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dominik Kubalik", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexander Nylander", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brandon Saad", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alex DeBrincat", goals: 0, assists: 0,  state: "active"}, {name: 
	"MacKenzie Entwistle", goals: 0, assists: 0,  state: "active"}, {name:  
	"Patrick Kane", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andrew Shaw", goals: 0, assists: 0,  state: "active"} ];
				
	avalanche = [ {name: "Bowen Byram", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ian Cole", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kevin Connauton", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sam Girard", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Graves", goals: 0, assists: 0,  state: "active"}, {name:  
	"Erik Johnson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anton Lindholm", goals: 0, assists: 0,  state: "active"}, {name:  
	"Cale Makar", goals: 0, assists: 0,  state: "active"}, {name:  
	"Conor Timmins", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nikita Zadorov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Pierre-Edouard Bellemare", goals: 0, assists: 0,  state: "active"}, {name:  
	"Shane Bowers", goals: 0, assists: 0,  state: "active"}, {name:  
	"J. T. Compher", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sheldon Dries", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyson Jost", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nazem Kadri", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nathan MacKinnon", goals: 0, assists: 0,  state: "active"}, {name:  
	"Vladislav Namestnikov", goals: 0, assists: 0,  state: "active"}, {name:  
	"T. J. Tynan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andre Burakovsky", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matt Calvert", goals: 0, assists: 0,  state: "active"}, {name:  
	"Gabriel Landeskog", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matt Nieto", goals: 0, assists: 0,  state: "active"}, {name:  
	"Colin Wilson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joonas Donskoi", goals: 0, assists: 0,  state: "active"}, {name:  
	"Valeri Nichushkin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Logan O&#39;Connor", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mikko Rantanen", goals: 0, assists: 0,  state: "active"} ];
				
	bluejackets = [ {name: "Gabriel Carlsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Adam Clendening", goals: 0, assists: 0,  state: "active"}, {name:  
	"Vladislav Gavrikov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Scott Harrington", goals: 0, assists: 0,  state: "active"}, {name:  
	"Seth Jones", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dean Kukan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Murray", goals: 0, assists: 0,  state: "active"}, {name:  
	"Markus Nutivaara", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andrew Peeke", goals: 0, assists: 0,  state: "active"}, {name:  
	"David Savard", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zach Werenski", goals: 0, assists: 0,  state: "active"}, {name:  
	"Pierre-Luc Dubois", goals: 0, assists: 0,  state: "active"}, {name:  
	"Liam Foudy", goals: 0, assists: 0,  state: "active"}, {name:  
	"Boone Jenner", goals: 0, assists: 0,  state: "active"}, {name:  
	"Riley Nash", goals: 0, assists: 0,  state: "active"}, {name:  
	"Devin Shore", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kevin Stenlund", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexandre Texier", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexander Wennberg", goals: 0, assists: 0,  state: "active"}, {name: 
	"Brandon Dubinsky", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Foligno", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nathan Gerbe", goals: 0, assists: 0,  state: "active"}, {name:  
	"Stefan Matteau", goals: 0, assists: 0,  state: "active"}, {name:  
	"Gustav Nyquist", goals: 0, assists: 0,  state: "active"}, {name:  
	"Eric Robinson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Josh Anderson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Cam Atkinson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Emil Bemstrom", goals: 0, assists: 0,  state: "active"}, {name:  
	"Oliver Bjorkstrand", goals: 0, assists: 0,  state: "active"} ];
	
	stars = [ {name: "Gavin Bayreuther", goals: 0, assists: 0,  state: "active"}, {name:  
	"Taylor Fedun", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joel Hanley", goals: 0, assists: 0,  state: "active"}, {name:  
	"Thomas Harley", goals: 0, assists: 0,  state: "active"}, {name:  
	"Miro Heiskanen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Stephen Johns", goals: 0, assists: 0,  state: "active"}, {name:  
	"John Klingberg", goals: 0, assists: 0,  state: "active"}, {name:  
	"Esa Lindell", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jamie Oleksiak", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andrej Sekera", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ty Dellandrea", goals: 0, assists: 0,  state: "active"}, {name:  
	"Justin Dowling", goals: 0, assists: 0,  state: "active"}, {name:  
	"Radek Faksa", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Seguin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jason Dickinson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Roope Hintz", goals: 0, assists: 0,  state: "active"}, {name:  
	"Blake Comeau", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jamie Benn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andrew Cogliano", goals: 0, assists: 0,  state: "active"}, {name:  
	"Denis Gurianov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mattias Janmark", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joel Kiviranta", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jason Robertson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Caamano", goals: 0, assists: 0,  state: "active"}, {name:  
	"Corey Perry", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexander Radulov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joe Pavelski", goals: 0, assists: 0,  state: "active"} ];
			
	redwings = [ {name: "Alex Biega", goals: 0, assists: 0,  state: "active"}, {name:  
	"Madison Bowey", goals: 0, assists: 0,  state: "active"}, {name:  
	"Trevor Daley", goals: 0, assists: 0,  state: "active"}, {name:  
	"Danny DeKeyser", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jonathan Ericsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Cody Goloubef", goals: 0, assists: 0,  state: "active"}, {name:  
	"Patrik Nemeth", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kyle Brodziak", goals: 0, assists: 0,  state: "active"}, {name:  
	"Christoffer Ehn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Robby Fabbri", goals: 0, assists: 0,  state: "active"}, {name: 
	"Valtteri Filppula", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sam Gagner", goals: 0, assists: 0,  state: "active"}, {name:  
	"Luke Glendening", goals: 0, assists: 0,  state: "active"}, {name:  
	"Darren Helm", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dylan Larkin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Frans Nielsen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Justin Abdelkader", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Bertuzzi", goals: 0, assists: 0,  state: "active"}, {name:  
	"Adam Erne", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brendan Perlini", goals: 0, assists: 0,  state: "active"}, {name: 
	"Dmytro Timashov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anthony Mantha", goals: 0, assists: 0,  state: "active"} ];
			
	oilers = [ {name: "Ethan Bear", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matt Benning", goals: 0, assists: 0,  state: "active"}, {name:  
	"Evan Bouchard", goals: 0, assists: 0,  state: "active"}, {name:  
	"Philip Broberg", goals: 0, assists: 0,  state: "active"}, {name:  
	"Caleb Jones", goals: 0, assists: 0,  state: "active"}, {name:  
	"Oscar Klefbom", goals: 0, assists: 0,  state: "active"}, {name:  
	"William Lagesson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Adam Larsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Darnell Nurse", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kris Russell", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andreas Athanasiou", goals: 0, assists: 0,  state: "active"}, {name:  
	"Leon Draisaitl", goals: 0, assists: 0,  state: "active"}, {name:  
	"Gaetan Haas", goals: 0, assists: 0,  state: "active"}, {name:  
	"Cooper Marody", goals: 0, assists: 0,  state: "active"}, {name:  
	"Connor McDavid", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan McLeod", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Nugent-Hopkins", goals: 0, assists: 0,  state: "active"}, {name:  
	"Riley Sheahan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Benson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Ennis", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jujhar Khaira", goals: 0, assists: 0,  state: "active"}, {name:  
	"James Neal", goals: 0, assists: 0,  state: "active"}, {name:  
	"Josh Archibald", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alex Chiasson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zack Kassian", goals: 0, assists: 0,  state: "active"}, {name:  
	"Patrick Russell", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kailer Yamamoto", goals: 0, assists: 0,  state: "active"} ];
			
	panthers = [ {name: "Josh Brown", goals: 0, assists: 0,  state: "active"}, {name:  
	"Aaron Ekblad", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brady Keeper", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mike Matheson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Chase Priskie", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mark Pysyk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Riley Stillman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anton Stralman", goals: 0, assists: 0,  state: "active"}, {name:  
	"MacKenzie Weegar", goals: 0, assists: 0,  state: "active"}, {name:  
	"Keith Yandle", goals: 0, assists: 0,  state: "active"}, {name:  
	"Noel Acciari", goals: 0, assists: 0,  state: "active"}, {name:  
	"Aleksander Barkov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brian Boyle", goals: 0, assists: 0,  state: "active"}, {name:  
	"Colton Sceviour", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dominic Toninato", goals: 0, assists: 0,  state: "active"}, {name:  
	"Frank Vatrano", goals: 0, assists: 0,  state: "active"}, {name:  
	"Lucas Wallmark", goals: 0, assists: 0,  state: "active"}, {name:  
	"Evgenii Dadonov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Erik Haula", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mike Hoffman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jonathan Huberdeau", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dryden Hunt", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brett Connolly", goals: 0, assists: 0,  state: "active"}, {name:  
	"Owen Tippett", goals: 0, assists: 0,  state: "active"} ];
			
	kings = [ {name: "Mikey Anderson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Drew Doughty", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ben Hutton", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kurtis MacDermid", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matt Roy", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joakim Ryan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sean Walker", goals: 0, assists: 0,  state: "active"}, {name:  
	"Michael Amadio", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anze Kopitar", goals: 0, assists: 0,  state: "active"}, {name:  
	"Blake Lizotte", goals: 0, assists: 0,  state: "active"}, {name:  
	"Gabriel Vilardi", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jeff Carter", goals: 0, assists: 0,  state: "active"}, {name:  
	"Trevor Lewis", goals: 0, assists: 0,  state: "active"}, {name:  
	"Adrian Kempe", goals: 0, assists: 0,  state: "active"}, {name:  
	"Trevor Moore", goals: 0, assists: 0,  state: "active"}, {name:  
	"Austin Wagner", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alex Iafallo", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dustin Brown", goals: 0, assists: 0,  state: "active"}, {name:  
	"Martin Frk", goals: 0, assists: 0,  state: "active"} ];
			
	wild = [ {name: "Matt Bartkowski", goals: 0, assists: 0,  state: "active"}, {name:  
	"Louie Belpedio", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jonas Brodin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matt Dumba", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brad Hunt", goals: 0, assists: 0,  state: "active"}, {name:  
	"Greg Pateryn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Carson Soucy", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jared Spurgeon", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Suter", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Bjugstad", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Donato", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joel Eriksson Ek", goals: 0, assists: 0,  state: "active"}, {name:  
	"Luke Johnson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mikko Koivu", goals: 0, assists: 0,  state: "active"}, {name:  
	"Luke Kunin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Victor Rask", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kyle Rau", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nico Sturm", goals: 0, assists: 0,  state: "active"}, {name:  
	"Marcus Foligno", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jordan Greenway", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zach Parise", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alex Galchenyuk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Marcus Johansson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kevin Fiala", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Hartman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Gerald Mayhew", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mats Zuccarello", goals: 0, assists: 0,  state: "active"} ];

	canadiens = [ {name: "Ben Chiarot", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joel Edmundson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Cale Fleury", goals: 0, assists: 0,  state: "active"}, {name:  
	"Christian Folin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Noah Juulsen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brett Kulak", goals: 0, assists: 0,  state: "active"}, {name:  
	"Victor Mete", goals: 0, assists: 0,  state: "active"}, {name:  
	"Gustav Olofsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Xavier Ouellet", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jeff Petry", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexander Romanov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Shea Weber", goals: 0, assists: 0,  state: "active"}, {name:  
	"Phillip Danault", goals: 0, assists: 0,  state: "active"}, {name:  
	"Max Domi", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jake Evans", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jesperi Kotkaniemi", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Poehling", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Suzuki", goals: 0, assists: 0,  state: "active"}, {name: 
	"Jordan Weal", goals: 0, assists: 0,  state: "active"}, {name:  
	"Paul Byron", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jonathan Drouin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Charles Hudon", goals: 0, assists: 0,  state: "active"}, {name:  
	"Artturi Lehkonen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tomas Tatar", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joel Armia", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alex Belzile", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brendan Gallagher", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dale Weise", goals: 0, assists: 0,  state: "active"} ];
			
	predators = [ {name: "Alexandre Carrier", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mattias Ekholm", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Ellis", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dante Fabbro", goals: 0, assists: 0,  state: "active"}, {name:  
	"Korbinian Holzer", goals: 0, assists: 0,  state: "active"}, {name:  
	"Roman Josi", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jarred Tinordi", goals: 0, assists: 0,  state: "active"}, {name:  
	"Yannick Weber", goals: 0, assists: 0,  state: "active"}, {name:  
	"Colin Blackwell", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Bonino", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matt Duchene", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mikael Granlund", goals: 0, assists: 0,  state: "active"}, {name:  
	"Rocco Grimaldi", goals: 0, assists: 0,  state: "active"}, {name:  
	"Calle Jarnkrok", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Johansen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Michael McCarron", goals: 0, assists: 0,  state: "active"}, {name:  
	"Colton Sissons", goals: 0, assists: 0,  state: "active"}, {name:  
	"Yakov Trenin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kyle Turris", goals: 0, assists: 0,  state: "active"}, {name:  
	"Viktor Arvidsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Filip Forsberg", goals: 0, assists: 0,  state: "active"}, {name:  
	"Austin Watson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Craig Smith", goals: 0, assists: 0,  state: "active"} ];
			
	devils = [ {name: "Will Butcher", goals: 0, assists: 0,  state: "active"}, {name:  
	"Connor Carrick", goals: 0, assists: 0,  state: "active"}, {name:  
	"Fredrik Claesson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dakota Mermis", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mirco Mueller", goals: 0, assists: 0,  state: "active"}, {name:  
	"Damon Severson", goals: 0, assists: 0,  state: "active"}, {name:  
	"P. K. Subban", goals: 0, assists: 0,  state: "active"}, {name:  
	"John Hayden", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nico Hischier", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jack Hughes", goals: 0, assists: 0,  state: "active"}, {name:  
	"Janne Kuokkanen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Michael McLeod", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kevin Rooney", goals: 0, assists: 0,  state: "active"}, {name:  
	"Pavel Zacha", goals: 0, assists: 0,  state: "active"}, {name:  
	"Travis Zajac", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jesper Bratt", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nikita Gusev", goals: 0, assists: 0,  state: "active"}, {name:  
	"Miles Wood", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joey Anderson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kyle Palmieri", goals: 0, assists: 0,  state: "active"} ];
	
	islanders = [ {name: "Sebastian Aho", goals: 0, assists: 0,  state: "active"}, {name:  
	"Johnny Boychuk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Noah Dobson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andy Greene", goals: 0, assists: 0,  state: "active"}, {name:  
	"Thomas Hickey", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Leddy", goals: 0, assists: 0,  state: "active"}, {name:  
	"Scott Mayfield", goals: 0, assists: 0,  state: "active"}, {name:  
	"Adam Pelech", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Pulock", goals: 0, assists: 0,  state: "active"}, {name:  
	"Devon Toews", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mathew Barzal", goals: 0, assists: 0,  state: "active"}, {name:  
	"Derick Brassard", goals: 0, assists: 0,  state: "active"}, {name:  
	"Casey Cizikas", goals: 0, assists: 0,  state: "active"}, {name:  
	"Leo Komarov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jean-Gabriel Pageau", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anthony Beauvillier", goals: 0, assists: 0,  state: "active"}, {name:  
	"Michael Dal Colle", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ross Johnston", goals: 0, assists: 0,  state: "active"}, {name:  
	"Otto Koivula", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tom Kuhnhackl", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andrew Ladd", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anders Lee", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matt Martin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brock Nelson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Josh Bailey", goals: 0, assists: 0,  state: "active"}, {name:  
	"Cal Clutterbuck", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jordan Eberle", goals: 0, assists: 0,  state: "active"} ];
			
	rangers = [ {name: "Brandon Crawley", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tony DeAngelo", goals: 0, assists: 0,  state: "active"}, {name:  
	"Adam Fox", goals: 0, assists: 0,  state: "active"}, {name:  
	"Libor Hajek", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Lindgren", goals: 0, assists: 0,  state: "active"}, {name:  
	"Darren Raddysh", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brendan Smith", goals: 0, assists: 0,  state: "active"}, {name:  
	"Marc Staal", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jacob Trouba", goals: 0, assists: 0,  state: "active"}, {name:  
	"Filip Chytil", goals: 0, assists: 0,  state: "active"}, {name:  
	"Steven Fogarty", goals: 0, assists: 0,  state: "active"}, {name:  
	"Micheal Haley", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brett Howden", goals: 0, assists: 0,  state: "active"}, {name:  
	"Vinni Lettieri", goals: 0, assists: 0,  state: "active"}, {name:  
	"Greg McKegg", goals: 0, assists: 0,  state: "active"}, {name:  
	"Danny O&#39;Regan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Strome", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mika Zibanejad", goals: 0, assists: 0,  state: "active"}, {name:  
	"Phillip Di Giuseppe", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tim Gettinger", goals: 0, assists: 0,  state: "active"}, {name:  
	"Chris Kreider", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brendan Lemieux", goals: 0, assists: 0,  state: "active"}, {name:  
	"Artemi Panarin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Pavel Buchnevich", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jesper Fast", goals: 0, assists: 0,  state: "active"}, {name:  
	"Julien Gauthier", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kaapo Kakko", goals: 0, assists: 0,  state: "active"} ];
			
	senators = [ {name: "Mark Borowiecki", goals: 0, assists: 0,  state: "active"}, {name:  
	"Thomas Chabot", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andreas Englund", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ron Hainsey", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mike Reilly", goals: 0, assists: 0,  state: "active"}, {name:  
	"Christian Wolanin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nikita Zaitsev", goals: 0, assists: 0,  state: "active"}, {name:  
	"Artyom Zub", goals: 0, assists: 0,  state: "active"}, {name:  
	"Artem Anisimov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matthew Peca", goals: 0, assists: 0,  state: "active"}, {name:  
	"Chris Tierney", goals: 0, assists: 0,  state: "active"}, {name:  
	"Colin White", goals: 0, assists: 0,  state: "active"}, {name:  
	"Rudolfs Balcers", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anthony Duclair", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Paul", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brady Tkachuk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Connor Brown", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jayce Hawryluk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Bobby Ryan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Scott Sabourin", goals: 0, assists: 0,  state: "active"} ];
			
	flyers = [ {name: "Justin Braun", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mark Friedman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Shayne Gostisbehere", goals: 0, assists: 0,  state: "active"}, {name:  
	"Robert Hagg", goals: 0, assists: 0,  state: "active"}, {name:  
	"Samuel Morin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Philippe Myers", goals: 0, assists: 0,  state: "active"}, {name:  
	"Matt Niskanen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nate Prosser", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ivan Provorov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Travis Sanheim", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andy Welinski", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Wotherspoon", goals: 0, assists: 0,  state: "active"}, {name:  
	"Egor Zamula", goals: 0, assists: 0,  state: "active"}, {name:  
	"Connor Bunnaman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sean Couturier", goals: 0, assists: 0,  state: "active"}, {name:  
	"Morgan Frost", goals: 0, assists: 0,  state: "active"}, {name:  
	"Derek Grant", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kevin Hayes", goals: 0, assists: 0,  state: "active"}, {name:  
	"Scott Laughton", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nolan Patrick", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nate Thompson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andy Andreoff", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joel Farabee", goals: 0, assists: 0,  state: "active"}, {name:  
	"Claude Giroux", goals: 0, assists: 0,  state: "active"}, {name:  
	"Oskar Lindblom", goals: 0, assists: 0,  state: "active"}, {name:  
	"Michael Raffl", goals: 0, assists: 0,  state: "active"}, {name:  
	"Carsen Twarynski", goals: 0, assists: 0,  state: "active"}, {name:  
	"James van Riemsdyk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nicolas Aube-Kubel", goals: 0, assists: 0,  state: "active"}, {name:  
	"Travis Konecny", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Pitlick", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jakub Voracek", goals: 0, assists: 0,  state: "active"} ];
			
	penguins = [ {name: "Kevin Czuczman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brian Dumoulin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Pierre-Olivier Joseph", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jack Johnson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kris Letang", goals: 0, assists: 0,  state: "active"}, {name:  
	"John Marino", goals: 0, assists: 0,  state: "active"}, {name:  
	"Marcus Pettersson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Juuso Riikola", goals: 0, assists: 0,  state: "active"}, {name:  
	"Chad Ruhwedel", goals: 0, assists: 0,  state: "active"}, {name:  
	"Justin Schultz", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zach Aston-Reese", goals: 0, assists: 0,  state: "active"}, {name:  
	"Teddy Blueger", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sidney Crosby", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sam Lafferty", goals: 0, assists: 0,  state: "active"}, {name:  
	"Evgeni Malkin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jared McCann", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dominik Simon", goals: 0, assists: 0,  state: "active"}, {name:  
	"Phil Varone", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jake Guentzel", goals: 0, assists: 0,  state: "active"}, {name:  
	"Adam Johnson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Patrick Marleau", goals: 0, assists: 0,  state: "active"}, {name:  
	"Conor Sheary", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brandon Tanev", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jason Zucker", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anthony Angello", goals: 0, assists: 0,  state: "active"}, {name:  
	"Patric Hornqvist", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kasperi Kapanen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Bryan Rust", goals: 0, assists: 0,  state: "active"} ];
			
	sharks = [ {name: "Brandon Davidson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mario Ferraro", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nikolai Knyzhov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jake Middleton", goals: 0, assists: 0,  state: "active"}, {name:  
	"Radim Simek", goals: 0, assists: 0,  state: "active"}, {name:  
	"Marc-Edouard Vlasic", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brent Burns", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick DeSimone", goals: 0, assists: 0,  state: "active"}, {name:  
	"Erik Karlsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dalton Prout", goals: 0, assists: 0,  state: "active"}, {name:  
	"Logan Couture", goals: 0, assists: 0,  state: "active"}, {name:  
	"Noah Gregor", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joel Kellman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Antti Suomela", goals: 0, assists: 0,  state: "active"}, {name:  
	"Joe Thornton", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexander True", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dylan Gambrell", goals: 0, assists: 0,  state: "active"}, {name:  
	"Lean Bergmann", goals: 0, assists: 0,  state: "active"}, {name:  
	"Evander Kane", goals: 0, assists: 0,  state: "active"}, {name:  
	"Timo Meier", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tomas Hertl", goals: 0, assists: 0,  state: "active"}, {name:  
	"Marcus Sorensen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kevin Labanc", goals: 0, assists: 0,  state: "active"}, {name:  
	"Stefan Noesen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Melker Karlsson", goals: 0, assists: 0,  state: "active"} ];
			
	blues = [ {name: "Robert Bortuzzo", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jay Bouwmeester", goals: 0, assists: 0,  state: "active"}, {name:  
	"Vince Dunn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Justin Faulk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Carl Gunnarsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Niko Mikkola", goals: 0, assists: 0,  state: "active"}, {name:  
	"Colton Parayko", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alex Pietrangelo", goals: 0, assists: 0,  state: "active"}, {name:  
	"Derrick Pouliot", goals: 0, assists: 0,  state: "active"}, {name:  
	"Marco Scandella", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jake Walman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ivan Barbashev", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Bozak", goals: 0, assists: 0,  state: "active"}, {name:  
	"Klim Kostin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jordan Kyrou", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan O&#39;Reilly", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brayden Schenn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Oskar Sundqvist", goals: 0, assists: 0,  state: "active"}, {name:  
	"Robert Thomas", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sammy Blais", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jacob de la Rose", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mackenzie MacEachern", goals: 0, assists: 0,  state: "active"}, {name:  
	"David Perron", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zach Sanford", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jaden Schwartz", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexander Steen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Troy Brouwer", goals: 0, assists: 0,  state: "active"}, {name:  
	"Austin Poganski", goals: 0, assists: 0,  state: "active"}, {name: 
	"Vladimir Tarasenko", goals: 0, assists: 0,  state: "active"} ];
			
	lightning = [ {name: "Zach Bogosian", goals: 0, assists: 0,  state: "active"}, {name:  
	"Erik Cernak", goals: 0, assists: 0,  state: "active"}, {name:  
	"Braydon Coburn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Victor Hedman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan McDonagh", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jan Rutta", goals: 0, assists: 0,  state: "active"}, {name:  
	"Luke Schenn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mikhail Sergachev", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kevin Shattenkirk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anthony Cirelli", goals: 0, assists: 0,  state: "active"}, {name:  
	"Blake Coleman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Johnson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alex Killorn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Cedric Paquette", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brayden Point", goals: 0, assists: 0,  state: "active"}, {name:  
	"Steven Stamkos", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mitchell Stephens", goals: 0, assists: 0,  state: "active"}, {name:  
	"Carter Verhaeghe", goals: 0, assists: 0,  state: "active"}, {name:  
	"Barclay Goodrow", goals: 0, assists: 0,  state: "active"}, {name:  
	"Yanni Gourde", goals: 0, assists: 0,  state: "active"}, {name:  
	"Patrick Maroon", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ondrej Palat", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mathieu Joseph", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nikita Kucherov", goals: 0, assists: 0,  state: "active"} ];
			
	mapleleafs = [ {name: "Tyson Barrie", goals: 0, assists: 0,  state: "active"}, {name:  
	"Cody Ceci", goals: 0, assists: 0,  state: "active"}, {name:  
	"Travis Dermott", goals: 0, assists: 0,  state: "active"}, {name:  
	"Justin Holl", goals: 0, assists: 0,  state: "active"}, {name:  
	"Timothy Liljegren", goals: 0, assists: 0,  state: "active"}, {name:  
	"Martin Marincin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jake Muzzin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Morgan Rielly", goals: 0, assists: 0,  state: "active"}, {name:  
	"Calle Rosen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Rasmus Sandin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Frederik Gauthier", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexander Kerfoot", goals: 0, assists: 0,  state: "active"}, {name:  
	"Denis Malgin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Auston Matthews", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nic Petan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Evan Rodrigues", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jason Spezza", goals: 0, assists: 0,  state: "active"}, {name:  
	"John Tavares", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kyle Clifford", goals: 0, assists: 0,  state: "active"}, {name:  
	"Pierre Engvall", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zach Hyman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andreas Johnsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nicholas Robertson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mitch Marner", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ilya Mikheyev", goals: 0, assists: 0,  state: "active"}, {name:  
	"William Nylander", goals: 0, assists: 0,  state: "active"} ];
			
	canucks = [ {name: "Jordie Benn", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jalen Chatfield", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexander Edler", goals: 0, assists: 0,  state: "active"}, {name:  
	"Oscar Fantenberg", goals: 0, assists: 0,  state: "active"}, {name:  
	"Quinn Hughes", goals: 0, assists: 0,  state: "active"}, {name:  
	"Olli Juolevi", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Myers", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brogan Rafferty", goals: 0, assists: 0,  state: "active"}, {name:  
	"Troy Stecher", goals: 0, assists: 0,  state: "active"}, {name:  
	"Christopher Tanev", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jay Beagle", goals: 0, assists: 0,  state: "active"}, {name:  
	"Adam Gaudette", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Graovac", goals: 0, assists: 0,  state: "active"}, {name:  
	"Bo Horvat", goals: 0, assists: 0,  state: "active"}, {name:  
	"Elias Pettersson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brandon Sutter", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Motte", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zack MacEwen", goals: 0, assists: 0,  state: "active"}, {name:  
	"J. T. Miller", goals: 0, assists: 0,  state: "active"}, {name:  
	"Micheal Ferland", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tanner Pearson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Antoine Roussel", goals: 0, assists: 0,  state: "active"}, {name:  
	"Justin Bailey", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brock Boeser", goals: 0, assists: 0,  state: "active"}, {name:  
	"Loui Eriksson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jake Virtanen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Toffoli", goals: 0, assists: 0,  state: "active"} ];
			
	goldenknights = [ {name: "Dylan Coghlan", goals: 0, assists: 0,  state: "active"}, {name:  
	"Deryk Engelland", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nicolas Hague", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Holden", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alec Martinez", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brayden McNabb", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jon Merrill", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nate Schmidt", goals: 0, assists: 0,  state: "active"}, {name:  
	"Shea Theodore", goals: 0, assists: 0,  state: "active"}, {name:  
	"Zach Whitecloud", goals: 0, assists: 0,  state: "active"}, {name:  
	"Patrick Brown", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Cousins", goals: 0, assists: 0,  state: "active"}, {name:  
	"Reid Duke", goals: 0, assists: 0,  state: "active"}, {name:  
	"William Karlsson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Peyton Krebs", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jonathan Marchessault", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tomas Nosek", goals: 0, assists: 0,  state: "active"}, {name:  
	"Paul Stastny", goals: 0, assists: 0,  state: "active"}, {name:  
	"Chandler Stephenson", goals: 0, assists: 0,  state: "active"}, {name:  
	"William Carrier", goals: 0, assists: 0,  state: "active"}, {name:  
	"Max Pacioretty", goals: 0, assists: 0,  state: "active"}, {name:  
	"Gage Quinney", goals: 0, assists: 0,  state: "active"}, {name:  
	"Keegan Kolesar", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ryan Reaves", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nicolas Roy", goals: 0, assists: 0,  state: "active"}, {name:  
	"Reilly Smith", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mark Stone", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alex Tuch", goals: 0, assists: 0,  state: "active"} ];
			
	capitals = [ {name: "Alexander Alexeyev", goals: 0, assists: 0,  state: "active"}, {name:  
	"John Carlson", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brenden Dillon", goals: 0, assists: 0,  state: "active"}, {name:  
	"Martin Fehervary", goals: 0, assists: 0,  state: "active"}, {name:  
	"Radko Gudas", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Jensen", goals: 0, assists: 0,  state: "active"}, {name:  
	"Michal Kempny", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tyler Lewington", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dmitry Orlov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jonas Siegenthaler", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nicklas Backstrom", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nic Dowd", goals: 0, assists: 0,  state: "active"}, {name:  
	"Lars Eller", goals: 0, assists: 0,  state: "active"}, {name:  
	"Evgeny Kuznetsov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Philippe Maillet", goals: 0, assists: 0,  state: "active"}, {name:  
	"Connor McMichael", goals: 0, assists: 0,  state: "active"}, {name:  
	"Brian Pinho", goals: 0, assists: 0,  state: "active"}, {name:  
	"Carl Hagelin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Ilya Kovalchuk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Alexander Ovechkin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jakub Vrana", goals: 0, assists: 0,  state: "active"}, {name:  
	"Travis Boyd", goals: 0, assists: 0,  state: "active"}, {name:  
	"Garnet Hathaway", goals: 0, assists: 0,  state: "active"}, {name:  
	"Beck Malenstyn", goals: 0, assists: 0,  state: "active"}, {name:  
	"T. J. Oshie", goals: 0, assists: 0,  state: "active"}, {name:  
	"Richard Panik", goals: 0, assists: 0,  state: "active"}, {name:  
	"Daniel Sprong", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tom Wilson", goals: 0, assists: 0,  state: "active"} ];
			
	jets = [ {name: "Nathan Beaulieu", goals: 0, assists: 0,  state: "active"}, {name:  
	"Anthony Bitetto", goals: 0, assists: 0,  state: "active"}, {name:  
	"Carl Dahlstrom", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dylan DeMelo", goals: 0, assists: 0,  state: "active"}, {name:  
	"Dmitry Kulikov", goals: 0, assists: 0,  state: "active"}, {name:  
	"Josh Morrissey", goals: 0, assists: 0,  state: "active"}, {name:  
	"Sami Niku", goals: 0, assists: 0,  state: "active"}, {name:  
	"Neal Pionk", goals: 0, assists: 0,  state: "active"}, {name:  
	"Tucker Poolman", goals: 0, assists: 0,  state: "active"}, {name:  
	"Luca Sbisa", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mason Appleton", goals: 0, assists: 0,  state: "active"}, {name:  
	"Andrew Copp", goals: 0, assists: 0,  state: "active"}, {name:  
	"Cody Eakin", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jansen Harkins", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mark Letestu", goals: 0, assists: 0,  state: "active"}, {name:  
	"Bryan Little", goals: 0, assists: 0,  state: "active"}, {name:  
	"Adam Lowry", goals: 0, assists: 0,  state: "active"}, {name:  
	"Jack Roslovic", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mark Scheifele", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nick Shore", goals: 0, assists: 0,  state: "active"}, {name:  
	"Gabriel Bourque", goals: 0, assists: 0,  state: "active"}, {name:  
	"Kyle Connor", goals: 0, assists: 0,  state: "active"}, {name:  
	"Nikolaj Ehlers", goals: 0, assists: 0,  state: "active"}, {name:  
	"Mathieu Perreault", goals: 0, assists: 0,  state: "active"}, {name:  
	"Patrik Laine", goals: 0, assists: 0,  state: "active"}, {name:  
	"Logan Shaw", goals: 0, assists: 0,  state: "active"}, {name:  
	"Blake Wheeler", goals: 0, assists: 0,  state: "active"} ];
	
	for(var i=0; i<ducks.length; i++){
		document.getElementById("ducks").innerHTML += "<p>"+ducks[i].name+"</p>";
	}
	for(var i=0; i<coyotes.length; i++){
		document.getElementById("coyotes").innerHTML += "<p>"+coyotes[i].name+"</p>";
	}
	for(var i=0; i<bruins.length; i++){
		document.getElementById("bruins").innerHTML += "<p>"+bruins[i].name+"</p>";
	}
	for(var i=0; i<sabres.length; i++){
		document.getElementById("sabres").innerHTML += "<p>"+sabres[i].name+"</p>";
	}
	for(var i=0; i<flames.length; i++){
		document.getElementById("flames").innerHTML += "<p>"+flames[i].name+"</p>";
	}
	for(var i=0; i<hurricanes.length; i++){
		document.getElementById("hurricanes").innerHTML += "<p>"+hurricanes[i].name+"</p>";
	}
	for(var i=0; i<blackhawks.length; i++){
		document.getElementById("blackhawks").innerHTML += "<p>"+blackhawks[i].name+"</p>";
	}
	for(var i=0; i<avalanche.length; i++){
		document.getElementById("avalanche").innerHTML += "<p>"+avalanche[i].name+"</p>";
	}
	for(var i=0; i<bluejackets.length; i++){
		document.getElementById("bluejackets").innerHTML += "<p>"+bluejackets[i].name+"</p>";
	}
	for(var i=0; i<stars.length; i++){
		document.getElementById("stars").innerHTML += "<p>"+stars[i].name+"</p>";
	}
	for(var i=0; i<redwings.length; i++){
		document.getElementById("redwings").innerHTML += "<p>"+redwings[i].name+"</p>";
	}
	for(var i=0; i<oilers.length; i++){
		document.getElementById("oilers").innerHTML += "<p>"+oilers[i].name+"</p>";
	}
	for(var i=0; i<panthers.length; i++){
		document.getElementById("panthers").innerHTML += "<p>"+panthers[i].name+"</p>";
	}
	for(var i=0; i<kings.length; i++){
		document.getElementById("kings").innerHTML += "<p>"+kings[i].name+"</p>";
	}
	for(var i=0; i<wild.length; i++){
		document.getElementById("wild").innerHTML += "<p>"+wild[i].name+"</p>";
	}
	for(var i=0; i<canadiens.length; i++){
		document.getElementById("canadiens").innerHTML += "<p>"+canadiens[i].name+"</p>";
	}
	for(var i=0; i<predators.length; i++){
		document.getElementById("predators").innerHTML += "<p>"+predators[i].name+"</p>";
	}
	for(var i=0; i<devils.length; i++){
		document.getElementById("devils").innerHTML += "<p>"+devils[i].name+"</p>";
	}
	for(var i=0; i<islanders.length; i++){
		document.getElementById("islanders").innerHTML += "<p>"+islanders[i].name+"</p>";
	}
	for(var i=0; i<rangers.length; i++){
		document.getElementById("rangers").innerHTML += "<p>"+rangers[i].name+"</p>";
	}
	for(var i=0; i<senators.length; i++){
		document.getElementById("senators").innerHTML += "<p>"+senators[i].name+"</p>";
	}
	for(var i=0; i<flyers.length; i++){
		document.getElementById("flyers").innerHTML += "<p>"+flyers[i].name+"</p>";
	}
	for(var i=0; i<penguins.length; i++){
		document.getElementById("penguins").innerHTML += "<p>"+penguins[i].name+"</p>";
	}
	for(var i=0; i<sharks.length; i++){
		document.getElementById("sharks").innerHTML += "<p>"+sharks[i].name+"</p>";
	}
	for(var i=0; i<blues.length; i++){
		document.getElementById("blues").innerHTML += "<p>"+blues[i].name+"</p>";
	}
	for(var i=0; i<lightning.length; i++){
		document.getElementById("lightning").innerHTML += "<p>"+lightning[i].name+"</p>";
	}
	for(var i=0; i<mapleleafs.length; i++){
		document.getElementById("mapleleafs").innerHTML += "<p>"+mapleleafs[i].name+"</p>";
	}
	for(var i=0; i<canucks.length; i++){
		document.getElementById("canucks").innerHTML += "<p>"+canucks[i].name+"</p>";
	}
	for(var i=0; i<goldenknights.length; i++){
		document.getElementById("goldenknights").innerHTML += "<p>"+goldenknights[i].name+"</p>";
	}
	for(var i=0; i<capitals.length; i++){
		document.getElementById("capitals").innerHTML += "<p>"+capitals[i].name+"</p>";
	}
	for(var i=0; i<jets.length; i++){
		document.getElementById("jets").innerHTML += "<p>"+jets[i].name+"</p>";
	}
}

window.onload = init;

var ducks, coyotes, bruins, sabres, flames, hurricanes, 
	blackhawks, avalanche, bluejackets, stars, redwings, 
	oilers, panthers, kings, wild, canadiens, predators, 
	devils, islanders, rangers, senators, flyers, 
	penguins, sharks, blues, lightning, mapleleafs, 
	canucks, goldenknights, capitals, jets;