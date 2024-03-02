import { MyInput } from "../components/MyInput/MyInput";

const Home = () => {
  return (
    <>
      <div className="home">
        <form className="">
          <h1>Форма</h1>
          <MyInput />
          <MyInput />
          <MyInput />
          <button>Отправить</button>
        </form>
      </div>
      <h1>Эта страница показана только для авторизованных пользователей</h1>
    </>
  );
};

export default Home;
