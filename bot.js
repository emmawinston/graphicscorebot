{
	"origin":["{svg <svg viewBox=\"0 0 40 20\">#line1#</svg>}"],
	
	"lines":["#line1#", "#line2#"],	

	"line1":["<polyline points=\"#whichdigit#, #whichdigit#, #whichdigit#, #whichdigit#, #whichdigit#, #whichdigit#, #small#\" style=\"fill:none;stroke:\\##color#;stroke-width:#range#;\"    />"],

	"line2":["<path d=\"m 0 #whichdigit# q #whichdigit# #whichdigit# #whichdigit# #whichdigit# q #whichdigit# #whichdigit# #whichdigit# #whichdigit# q #whichdigit# #whichdigit# #whichdigit# #whichdigit# q #whichdigit# #whichdigit# #whichdigit# #whichdigit# q #whichdigit# #whichdigit# \" style=\"fill:none;stroke:\\##color#;stroke-width:#range#;\"  />"],
	
	"rect":["<rect x=\"#digit##digit#\" y=\"#digit##digit#\" height=\"#leastone##digit#\" width=\"#leastone##digit#\" style=\"fill: \\##color#\" opacity = \"#small##digit#\" #maybeBlur#/>"],

	"color":["#hex##hex##hex##hex##hex##hex#"],
	"hex":["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],
	"digit":["0","1","2","3","4","5","6","7","8","9" ],
	"digittens":["#modifier##digit#"],
	"whichdigit":["#digit#","#digittens#"],
	"range":["0.1","0.2","0.3","0.4","0.5"],
	"modifier":["1","2","3"],
	"strokestyle":["miter","round","bevel"],
	

	"dasharray":["0","0.1","0.2","0.3","0.4","0.5","0.6","0.7","0.8","0.9"],
	"dasharrays":["#yesdasharray#","#nodasharray#"],
	"yesdasharray":["#dasharray#,#dasharray#"],
	"nodasharray":["0,0"]
}