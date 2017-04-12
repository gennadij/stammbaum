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
    var mann = "Mann";
    var frau = "Frau";
    var vater = "Vater";
    var mutter = "Muter";
    var sohn = "Sohn";
    var tochter = "Tochter";
    var right = "Right";
    var left = "Left";
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
    var params_5_1 = {
      node1: "person_5_1",
      anchorN1: right,
      labelN1: mann,
      node2: "person_5_2",
      anchorN2: left,
      labelN2: frau,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_5_1);
    
    var params_5_2 = {
      node1: "person_5_3",
      anchorN1: right,
      labelN1: mann,
      node2: "person_5_4",
      anchorN2: left,
      labelN2: frau,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_5_2);

    //EBENE 6

    var params_6_1 = {
      node1: "person_5_1",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_6_1",
      anchorN2: top,
      labelN2: sohn,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_6_1);

    var params_6_2 = {
      node1: "person_5_1",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_6_2",
      anchorN2: top,
      labelN2: tochter,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_6_2);
    
    var params_6_3 = {
      node1: "person_5_2",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_6_1",
      anchorN2: top,
      labelN2: sohn,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_6_3);

    var params_6_4 = {
      node1: "person_5_2",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_6_2",
      anchorN2: top,
      labelN2: tochter,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_6_4);
    
    var params_6_5 = {
      node1: "person_5_3",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_6_3",
      anchorN2: top,
      labelN2: sohn,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_6_5);

    var params_6_6 = {
      node1: "person_5_3",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_6_4",
      anchorN2: top,
      labelN2: tochter,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_6_6);
    
    var params_6_7 = {
      node1: "person_5_4",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_6_3",
      anchorN2: top,
      labelN2: sohn,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_6_7);

    var params_6_8 = {
      node1: "person_5_4",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_6_4",
      anchorN2: top,
      labelN2: tochter,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_6_8);

    $( "#details_person_5_1" ).dialog({
      autoOpen: false,
      show: {
        duration: 500
      },
      hide: {
        duration: 500
      }
    });
    
    

    $( "#button_person_5_1" ).on( "click", function() {
      $( "#details_person_5_1" ).dialog( "open" );
    });

    $( "#details_person_5_3" ).dialog({
      autoOpen: false,
      show: {
        //effect: "blind",
        duration: 500
      },
      hide: {
        //effect: "explode",
        duration: 500
      }
    });

    $( "#button_person_5_3" ).on( "click", function() {
      $( "#details_person_5_3" ).dialog( "open" );
    });

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
      paintStyle:{ stroke:"#BCF5A9", strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:3 },
      overlays:[
        ["Arrow", {location: 0.1, direction: -1}],
        ["Arrow", {location: 0.9, direction: 1}],
        ["Label", {label:"Tochter", id:"label1", location: 0.8}],
        ["Label", {label:"Vater", id:"label2", location: 0.2}]
      ],
      anchor: [anchorN1, anchorN2],
      endpoint:"Dot"
    });
  }

  function connect (params){
    jsPlumb.connect({
      connector: [params.connector],
      source:params.node1,
      target:params.node2,
      paintStyle:{ stroke:params.strokeColor, strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      overlays:[
        ["Arrow", {location: 0.1, direction: -1}],
        ["Arrow", {location: 0.9, direction: 1}],
        ["Label", {label:params.labelN1, id:"label1", location: 0.2}],
        ["Label", {label:params.labelN2, id:"label2", location: 0.8}]
      ],
      anchor: [params.anchorN1, params.anchorN2],
      endpoint:"Dot"
    });
  }
});
