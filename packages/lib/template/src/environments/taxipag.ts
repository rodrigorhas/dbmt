export interface ITaxiPagEnvironment {
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

export const TaxipagEnvironment = {} as ITaxiPagEnvironment;
