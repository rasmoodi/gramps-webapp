let t,e,i,s,r,o,a,n,h,c=t=>t;import{c as m,s as d,h as p,t as _,S as u}from"./2edd6693.js";import{P as l}from"./08cef58c.js";import"./a97a5df7.js";import"./a2b3c3a9.js";import"./630c238e.js";import"./3dcba6a8.js";class g extends(m(d)(l)){render(){return null==this._source?p(t||(t=c` <section> <p>Loading ...</p> </section> `)):p(e||(e=c` <style>th{color:#777;font-size:.75em;font-weight:500;text-align:right;max-width:20em;padding-right:1em;padding-top:.3em}td{margin:0}</style> <section> <div id="title"> <h2>${0}</h2> </div> <table width="100%"> ${0} ${0} ${0} </table> ${0} <gr-gallery-element .images="${0}" token="${0}"> </gr-gallery-element> ${0} ${0} ${0} <gr-citations-element .citations="${0}" nosources> </gr-citations-element> </section> `),this._source.title,""==this._source.author?"":p(i||(i=c` <tr> <th>${0}</th> <td>${0}</td> </tr> `),_("Author"),this._source.author),""==this._source.pubinfo?"":p(s||(s=c` <tr> <th>${0}</th> <td>${0}</td> </tr> `),_("Publication Information"),this._source.pubinfo),""==this._source.repositories?"":p(r||(r=c` <tr> <th>${0}</th> <td>${0}</td> </tr> `),_("Repositories"),this._repositories.join(", ")),this._media.length?p(o||(o=c`<h3>${0}</h3>`),_("Media")):"",this._media,this._token,this._notes.length?p(a||(a=c`<h3>${0}</h3>`),_("Notes")):"",this._notes.map(t=>p(n||(n=c` <gr-note-element grampsid="${0}"> </gr-note-element> `),t)),this._citations.length?p(h||(h=c`<h3>${0}</h3>`),_("Citations")):"",this._citations)}static get styles(){return[u]}constructor(){super(),this._media=Array()}static get properties(){return{_source:{type:Object},_gramps_id:{type:String},_token:{type:String},_media:{type:Object}}}firstUpdated(){}_addMimeType(t,e){return t.map((function(t){return t.mime=e.api.media[t.ref].mime,t}))}stateChanged(t){this._token=t.api.token,this._gramps_id=t.app.activeSource,this._source=t.api.sources[this._gramps_id],null!=this._source&&(this._media=this._addMimeType(this._source.media,t),this._notes=this._source.notes,this._citations=Object.values(t.api.citations).filter(t=>t.source==this._gramps_id).map(t=>t.gramps_id),this._repositories=this._source.repositories.map(e=>t.api.repositories[e].title))}}window.customElements.define("gr-view-source",g);