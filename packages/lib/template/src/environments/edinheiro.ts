export interface IEdinheiroEnvironment {
  production: {
    mongo: {
      URI: string;
    };

    maria: {
      HOST: string;
      USER: string;
      PASSWORD: string;
      DATABASE: string;
    };
  };

  development: {
    mongo: {
      URI: string;
    };

    maria: {
      HOST: string;
      USER: string;
      PASSWORD: string;
      DATABASE: string;
    };
  };
}

export const EdinheiroEnvironment = {} as IEdinheiroEnvironment;
