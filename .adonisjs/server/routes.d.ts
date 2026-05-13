import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'polls.show': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'votes.store': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'votes.results': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'polls.index': { paramsTuple?: []; params?: {} }
    'polls.store': { paramsTuple?: []; params?: {} }
    'polls.close': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'polls.show': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'votes.results': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'polls.index': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'polls.show': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'votes.results': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'polls.index': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'votes.store': { paramsTuple: [ParamValue]; params: {'code': ParamValue} }
    'polls.store': { paramsTuple?: []; params?: {} }
  }
  PATCH: {
    'polls.close': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}