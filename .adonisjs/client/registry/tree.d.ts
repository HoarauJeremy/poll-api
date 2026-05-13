/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  polls: {
    show: typeof routes['polls.show']
    index: typeof routes['polls.index']
    store: typeof routes['polls.store']
    close: typeof routes['polls.close']
  }
  votes: {
    store: typeof routes['votes.store']
    results: typeof routes['votes.results']
  }
}
