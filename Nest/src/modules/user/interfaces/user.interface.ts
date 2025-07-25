// É muito importante que a gente crie uma interface para as nossas classes
// durante o desenvolvimento, pois, são elas ditam e amarram quais são as
// propriedades que devemos ter, e se mudarmos é mais fácil de identificar
// até em tempo de compilação.

export interface UserInterface {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  salt: string;
  active: boolean;
  //userRoles?: UserRoleInterface[];
}
