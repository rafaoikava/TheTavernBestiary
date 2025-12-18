export default function LoginComponent() {
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-items-center-safe">
        <div className=" bg-softFawn flex flex-col gap-4 items-center justify-items-center h-96 w-96">
          <section className=" text-deepWalnut font-fellDouble font-semibold gap-4 text-3xl">
            Criar conta
          </section>
          <p>Insira seus dados para criar a sua conta</p>
          <form className="flex flex-col items-center gap-5" action="">
            <input type="text" placeholder="Digite seu e-mail" />
            <input type="password" placeholder="Digite sua senha" />
          </form>
          <button type="submit">Criar conta</button>
        </div>

        <div className=" bg-softFawn flex flex-col gap-4 items-center justify-items-center h-96 w-96">
          <section className=" text-deepWalnut font-fellDouble font-semibold gap-4 text-3xl">
            Login
          </section>
          <p>Insira seus dados cadastrados para gerenciar o menu</p>
          <form className="flex flex-col items-center gap-5" action="">
            <input type="text" placeholder="Digite seu e-mail" />
            <input type="password" placeholder="Digite sua senha" />
            <button type="submit">Acessar área admin</button>
          </form>
        </div>
      </div>
    </>
  );
}
