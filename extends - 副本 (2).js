/**
 * pst
 */
 
window.
___G_.
pst = function(
            //
        ) {
     return 'pst' /* */
}


_cr = function(_k___,_d___,_l___) {
  var minR = 75
    if (_d___[_k___] != undefined && _d___[_k___] != null) {
  _d___[_k___].forEach((v, i) => {
    var childs = v[['teams','project','instances','dblst','objects'][_l___]]
      if (childs == null) {

    v.jTopo = {
      areaR: minR, parentR: minR, childD: null, pos2d: null
    }
      } else {
    _cr(['teams','project','instances','dblst','objects'][_l___],v,/*+*/_l___+1)

    var cRadius = childs.map((r) => { return r.jTopo.areaR })
      .sort((a, b) => { return b-a })[0]
    var cDegree = Math.PI / childs.length,
      pRadius = cRadius / Math.sin(cDegree)

      if (childs.length == 1) {
    v.jTopo = {
      areaR: cRadius, parentR: cRadius,
        childD: Math.PI / _d___[_k___].length * 2, pos2d: null
    }
      } else {
    v.jTopo = {
      areaR: pRadius + cRadius, parentR: pRadius,
        childD: cDegree * 2, pos2d: null
    }
      }
      }
  })
    }
  return _d___
}

_po = function(_k___,_d___,_l___) {
    if (_d___[_k___] != undefined && _d___[_k___] != null) {
  _d___[_k___].forEach((v, i) => {
    var childs = v[['teams','project','instances','dblst','objects'][_l___]],
        pDegree = v.jTopo.childD, pRadius = v.jTopo.parentR

      if (v.jTopo.pos2d == null) {
    var d = Math.PI / _d___[_k___].length * 2
    var r = _d___[_k___].map((r) => { return r.jTopo.areaR })
      .sort((a, b) => { return b-a })[0] / Math.sin(d / 2)
    if (r == 0) r = 75
    var pos2d = _d___[_k___].length == 1
      ? [0, 0]
      : [Math.sin(d * i)*r + 0, Math.cos(d * i)*r + 0]
    v.jTopo.pos2d = pos2d
      }
      
      if (pDegree == null) {
        
      } else {
        if (childs.length != 1) {
    childs.forEach((c, n) => {
      var x = Math.sin(pDegree * n) * pRadius + v.jTopo.pos2d[0]
      var y = Math.cos(pDegree * n) * pRadius + v.jTopo.pos2d[1]
      c.jTopo.pos2d = [x, y]
    })
        } else {
    var child = childs[0],

      x_par = v.jTopo.pos2d[0], y_par = v.jTopo.pos2d[1],
      sx_par = Math.sign(x_par), sy_par = Math.sign(y_par),

      x = Math.sin(pDegree * sx_par) * pRadius + x_par,
      y = Math.cos(pDegree * sy_par) * pRadius + y_par

    child.jTopo.pos2d = [x, y]
        }
      }
      
    _po(['teams','project','instances','dblst','objects'][_l___],v,/*+*/_l___+1)
  })
    }
  return _d___
}

_vdp = function(_s) {
  var sc = _v.childs[0], n = null

  if (_s == undefined) {
    _vdp(   _po( _cr( window.topoRst.dn ) )   )
  } else {
    if (/* _s != undefined && */_s != null) {
      _s.forEach((v, i) => {
        var s = (window.topoRst.m - v.levelDepth + 1)
          * (100 / (window.topoRst.m + 1)), r = s /2

        if (v.childrenNode != null) {
  n = _pn(
      v.jTopo.pos2d[0]-r, v.jTopo.pos2d[1]-r, s, s, v.cfgNodeName, r //
    )
    n.tag = v.cfgNodeId; sc.add(n)
        _vdp(v.childrenNode)
        } else {
  n = _cc(
      v.jTopo.pos2d[0]-r, v.jTopo.pos2d[1]-r, s, s, v.cfgNodeName, r
    )
    n.tag = v.cfgNodeId; sc.add( n )
        }

        n.cfg = v;  var pn = {}

    if (v.cfgNodeName != 'cfgNodeRoot' ) {
      if (v.cfgNodeParent != undefined) {
        pn = _fn(v.cfgNodeParent)
        
      }
      var lk = _lk( pn, n ); sc.add( lk )
    }
      })


    }
  }
}

console.log(_po('teams',_cr('teams',{"_n_":null,"teams":[{"_n_":"team1","project":null,"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null},{"_n_":"team2","project":[{"_n_":"pjt03","instances":null,"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null},{"_n_":"pjt05","instances":[{"_n_":"ist03","dblst":[{"_n_":"db0","objects":null,"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null},{"_n_":"ist05","dblst":[{"_n_":"db3","objects":null,"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null},{"_n_":"db5","objects":/*["views"]*/null,"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null},{"_n_":"db7","objects":null,"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null},{"_n_":"ist07","dblst":[{"_n_":"db1","objects":null,"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null},{"_n_":"pjt07","instances":[{"_n_":"ist01","dblst":null,"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null},{"_n_":"team3","project":[{"_n_":"pjt01","instances":null,"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null}],"_a_":null,"_p_":null,"_c_":null,"_x_":null,"_y_":null},1 ),1 ))


/**
 * rds
 */
 
window.
___G_.
rds = function(
            _k___,_d___,_l___
        ) {
    // var _+_ = 
 if (true && _d___ != undefined && _d___ != null) {
            _d___[_k___].forEach((_v_,/*,*/_i_) => {
     var _b_ = _v_[['teams','project','instances','dblst','objects'][_l___]]
            if (_v_/*[_k___]*/['_x_'] == null && _v_/*[_k___]*/['_y_'] == null /*&& _v_/[_k___]/['_c_'] == null*/) {
            _r_ = _d___[_k___].map((r)=>{return /*r['_a_']==null?0:*/r['_a_'] /**/}).sort((a,/*,*/b) => {return b-a /**/})[0] / Math.sin(Math.PI / _d___[_k___].length * 2 / 2)
            if (_r_ == 0) { _r_ = 75 }
            _v_/*[_k___]*/['_x_'] = /*_d___[_k___].length == 1 ? 0 : */Math.sin(Math.PI / _d___[_k___].length * 2 * _i_) * _r_ + 0
            // 
            _v_/*[_k___]*/['_y_'] = /*_d___[_k___].length == 1 ? 0 : */Math.cos(Math.PI / _d___[_k___].length * 2 * _i_) * _r_ + 0
            }
            if (_v_/*[_k___]*/['_c_'] != null) {
            if (_b_.length == 1) {
            _t_ = _v_/*[_k___]*/['_c_']
            _b_[0]/*[_k___]*/['_x_'] = Math.sin(_t_ * Math.sign(_v_/*[_k___]*/['_x_'])) * _v_/*[_k___]*/['_p_'] + _v_/*[_k___]*/['_x_']
            _b_[0]/*[_k___]*/['_y_'] = Math.cos(_t_ * Math.sign(_v_/*[_k___]*/['_y_'])) * _v_/*[_k___]*/['_p_'] + _v_/*[_k___]*/['_y_']
            } else {
            for (_j_=0;_j_<_b_.length;_j_++) {
            _t_ = _v_/*[_k___]*/['_c_']
            _b_[_j_]/*[_k___]*/['_x_'] = Math.sin(_t_ * _j_) * _v_/*[_k___]*/['_p_'] + _v_/*[_k___]*/['_x_']
            _b_[_j_]/*[_k___]*/['_y_'] = Math.cos(_t_ * _j_) * _v_/*[_k___]*/['_p_'] + _v_/*[_k___]*/['_y_']
            }
            }
            } else {
            // 
            }
            if (_b_ != null) {
     window.___G_.rds(['teams','project','instances','dblst','objects'][_l___],_v_,/*+*/_l___+1)
            }
            });
 }
     return _d___ /* */
}

/**
 * lyt
 */
 
window.
___G_.
lyt = function(
            _k___,_d___,_l___
        ) {
    var _r_ = 75
 if (true && _d___ != undefined && _d___ != null) {
            _d___[_k___].forEach(element => {
     var _b_ = element[['teams','project','instances','dblst','objects'][_l___]]
            if (_b_ != null) {
            window.___G_.lyt(
			['teams','project','instances','dblst','objects'][_l___],element,/*+*/_l___+1
			)
            _t_ = _b_.map((r)=>{return /*r['_a_']==null?0:*/r['_a_'] /**/}).sort((a,/*,*/b) => {return b-a /**/})[0]
            _z_ = Math.PI / _b_.length
            _y_ = _t_ / Math.sin(_z_)
            if (_b_.length == 1) {
            element/*[_k___]*/['_a_'] = _t_ //@_b_.map((r)=>{return r['_p_']==null?0:r['_p_'] /**/}).sort((a,/*,*/b) => {return b-a /**/})[0]
            element/*[_k___]*/['_p_'] = _t_ //@0
            element/*[_k___]*/['_c_'] = Math.PI / _d___[_k___].length * 2 //@_z_ * 2
            } else {
            element/*[_k___]*/['_a_'] = _y_ + _t_;element/*[_k___]*/['_p_'] = _y_;element/*[_k___]*/['_c_'] = _z_ * 2
            }
            } else {
            element/*[_k___]*/['_a_'] = _r_;element/*[_k___]*/['_p_'] = _r_;element/*[_k___]*/['_c_'] = null
            }
    // for ()
            });
 }
     return _d___ /* */
}