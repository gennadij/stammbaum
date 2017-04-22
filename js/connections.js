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
    var topLeft ="TopLeft";
    var topRight ="TopRight";
    var bottomRight = "BottomRight";
    var bottomLeft = "BottomLeft";
    var bottom = "Bottom";
    var mann = "Mann";
    var frau = "Frau";
    var vater = "Vater";
    var mutter = "Muter";
    var sohn = "Sohn";
    var tochter = "Tochter"; 
    var right = "Right";
    var left = "Left";
    var verheiratet = "verheiratet";
    var geschieden = "geschieden";
    //EBENE 1

    //EBENE 2

    //EBENE 3
    
    var params_details_person_3_1 = {
      dialog: "#details_person_3_1",
      button: "#button_person_3_1"
    };

    dialog(params_details_person_3_1);
    
    var params_details_person_3_2 = {
      dialog: "#details_person_3_2",
      button: "#button_person_3_2"
    };

    dialog(params_details_person_3_2);
    
    var params_details_person_3_3 = {
      dialog: "#details_person_3_3",
      button: "#button_person_3_3"
    };

    dialog(params_details_person_3_3);
    
    var params_details_person_3_4 = {
      dialog: "#details_person_3_4",
      button: "#button_person_3_4"
    };

    dialog(params_details_person_3_4);
    
    var params_3_1 = {
      node1: "person_3_1",
      anchorN1: right,
      labelN1: mann,
      node2: "person_3_2",
      anchorN2: left,
      labelN2: frau,
      labelN3: verheiratet,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_3_1);

    //EBENE 3 zu 4
    
    var params_34_1 = {
      node1: "person_3_1",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_4_1",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_34_1);
    
    var params_34_2 = {
      node1: "person_3_1",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_4_4",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_34_2);
    
    var params_34_3 = {
      node1: "person_3_1",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_4_5",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.12,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_34_3);
    
      var params_34_4 = {
      node1: "person_3_1",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_4_7",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_34_4);
    
    var params_34_5 = {
      node1: "person_3_2",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_4_1",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.12,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_34_5);
    
    var params_34_6 = {
      node1: "person_3_2",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_4_4",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_34_6);
    
    var params_34_7 = {
      node1: "person_3_2",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_4_5",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_34_7);
    
    var params_34_8 = {
      node1: "person_3_2",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_4_7",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    
    connect(params_34_8);
    
    //EBENE 4
    
    var params_details_person_4_1 = {
      dialog: "#details_person_4_1",
      button: "#button_person_4_1"
    };

    dialog(params_details_person_4_1);
    
    var params_details_person_4_2 = {
      dialog: "#details_person_4_2",
      button: "#button_person_4_2"
    };

    dialog(params_details_person_4_2);
    
    var params_details_person_4_3 = {
      dialog: "#details_person_4_3",
      button: "#button_person_4_3"
    };

    dialog(params_details_person_4_3);
    
    var params_details_person_4_4 = {
      dialog: "#details_person_4_4",
      button: "#button_person_4_4"
    };

    dialog(params_details_person_4_4);
    
    var params_details_person_4_5 = {
      dialog: "#details_person_4_5",
      button: "#button_person_4_5"
    };

    dialog(params_details_person_4_5);
    
    var params_details_person_4_6 = {
      dialog: "#details_person_4_6",
      button: "#button_person_4_6"
    };

    dialog(params_details_person_4_6);
    
    var params_details_person_4_7 = {
      dialog: "#details_person_4_7",
      button: "#button_person_4_7"
    };

    dialog(params_details_person_4_7);
    
    var params_details_person_4_8 = {
      dialog: "#details_person_4_8",
      button: "#button_person_4_8"
    };

    dialog(params_details_person_4_8);
    
    
    var params_4_1 = {
      node1: "person_4_1",
      anchorN1: right,
      labelN1: mann,
      node2: "person_4_2",
      anchorN2: left,
      labelN2: frau,
      labelN3: verheiratet,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_4_1);
    
    var params_4_2 = {
      node1: "person_4_3",
      anchorN1: right,
      labelN1: mann,
      node2: "person_4_4",
      anchorN2: left,
      labelN2: frau,
      labelN3: verheiratet,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_4_2);
    
    var params_4_3 = {
      node1: "person_4_5",
      anchorN1: right,
      labelN1: mann,
      node2: "person_4_6",
      anchorN2: left,
      labelN2: frau,
      labelN3: verheiratet,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_4_3);
    
    var params_4_4 = {
      node1: "person_4_7",
      anchorN1: right,
      labelN1: frau,
      node2: "person_4_8",
      anchorN2: left,
      labelN2: mann,
      labelN3: verheiratet,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_4_4);
  
    // EBENE 4 zu 5
    
    var params_45_1 = {
      node1: "person_4_1",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_5_1",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_1);
    
    var params_45_2 = {
      node1: "person_4_1",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_5_3",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_2);
    
    var params_45_3 = {
      node1: "person_4_2",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_5_1",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_3);
    
    var params_45_4 = {
      node1: "person_4_2",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_5_3",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_4);
    
    var params_45_5 = {
      node1: "person_4_3",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_5_5",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_5);
    
    var params_45_6 = {
      node1: "person_4_3",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_5_8",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_6);
    
    var params_45_7 = {
      node1: "person_4_4",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_5_5",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_7);
    
    var params_45_8 = {
      node1: "person_4_4",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_5_8",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_8);
    
    var params_45_9 = {
      node1: "person_4_5",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_5_10",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_9);
    
    var params_45_10 = {
      node1: "person_4_5",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_5_12",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_10);
    
    var params_45_11 = {
      node1: "person_4_6",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_5_12",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_11);
    
    var params_45_12 = {
      node1: "person_4_6",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_5_10",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_12);
    
    var params_45_12 = {
      node1: "person_4_6",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_5_10",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_12);
    
    var params_45_13 = {
      node1: "person_4_7",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_5_13",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_13);
    
    var params_45_14 = {
      node1: "person_4_7",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_5_14",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_14);
    
    var params_45_15 = {
      node1: "person_4_7",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_5_15",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_15);
    
    var params_45_16 = {
      node1: "person_4_8",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_5_13",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_16);
    
    var params_45_17 = {
      node1: "person_4_8",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_5_14",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_17);
    
    var params_45_18 = {
      node1: "person_4_8",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_5_15",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };
    connect(params_45_18);
    
    //EBENE 5

    var params_details_person_5_1 = {
      dialog_deutsch: "#details_person_5_1_deutsch",
      button_deutsch: "#button_person_5_1_deutsch",
      dialog_russisch: "#details_person_5_1_russisch",
      button_russisch: "#button_person_5_1_russisch"
    };

    dialog(params_details_person_5_1);

    var params_details_person_5_2 = {
      dialog: "#details_person_5_2",
      button: "#button_person_5_2"
    };

    dialog(params_details_person_5_2);

    var params_details_person_5_3 = {
      dialog: "#details_person_5_3",
      button: "#button_person_5_3"
    };

    dialog(params_details_person_5_3);

    var params_details_person_5_4 = {
      dialog: "#details_person_5_4",
      button: "#button_person_5_4"
    };

    dialog(params_details_person_5_4);
    
    var params_details_person_5_5 = {
      dialog: "#details_person_5_5",
      button: "#button_person_5_5"
    };

    dialog(params_details_person_5_5);
    
    var params_details_person_5_6 = {
      dialog: "#details_person_5_6",
      button: "#button_person_5_6"
    };

    dialog(params_details_person_5_6);
    
    var params_details_person_5_7 = {
      dialog: "#details_person_5_7",
      button: "#button_person_5_7"
    };

    dialog(params_details_person_5_7);
    
    var params_details_person_5_8 = {
      dialog: "#details_person_5_8",
      button: "#button_person_5_8"
    };

    dialog(params_details_person_5_8);
    
    var params_details_person_5_9 = {
      dialog: "#details_person_5_9",
      button: "#button_person_5_9"
    };

    dialog(params_details_person_5_9);
    
    var params_details_person_5_10 = {
      dialog: "#details_person_5_10",
      button: "#button_person_5_10"
    };

    dialog(params_details_person_5_10);
    
    var params_details_person_5_11 = {
      dialog: "#details_person_5_11",
      button: "#button_person_5_11"
    };

    dialog(params_details_person_5_11);
    
    var params_details_person_5_13 = {
      dialog: "#details_person_5_13",
      button: "#button_person_5_13"
    };

    dialog(params_details_person_5_13);
    
    var params_details_person_5_14 = {
      dialog: "#details_person_5_14",
      button: "#button_person_5_14"
    };

    dialog(params_details_person_5_14);
    
    var params_details_person_5_15 = {
      dialog: "#details_person_5_15",
      button: "#button_person_5_15"
    };

    dialog(params_details_person_5_15);
    
    var params_details_person_5_12 = {
      dialog: "#details_person_5_12",
      button: "#button_person_5_12"
    };

    dialog(params_details_person_5_12);
    
    var params_5_1 = {
      node1: "person_5_1",
      anchorN1: right,
      labelN1: mann,
      node2: "person_5_2",
      anchorN2: left,
      labelN2: frau,
      labelN3: verheiratet,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
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
      labelN3: verheiratet,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_5_2);
    
    var params_5_3 = {
      node1: "person_5_5",
      anchorN1: right,
      labelN1: "",
      node2: "person_5_6",
      anchorN2: left,
      labelN2: "",
      labelN3: geschieden,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_5_3);
    
    var params_5_4 = {
      node1: "person_5_5",
      anchorN1: bottomRight,
      labelN1: frau,
      node2: "person_5_7",
      anchorN2: bottomLeft,
      labelN2: mann,
      labelN3: verheiratet,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.6,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: bezier,
      strokeColor: "#BCF5A9"
    };

    connect(params_5_4);

    var params_5_5 = {
      node1: "person_5_8",
      anchorN1: right,
      labelN1: frau,
      node2: "person_5_9",
      anchorN2: left,
      labelN2: mann,
      labelN3: verheiratet,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_5_5);
    
    var params_5_6 = {
      node1: "person_5_10",
      anchorN1: right,
      labelN1: frau,
      node2: "person_5_11",
      anchorN2: left,
      labelN2: mann,
      labelN3: verheiratet,
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_5_6);

    //EBENE 6

    var params_details_person_6_1 = {
      dialog: "#details_person_6_1",
      button: "#button_person_6_1"
    };

    dialog(params_details_person_6_1);

    var params_details_person_6_2 = {
      dialog: "#details_person_6_2",
      button: "#button_person_6_2"
    };

    dialog(params_details_person_6_2);

    var params_details_person_6_3 = {
      dialog: "#details_person_6_3",
      button: "#button_person_6_3"
    };

    dialog(params_details_person_6_3);

    var params_details_person_6_4 = {
      dialog: "#details_person_6_4",
      button: "#button_person_6_4"
    };

    dialog(params_details_person_6_4);

    var params_details_person_6_5 = {
      dialog: "#details_person_6_5",
      button: "#button_person_6_5"
    };

    dialog(params_details_person_6_5);

    var params_details_person_6_6 = {
      dialog: "#details_person_6_6",
      button: "#button_person_6_6"
    };

    dialog(params_details_person_6_6);

    var params_details_person_6_7 = {
      dialog: "#details_person_6_7",
      button: "#button_person_6_7"
    };

    dialog(params_details_person_6_7);

    var params_6_1 = {
      node1: "person_5_1",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_6_1",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
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
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
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
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
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
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
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
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
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
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
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
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
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
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_6_8);
    
    var params_6_9 = {
      node1: "person_5_5",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_6_5",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_6_9);
    
    var params_6_10 = {
      node1: "person_5_5",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_6_6",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_6_10);
    
    var params_6_11 = {
      node1: "person_5_6",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_6_5",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_6_11);
    
    var params_6_12 = {
      node1: "person_5_6",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_6_6",
      anchorN2: top,
      labelN2: tochter,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_6_12);
    
    var params_6_13 = {
      node1: "person_5_8",
      anchorN1: bottom,
      labelN1: vater,
      node2: "person_6_7",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_6_13);
    
    var params_6_14 = {
      node1: "person_5_9",
      anchorN1: bottom,
      labelN1: mutter,
      node2: "person_6_7",
      anchorN2: top,
      labelN2: sohn,
      labelN3: "",
      locationLabel1: 0.2,
      locationLabel2: 0.8,
      locationLabel3: 0.5,
      locationArrow1: 0.1,
      locationArrow2: 0.9,
      connector: straight,
      strokeColor: "#BCF5A9"
    };

    connect(params_6_14);
  });

  function connect (params){
    jsPlumb.connect({
      connector: [params.connector],
      source:params.node1,
      target:params.node2,
      paintStyle:{ stroke:params.strokeColor, strokeWidth:3 },
      endpointStyle:{ fill:"red", outlineStroke:"black", outlineWidth:1,radius:5 },
      overlays:[
        ["Arrow", {location: params.locationArrow1, direction: -1}],
        ["Arrow", {location: params.locationArrow2, direction: 1}],
        ["Label", {label:params.labelN1, id:"label1", location: params.locationLabel1}],
        ["Label", {label:params.labelN2, id:"label2", location: params.locationLabel2}],
        ["Label", {label:params.labelN3, id:"label3", location: params.locationLabel3}]
      ],
      anchor: [params.anchorN1, params.anchorN2],
      endpoint:"Dot"
    });
  }

  function dialog(params) {
    $( params.dialog_deutsch ).dialog({
      autoOpen: false,
      width:'auto',
      show: {
        //effect: "blind",
        duration: 500
      },
      hide: {
        //effect: "explode",
        duration: 500
      }
    });

    $( params.button_deutsch ).on( "click", function() {
      $( params.dialog_deutsch ).dialog( "open" );
    });
    
    $( params.dialog_russisch ).dialog({
      autoOpen: false,
      width:'auto',
      show: {
        //effect: "blind",
        duration: 500
      },
      hide: {
        //effect: "explode",
        duration: 500
      }
    });

    $( params.button_russisch ).on( "click", function() {
      $( params.dialog_russisch ).dialog( "open" );
    });
  }
});
