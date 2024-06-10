!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}}function r(r){return function(e){if(Array.isArray(e))return t(e)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||e(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=new(function(){var t;function n(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,n),this.initialState=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.state=this.initialState.map(function(t){return r(t)}),this.status="idle",this.score=0}return t=[{key:"moveLeft",value:function(){var t=this;if("playing"===this.getStatus()){var e=this.state.map(function(e){return t.move(e)});JSON.stringify(this.getState())!==JSON.stringify(e)&&(this.updateGameState(e),this.addCells())}}},{key:"moveRight",value:function(){var t=this;if("playing"===this.getStatus()){var e=this.state.map(function(t){return r(t).reverse()}).map(function(e){return t.move(e).reverse()});JSON.stringify(this.getState())!==JSON.stringify(e)&&(this.updateGameState(e),this.addCells())}}},{key:"moveUp",value:function(){var t=this;if("playing"===this.getStatus()){var e=this.rotateMatrixCounterClockwise(this.getState()).map(function(e){return t.move(e)}),r=this.rotateMatrixClockwise(e);JSON.stringify(this.getState())!==JSON.stringify(r)&&(this.updateGameState(r),this.addCells())}}},{key:"moveDown",value:function(){var t=this;if("playing"===this.getStatus()){var e=this.rotateMatrixClockwise(this.getState()).map(function(e){return t.move(e)}),r=this.rotateMatrixCounterClockwise(e);JSON.stringify(this.getState())!==JSON.stringify(r)&&(this.updateGameState(r),this.addCells())}}},{key:"move",value:function(t){for(var e=[],r=0;r<t.length;){var n=t[r];if(n){for(var a=!1,i=r+1;i<t.length;i++){var o=t[i];if(o===n){e.push(2*n),this.updateGameScore(2*n),a=!0,r=i+1;break}if(o){e.push(n),a=!0,r=i;break}}!a&&(e.push(n),r++)}else r++}for(;e.length<t.length;)e.push(0);return e}},{key:"rotateMatrixClockwise",value:function(t){for(var e=t.length,r=[],n=0;n<e;n++){r.push([]);for(var a=0;a<e;a++)r[n].unshift(t[a][n])}return r}},{key:"rotateMatrixCounterClockwise",value:function(t){for(var e=t.length,r=[],n=0;n<e;n++)r.push([]);for(var a=0;a<e;a++)for(var i=0;i<e;i++)r[e-i-1].push(t[a][i]);return r}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status="playing",this.addCells(2)}},{key:"restart",value:function(){this.status="idle",this.resetState()}},{key:"getEmptyCells",value:function(){return this.state.flatMap(function(t,e){return t.map(function(t,r){return 0===t?[e,r]:null})}).filter(function(t){return null!==t})}},{key:"createNewTile",value:function(){var t=this.getEmptyCells();if(t.length){var r,n=function(t){if(Array.isArray(t))return t}(r=t[Math.trunc(Math.random()*t.length)])||function(t,e){var r,n,a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var i=[],o=!0,s=!1;try{for(a=a.call(t);!(o=(r=a.next()).done)&&(i.push(r.value),2!==i.length);o=!0);}catch(t){s=!0,n=t}finally{try{o||null==a.return||a.return()}finally{if(s)throw n}}return i}}(r,2)||e(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=n[0],i=n[1];this.state[a][i]=.9>Math.random()?2:4}}},{key:"addCells",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=0;e<t;e++)this.createNewTile();var r=this.getState();this.isWin(r)?this.status="win":this.isStateValid(r)||(this.status="lose")}},{key:"resetState",value:function(){this.state=this.initialState.map(function(t){return r(t)}),this.score=0}},{key:"isStateValid",value:function(t){if("playing"!==this.status)return!1;for(var e=0;e<t.length;e++)for(var r=0;r<t[e].length;r++)if(r<t[e].length-1&&t[e][r]===t[e][r+1]||e<t.length-1&&t[e][r]===t[e+1][r]||!t[e][r])return!0;return!1}},{key:"updateGameState",value:function(t){this.state=t}},{key:"updateGameScore",value:function(t){this.score+=t}},{key:"isWin",value:function(t){return t.flat().some(function(t){return 2048===t})}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(n.prototype,t),n}()),a=document.querySelector(".button"),i=document.querySelector(".game-score"),o=r(document.querySelectorAll(".field-row")).map(function(t){return r(t.children)}),s={idle:document.querySelector(".message-start"),lose:document.querySelector(".message-lose"),win:document.querySelector(".message-win")},u=function(t){t.forEach(function(t,e){t.forEach(function(t,r){var n=o[e][r];n.className=t?"field-cell field-cell--".concat(t):"field-cell",n.textContent=t||""})})},l=function(){var t=n.getStatus();for(var e in s)s[e].classList.toggle("hidden",e!==t)},f=function(t){i.textContent=t};a.addEventListener("click",function(t){"Start"===t.target.textContent?(n.start(),a.textContent="Restart",a.classList.remove("start"),a.classList.add("restart")):(n.restart(),f(0),a.textContent="Start",a.classList.remove("restart"),a.classList.add("start")),u(n.getState()),l()}),document.addEventListener("keydown",function(t){if(t.preventDefault(),"playing"===n.getStatus()){var e={ArrowUp:n.moveUp,ArrowDown:n.moveDown,ArrowLeft:n.moveLeft,ArrowRight:n.moveRight}[t.key];e&&e.call(n),u(n.getState()),f(n.getScore()),l()}})}();
//# sourceMappingURL=index.f83a4839.js.map
