webpackJsonp([22],{2130:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return(0,i.default)({},t,{commands:(0,d.default)((0,c.getCommands)(e)),users:(0,p.getUsers)(e)})}function a(e){return{actions:(0,m.bindActionCreators)({getCustomTeamCommands:f.getCustomTeamCommands},e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(310),d=s(o),r=n(19),i=s(r),l=n(31),m=n(20),f=n(735),c=n(2084),p=n(50),h=n(2373),_=s(h);t.default=(0,l.connect)(u,a)(_.default)},2373:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(6),a=s(u),o=n(4),d=s(o),r=n(5),i=s(r),l=n(7),m=s(l),f=n(8),c=s(f),p=n(2),h=s(p),_=n(1),C=s(_),g=function(e){function t(e){(0,d.default)(this,t);var n=(0,m.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={loading:!0},n}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;"true"===window.mm_config.EnableCommands&&this.props.actions.getCustomTeamCommands(this.props.team.id).then(function(){return e.setState({loading:!1})})}},{key:"render",value:function(){return C.default.createElement("div",null,C.default.cloneElement(this.props.children,{loading:this.state.loading,commands:this.props.commands||[],users:this.props.users,team:this.props.team,user:this.props.user,isAdmin:this.props.isAdmin}))}}]),t}(C.default.PureComponent);g.propTypes={team:h.default.object,user:h.default.object,children:h.default.node.isRequired,isAdmin:h.default.bool,users:h.default.object,commands:h.default.array,actions:h.default.shape({getCustomTeamCommands:h.default.func.isRequired}).isRequired},t.default=g}});
//# sourceMappingURL=22.e761a9e7f4b3feec73f5.js.map