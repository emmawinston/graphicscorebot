{
	"origin":["{svg <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><svg xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"500\" height=\"500\" viewBox=\"0 0 180 180\" style=\"enable-background:new 0 0 180 180;\" id=\"svg2\" xml:space=\"preserve\">#line1#</svg>}"],
	
	"staff":["<rect y=\"40\" width=\"180\" height=\"20\" style=\"fill:none;stroke:\\#000000;stroke-width:1;\"  /><rect y=\"60\"width=\"180\" height=\"20\" style=\"fill:none;stroke:\\#000000;stroke-width:1;\"/> <rect y=\"80\"width=\"180\" height=\"20\" style=\"fill:none;stroke:\\#000000;stroke-width:1;\" /> <rect y=\"100\"width=\"180\" height=\"20\" style=\"fill:none;stroke:\\#000000;stroke-width:1;\" />"],
	
	"lines":["#line1#", "#line2#"],	

	"line1":["<polyline points=\"#small# #whichdigit#, #whichdigit#, #whichdigit#, #whichdigit#, #whichdigit#, #whichdigit#, #small#\"  stroke-dasharray=\"#dasharrays#\" style=\"fill:none;stroke:\\##color#;stroke-width:#leastone#;\"    />"],

	"line2":["<path d=\"m 0 #whichdigit# q #whichdigit# #whichdigit# #whichdigit# #whichdigit# q #whichdigit# #whichdigit# #whichdigit# #whichdigit# q #whichdigit# #whichdigit# #whichdigit# #whichdigit# q #whichdigit# #whichdigit# #whichdigit# #whichdigit# q #whichdigit# #whichdigit# \" stroke-dasharray=\"#dasharrays#\" style=\"fill:none;stroke:\\##color#;\"  />"],
	
	"rect":["<rect x=\"#digit##digit#\" y=\"#digit##digit#\" height=\"#leastone##digit#\" width=\"#leastone##digit#\" style=\"fill: \\##color#\" opacity = \"#small##digit#\" #maybeBlur#/>"],

	"color":["#hex##hex##hex##hex##hex##hex#"],
	"hex":["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],
	"digit":["0","1","2","3","4","5","6","7","8","9" ],
	"digittens":["1#digit#"],
	"digithundreds":["1#digit##digit#"],
	"whichdigit":["#digit#","#digittens#","#digithundreds#"],
	"plusminus":["-",""],
	"leastone":["1","2","3","4","5","6","7","8","9"],
	"small":["0","1","2"],
	"smaller":["0","1"],
	"modifier":["1"],
	

	"dasharray":["0","1","2","3","4","5","6","7","8","9"],
	"dasharrays":["#yesdasharray#","#nodasharray#"],
	"yesdasharray":["#dasharray#,#dasharray#,#dasharray#,#dasharray#,#dasharray#,#dasharray#,#dasharray#,#dasharray#,#dasharray#,#dasharray#"],
	"nodasharray":["0,0"]
}