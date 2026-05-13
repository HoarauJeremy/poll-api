/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/auth/signup',
    tokens: [{"old":"/api/auth/signup","type":0,"val":"api","end":""},{"old":"/api/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/auth/login',
    tokens: [{"old":"/api/auth/login","type":0,"val":"api","end":""},{"old":"/api/auth/login","type":0,"val":"auth","end":""},{"old":"/api/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/account/profile',
    tokens: [{"old":"/api/account/profile","type":0,"val":"api","end":""},{"old":"/api/account/profile","type":0,"val":"account","end":""},{"old":"/api/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/account/logout',
    tokens: [{"old":"/api/account/logout","type":0,"val":"api","end":""},{"old":"/api/account/logout","type":0,"val":"account","end":""},{"old":"/api/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
  'polls.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/polls/:code',
    tokens: [{"old":"/api/polls/:code","type":0,"val":"api","end":""},{"old":"/api/polls/:code","type":0,"val":"polls","end":""},{"old":"/api/polls/:code","type":1,"val":"code","end":""}],
    types: placeholder as Registry['polls.show']['types'],
  },
  'votes.store': {
    methods: ["POST"],
    pattern: '/api/polls/:code/votes',
    tokens: [{"old":"/api/polls/:code/votes","type":0,"val":"api","end":""},{"old":"/api/polls/:code/votes","type":0,"val":"polls","end":""},{"old":"/api/polls/:code/votes","type":1,"val":"code","end":""},{"old":"/api/polls/:code/votes","type":0,"val":"votes","end":""}],
    types: placeholder as Registry['votes.store']['types'],
  },
  'votes.results': {
    methods: ["GET","HEAD"],
    pattern: '/api/polls/:code/results',
    tokens: [{"old":"/api/polls/:code/results","type":0,"val":"api","end":""},{"old":"/api/polls/:code/results","type":0,"val":"polls","end":""},{"old":"/api/polls/:code/results","type":1,"val":"code","end":""},{"old":"/api/polls/:code/results","type":0,"val":"results","end":""}],
    types: placeholder as Registry['votes.results']['types'],
  },
  'polls.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/polls',
    tokens: [{"old":"/api/polls","type":0,"val":"api","end":""},{"old":"/api/polls","type":0,"val":"polls","end":""}],
    types: placeholder as Registry['polls.index']['types'],
  },
  'polls.store': {
    methods: ["POST"],
    pattern: '/api/polls',
    tokens: [{"old":"/api/polls","type":0,"val":"api","end":""},{"old":"/api/polls","type":0,"val":"polls","end":""}],
    types: placeholder as Registry['polls.store']['types'],
  },
  'polls.close': {
    methods: ["PATCH"],
    pattern: '/api/polls/:id/close',
    tokens: [{"old":"/api/polls/:id/close","type":0,"val":"api","end":""},{"old":"/api/polls/:id/close","type":0,"val":"polls","end":""},{"old":"/api/polls/:id/close","type":1,"val":"id","end":""},{"old":"/api/polls/:id/close","type":0,"val":"close","end":""}],
    types: placeholder as Registry['polls.close']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
