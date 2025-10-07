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
            if (_b_ != null) {
            // for ()
            _r_ = _d___[_k___].map((r)=>{return r['_a_']==null?0:r['_a_'] /**/}).sort((a,/*,*/b) => {return b-a /**/})[0] / Math.sin(Math.PI / _d___[_k___].length * 2 / 2)
            if (_r_ == 0) { _r_ = 45 }
            _v_/*[_k___]*/['_x_'] = _d___[_k___].length == 1 ? 0 : Math.sin(Math.PI / _d___[_k___].length * 2 * _i_) * _r_ + 0
            _v_/*[_k___]*/['_x_'] = _d___[_k___].length == 1 ? 0 : Math.cos(Math.PI / _d___[_k___].length * 2 * _i_) * _r_ + 0
            _t_ = _b_.map((r)=>{return r['_a_']==null?0:r['_a_'] /**/}).sort((a,/*,*/b) => {return b-a /**/})[0]
            if (_b_.length == 1) {
            _t_ = _v_/*[_k___]*/['_c_']
            _b_[0]/*[_k___]*/['_x_'] = Math.sin(_t_ * Math.sign(_v_/*[_k___]*/['_x_'])) * _v_/*[_k___]*/['_p_'] + _v_/*[_k___]*/['_x_']
            _b_[0]/*[_k___]*/['_y_'] = Math.cos(_t_ * Math.sign(_v_/*[_k___]*/['_y_'])) * _v_/*[_k___]*/['_p_'] + _v_/*[_k___]*/['_y_']
            } else {
            for (_j_=0;_j_<=_b_.length;_j_++) {
            _t_ = _v_/*[_k___]*/['_c_']
            _b_[_j_]/*[_k___]*/['_x_'] = Math.sin(_t_ * _j_) * _v_/*[_k___]*/['_p_'] + _v_/*[_k___]*/['_x_']
            _b_[_j_]/*[_k___]*/['_y_'] = Math.cos(_t_ * _j_) * _v_/*[_k___]*/['_p_'] + _v_/*[_k___]*/['_y_']
            }
            }
            } else {
            // _v_/*[_k___]*/['_a_'] = _r_
            // _v_/*[_k___]*/['_p_'] = _r_
            // _v_/*[_k___]*/['_c_'] = null
            }
     window.___G_.rds(['teams','project','instances','dblst','objects'][_l___],_v_,/*+*/_l___+1)
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
            window.___G_.lyt(['teams','project','instances','dblst','objects'][_l___],element,/*+*/_l___+1)
            _t_ = _b_.map((r)=>{return r['_a_']==null?0:r['_a_'] /**/}).sort((a,/*,*/b) => {return b-a /**/})[0]
            _z_ = Math.PI / _b_.length
            _y_ = _t_ / Math.sin(_z_)
            if (_b_.length == 1) {
            element/*[_k___]*/['_a_'] = _t_
            element/*[_k___]*/['_p_'] = _t_
            element/*[_k___]*/['_c_'] = Math.PI / _d___[_k___].length * 2
            } else {
            element/*[_k___]*/['_a_'] = _y_ + _t_
            element/*[_k___]*/['_p_'] = _y_
            element/*[_k___]*/['_c_'] = _z_ * 2
            }
            } else {
            element/*[_k___]*/['_a_'] = _r_
            element/*[_k___]*/['_p_'] = _r_
            element/*[_k___]*/['_c_'] = null
            }
    // for ()
            });
 }
     return _d___ /* */
}