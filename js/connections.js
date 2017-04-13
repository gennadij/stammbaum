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

    //EBENE 4

    //EBENE 5

    var params_details_person_5_1 = {
      dialog: "#details_person_5_1",
      button: "#button_person_5_1"
    }

    dialog(params_details_person_5_1);

    var params_details_person_5_2 = {
      dialog: "#details_person_5_2",
      button: "#button_person_5_2"
    }

    dialog(params_details_person_5_2);

    var params_details_person_5_3 = {
      dialog: "#details_person_5_3",
      button: "#button_person_5_3"
    }

    dialog(params_details_person_5_3);

    var params_details_person_5_4 = {
      dialog: "#details_person_5_4",
      button: "#button_person_5_4"
    }

    dialog(params_details_person_5_4);

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

    var params_details_person_6_1 = {
      dialog: "#details_person_6_1",
      button: "#button_person_6_1"
    }

    dialog(params_details_person_6_1);

    var params_details_person_6_2 = {
      dialog: "#details_person_6_2",
      button: "#button_person_6_2"
    }

    dialog(params_details_person_6_2);

    var params_details_person_6_3 = {
      dialog: "#details_person_6_3",
      button: "#button_person_6_3"
    }

    dialog(params_details_person_6_3);

    var params_details_person_6_4 = {
      dialog: "#details_person_6_4",
      button: "#button_person_6_4"
    }

    dialog(params_details_person_6_4);

    var params_details_person_6_5 = {
      dialog: "#details_person_6_5",
      button: "#button_person_6_5"
    }

    dialog(params_details_person_6_5);

    var params_details_person_6_6 = {
      dialog: "#details_person_6_6",
      button: "#button_person_6_6"
    }

    dialog(params_details_person_6_6);

    var params_details_person_6_7 = {
      dialog: "#details_person_6_7",
      button: "#button_person_6_7"
    }

    dialog(params_details_person_6_7);

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
  });

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

  function dialog(params) {
    $( params.dialog ).dialog({
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

    $( params.button ).on( "click", function() {
      $( params.dialog ).dialog( "open" );
    });
  }
});
