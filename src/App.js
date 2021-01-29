import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "이순신",
    birthday: "940101",
    gender: "남자",
    job: "프로그래머",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "홍미자",
    birthday: "961108",
    gender: "여자",
    job: "백수",
  },
];

function App() {
  return (
    <div>
      {customers.map((custom) => {
        return (
          <Customer
            key={custom.id}
            id={custom.id}
            image={custom.image}
            name={custom.name}
            birthday={custom.birthday}
            gender={custom.gender}
            job={custom.job}
          />
        );
      })}
    </div>
  );
}

export default App;
