import * as yup from "yup";

const schema = yup.object().shape({

    name: yup
    .string()
    .required("O campo nome é obrigatório"),

    email: yup
      .string()
      .required("O campo email é obrigatório!")
      .email("O email é inválido!"),

    password: yup
    .string()
    .required("O campo password é obrigatório")
    .min(3,"Senha curta!"),
  });


  export default schema;