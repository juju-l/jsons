/**
 * 
 */
 
            ___G_ = {
             circleObj: null,
             scenesigObj: null,
             stagesObj: null
            }

/**
 * Stage
 */
 
window.
___G_.
stage = function(
            _c___
        ) {
    var _stage_ = new JTopo.Stage( _c___ )

 _stage_.canvas.width = $('#jTopo2d').width()
 _stage_.canvas.height = Math.ceil($('#jTopo2d').height())
 _stage_.setCenter($('#jTopo2d').width() / 2 - 10,/*,*/$('#jTopo2d').height() / 2 - 10)
 _stage_.wheelZoom = 0.85;_stage_.centerAndZoom();_stage_.eagleEye.visible = true;
 // _stage_.frames = -24;

     return _stage_ /* */
}

/**
 * Container
 */
 
window.
___G_.
container = function(
            _t___
        ) {
    var _container_ = new JTopo.Container( _t___ )

 _container_.width = $('#jTopo2d').width()
 _container_.height = Math.ceil($('#jTopo2d').height())
 _container_.borderRadius = 7;
 _container_.fillColor = JTopo.util.randomColor();
 _container_.dragble = true;

     return _container_ /* */
}

/**
 * Scene
 */
 
window.
___G_.
scenesSig = function(
            _s___
        ) {
    var _scene_ = new JTopo.Scene( _s___ )

 /*_scene_.background = ;*/_scene_.areaSelect = true;_scene_.alpha = 0.75;

     return _scene_ /* */
}

/**
 * Circlende
 */
 
window.
___G_.
circles = function(
            _t___,_x___,_y___,
            _c___,
            _r___,_w___,_h___
        ) {
    var _circlende_ = new JTopo.CircleNode( _t___ )

 _circlende_.setLocation( _x___,/*,*/_y___ );
 _circlende_.fontColor = "0, 0, 0";
 _circlende_.fillColor = JTopo.util.randomColor()//_c___;
 _circlende_.radius = _r___;
 _circlende_.setSize( _w___,/*,*/_h___ );

     return _circlende_ /* */
}

/**
 * FidNode
 */
 
window.
___G_.
fidNode = function(
            _t___
        ) {
     return window.___G_.scenesigObj!=null
       ? window.___G_.scenesigObj.childs.find(
            x => x.text == _t___
        )
       : null /* */
}

/**
 * Lnk
 */
 
window.
___G_.
lnk = function(
            _s___,/*,*/_t___
        ) {
    var _lnk_ = new JTopo.Link( _s___,/*,*/_t___ )

 _lnk_.lineWidth = 1.5;_lnk_.dashedPattern = 5;_lnk_.arrowsRadius = 15;

     return _lnk_ /* */
}

/**
 * Int
 */
 
window.
___G_.
int = function(
            //
        ) {
    // var

 _stage_ = window.___G_.stage(
 document.getElementById('jTopo2d')
 )
 window.___G_.scenesigObj = window.___G_.scenesSig(
 _stage_
 )
 // window.___G_.containersObj = window.___G_.container( '' )
 window.___G_.rds(  'teams',window.___G_.pst(  'teams',window.___G_.lyt( 'teams',{"_n_":null,"_sid_":'vipex',"teams":[{"_n_":"team1","_sid_":'vipex/team1',"project":null,"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null},{"_n_":"team2","_sid_":'vipex/team2',"project":[{"_n_":"pjt03","_sid_":'vipex/team2/pjt03',"instances":null,"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null},{"_n_":"pjt05","_sid_":'vipex/team2/pjt05',"instances":[{"_n_":"ist03","_sid_":'vipex/team2/pjt05/ist03',"dblst":[{"_n_":"db0","_sid_":'vipex/team2/pjt05/ist03/db0',"objects":null,"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null},{"_n_":"ist05","_sid_":null,"dblst":[{"_n_":"db3","_sid_":'vipex/team2/pjt05/ist05/db3',"objects":null,"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null},{"_n_":"db5","_sid_":'vipex/team2/pjt05/ist05/db5',"objects":/*["views"]*/null,"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null},{"_n_":"db7","_sid_":'vipex/team2/pjt05/ist05/db7',"objects":null,"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null},{"_n_":"ist07","_sid_":null,"dblst":[{"_n_":"db1","_sid_":'vipex/team2/pjt05/ist07',"objects":null,"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null},{"_n_":"pjt07","_sid_":'vipex/team2/pjt07',"instances":[{"_n_":"ist01","_sid_":'vipex/team2/pjt07/ist01',"dblst":null,"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null},{"_n_":"team3","_sid_":'vipex/team3',"project":[{"_n_":"pjt01","_sid_":'vipex/team3/pjt01',"instances":null,"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_dat_":null,"_x_":null,"_y_":null},1 ),1 ),1 )
 // _scene_.add(window.___G_.containersObj)
 // 
 window.___G_.ctxmenu()//
 _stage_.centerAndZoom()
 window.___G_.resizes(_stage_)

     //return
}

/**
 * 
 */
 
// 

/**
 * resizes
 */
 
window.
___G_.
resizes = function(
            _s___
        ) {
    // var

 window.onresize = () => {
    if (_s___ != null) {
     _s___.canvas.width = $('#jTopo2d').width();
     _s___.canvas.height = $('#jTopo2d').height();
     _s___.centerAndZoom()
    }
 }

     //return
}

/**
 * 
 */
 
___get_ = ( _i___ ) => {

}

/**
 * 
 */
 
___set_ = () => {

}

/**
 * dom
 */
 
// 