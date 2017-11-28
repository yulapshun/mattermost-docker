webpackJsonp([13],{2134:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return(0,i.default)({},t,{oauthApps:(0,p.getOAuthApps)(e),isSystemAdmin:(0,f.isCurrentUserSystemAdmin)(e),regenOAuthAppSecretRequest:e.requests.integrations.updateOAuthApp})}function s(e){return{actions:(0,u.bindActionCreators)({getOAuthApps:c.getOAuthApps,regenOAuthAppSecret:c.regenOAuthAppSecret,deleteOAuthApp:c.deleteOAuthApp},e)}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(19),i=l(n),d=a(31),u=a(20),o=a(735),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(o),p=a(2084),f=a(50),m=a(2380),h=l(m);t.default=(0,d.connect)(r,s)(h.default)},2380:function(e,t,a){"use strict";(function(e){function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(19),s=l(r),n=a(310),i=l(n),d=a(6),u=l(d),o=a(4),c=l(o),p=a(5),f=l(p),m=a(7),h=l(m),_=a(8),g=l(_),A=a(2),v=l(A),M=a(1),E=l(M),S=a(17),O=a(16),y=a(2086),b=l(y),R=a(2381),C=l(R),N=function(t){function a(e){(0,c.default)(this,a);var t=(0,h.default)(this,(a.__proto__||(0,u.default)(a)).call(this,e));return t.deleteOAuthApp=function(e){t.props.actions.deleteOAuthApp(e.id)},t.state={loading:!0},t}return(0,g.default)(a,t),(0,f.default)(a,[{key:"componentDidMount",value:function(){var e=this;"true"===window.mm_config.EnableOAuthServiceProvider&&this.props.actions.getOAuthApps().then(function(){return e.setState({loading:!1})})}},{key:"oauthAppCompare",value:function(e,t){var a=e.name;a||(a=(0,O.localizeMessage)("installed_integrations.unnamed_oauth_app","Unnamed OAuth 2.0 Application"));var l=t.name;return l||(l=(0,O.localizeMessage)("installed_integrations.unnamed_oauth_app","Unnamed OAuth 2.0 Application")),a.localeCompare(l)}},{key:"render",value:function(){var t=this,a=(0,i.default)(this.props.oauthApps).sort(this.oauthAppCompare).map(function(e){return E.default.createElement(C.default,{key:e.id,team:t.props.team,oauthApp:e,regenOAuthAppSecretRequest:t.props.regenOAuthAppSecretRequest,onRegenerateSecret:t.props.actions.regenOAuthAppSecret,onDelete:t.deleteOAuthApp})}),l=e.mm_config,r="true"===l.EnableOAuthServiceProvider&&(this.props.isSystemAdmin||"true"!==l.EnableOnlyAdminIntegrations),n=void 0;return r&&(n={addLink:"/"+this.props.team.name+"/integrations/oauth2-apps/add",addText:(0,O.localizeMessage)("installed_oauth_apps.add","Add OAuth 2.0 Application")}),E.default.createElement(b.default,(0,s.default)({header:E.default.createElement(S.FormattedMessage,{id:"installed_oauth_apps.header",defaultMessage:"OAuth 2.0 Applications"}),helpText:E.default.createElement(S.FormattedMessage,{id:"installed_oauth_apps.help",defaultMessage:"Create {oauthApplications} to securely integrate bots and third-party apps with Mattermost. Visit the {appDirectory} to find available self-hosted apps.",values:{oauthApplications:E.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.mattermost.com/developer/oauth-2-0-applications.html"},E.default.createElement(S.FormattedMessage,{id:"installed_oauth_apps.help.oauthApplications",defaultMessage:"OAuth 2.0 applications"})),appDirectory:E.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://about.mattermost.com/default-app-directory/"},E.default.createElement(S.FormattedMessage,{id:"installed_oauth_apps.help.appDirectory",defaultMessage:"App Directory"}))}}),emptyText:E.default.createElement(S.FormattedMessage,{id:"installed_oauth_apps.empty",defaultMessage:"No OAuth 2.0 Applications found"}),searchPlaceholder:(0,O.localizeMessage)("installed_oauth_apps.search","Search OAuth 2.0 Applications"),loading:this.state.loading},n),a)}}]),a}(E.default.PureComponent);N.propTypes={team:v.default.object,oauthApps:v.default.object,isSystemAdmin:v.default.bool,regenOAuthAppSecretRequest:v.default.object.isRequired,actions:v.default.shape({getOAuthApps:v.default.func.isRequired,regenOAuthAppSecret:v.default.func.isRequired,deleteOAuthApp:v.default.func.isRequired}).isRequired},t.default=N}).call(t,a(22))},2381:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),s=l(r),n=a(4),i=l(n),d=a(5),u=l(d),o=a(7),c=l(o),p=a(8),f=l(p),m=a(2),h=l(m),_=a(1),g=l(_),A=a(17),v=a(437),M=a(16),E=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(M),S=a(238),O=l(S),y=a(2087),b=l(y),R="***************",C=function(e){function t(e){(0,i.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.handleShowClientSecret=function(e){e&&e.preventDefault&&e.preventDefault(),a.setState({clientSecret:a.props.oauthApp.client_secret})},a.handleHideClientSecret=function(e){e.preventDefault(),a.setState({clientSecret:R})},a.handleRegenerate=function(e){e.preventDefault(),a.props.onRegenerateSecret(a.props.oauthApp.id).then(function(){var e=a.props.regenOAuthAppSecretRequest.error;e?a.setState({error:e.message}):(a.setState({error:null}),a.handleShowClientSecret())})},a.handleDelete=function(){a.props.onDelete(a.props.oauthApp)},a.matchesFilter=function(e,t){return!t||-1!==e.name.toLowerCase().indexOf(t)},a.state={clientSecret:R},a}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.oauthApp,t=void 0;if(this.state.error&&(t=g.default.createElement(O.default,{error:this.state.error})),!this.matchesFilter(e,this.props.filter))return null;var a=void 0;a=e.name?e.name:g.default.createElement(A.FormattedMessage,{id:"installed_integrations.unnamed_oauth_app",defaultMessage:"Unnamed OAuth 2.0 Application"});var l=void 0;e.description&&(l=g.default.createElement("div",{className:"item-details__row"},g.default.createElement("span",{className:"item-details__description"},e.description)));var r=g.default.createElement("div",{className:"item-details__row"},g.default.createElement("span",{className:"item-details__url"},g.default.createElement(A.FormattedMessage,{id:"installed_integrations.callback_urls",defaultMessage:"Callback URLs: {urls}",values:{urls:e.callback_urls.join(", ")}}))),s=void 0;s=e.is_trusted?E.localizeMessage("installed_oauth_apps.trusted.yes","Yes"):E.localizeMessage("installed_oauth_apps.trusted.no","No");var n=void 0;n=this.state.clientSecret===R?g.default.createElement("a",{href:"#",onClick:this.handleShowClientSecret},g.default.createElement(A.FormattedMessage,{id:"installed_integrations.showSecret",defaultMessage:"Show Secret"})):g.default.createElement("a",{href:"#",onClick:this.handleHideClientSecret},g.default.createElement(A.FormattedMessage,{id:"installed_integrations.hideSecret",defaultMessage:"Hide Secret"}));var i=g.default.createElement("a",{href:"#",onClick:this.handleRegenerate},g.default.createElement(A.FormattedMessage,{id:"installed_integrations.regenSecret",defaultMessage:"Regenerate Secret"})),d=void 0;return e.icon_url&&(d=g.default.createElement("div",{className:"integration__icon integration-list__icon"},g.default.createElement("img",{src:e.icon_url}))),g.default.createElement("div",{className:"backstage-list__item"},d,g.default.createElement("div",{className:"item-details"},g.default.createElement("div",{className:"item-details__row"},g.default.createElement("span",{className:"item-details__name"},a)),t,l,g.default.createElement("div",{className:"item-details__row"},g.default.createElement("span",{className:"item-details__url"},g.default.createElement(A.FormattedHTMLMessage,{id:"installed_oauth_apps.is_trusted",defaultMessage:"Is Trusted: <strong>{isTrusted}</strong>",values:{isTrusted:s}}))),g.default.createElement("div",{className:"item-details__row"},g.default.createElement("span",{className:"item-details__token"},g.default.createElement(A.FormattedHTMLMessage,{id:"installed_integrations.client_id",defaultMessage:"Client ID: <strong>{clientId}</strong>",values:{clientId:e.id}}))),g.default.createElement("div",{className:"item-details__row"},g.default.createElement("span",{className:"item-details__token"},g.default.createElement(A.FormattedHTMLMessage,{id:"installed_integrations.client_secret",defaultMessage:"Client Secret: <strong>{clientSecret}</strong>",values:{clientSecret:this.state.clientSecret}}))),r,g.default.createElement("div",{className:"item-details__row"},g.default.createElement("span",{className:"item-details__creation"},g.default.createElement(A.FormattedMessage,{id:"installed_integrations.creation",defaultMessage:"Created by {creator} on {createAt, date, full}",values:{creator:E.displayUsername(e.creator_id),createAt:e.create_at}})))),g.default.createElement("div",{className:"item-actions"},n," - ",i," - ",g.default.createElement(v.Link,{to:"/"+this.props.team.name+"/integrations/oauth2-apps/edit?id="+e.id},g.default.createElement(A.FormattedMessage,{id:"installed_integrations.edit",defaultMessage:"Edit"}))," - ",g.default.createElement(b.default,{messageId:"installed_oauth_apps.delete.confirm",onDelete:this.handleDelete})))}}]),t}(g.default.PureComponent);C.propTypes={team:h.default.object,oauthApp:h.default.object.isRequired,regenOAuthAppSecretRequest:h.default.object.isRequired,onRegenerateSecret:h.default.func.isRequired,onDelete:h.default.func.isRequired,filter:h.default.string},t.default=C}});
//# sourceMappingURL=13.53108c9a2a77acf8d803.js.map