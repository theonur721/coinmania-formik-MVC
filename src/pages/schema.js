import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir email giriniz")
    .required("Zorunlu alan"),
  age: yup
    .number()
    .required("Zorunlu Alan")
    .positive()
    .min(18, "Yaş 18'den büyük olmalı")
    .max(300, "Yaş 300'den büyük olamaz"),
  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalı")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/,
      "Şifre en az bir küçük harf, bir büyük harf ve bir rakam içermeli"
    )
    .required("Zorunlu alan"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifrenizle Onay Şifresi eşleşmiyor")
    .required("Zorunlu alan"),
  terms: yup.boolean().isTrue("Koşulları kabul etmeden devam edemezsiniz"),
});
