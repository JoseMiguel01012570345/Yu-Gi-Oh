import { gql } from "apollo-angular";

export interface Usuario {
  PlayerName: string,
  PlayerPassword: string
}

export const CREATE_PLAYER = gql`
  mutation Create_Player($input: CreatePlayerInput!){
    createPlayer(createPlayerInput: $input){
      PlayerName
      PlayerPassword
    }
  }
`;

export const GET_USER = gql`
  query Get_Users($input: String){
    player(id: $input){
      PlayerName
      PlayerPassword
    }
  }
`;

export const GET_USERS = gql`
  query Get_Users{
    players{
      PlayerName
      PlayerPassword
    }
  }
`;

export const CREATE_USER = gql`
  mutation Create_User($input: CreatePlayerInput!){
    createPlayer(createPlayerInput: $input){
      PlayerName
      PlayerPassword
      Roll
    }
  }
`;


export const GET_PLAYER = gql`
  query Get_Player($input: String!){
    player(id: $input){
      PlayerName
      PlayerPassword
      Roll
    }
  }
`
