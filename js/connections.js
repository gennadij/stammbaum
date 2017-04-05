/**
 * @author Gennadi Heimann
 *
 * tutorials http://www.freedevelopertutorials.com/jsplumb-tutorial/connections/
 */

 /*jsPlumb.ready(function() {
   jsPlumb.connect({
     source:"person_1",
     target:"person_9",
     endpoint:"Rectangle"
   });
 });*/

$(document).ready(function() {
  jsPlumb.ready(function() {
    jsPlumb.connect({
      connector: ["Straight"],
      source:"person_1",
      target:"person_9",
      paintStyle:{ stroke:"blue", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      //overlays:[
      //              ["Arrow" , { width:12, length:15, location:1 }]
      //          ],
      anchor: ["Right", "Left"],
      endpoint:"Dot"
    });
    jsPlumb.connect({
      connector: ["Straight"],
      source:"person_1",
      target:"person_2",
      paintStyle:{ stroke:"blue", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      //overlays:[
      //              ["Arrow" , { width:12, length:15, location:1 }]
      //          ],
      anchor: ["Right", "Left"],
      endpoint:"Dot"
    });
    jsPlumb.connect({
      connector: ["Straight"],
      source:"person_1",
      target:"person_3",
      paintStyle:{ stroke:"blue", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      //overlays:[
      //              ["Arrow" , { width:12, length:15, location:1 }]
      //          ],
      anchor: ["Right", "Left"],
      endpoint:"Dot"
    });
    jsPlumb.connect({
      connector: ["Straight"],
      source:"person_9",
      target:"person_3",
      paintStyle:{ stroke:"blue", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      //overlays:[
      //              ["Arrow" , { width:12, length:15, location:1 }]
      //          ],
      anchor: ["Right", "Left"],
      endpoint:"Dot"
    });
    jsPlumb.connect({
      connector: ["Straight"],
      source:"person_9",
      target:"person_2",
      paintStyle:{ stroke:"blue", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      //overlays:[
      //              ["Arrow" , { width:12, length:15, location:1 }]
      //          ],
      anchor: ["Right", "Left"],
      endpoint:"Dot"
    });
  });
  //$('#person_1').connections({ to: '#person_9'});
  //$('#person_1').connections({ to: '#person_2'});
  //$('#person_1').connections({ to: '#person_3'});
  //$('#person_9').connections({ to: '#person_2'});
  //$('#person_9').connections({ to: '#person_3'});
  // $('div.styles .anchor').connections({ to: 'div.styles li:nth-child(2)', within: '.styles', tag: 'inner', css: { color: '#d62' } });
  // $('div.styles .anchor').connections({ to: 'div.styles li:nth-child(3)', within: '.styles', tag: 'inner', css: { borderWidth: 0.5 } });
  // $('div.styles .anchor').connections({ to: 'div.styles li:nth-child(4)', within: '.styles', tag: 'inner', css: { borderRadius: 0 } });
  // $('div.styles .anchor').connections({ to: 'div.styles li:nth-child(5)', within: '.styles', tag: 'inner', css: { borderStyle: 'double' } });
  // $('div.positioning .anchor').connections({ to: 'div.positioning li', tag: 'inner' });
  // $('p, div').connections();
  // $('connection:odd').addClass('odd');
  // var connections = $('connection, inner');
  // setInterval(function() { connections.connections('update') }, 100);
});
