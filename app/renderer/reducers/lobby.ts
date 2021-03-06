import { Reducer } from 'redux'
import { NetworkState } from 'types/network'
import { isType } from 'utils/redux'

import { loadLobbies, setLobbies } from 'renderer/actions/lobby'
import { ILobbySession } from 'renderer/platform/types'

export interface ILobbyState {
  network: NetworkState
  list?: ILobbySession[]
}

const initialState: ILobbyState = {
  network: NetworkState.Uninitialized
}

export const lobby: Reducer<ILobbyState> = (state: ILobbyState = initialState, action: any) => {
  if (isType(action, loadLobbies)) {
    return {
      ...state,
      network: NetworkState.Loading,
      list: undefined
    }
  } else if (isType(action, setLobbies)) {
    return {
      ...state,
      network: NetworkState.Ready,
      list: action.payload
    }
  }

  return state
}
