import React from "react";
import { Controller, useForm } from "react-hook-form";

import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { formFiled, formSelector } from "@store/selectors/formSelectors";
import { deleteForm, initForm, storage } from "@store/actions";
import getUrlParameters from "../hoc/url-parameters";

import { deleteCookie, setCookie } from "../../ secondary-funcion/cookie";

function Form({ navigate }) {
  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const dateControllers = useSelector(formSelector);
  const filedForm = useSelector(formFiled);

  const onSubmit = (data): void => {
    if (data.save === "Localstorage") {
      localStorage.setItem("firstName", data.firstName);
      localStorage.setItem("lastName", data.lastName);
    } else if (data.save === "Cookie") {
      setCookie("firstName", data.firstName);
      setCookie("lastName", data.lastName);
    } else if (data.save === "Redux") {
      dispatch(initForm(data));
    }
    const dateStorage: any = {
      save: data.save,
      rand: Math.random(),
    };
    dispatch(storage(dateStorage));

    setTimeout(() => {
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      deleteCookie("firstName");
      deleteCookie("lastName");
      dispatch(deleteForm());
    }, 60000);

    reset();
    navigate("/MediaSoft");
  };

  const arrayControllers = dateControllers?.map((item: any) => {
    return (
      <div className="mb-3" key={item.id}>
        <Controller
          control={control}
          name={item.nameInput}
          rules={{
            required: true,
          }}
          render={({ field, formState: { errors } }) => {
            return (
              <>
                <S.Label>
                  {item.nameField}
                  <S.InputText {...field} />
                </S.Label>
                <S.ErrorMessage>
                  {errors[item.nameInput] && "Заполните поле"}
                </S.ErrorMessage>
              </>
            );
          }}
          defaultValue=""
        />
      </div>
    );
  });

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.WrapperFormContent>
        <div>
          {arrayControllers}
          <S.Button type="submit">{filedForm ? "Изменить" : "Войти"}</S.Button>
        </div>
        <div>
          <S.Label>
            Redux
            <S.InputRadio
              type="radio"
              value="Redux"
              {...register("save", { required: true })}
            />
          </S.Label>

          <S.Label>
            Localstorage
            <S.InputRadio
              type="radio"
              value="Localstorage"
              {...register("save", { required: true })}
            />
          </S.Label>

          <S.Label>
            Cookie
            <S.InputRadio
              type="radio"
              value="Cookie"
              {...register("save", { required: true })}
            />
          </S.Label>
          <S.ErrorMessage>
            {errors.save && "Выберите куда сохранить данные"}
          </S.ErrorMessage>
        </div>
      </S.WrapperFormContent>
    </S.Form>
  );
}

export default getUrlParameters(Form);
