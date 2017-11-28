webpackJsonp([14],{2124:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return(0,r.default)({},t,{incomingWebhooks:(0,f.getIncomingHooks)(e),channels:(0,m.getAllChannels)(e),users:(0,h.getUsers)(e),teamId:(0,p.getCurrentTeamId)(e)})}function i(e){return{actions:(0,d.bindActionCreators)({getIncomingHooks:c.getIncomingHooks,removeIncomingHook:c.removeIncomingHook},e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(19),r=n(l),s=a(31),d=a(20),u=a(735),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(u),m=a(136),f=a(2084),p=a(120),h=a(50),g=a(2365),_=n(g);t.default=(0,s.connect)(o,i)(_.default)},2365:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(59),i=n(o),l=a(6),r=n(l),s=a(4),d=n(s),u=a(5),c=n(u),m=a(7),f=n(m),p=a(8),h=n(p),g=a(2),_=n(g),b=a(1),k=n(b),v=a(17),w=a(9),y=n(w),M=a(16),E=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(M),I=a(2086),W=n(I),C=a(2366),j=n(C),A=function(e){function t(e){(0,d.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.deleteIncomingWebhook=function(e){a.props.actions.removeIncomingHook(e.id)},a.deleteIncomingWebhook=a.deleteIncomingWebhook.bind(a),a.incomingWebhookCompare=a.incomingWebhookCompare.bind(a),a.state={loading:!0},a}return(0,h.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this;"true"===window.mm_config.EnableIncomingWebhooks&&this.props.actions.getIncomingHooks(this.props.teamId,y.default.Integrations.START_PAGE_NUM,y.default.Integrations.PAGE_SIZE).then(function(){return e.setState({loading:!1})})}},{key:"incomingWebhookCompare",value:function(e,t){var a=e.display_name;if(!a){var n=this.props.channels[e.channel_id];a=n?n.display_name:E.localizeMessage("installed_incoming_webhooks.unknown_channel","A Private Webhook")}var o=t.display_name;return a.localeCompare(o)}},{key:"render",value:function(){var e=this,t=(0,i.default)(this.props.incomingWebhooks).map(function(t){return e.props.incomingWebhooks[t]}),a=t.sort(this.incomingWebhookCompare).map(function(t){var a=e.props.isAdmin||e.props.user.id===t.user_id,n=e.props.channels[t.channel_id];return k.default.createElement(j.default,{key:t.id,incomingWebhook:t,onDelete:e.deleteIncomingWebhook,creator:e.props.users[t.user_id]||{},canChange:a,team:e.props.team,channel:n})});return k.default.createElement(W.default,{header:k.default.createElement(v.FormattedMessage,{id:"installed_incoming_webhooks.header",defaultMessage:"Installed Incoming Webhooks"}),addText:k.default.createElement(v.FormattedMessage,{id:"installed_incoming_webhooks.add",defaultMessage:"Add Incoming Webhook"}),addLink:"/"+this.props.team.name+"/integrations/incoming_webhooks/add",emptyText:k.default.createElement(v.FormattedMessage,{id:"installed_incoming_webhooks.empty",defaultMessage:"No incoming webhooks found"}),helpText:k.default.createElement(v.FormattedMessage,{id:"installed_incoming_webhooks.help",defaultMessage:"Use incoming webhooks to connect external tools to Mattermost. {buildYourOwn} or visit the {appDirectory} to find self-hosted, third-party apps and integrations.",values:{buildYourOwn:k.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://docs.mattermost.com/developer/webhooks-incoming.html"},k.default.createElement(v.FormattedMessage,{id:"installed_incoming_webhooks.help.buildYourOwn",defaultMessage:"Build your own"})),appDirectory:k.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://about.mattermost.com/default-app-directory/"},k.default.createElement(v.FormattedMessage,{id:"installed_incoming_webhooks.help.appDirectory",defaultMessage:"App Directory"}))}}),searchPlaceholder:E.localizeMessage("installed_incoming_webhooks.search","Search Incoming Webhooks"),loading:this.state.loading},a)}}]),t}(k.default.PureComponent);A.propTypes={team:_.default.object,user:_.default.object,isAdmin:_.default.bool,incomingWebhooks:_.default.object,channels:_.default.object,users:_.default.object,teamId:_.default.string,actions:_.default.shape({removeIncomingHook:_.default.func,getIncomingHooks:_.default.func})},t.default=A},2366:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(6),i=n(o),l=a(4),r=n(l),s=a(5),d=n(s),u=a(7),c=n(u),m=a(8),f=n(m),p=a(2),h=n(p),g=a(1),_=n(g),b=a(17),k=a(437),v=a(78),w=a(2087),y=n(w),M=function(e){function t(e){(0,r.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return a.handleDelete=a.handleDelete.bind(a),a}return(0,f.default)(t,e),(0,d.default)(t,[{key:"handleDelete",value:function(){this.props.onDelete(this.props.incomingWebhook)}},{key:"render",value:function(){var e=this.props.incomingWebhook,a=this.props.channel,n=this.props.filter?this.props.filter.toLowerCase():"";if(!t.matchesFilter(e,a,n))return null;var o=void 0;o=e.display_name?e.display_name:a?a.display_name:_.default.createElement(b.FormattedMessage,{id:"installed_incoming_webhooks.unknown_channel",defaultMessage:"A Private Webhook"});var i=null;e.description&&(i=_.default.createElement("div",{className:"item-details__row"},_.default.createElement("span",{className:"item-details__description"},e.description)));var l=null;return this.props.canChange&&(l=_.default.createElement("div",{className:"item-actions"},_.default.createElement(k.Link,{to:"/"+this.props.team.name+"/integrations/incoming_webhooks/edit?id="+e.id},_.default.createElement(b.FormattedMessage,{id:"installed_integrations.edit",defaultMessage:"Edit"}))," - ",_.default.createElement(y.default,{messageId:"installed_incoming_webhooks.delete.confirm",onDelete:this.handleDelete}))),_.default.createElement("div",{className:"backstage-list__item"},_.default.createElement("div",{className:"item-details"},_.default.createElement("div",{className:"item-details__row"},_.default.createElement("span",{className:"item-details__name"},o)),i,_.default.createElement("div",{className:"item-details__row"},_.default.createElement("span",{className:"item-details__url"},_.default.createElement(b.FormattedMessage,{id:"installed_integrations.url",defaultMessage:"URL: {url}",values:{url:(0,v.getSiteURL)()+"/hooks/"+e.id}}))),_.default.createElement("div",{className:"item-details__row"},_.default.createElement("span",{className:"item-details__creation"},_.default.createElement(b.FormattedMessage,{id:"installed_integrations.creation",defaultMessage:"Created by {creator} on {createAt, date, full}",values:{creator:this.props.creator.username,createAt:e.create_at}})))),l)}}],[{key:"matchesFilter",value:function(e,t,a){return!a||(-1!==e.display_name.toLowerCase().indexOf(a)||-1!==e.description.toLowerCase().indexOf(a)||!(!e.channel_id||!t||-1===t.name.toLowerCase().indexOf(a)))}}]),t}(_.default.PureComponent);M.propTypes={incomingWebhook:h.default.object.isRequired,onDelete:h.default.func.isRequired,filter:h.default.string,creator:h.default.object.isRequired,canChange:h.default.bool.isRequired,team:h.default.object.isRequired,channel:h.default.object},t.default=M}});
//# sourceMappingURL=14.41bc2ebc2bdc4db4d05c.js.map