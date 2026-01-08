import { loginGoogle } from "../../../services/firebaseAuth";

export default function LoginComponent() {
  return (
    <>
      <div className="flex col-auto gap-10">
        <form
          className=" bg-softFawn flex flex-col items-center justify-center h-96 w-96 rounded-2xl gap-6"
          action="/admin"
        >
          <div className="flex flex-col gap-7 items-center justify-center -translate-y-10">
            <p className="text-3xl font-bold text-deepWalnut">Criar conta</p>
            <section>Insira seus dados para criar a sua conta </section>
          </div>
          <div>
            <div className="flex flex-col gap-4 -translate-y-6 items-center justify-center">
              <input
                className="text-center input-form"
                type="text"
                placeholder="Digite seu e-mail"
              />
              <input
                className="text-center input-form"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
          </div>
          <div>
            <button className="formbutton" type="submit" onClick={loginGoogle}>
              Criar conta
            </button>
          </div>
        </form>

        <div className=" bg-softFawn flex flex-col items-center justify-center h-96 w-96 rounded-2xl gap-6 ">
          <div className="flex flex-col gap-7 items-center justify-center -translate-y-10">
            <p className="text-3xl font-bold text-deepWalnut">
              Realize seu login
            </p>
            <section>Insira seus dados para realizar o login</section>
          </div>
          <div>
            <form
              className="flex flex-col gap-4 -translate-y-6 items-center justify-center"
              action="/admin"
            >
              <input
                className="text-center input-form"
                type="text"
                placeholder="Digite seu e-mail"
              />
              <input
                className="text-center input-form"
                type="password"
                placeholder="Digite sua senha"
              />
            </form>
          </div>
          <div>
            <button className="formbutton" type="submit">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
