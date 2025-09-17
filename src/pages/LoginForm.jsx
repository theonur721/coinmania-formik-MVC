import { useFormik } from "formik";
import React, { useContext } from "react";
import { schema } from "./schema";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { user, signUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/coins");
  }

  const formik = useFormik({
    // formdaki tutulacak değerleri belirleme
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: schema,

    // formun gönderilmesinde çalışır
    onSubmit: async (values, actions) => {
      // api isteğini simule et
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // kullanıcı hesabı oluşturur
      signUser(values);
      //formu temizler
      actions.resetForm();
      // yölnedirir
      navigate("/coins");
    },
  });

  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="/coinlogo.png" />
          <h3>CoinMania</h3>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              value={formik.values.email}
              className={formik.errors.email && formik.touched.email && "error"}
              onBlur={formik.handleBlur}
              name="email"
              onChange={formik.handleChange}
              type="text"
              placeholder="örn:isim@mail.com"
            />
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label>Yaş</label>
            <input
              className={formik.errors.age && formik.touched.age && "error"}
              onBlur={formik.handleBlur}
              name="age"
              onChange={formik.handleChange}
              type="number"
              placeholder="örn:30"
            />
            {formik.errors.age && formik.touched.age && (
              <p>{formik.errors.age}</p>
            )}
          </div>
          <div>
            <label>Şifre</label>
            <input
              className={
                formik.errors.password && formik.touched.password && "error"
              }
              onBlur={formik.handleBlur}
              name="password"
              onChange={formik.handleChange}
              type="password"
              placeholder="örn:●●●●●●●"
            />
            {formik.errors.password && formik.touched.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>
          <div>
            <label>Şifre (onay)</label>
            <input
              className={
                formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                "error"
              }
              onBlur={formik.handleBlur}
              name="confirmPassword"
              onChange={formik.handleChange}
              type="password"
              placeholder="örn:●●●●●●●"
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p>{formik.errors.confirmPassword}</p>
              )}
          </div>
          <div className="check-wrapper">
            <div className="check">
              <input
                onBlur={formik.handleBlur}
                name="terms"
                onChange={formik.handleChange}
                type="checkbox"
                id="terms"
              />
              <label htmlFor="terms">Koşulları okudum ve onaylıyorum</label>
            </div>
            {formik.errors.terms && formik.touched.terms && (
              <p>{formik.errors.terms}</p>
            )}
          </div>
          <button disabled={formik.isSubmitting} type="submit">
            Kaydol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
