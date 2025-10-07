/**
 * 
 */
            ___G_ = {}

/**
 * resizes 
 */

/**
 *
 */
window.___G_.___stage_ = function() {
    stage = JTopo.Stage( $('#jTopo2d') )
 stage.wheelZoom = 0.85
 stage.centerAndZoom()
 stage.eagleEye.visible = true
       return stage /* */
}

/**
 * 
 */
window.___G_.___container_ = function() {
    container = JTopo.Container( /*window.___G_.___scene_()*/ )
 container.borderRadius = 7
 // container.fillColor = JTopo.util.randomColor()
 container.dragble = true
       return container /* */
}

/**
 *  
 */
window.___G_.___scene_ = function() {
    scene = JTopo.Scene( window.___G_.___stage_() )
 // scene.background = 
 scene.areaSelect = true
 scene.alpha = 0.75
       return scene /* */
}

/**
 * 
 */
window.___G_.___circlende_ = function( t,x,y,c,w,h ) {
    circlende = JTopo.CircleNode( t )
 circlende.setLocation( x,/*,*/y )
 circlende.fontColor = "0, 0, 0"
 circlende.fillColor = c//JTopo.util.randomColor()
 circlende.radius = r
 circlende.setSize( w,/*,*/h )
       return circlende /* */
}

/**
 * 
 */
window.___G_.___lnk_ = function( s,/*,*/t ) {
    lnk = JTopo.Link( s,/*,*/t )
 lnk.lineWidth = 1.5
 lnk.dashedPattern = 5
 lnk.arrowsRadius = 15
       return lnk /* */
}

/**
 * 
 */
window.___G_.___int_ = function() {
    ctr = window.___G_.___container_()
    //debugger
    console.log(ctr)
}

/**
 * 创建连接线 
 */

/**
 * 
 */

/**
 * 创建stage 
 */

/**
 * 创建scene 
 */

/** 
 * 查找 link 
 */

/**
 * 查找节点 
 */

/** 
 * 查找容器 
 */

/**
 * 递归设置布局半径 
 */

/**
 * 递归计算坐标 
 */

/**
 * 递归添加节点 
 */

/**
 * 刷新 topo 
 */

/**
 * 监听事件重写 
 */

/**
 * 3d tree 加载完成标识
 */

/**
 * 设置当前选中的节点 
 */

/**
 * 搜索节点-包含查找和删除
 */
___get_ = (stage,container,scene,circlende,lnk) => {

}

/**
 * 设置节点-包含新增和更新 
 */
___set_ = () => {

}

/**
 * dom 获取 
 */

/**
 * 入口 
 */
