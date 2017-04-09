/**
 * @author Gennadi Heimann
 *
 * tutorials http://www.freedevelopertutorials.com/jsplumb-tutorial/connections/
 */


$(document).ready(function() {
  jsPlumb.ready(function() {
    var bezier = "Bezier";
    var straight = "Straight";
    var top = "Top";
    var bottom = "Bottom";
    //EBENE 1
    
    //EBENE 2
    
    //EBENE 3
    
    verheiratet("person_3_1", "person_3_2");
    
    kinder("person_3_1", bottom, "person_4_1", top, straight);
    
    kinder("person_3_1", bottom, "person_4_2", top, straight);
    
    kinder("person_3_1", bottom, "person_4_3", top, straight);
    
    kinder("person_3_1", bottom, "person_4_4", top, straight);
    
    kinder("person_3_2", bottom, "person_4_1", top, straight);
    
    kinder("person_3_2", bottom, "person_4_2", top, straight);
    
    kinder("person_3_2", bottom, "person_4_3", top, straight);
    
    kinder("person_3_2", bottom, "person_4_4", top, straight);
    
    //EBENE 4
    
    //EBENE 5
    
    verheiratet("person_5_1", "person_5_2");
    
    //EBENE 6
    
    hatSohn("person_5_1", bottom, "person_6_1", top, straight);
    
    hatTochter("person_5_1", bottom, "person_6_2", top, straight);
    
    hatSohn("person_5_2", bottom, "person_6_1", top, straight);
    
    hatTochter("person_5_2", bottom, "person_6_2", top, straight);
    
    
    
    // geschwister("person_3_1", top, "person_3_3", top, bezier);
//     
    // geschwister("person_3_1", bottom, "person_3_4", bottom, bezier);
//       
    // geschwister("person_4_1",top, "person_4_2", top, bezier);
//     
    // geschwister("person_4_1", bottom, "person_4_3", bottom, bezier);
    
    // geschwister("person_4_1", top, "person_4_4", top, bezier);

    // jsPlumb.connect({
      // connector: ["Straight"],
      // source:"person_9",
      // target:"person_2",
      // paintStyle:{ stroke:"blue", strokeWidth:3 },
      // endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      // //overlays:[
      // //              ["Arrow" , { width:12, length:15, location:1 }]
      // //          ],
      // anchor: ["Bottom", "Top"],
      // endpoint:"Dot"
    // });
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
  
  function verheiratet (node1, node2) {
    jsPlumb.connect({
      connector: ["Straight"],
      source:node1,
      target:node2,
      paintStyle:{ stroke:"red", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      anchor: ["Right", "Left"],
      endpoint:"Dot"
    });
  }
  
  function geschwister (node1, anchorN1, node2, anchorN2, connector) {
    jsPlumb.connect({
      connector: ["Bezier"],
      source:node1,
      target:node2,
      paintStyle:{ stroke:"blue", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      anchor: [anchorN1, anchorN2],
      endpoint:"Dot"
    });
  }
  
  function kinder (node1, anchorN1, node2, anchorN2, connector){
    jsPlumb.connect({
      connector: [connector],
      source:node1,
      target:node2,
      paintStyle:{ stroke:"green", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      anchor: [anchorN1, anchorN2],
      endpoint:"Dot"
    });
  }
  function hatTochter (node1, anchorN1, node2, anchorN2, connector){
    jsPlumb.connect({
      connector: [connector],
      source:node1,
      target:node2,
      paintStyle:{ stroke:"#BCF5A9", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      anchor: [anchorN1, anchorN2],
      endpoint:"Dot"
    });
  }
  function hatSohn (node1, anchorN1, node2, anchorN2, connector){
    jsPlumb.connect({
      connector: [connector],
      source:node1,
      target:node2,
      paintStyle:{ stroke:"#00FF00", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      overlays:[["Label", {label:"Tochter", id:"label", location: 0.3}]], 
      anchor: [anchorN1, anchorN2],
      endpoint:"Dot"
    });
  }
});
