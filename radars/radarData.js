//This is the title for your window tab, and your Radar
document.title = "Jacky's iOS Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [  
            {"name":"Coding architects", "pc":{"r":90,"t":170},"movement":"c"}

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 

   {"name":"Git", "pc":{"r":90,"t":50},"movement":"c"}
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"OpenId Connect", "pc":{"r":130,"t":260},"movement":"t"},   
            {"name":"Location based services", "pc":{"r":130,"t":230},"movement":"c"},
            {"name":"Openstack", "pc":{"r":190,"t":190},"movement":"c"},
            {"name":"RHEL 7", "pc":{"r":170,"t":215},"movement":"c"},      
            {"name":"AWS 2014 Innovations", "pc":{"r":270,"t":195},"movement":"c"},
            {"name":"Google Play - (alpha/beta builds)", "pc":{"r":30,"t":225},"movement":"c"},
             {"name":"Git", "pc":{"r":370,"t":195},"movement":"c"}
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [       

            {"name":"Java 8", "pc":{"r":130,"t":355},"movement":"c"},   
            {"name":"Groovy ^", "pc":{"r":190,"t":280},"movement":"c"},

            {"name":"Swift", "pc":{"r":280,"t":300},"movement":"c"},
            {"name":"Scala - the good parts ^", "pc":{"r":290,"t":320},"movement":"c"},   
            {"name":"Serverside Javascript", "pc":{"r":220,"t":275},"movement":"c"},   
            {"name":"Coffeescript", "pc":{"r":270,"t":282},"movement":"c"},
            {"name":"Functional Reactive Programming", "pc":{"r":285,"t":330},"movement":"c"},   
            {"name":"Clojure", "pc":{"r":280,"t":310},"movement":"c"},
            { name: 'RxJs',              pc: { r: 250, t: 338 },              movement: 'c',              domain: 'template' },
            { name: 'Web Components', pc: { r: 260, t: 330 },  movement: 'c' },

            { name: 'Mustache/Handlebars template',   pc: { r: 50, t: 298 },              movement: 'c',              domain: 'template' },
        ]
    }
];
